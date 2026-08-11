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

export function BuyerForm() {
  const { state, message, submit, reset } = useWeb3Submit(
    "New Buyer Enquiry — Zyntra"
  );

  if (state === "success") {
    return (
      <SuccessCard
        onReset={reset}
        title="Your buyer brief is in."
        body="A Zyntra advisor will curate options that match your requirement and reach out within one business day."
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
      <input type="hidden" name="enquiry_type" value="Buyer" />
      <Field label="Full name" name="name" required half autoComplete="name" />
      <Field label="Phone" name="phone" type="tel" required half autoComplete="tel" />
      <Field label="Email" name="email" type="email" required half autoComplete="email" />
      <SelectField
        label="Preferred city"
        name="city"
        required
        half
        options={["Gurugram", "Indore", "Either / Open"]}
      />
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
      <SelectField
        label="Budget range"
        name="budget"
        required
        half
        options={[
          "Under ₹50 Lakh",
          "₹50 Lakh – ₹1 Cr",
          "₹1 Cr – ₹2 Cr",
          "₹2 Cr – ₹5 Cr",
          "₹5 Cr +",
        ]}
      />
      <SelectField
        label="Purpose"
        name="purpose"
        half
        options={["End use / to live in", "Investment", "Rental income", "Business use"]}
      />
      <SelectField
        label="Timeline"
        name="timeline"
        half
        options={["Immediately", "1–3 months", "3–6 months", "Just exploring"]}
      />
      <Field label="Preferred locality (optional)" name="locality" half />
      <TextArea
        label="Tell us what you're looking for"
        name="requirement"
        placeholder="Preferred sectors, must-haves, floor preference, vaastu, parking, anything specific…"
      />
      <ErrorNote message={message} />
      <SubmitRow
        state={state}
        label="Send buyer enquiry"
        note="By submitting, you agree to be contacted by Zyntra about your requirement. No spam — we respect your inbox."
      />
    </form>
  );
}
