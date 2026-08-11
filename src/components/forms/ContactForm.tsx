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

export function ContactForm() {
  const { state, message, submit, reset } = useWeb3Submit("New Contact Enquiry — Zyntra");

  if (state === "success") {
    return (
      <SuccessCard
        onReset={reset}
        title="Message received."
        body="Thanks for reaching out to Zyntra. A member of our team will get back to you within one business day."
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
      <input type="hidden" name="enquiry_type" value="General Contact" />
      <Field label="Full name" name="name" required half autoComplete="name" />
      <Field label="Phone" name="phone" type="tel" required half autoComplete="tel" />
      <Field label="Email" name="email" type="email" required half autoComplete="email" />
      <SelectField
        label="I'm interested in"
        name="interest"
        required
        half
        options={[
          "Buying property",
          "Selling property",
          "Renting (take on rent)",
          "Giving on rent",
          "Joint venture",
          "General enquiry",
        ]}
      />
      <SelectField
        label="Preferred office"
        name="office"
        half
        options={["Gurugram (Sector 14)", "Indore (Vijay Nagar)", "No preference"]}
      />
      <Field label="Subject" name="topic" half />
      <TextArea label="Message" name="message" required rows={5} placeholder="How can we help?" />
      <ErrorNote message={message} />
      <SubmitRow state={state} label="Send message" />
    </form>
  );
}
