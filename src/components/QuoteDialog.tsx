import { useState, createContext, useContext, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";

type Ctx = { open: () => void };
const QuoteCtx = createContext<Ctx>({ open: () => {} });
export const useQuote = () => useContext(QuoteCtx);

const services = [
  "Site vitrine",
  "Site e-commerce",
  "Application web sur mesure",
  "ERP / CRM",
  "Logiciel métier",
  "Application mobile",
  "Refonte / SEO",
  "Autre",
];

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setOpen(false);
    }, 2200);
  };

  return (
    <QuoteCtx.Provider value={{ open: () => setOpen(true) }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-2xl bg-card shadow-glow overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="bg-gradient-navy text-white px-8 py-6 relative">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 p-2 rounded-full hover:bg-white/10 transition"
                  aria-label="Fermer"
                >
                  <X size={20} />
                </button>
                <h3 className="text-2xl font-bold">Demander un devis</h3>
                <p className="text-white/70 text-sm mt-1">
                  Réponse personnalisée sous 24h — gratuit et sans engagement.
                </p>
              </div>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 text-center"
                >
                  <CheckCircle2 className="mx-auto text-orange" size={64} />
                  <h4 className="text-xl font-bold mt-4">Demande envoyée !</h4>
                  <p className="text-muted-foreground mt-2">Notre équipe vous contactera très vite.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Nom complet" name="name" required />
                    <Field label="Entreprise" name="company" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Téléphone" name="phone" type="tel" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy block mb-1.5">Type de projet *</label>
                    <select required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-navy focus:outline-none focus:ring-2 focus:ring-orange transition">
                      <option value="">Sélectionnez…</option>
                      {services.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy block mb-1.5">Budget estimé</label>
                    <select className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-navy focus:outline-none focus:ring-2 focus:ring-orange transition">
                      <option>À définir</option>
                      <option>{"< 2 000 €"}</option>
                      <option>2 000 – 5 000 €</option>
                      <option>5 000 – 15 000 €</option>
                      <option>{"> 15 000 €"}</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy block mb-1.5">Décrivez votre projet *</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-navy focus:outline-none focus:ring-2 focus:ring-orange transition resize-none"
                      placeholder="Objectifs, fonctionnalités souhaitées, délais…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-orange text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 shadow-glow hover:scale-[1.02] active:scale-[0.99] transition"
                  >
                    <Send size={18} /> Envoyer ma demande
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </QuoteCtx.Provider>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium text-navy block mb-1.5">{label}{required && " *"}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-navy focus:outline-none focus:ring-2 focus:ring-orange transition"
      />
    </div>
  );
}
