"use client";

import { useState, type ReactNode } from "react";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/site";
import { ArrowRight, Check } from "../Icons";

export type SubmitState = "idle" | "loading" | "success" | "error";

export function useWeb3Submit(defaultSubject: string) {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function submit(form: HTMLFormElement, subject?: string) {
    setState("loading");
    setMessage("");

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", subject || defaultSubject);
    formData.append("from_name", "Zyntra Website");
    if (!formData.get("botcheck")) formData.delete("botcheck");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setState("success");
        form.reset();
      } else {
        setState("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setState("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  function reset() {
    setState("idle");
    setMessage("");
  }

  return { state, message, submit, reset };
}

export function Honeypot() {
  return (
    <input
      type="checkbox"
      name="botcheck"
      className="hidden"
      style={{ display: "none" }}
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
    />
  );
}

export function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  half,
  defaultValue,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  half?: boolean;
  defaultValue?: string;
  autoComplete?: string;
}) {
  return (
    <div className={half ? "sm:col-span-1" : "sm:col-span-2"}>
      <label className="field-label" htmlFor={name}>
        {label} {required && <span className="text-gold-deep">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        className="field"
      />
    </div>
  );
}

export function SelectField({
  label,
  name,
  options,
  required,
  half,
  defaultValue,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  half?: boolean;
  defaultValue?: string;
}) {
  return (
    <div className={half ? "sm:col-span-1" : "sm:col-span-2"}>
      <label className="field-label" htmlFor={name}>
        {label} {required && <span className="text-gold-deep">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue={defaultValue ?? ""}
        className="field"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TextArea({
  label,
  name,
  placeholder,
  required,
  rows = 4,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <div className="sm:col-span-2">
      <label className="field-label" htmlFor={name}>
        {label} {required && <span className="text-gold-deep">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className="field resize-none"
      />
    </div>
  );
}

export function SubmitRow({
  state,
  label = "Submit enquiry",
  note,
}: {
  state: SubmitState;
  label?: string;
  note?: ReactNode;
}) {
  return (
    <div className="sm:col-span-2 flex flex-col gap-3 pt-1">
      <button
        type="submit"
        disabled={state === "loading"}
        className="btn btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state === "loading" ? "Sending…" : label}
        {state !== "loading" && <ArrowRight className="h-4 w-4" />}
      </button>
      {note && <p className="text-xs leading-relaxed text-stone">{note}</p>}
    </div>
  );
}

export function SuccessCard({
  onReset,
  title = "Thank you — we've got it.",
  body = "Your enquiry has reached the Zyntra team. We'll be in touch within one business day.",
}: {
  onReset: () => void;
  title?: string;
  body?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-emerald/20 bg-emerald/[0.06] px-6 py-12 text-center">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest text-paper">
        <Check className="h-7 w-7" />
      </span>
      <h3 className="font-display text-2xl font-semibold text-ink">{title}</h3>
      <p className="max-w-md text-stone">{body}</p>
      <button type="button" onClick={onReset} className="btn btn-outline mt-2">
        Submit another
      </button>
    </div>
  );
}

export function ErrorNote({ message }: { message: string }) {
  if (!message) return null;
  return (
    <p className="sm:col-span-2 rounded-xl border border-red-300/60 bg-red-50 px-4 py-3 text-sm text-red-700">
      {message}
    </p>
  );
}
