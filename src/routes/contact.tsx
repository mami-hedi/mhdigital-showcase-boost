import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MH Digital Solution" },
      { name: "description", content: "Contactez MH Digital Solution pour discuter de votre projet digital. Réponse rapide garantie." },
      { property: "og:title", content: "Contact — MH Digital Solution" },
      { property: "og:description", content: "Parlons de votre projet." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative bg-gradient-hero text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-animated opacity-20" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative max-w-4xl mx-auto px-5 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-orange-bright">Contact</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">Discutons de votre projet</h1>
          <p className="mt-5 text-lg text-white/80">Notre équipe vous répond sous 24h. Échange gratuit et sans engagement.</p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {infos.map((info) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl bg-card border border-border shadow-card flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-orange flex items-center justify-center flex-shrink-0">
                  <info.icon size={22} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-navy">{info.label}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{info.value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card p-8 rounded-2xl shadow-card border border-border space-y-4"
          >
            {sent ? (
              <div className="text-center py-12">
                <CheckCircle2 className="mx-auto text-orange" size={64} />
                <h3 className="mt-4 text-2xl font-bold text-navy">Message envoyé !</h3>
                <p className="mt-2 text-muted-foreground">Nous reviendrons vers vous très vite.</p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-bold text-navy">Envoyez-nous un message</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="Nom" required />
                  <Input label="Email" type="email" required />
                </div>
                <Input label="Sujet" />
                <div>
                  <label className="text-sm font-medium text-navy block mb-1.5">Message *</label>
                  <textarea required rows={5} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange resize-none" />
                </div>
                <button type="submit" className="w-full bg-gradient-orange text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 shadow-glow hover:scale-[1.01] transition">
                  <Send size={18} /> Envoyer
                </button>
              </>
            )}
          </motion.form>
        </div>
      </section>
    </>
  );
}

function Input({ label, type = "text", required = false }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium text-navy block mb-1.5">{label}{required && " *"}</label>
      <input type={type} required={required} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange" />
    </div>
  );
}

const infos = [
  { icon: Mail, label: "Email", value: "contact@mhdigital.com" },
  { icon: Phone, label: "Téléphone", value: "+212 6 00 00 00 00" },
  { icon: MapPin, label: "Adresse", value: "Casablanca, Maroc" },
  { icon: Clock, label: "Horaires", value: "Lun – Ven : 9h – 18h" },
];
