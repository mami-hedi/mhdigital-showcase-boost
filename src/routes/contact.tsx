import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { useT } from "@/components/I18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MH Digital Solution" },
      { name: "description", content: "Contactez MH Digital Solution à Hammamet, Tunisie. 100% télétravail. Téléphone & WhatsApp : +216 58 146 177." },
      { property: "og:title", content: "Contact — MH Digital Solution" },
      { property: "og:description", content: "Let's talk about your project." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const { t } = useT();

  const infos = [
    { icon: Mail, label: t("Email", "Email"), value: "contact@mh-digital-solution.com", href: "mailto:contact@mh-digital-solution.com" },
    { icon: Phone, label: t("Téléphone / WhatsApp", "Phone / WhatsApp"), value: "+216 58 146 177", href: "tel:+21658146177" },
    { icon: MapPin, label: t("Adresse", "Address"), value: t("Hammamet, Tunisie", "Hammamet, Tunisia") },
    { icon: Clock, label: t("Mode de travail", "Work mode"), value: t("100% télétravail · Lun – Ven", "100% remote · Mon – Fri") },
  ];

  return (
    <>
      <section className="relative bg-gradient-hero text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-animated opacity-20" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative max-w-4xl mx-auto px-5 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-orange-bright">{t("Contact", "Contact")}</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">{t("Discutons de votre projet", "Let's talk about your project")}</h1>
          <p className="mt-5 text-lg text-white/80">{t("Notre équipe vous répond sous 24h. Échange gratuit et sans engagement.", "We reply within 24h. Free chat, no commitment.")}</p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {infos.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ x: 6 }}
                className="p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow hover:border-orange/40 flex items-start gap-4 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-orange flex items-center justify-center flex-shrink-0">
                  <info.icon size={22} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-navy">{info.label}</div>
                 <div> {info.href ? (
                   
                    <a href={info.href}
                     className="text-sm text-muted-foreground mt-0.5 hover:text-orange transition block"
                   >
                     {info.value}
                   </a>
                 ) : (
                  <div className="text-sm text-muted-foreground mt-0.5">{info.value}</div>
                 )}</div>
                </div>
              </motion.div>
            ))}
            <motion.a
              href="https://wa.me/21658146177"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 6, scale: 1.02 }}
              className="p-5 rounded-2xl bg-[#25D366] text-white shadow-glow flex items-center gap-4 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={22} />
              </div>
              <div>
                <div className="font-bold">{t("Écrivez-nous sur WhatsApp", "Message us on WhatsApp")}</div>
                <div className="text-sm text-white/90 mt-0.5">{t("Réponse rapide pendant les heures de bureau", "Quick reply during business hours")}</div>
              </div>
            </motion.a>
          </div>

          <motion.form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-card p-8 rounded-2xl shadow-card border border-border space-y-4"
          >
            {sent ? (
              <div className="text-center py-12">
                <CheckCircle2 className="mx-auto text-orange" size={64} />
                <h3 className="mt-4 text-2xl font-bold text-navy">{t("Message envoyé !", "Message sent!")}</h3>
                <p className="mt-2 text-muted-foreground">{t("Nous reviendrons vers vous très vite.", "We'll get back to you very soon.")}</p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-bold text-navy">{t("Envoyez-nous un message", "Send us a message")}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label={t("Nom", "Name")} required />
                  <Input label={t("Email", "Email")} type="email" required />
                </div>
                <Input label={t("Sujet", "Subject")} />
                <div>
                  <label className="text-sm font-medium text-navy block mb-1.5">{t("Message", "Message")} *</label>
                  <textarea required rows={5} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange resize-none" />
                </div>
                <button type="submit" className="w-full bg-gradient-orange text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 shadow-glow hover:scale-[1.01] transition">
                  <Send size={18} /> {t("Envoyer", "Send")}
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
