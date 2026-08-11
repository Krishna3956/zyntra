import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "The Zyntra way of working - evidence over hype, transparency over pressure, and relationships over transactions. Here is what to expect when you work with us.",
};

export default function HowWeWorkPage() {
  return (
    <ProsePage
      eyebrow="How we work"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "How we work" }]}
      title="The way we do things"
      description="Real estate has a trust problem. Our entire way of working is a response to it - built to make you feel informed and in control, not sold to."
      highlights={{
        title: "The principles behind every deal",
        items: [
          { title: "Evidence over hype", body: "Prices, projections and recommendations are grounded in real data you can see, not sales talk." },
          { title: "Transparency over pressure", body: "We explain the trade-offs, name the risks, and never rush you into a decision." },
          { title: "Relationships over transactions", body: "We optimise for you coming back and referring us, which means being right over time." },
          { title: "One team, end to end", body: "Advisory, legal, finance and management under one roof, so nothing falls between the cracks." },
          { title: "Everything in writing", body: "Agreements are registered and documented. The important parts are never left to memory." },
          { title: "Honest even when it costs us", body: "If waiting, walking away, or not developing is right for you, that is what we will tell you." },
        ],
      }}
      steps={{
        title: "What working with us looks like",
        items: [
          { t: "Understand", b: "We start by understanding your goal, timeline and constraints - not our pipeline." },
          { t: "Advise", b: "We give you an honest, evidence-based view of your options, including doing nothing." },
          { t: "Execute", b: "We handle the search, transaction, paperwork or development with discipline." },
          { t: "Stay", b: "We remain your point of contact well after the deal is done." },
        ],
      }}
      sections={[
        {
          heading: "Why we built it this way",
          paragraphs: [
            "Most people transact in property only a handful of times in their lives, against professionals who do it daily. That imbalance is where trust breaks down. We decided the only durable way to build a real estate business was to close that gap - to make the client as informed as the insider.",
            "It is slower and it costs us the occasional quick win. But it is the only version of this business we actually want to run.",
          ],
        },
      ]}
      related={{
        title: "Go deeper",
        links: [
          { label: "Our code of conduct", href: "/code-of-conduct" },
          { label: "About Zyntra", href: "/about" },
          { label: "Joint ventures", href: "/joint-ventures" },
        ],
      }}
      cta={{
        title: "Experience a calmer way to transact.",
        description: "Bring us your property question. We will give you a straight, useful answer.",
        primaryLabel: "Talk to us",
        primaryHref: "/contact",
      }}
    />
  );
}
