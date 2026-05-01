"use client";

import Script from "next/script";
import { FormEvent, useRef, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ACCESS_KEY = "16b9e3b2-44d6-4488-ba29-f540ca62c809";

const useCases = [
  { value: "real-estate-site-plan", label: "Real estate site plan" },
  { value: "event-map", label: "Event or venue map" },
  { value: "floor-plan-hotspots", label: "Floor plan hotspots" },
  { value: "svg-region-map", label: "SVG or region map" },
  { value: "product-diagram", label: "Product or diagram hotspots" },
  { value: "timeline", label: "Timeline visual or widget" },
  { value: "other", label: "Other business visual" },
];

const businessTypes = [
  { value: "real-estate", label: "Real estate / property" },
  { value: "event-venue", label: "Events / venues / expos" },
  { value: "school-campus", label: "School / campus / facility" },
  { value: "agency-freelancer", label: "Agency / freelancer" },
  { value: "product-marketing", label: "Product / marketing team" },
  { value: "small-business", label: "Small business" },
  { value: "developer", label: "Developer / website owner" },
  { value: "other", label: "Other" },
];

const outputOptions = [
  { value: "website-embed", label: "Website embed" },
  { value: "png-jpg", label: "PNG/JPG export" },
  { value: "pdf", label: "PDF export" },
  { value: "svg-html", label: "SVG or HTML/CSS export" },
  { value: "social-sizes", label: "Social post sizes" },
  { value: "ad-banners", label: "Ad banner sizes" },
  { value: "video-gif", label: "MP4/GIF/WebM animation export" },
  { value: "client-review", label: "Client review/workspace features" },
];

const priceOptions = [
  { value: "free-only", label: "I would only try a free branded version" },
  { value: "one-time-19-49", label: "I would consider $19-$49 one-time" },
  { value: "monthly-29", label: "I would consider around $29/month" },
  {
    value: "monthly-79-plus",
    label: "I would consider $79+/month for business features",
  },
  {
    value: "need-more-info",
    label: "I need more details before judging price",
  },
];

const timingOptions = [
  { value: "now", label: "I need something like this now" },
  { value: "soon", label: "I may need it in the next 1-3 months" },
  { value: "later", label: "I may need it later" },
  { value: "researching", label: "I am only researching right now" },
];

function containsBlockedLink(value: string) {
  const linkPattern =
    /(?:https?:\/\/|www\.|ftp:\/\/|mailto:|data:|javascript:|file:\/\/|\/\/[a-z0-9]|[a-z0-9][a-z0-9-]{1,62}\.(?:com|net|org|io|co|ca|us|uk|edu|gov|biz|info|app|dev|ai|xyz|site|online|shop|store|link|me|ly|gg|tv|to|ru|cn|in)\b)/i;

  return linkPattern.test(value);
}

function getCheckedValues(formData: FormData, name: string) {
  return formData
    .getAll(name)
    .filter((value): value is string => typeof value === "string")
    .join(", ");
}

export default function InterestForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const startedAtRef = useRef<number>(0);

  function markFormStarted() {
    if (startedAtRef.current === 0) {
      startedAtRef.current = Date.now();
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const elapsedMs = Date.now() - startedAtRef.current;

    if (!startedAtRef.current || elapsedMs < 3500) {
      setSubmitState("error");
      setMessage("The form was submitted too quickly. Please try again.");
      return;
    }

    const website = String(formData.get("website") || "").trim();

    if (website) {
      setSubmitState("error");
      setMessage("The submission could not be accepted.");
      return;
    }

    const useCaseDetails = String(formData.get("useCaseDetails") || "").trim();
    const feedback = String(formData.get("feedback") || "").trim();
    const businessName = String(formData.get("businessName") || "").trim();

    if (useCaseDetails.length < 20) {
      setSubmitState("error");
      setMessage("Please describe your use case in at least 20 characters.");
      return;
    }

    if (
      containsBlockedLink(useCaseDetails) ||
      containsBlockedLink(feedback) ||
      containsBlockedLink(businessName)
    ) {
      setSubmitState("error");
      setMessage(
        "Links are not allowed. Please remove URLs, website addresses, or link-like text.",
      );
      return;
    }

    formData.set("access_key", WEB3FORMS_ACCESS_KEY);
    formData.set("subject", "HTMLMaps interest validation");
    formData.set("from_name", "HTMLMaps Landing Page");
    formData.set("redirect", "false");

    formData.set("outputs_selected", getCheckedValues(formData, "outputs"));
    formData.delete("outputs");

    formData.set(
      "message",
      [
        "HTMLMaps validation lead",
        "",
        `Email: ${String(formData.get("email") || "").trim()}`,
        `Business / organization: ${businessName || "Not provided"}`,
        `Business type: ${String(formData.get("businessType") || "").trim()}`,
        `Primary use case: ${String(formData.get("primaryUseCase") || "").trim()}`,
        `Timing: ${String(formData.get("timing") || "").trim()}`,
        `Price interest: ${String(formData.get("priceInterest") || "").trim()}`,
        `Requested outputs: ${String(
          formData.get("outputs_selected") || "None selected",
        ).trim()}`,
        "",
        "Use case details:",
        useCaseDetails,
        "",
        "Feedback / must-have features:",
        feedback || "Not provided.",
        "",
        "Security notes:",
        "No file uploads were accepted.",
        "Client-side link blocking was enabled.",
        "This submission came from the HTMLMaps landing page.",
      ].join("\n"),
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        setSubmitState("error");
        setMessage(
          result.message ||
            "Something went wrong. Please check the form and try again.",
        );
        return;
      }

      form.reset();
      startedAtRef.current = 0;
      setSubmitState("success");
      setMessage(
        "Thanks. Your interest was recorded and sent to HTMLMaps. This helps decide what should launch first.",
      );
    } catch {
      setSubmitState("error");
      setMessage("Something went wrong while submitting. Please try again.");
    }
  }

  return (
    <>
      <Script
        src="https://web3forms.com/client/script.js"
        strategy="afterInteractive"
      />

      <form
        onSubmit={handleSubmit}
        onFocusCapture={markFormStarted}
        onPointerEnter={markFormStarted}
        className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
        noValidate
      >
        <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
        <input
          type="hidden"
          name="subject"
          value="HTMLMaps interest validation"
        />
        <input type="hidden" name="from_name" value="HTMLMaps Landing Page" />
        <input type="hidden" name="redirect" value="false" />

        <div
          className="absolute left-[-5000px] top-auto h-px w-px overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-900"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            />
          </div>

          <div>
            <label
              htmlFor="businessName"
              className="mb-2 block text-sm font-semibold text-slate-900"
            >
              Business or organization name
            </label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              maxLength={80}
              autoComplete="organization"
              placeholder="Optional"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            />
          </div>

          <div>
            <label
              htmlFor="businessType"
              className="mb-2 block text-sm font-semibold text-slate-900"
            >
              What type of business are you?
            </label>
            <select
              id="businessType"
              name="businessType"
              required
              defaultValue=""
              className="w-full cursor-pointer rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            >
              <option value="" disabled>
                Select one
              </option>
              {businessTypes.map((item) => (
                <option key={item.value} value={item.label}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="primaryUseCase"
              className="mb-2 block text-sm font-semibold text-slate-900"
            >
              What would you use HTMLMaps for?
            </label>
            <select
              id="primaryUseCase"
              name="primaryUseCase"
              required
              defaultValue=""
              className="w-full cursor-pointer rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            >
              <option value="" disabled>
                Select one
              </option>
              {useCases.map((item) => (
                <option key={item.value} value={item.label}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="timing"
              className="mb-2 block text-sm font-semibold text-slate-900"
            >
              How soon would you need this?
            </label>
            <select
              id="timing"
              name="timing"
              required
              defaultValue=""
              className="w-full cursor-pointer rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            >
              <option value="" disabled>
                Select one
              </option>
              {timingOptions.map((item) => (
                <option key={item.value} value={item.label}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="priceInterest"
              className="mb-2 block text-sm font-semibold text-slate-900"
            >
              After seeing the pricing, where do you stand?
            </label>
            <select
              id="priceInterest"
              name="priceInterest"
              required
              defaultValue=""
              className="w-full cursor-pointer rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            >
              <option value="" disabled>
                Select one
              </option>
              {priceOptions.map((item) => (
                <option key={item.value} value={item.label}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <fieldset className="mt-6">
          <legend className="mb-3 text-sm font-semibold text-slate-900">
            Which outputs would matter to you?
          </legend>

          <div className="grid gap-3 md:grid-cols-2">
            {outputOptions.map((item) => (
              <label
                key={item.value}
                className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 transition hover:border-sky-300 hover:bg-sky-50"
              >
                <input
                  type="checkbox"
                  name="outputs"
                  value={item.label}
                  className="mt-1 h-4 w-4 cursor-pointer rounded border-slate-300 text-sky-700 focus:ring-sky-500"
                />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-6">
          <label
            htmlFor="useCaseDetails"
            className="mb-2 block text-sm font-semibold text-slate-900"
          >
            Describe what you need
          </label>
          <textarea
            id="useCaseDetails"
            name="useCaseDetails"
            required
            minLength={20}
            maxLength={900}
            rows={5}
            placeholder="Example: I run an event venue and need a clickable room layout for our website, plus PDF and social exports for client proposals. Do not include links."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-7 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
          />
          <p className="mt-2 text-xs leading-6 text-slate-500">
            Do not include links. This form blocks links in free-text fields.
          </p>
        </div>

        <div className="mt-6">
          <label
            htmlFor="feedback"
            className="mb-2 block text-sm font-semibold text-slate-900"
          >
            Feedback, concerns, or must-have features
          </label>
          <textarea
            id="feedback"
            name="feedback"
            maxLength={900}
            rows={4}
            placeholder="What would make this worth paying for? What would stop you from using it? Do not include links."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-7 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
          />
        </div>

        <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700 transition hover:border-sky-300 hover:bg-sky-50">
          <input
            type="checkbox"
            name="consent"
            value="Yes"
            required
            className="mt-1 h-4 w-4 cursor-pointer rounded border-slate-300 text-sky-700 focus:ring-sky-500"
          />
          <span>
            I understand HTMLMaps is currently validating interest and that my
            submission may be used to decide launch timing, implementation
            scope, and which use cases are built first.
          </span>
        </label>

        <div className="h-captcha mt-6" data-captcha="true" />

        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="mt-6 w-full cursor-pointer rounded-xl bg-sky-700 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {submitState === "submitting"
            ? "Submitting..."
            : "Send interest to HTMLMaps"}
        </button>

        {message && (
          <div
            className={`mt-4 rounded-xl border p-4 text-sm leading-7 ${
              submitState === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                : "border-red-200 bg-red-50 text-red-900"
            }`}
            role="status"
          >
            {message}
          </div>
        )}

        <p className="mt-4 text-xs leading-6 text-slate-500">
          This form does not accept uploads, links, payment details, or website
          URLs. Submissions are sent through Web3Forms.
        </p>
      </form>
    </>
  );
}
