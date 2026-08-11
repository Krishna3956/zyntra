"use client";

import {
  ErrorNote,
  Honeypot,
  SubmitRow,
  SuccessCard,
  useWeb3Submit,
} from "./formkit";

export function PropertyEnquiryForm({
  propertyTitle,
  propertySlug,
}: {
  propertyTitle: string;
  propertySlug: string;
}) {
  const { state, message, submit, reset } = useWeb3Submit(
    `Property Enquiry: ${propertyTitle} — Zyntra`
  );

  if (state === "success") {
    return (
      <SuccessCard
        onReset={reset}
        title="Enquiry sent."
        body="We'll be in touch about this property within one business day. Feel free to browse more in the meantime."
      />
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit(e.currentTarget);
      }}
      className="grid grid-cols-1 gap-4"
    >
      <Honeypot />
      <input type="hidden" name="enquiry_type" value="Property Enquiry" />
      <input type="hidden" name="property" value={propertyTitle} />
      <input type="hidden" name="property_url" value={`/properties/${propertySlug}`} />
      <div>
        <label className="field-label" htmlFor="pe-name">
          Full name *
        </label>
        <input id="pe-name" name="name" required autoComplete="name" className="field" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="pe-phone">
            Phone *
          </label>
          <input
            id="pe-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="field"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="pe-email">
            Email *
          </label>
          <input
            id="pe-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="field"
          />
        </div>
      </div>
      <div>
        <label className="field-label" htmlFor="pe-message">
          Message
        </label>
        <textarea
          id="pe-message"
          name="message"
          rows={3}
          defaultValue={`I'm interested in ${propertyTitle}. Please share more details.`}
          className="field resize-none"
        />
      </div>
      <ErrorNote message={message} />
      <SubmitRow state={state} label="Enquire about this property" />
    </form>
  );
}
