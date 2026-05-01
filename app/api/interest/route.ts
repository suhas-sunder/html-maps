import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO_EMAIL = "suhas@live.ca";

const allowedBusinessTypes = new Set([
  "real-estate",
  "event-venue",
  "school-campus",
  "agency-freelancer",
  "product-marketing",
  "small-business",
  "developer",
  "other",
]);

const businessTypeLabels: Record<string, string> = {
  "real-estate": "Real estate / property",
  "event-venue": "Events / venues / expos",
  "school-campus": "School / campus / facility",
  "agency-freelancer": "Agency / freelancer",
  "product-marketing": "Product / marketing team",
  "small-business": "Small business",
  developer: "Developer / website owner",
  other: "Other",
};

const allowedUseCases = new Set([
  "real-estate-site-plan",
  "event-map",
  "floor-plan-hotspots",
  "svg-region-map",
  "product-diagram",
  "timeline",
  "other",
]);

const useCaseLabels: Record<string, string> = {
  "real-estate-site-plan": "Real estate site plan",
  "event-map": "Event or venue map",
  "floor-plan-hotspots": "Floor plan hotspots",
  "svg-region-map": "SVG or region map",
  "product-diagram": "Product or diagram hotspots",
  timeline: "Timeline visual or widget",
  other: "Other business visual",
};

const allowedOutputs = new Set([
  "website-embed",
  "png-jpg",
  "pdf",
  "svg-html",
  "social-sizes",
  "ad-banners",
  "video-gif",
  "client-review",
]);

const outputLabels: Record<string, string> = {
  "website-embed": "Website embed",
  "png-jpg": "PNG/JPG export",
  pdf: "PDF export",
  "svg-html": "SVG or HTML/CSS export",
  "social-sizes": "Social post sizes",
  "ad-banners": "Ad banner sizes",
  "video-gif": "MP4/GIF/WebM animation export",
  "client-review": "Client review/workspace features",
};

const allowedPriceInterest = new Set([
  "free-only",
  "one-time-19-49",
  "monthly-29",
  "monthly-79-plus",
  "need-more-info",
]);

const priceInterestLabels: Record<string, string> = {
  "free-only": "Only interested in a free branded version",
  "one-time-19-49": "Would consider $19-$49 one-time",
  "monthly-29": "Would consider around $29/month",
  "monthly-79-plus": "Would consider $79+/month for business features",
  "need-more-info": "Needs more details before judging price",
};

const allowedTiming = new Set(["now", "soon", "later", "researching"]);

const timingLabels: Record<string, string> = {
  now: "Needs something like this now",
  soon: "May need it in the next 1-3 months",
  later: "May need it later",
  researching: "Only researching right now",
};

type RateLimitRecord = {
  count: number;
  resetAt: number;
};

const globalRateLimitStore = globalThis as typeof globalThis & {
  htmlMapsInterestRateLimit?: Map<string, RateLimitRecord>;
};

const rateLimitStore =
  globalRateLimitStore.htmlMapsInterestRateLimit ??
  new Map<string, RateLimitRecord>();

globalRateLimitStore.htmlMapsInterestRateLimit = rateLimitStore;

function jsonResponse(
  status: number,
  body: {
    ok: boolean;
    message: string;
  },
) {
  return NextResponse.json(body, { status });
}

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const maxSubmissions = 5;
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + windowMs,
    });
    return true;
  }

  if (current.count >= maxSubmissions) {
    return false;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return true;
}

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  if (typeof value !== "string") {
    return "";
  }

  return value;
}

function stripUnsafeControlCharacters(value: string) {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim();
}

function normalizeSingleLine(value: string) {
  return stripUnsafeControlCharacters(value).replace(/\s+/g, " ").trim();
}

