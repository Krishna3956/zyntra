import { site } from "@/lib/site";
import { Whatsapp } from "./Icons";

export function FloatingWhatsApp() {
  const number = site.whatsapp.replace(/[^0-9]/g, "");
  const text = encodeURIComponent(
    "Hi Zyntra, I'd like to know more about your real estate services."
  );
  return (
    <a
      href={`https://wa.me/${number}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Zyntra on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#1f8a4c] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(31,138,76,0.4)] transition-transform hover:scale-105"
    >
      <Whatsapp className="h-6 w-6" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[8rem] group-hover:opacity-100 sm:inline">
        Chat with us
      </span>
    </a>
  );
}
