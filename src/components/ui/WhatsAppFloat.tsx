import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919443243223";
const INITIAL_MESSAGE = "Hello! I would like to know more about your services.";

export default function WhatsAppFloat() {
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(INITIAL_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Open WhatsApp chat"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-3 rounded-full bg-emerald-500 px-4 py-3 text-white shadow-2xl shadow-emerald-500/20 transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="h-7 w-7 shrink-0" aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">Talk to Sakthi Financial Doctor</span>
    </button>
  );
}
