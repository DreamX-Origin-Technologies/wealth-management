const WHATSAPP_NUMBER = "919443243223";
const INITIAL_MESSAGE = "Hello! I would like to know more about your services.";

export default function WhatsAppFloat() {
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(INITIAL_MESSAGE)}`;
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Open WhatsApp chat"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-3 rounded-full bg-emerald-500 px-4 py-3 text-white shadow-2xl shadow-emerald-500/20 transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 sm:right-6 sm:bottom-6"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.149-.198.297-.768.966-.942 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.672-1.612-.92-2.207-.242-.579-.487-.5-.672-.51l-.572-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.076 4.487.71.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.414-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.001 2a9.965 9.965 0 00-7.071 2.929A9.965 9.965 0 002 12.001c0 1.852.487 3.611 1.413 5.163L2 22l4.966-1.38A9.934 9.934 0 0012 22c5.523 0 10-4.477 10-9.999S17.523 2 12.001 2zm0 18.189a8.183 8.183 0 01-4.249-1.17l-.304-.181-2.944.817.787-2.877-.198-.304A8.23 8.23 0 013.812 12.01a8.189 8.189 0 011.69-4.911A8.18 8.18 0 0112 3.81a8.192 8.192 0 017.24 4.673 8.187 8.187 0 01-1.63 8.027 8.192 8.192 0 01-5.608 2.679z" />
      </svg>
      <span className="hidden text-sm font-semibold sm:inline">Talk to Sakthi Financial Doctor</span>
    </button>
  );
}
