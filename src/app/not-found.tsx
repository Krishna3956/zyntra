import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="gradient-forest relative flex min-h-[80vh] items-center overflow-hidden text-paper">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div className="container-page relative text-center">
        <p className="font-display text-[6rem] font-semibold leading-none text-gold md:text-[9rem]">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
          This address doesn&apos;t exist — yet.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-paper/75">
          The page you&apos;re looking for may have moved or never been built. Let&apos;s get you
          back to solid ground.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-gold">
            Back to home
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/properties" className="btn btn-ghost-light">
            Browse properties
          </Link>
        </div>
      </div>
    </section>
  );
}
