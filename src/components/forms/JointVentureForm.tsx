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

export function JointVentureForm() {
  const { state, message, submit, reset } = useWeb3Submit(
    "New Joint Venture Enquiry — Zyntra"
  );

  if (state === "success") {
    return (
      <SuccessCard
        onReset={reset}
        title="Let's build something together."
        body="Our development team will study your land, run an initial feasibility, and reach out to discuss a partnership structure that works for you."
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
      <input type="hidden" name="enquiry_type" value="Joint Venture — Landowner" />
      <Field label="Full name" name="name" required half autoComplete="name" />
      <Field label="Phone" name="phone" type="tel" required half autoComplete="tel" />
      <Field label="Email" name="email" type="email" required half autoComplete="email" />
      <SelectField
        label="Land city"
        name="city"
        required
        half
        options={["Gurugram", "Indore", "Other (nearby)"]}
      />
      <Field label="Land location / locality" name="locality" required half />
      <Field label="Plot size" name="plot_size" required half placeholder="e.g. 500 sq yd / 2 acre" />
      <SelectField
        label="Land use / zoning"
        name="zoning"
        half
        options={["Residential", "Commercial", "Mixed use", "Agricultural", "Not sure"]}
      />
      <SelectField
        label="Ownership"
        name="ownership"
        half
        options={["Sole owner", "Joint / family owned", "Inherited", "Company owned"]}
      />
      <SelectField
        label="Title status"
        name="title_status"
        half
        options={["Clear title", "Under mutation", "Disputed", "Not sure"]}
      />
      <SelectField
        label="Preferred structure"
        name="structure"
        half
        options={["Revenue share", "Area / built-up share", "Open to discussion"]}
      />
      <TextArea
        label="Tell us about your land & goals"
        name="details"
        placeholder="Frontage, road access, approvals in hand, surrounding development, what you'd like to achieve…"
      />
      <ErrorNote message={message} />
      <SubmitRow
        state={state}
        label="Explore a joint venture"
        note="Everything you share is treated as strictly confidential and used only to assess the opportunity."
      />
    </form>
  );
}
