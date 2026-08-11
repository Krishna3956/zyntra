"use client";

import {
  ErrorNote,
  Field,
  Honeypot,
  SelectField,
  SubmitRow,
  SuccessCard,
  TextArea,
  useWeb3Submit,
} from "./formkit";

export function SellerForm() {
  const { state, message, submit, reset } = useWeb3Submit(
    "New Seller / Listing Enquiry — Zyntra"
  );

  if (state === "success") {
    return (
      <SuccessCard
        onReset={reset}
        title="Your property is with us."
        body="We'll review the details, prepare a data-backed valuation, and get back to you — usually within one business day — with a plan to sell."
      />
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit(e.currentTarget);
      }}
      className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2"
    >
      <Honeypot />
      <input type="hidden" name="enquiry_type" value="Seller / Listing" />
      <Field label="Full name" name="name" required half autoComplete="name" />
      <Field label="Phone" name="phone" type="tel" required half autoComplete="tel" />
      <Field label="Email" name="email" type="email" required half autoComplete="email" />
      <SelectField
        label="Property city"
        name="city"
        required
        half
        options={["Gurugram", "Indore", "Other"]}
      />
      <Field label="Locality / Sector" name="locality" required half />
      <SelectField
        label="Property type"
        name="property_type"
        required
        half
        options={["Apartment", "Builder Floor", "Villa", "Plot", "Commercial", "Office"]}
      />
      <SelectField
        label="Configuration"
        name="configuration"
        half
        options={["1 BHK", "2 BHK", "3 BHK", "4 BHK+", "Not applicable"]}
      />
      <Field label="Built-up area (sq ft)" name="area" type="number" half />
      <Field label="Expected price (?)" name="expected_price" half placeholder="e.g. ₹1.8 Cr" />
      <SelectField
        label="Ownership"
        name="ownership"
        half
        options={["Freehold", "Leasehold", "Under loan", "Inherited"]}
      />
      <SelectField
        label="Reason for selling"
        name="reason"
        half
        options={["Upgrading", "Relocating", "Liquidity", "Investment exit", "Other"]}
      />
      <Field
        label="Photos link (Drive / Dropbox — optional)"
        name="photos_link"
        placeholder="Paste a shareable link to property photos"
      />
      <TextArea
        label="Anything else we should know?"
        name="details"
        placeholder="Age of property, furnishing, recent renovations, floor, facing, urgency…"
      />
      <ErrorNote message={message} />
      <SubmitRow
        state={state}
        label="List my property"
        note="Prefer to share photos directly? Submit this form and reply to our email with attachments — our team will follow up right away."
      />
    </form>
  );
}
