import { motion } from "framer-motion";
import { useT } from "./I18n";

const WHATSAPP_URL = "https://wa.me/21658146177?text=" + encodeURIComponent("Bonjour MH Digital Solution, je souhaite plus d'informations.");

export function WhatsAppFab() {
  const { t } = useT();
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", damping: 14 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-[90] group flex items-center gap-2"
    >
      <span className="hidden sm:flex absolute right-full mr-3 px-3 py-2 rounded-lg bg-navy text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition pointer-events-none shadow-card">
        {t("Discutons sur WhatsApp", "Chat with us on WhatsApp")}
      </span>
      <span className="relative flex">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
        <span className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-glow">
          <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
            <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L0 32l8.4-2.2c2.3 1.3 4.9 1.9 7.6 1.9 8.6 0 15.6-7 15.6-15.7C31.6 7.4 24.6.4 16 .4zm0 28.6c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-5 1.3 1.3-4.9-.3-.5C3.5 20.7 2.8 18.4 2.8 16 2.8 8.7 8.7 2.8 16 2.8S29.2 8.7 29.2 16 23.3 29 16 29zm7.3-9.9c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.5-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.3.1-.5 0-.7-.1-.2-.9-2.2-1.2-3-.3-.8-.7-.7-.9-.7h-.7c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.3 0 1.9 1.4 3.8 1.6 4.1.2.3 2.7 4.2 6.7 5.9 2.4 1 3.3 1.1 4.5.9.7-.1 2.4-1 2.7-1.9.3-1 .3-1.8.2-1.9-.1-.2-.4-.3-.8-.5z" />
          </svg>
        </span>
      </span>
    </motion.a>
  );
}
