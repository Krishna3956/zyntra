"use client";

import { useState } from "react";
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

type Intent = "take" | "give";

export function RentForm({ initialIntent = "take" }: { initialIntent?: Intent }) {
  const [intent, setIntent] = useState<Intent>(initialIntent);
  const { state, message, submit, reset } = useWeb3Submit("New Rental Enquiry — Zyntra");

  if (state === "success") {
    return (
      <SuccessCard
        onReset={reset}
        title={intent === "take" ? "Your rental brief is in." : "Your property is listed for rent."}
        body={
          intent === "take"
            ? "We'll shortlist verified rentals that fit and connect you with options within one business day."
            : "We'll review your property, line up screened tenants, and get back to you — usually within one business day."
        }
      />
    );
  }

  return (
    <div>
      {/* Intent toggle */}
      <div className="mb-7 inline-flex rounded-full border border-ink/12 bg-cream p-1">
        {(
          [
            { key: "take", label: "I want a place on rent" },
            { key: "give", label: "I want to give on rent" },
          ] as { key: Intent; label: string }[]
        ).map((opt) => (
          <button
            key={opt.key}
            type="button"
            onClick={() => setIntent(opt.key)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              intent === opt.key
                ? "bg-forest text-paper shadow-sm"
                : "text-ink/60 hover:text-forest"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(
            e.currentTarget,
            intent === "take"
              ? "New Tenant (Looking to Rent) — Zyntra"
              : "New Landlord (Giving on Rent) — Zyntra"
          );
        }}
        className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2"
      >
        <Honeypot />
        <input
          type="hidden"
          name="enquiry_type"
          value={intent === "take" ? "Tenant — looking to rent" : "Landlord — giving on rent"}
        />
        <Field label="Full name" name="name" required half autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" required half autoComplete="tel" />
        <Field label="Email" name="email" type="email" required half autoComplete="email" />
        <SelectField
          label="City"
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

        {intent === "take" ? (
          <>
            <SelectField
              label="Monthly budget"
              name="budget"
              required
              half
              options={[
                "Under ₹20,000",
                "₹20,000 – ₹40,000",
                "₹40,000 – ₹75,000",
                "₹75,000 – ₹1.5 Lakh",
                "₹1.5 Lakh +",
              ]}
            />
            <SelectField
              label="Furnishing"
              name="furnishing"
              half
              options={["Unfurnished", "Semi-furnished", "Fully furnished", "No preference"]}
            />
            <SelectField
              label="Move-in timeline"
              name="timeline"
              half
              options={["Immediately", "Within 1 month", "1–3 months", "Flexible"]}
            />
            <Field label="Preferred locality (optional)" name="locality" half />
          </>
        ) : (
          <>
            <Field label="Locality / Sector" name="locality" required half />
            <Field label="Expected monthly rent (?)" name="expected_rent" required half />
            <SelectField
              label="Furnishing"
              name="furnishing"
              half
              options={["Unfurnished", "Semi-furnished", "Fully furnished"]}
            />
            <SelectField
              label="Available from"
              name="available_from"
              half
              options={["Immediately", "Within 1 month", "1–3 months"]}
            />
            <Field
              label="Photos link (Drive / Dropbox — optional)"
              name="photos_link"
              placeholder="Shareable link to property photos"
            />
          </>
        )}

        <TextArea
          label={intent === "take" ? "What are you looking for?" : "Tell us about the property"}
          name="details"
          placeholder={
            intent === "take"
              ? "Family size, pets, parking need, must-haves, preferred societies…"
              : "Tenant preference, deposit expectation, amenities, parking, restrictions…"
          }
        />
        <ErrorNote message={message} />
        <SubmitRow
          state={state}
          label={intent === "take" ? "Find me a rental" : "List for rent"}
        />
      </form>
    </div>
  );
}