function normalizeMultiLine(value: string) {
  return stripUnsafeControlCharacters(value)
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function containsBlockedLink(value: string) {
  const linkPattern =
    /(?:https?:\/\/|www\.|ftp:\/\/|mailto:|data:|javascript:|file:\/\/|\/\/[a-z0-9]|[a-z0-9][a-z0-9-]{1,62}\.(?:com|net|org|io|co|ca|us|uk|edu|gov|biz|info|app|dev|ai|xyz|site|online|shop|store|link|me|ly|gg|tv|to|ru|cn|in)\b)/i;

  return linkPattern.test(value);
}

function isValidEmail(email: string) {
  if (email.length < 6 || email.length > 254) {
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function hasHeaderInjection(value: string) {
  return /[\r\n]/.test(value);
}

function getAllowedValue(
  value: string,
  allowedValues: Set<string>,
  fieldName: string,
) {
  if (!value || !allowedValues.has(value)) {
    throw new Error(`Please select a valid ${fieldName}.`);
  }

  return value;
}

function getSelectedOutputs(formData: FormData) {
  const rawOutputs = formData.getAll("outputs");
  const selectedOutputs = rawOutputs.filter(
    (value): value is string =>
      typeof value === "string" && allowedOutputs.has(value),
  );

  return Array.from(new Set(selectedOutputs));
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (!checkRateLimit(ip)) {
    return jsonResponse(429, {
      ok: false,
      message:
        "Too many submissions were sent from this connection. Please try again later.",
    });
  }

  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return jsonResponse(400, {
      ok: false,
      message: "The form submission could not be read.",
    });
  }

  const honeypot = normalizeSingleLine(getString(formData, "website"));

  if (honeypot) {
    return jsonResponse(400, {
      ok: false,
      message: "The submission could not be accepted.",
    });
  }

  const startedAtRaw = getString(formData, "startedAt");
  const startedAt = Number(startedAtRaw);
  const elapsedMs = Date.now() - startedAt;

  if (!Number.isFinite(startedAt) || elapsedMs < 3500) {
    return jsonResponse(400, {
      ok: false,
      message: "The form was submitted too quickly. Please try again.",
    });
  }

  const email = normalizeSingleLine(getString(formData, "email")).toLowerCase();
  const businessName = normalizeSingleLine(getString(formData, "businessName"));
  const useCaseDetails = normalizeMultiLine(
    getString(formData, "useCaseDetails"),
  );
  const feedback = normalizeMultiLine(getString(formData, "feedback"));
  const consent = normalizeSingleLine(getString(formData, "consent"));

  let businessType: string;
  let primaryUseCase: string;
  let timing: string;
  let priceInterest: string;

  try {
    businessType = getAllowedValue(
      normalizeSingleLine(getString(formData, "businessType")),
      allowedBusinessTypes,
      "business type",
    );

    primaryUseCase = getAllowedValue(
      normalizeSingleLine(getString(formData, "primaryUseCase")),
      allowedUseCases,
      "use case",
    );

    timing = getAllowedValue(
      normalizeSingleLine(getString(formData, "timing")),
      allowedTiming,
      "timing",
    );

    priceInterest = getAllowedValue(
      normalizeSingleLine(getString(formData, "priceInterest")),
      allowedPriceInterest,
      "price interest",
    );
  } catch (error) {
    return jsonResponse(400, {
      ok: false,
      message:
        error instanceof Error
          ? error.message
          : "Please check the selected fields and try again.",
    });
  }

  if (consent !== "yes") {
    return jsonResponse(400, {
      ok: false,
      message: "Please confirm that you understand this is an interest test.",
    });
  }

  if (!isValidEmail(email) || hasHeaderInjection(email)) {
    return jsonResponse(400, {
      ok: false,
      message: "Please enter a valid email address.",
    });
  }

  if (businessName.length > 80) {
    return jsonResponse(400, {
      ok: false,
      message: "The business name is too long.",
    });
  }

  if (useCaseDetails.length < 20 || useCaseDetails.length > 900) {
    return jsonResponse(400, {
      ok: false,
      message: "Please describe your use case in 20 to 900 characters.",
    });
  }

  if (feedback.length > 900) {
    return jsonResponse(400, {
      ok: false,
      message: "The feedback field is too long.",
    });
  }

  const textFieldsToCheck = [businessName, useCaseDetails, feedback];

  if (textFieldsToCheck.some((value) => containsBlockedLink(value))) {
    return jsonResponse(400, {
      ok: false,
      message:
        "Links are not allowed in this form. Please remove URLs, website addresses, or link-like text.",
    });
  }

  const selectedOutputs = getSelectedOutputs(formData);

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.HTMLMAPS_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    return jsonResponse(500, {
      ok: false,
      message: "Email delivery is not configured yet. Please try again later.",
    });
  }

  const resend = new Resend(resendApiKey);

  const outputText =
    selectedOutputs.length > 0
      ? selectedOutputs.map((value) => `- ${outputLabels[value]}`).join("\n")
      : "No output formats selected.";

  const submittedAt = new Date().toISOString();

  const emailSubject = `HTMLMaps interest: ${useCaseLabels[primaryUseCase]} | ${priceInterestLabels[priceInterest]}`;

  const emailBody = [
    "HTMLMaps validation lead",
    "",
    `Submitted at: ${submittedAt}`,
    "",
    "Contact",
    `Email: ${email}`,
    `Business or organization: ${businessName || "Not provided"}`,
    "",
    "Business context",
    `Business type: ${businessTypeLabels[businessType]}`,
    `Primary use case: ${useCaseLabels[primaryUseCase]}`,
    `Timing: ${timingLabels[timing]}`,
    `Price interest: ${priceInterestLabels[priceInterest]}`,
    "",
    "Requested outputs",
    outputText,
    "",
    "Use case details",
    useCaseDetails,
    "",
    "Feedback, concerns, or must-have features",
    feedback || "Not provided.",
    "",
    "Security notes",
    "No file uploads were accepted.",
    "No user-supplied links were accepted in free-text fields.",
    "This message was sent as plain text only.",
  ].join("\n");

  try {
    await resend.emails.send({
      from: fromEmail,
      to: TO_EMAIL,
      replyTo: email,
      subject: emailSubject,
      text: emailBody,
      headers: {
        "X-HTMLMaps-Source": "landing-page-validation",
      },
    });

    return jsonResponse(200, {
      ok: true,
      message: "Your interest was submitted successfully.",
    });
  } catch {
    return jsonResponse(500, {
      ok: false,
      message:
        "The submission was valid, but the email could not be sent. Please try again later.",
    });
  }
}
