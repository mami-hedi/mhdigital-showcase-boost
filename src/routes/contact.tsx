import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, ChevronDown, HelpCircle } from "lucide-react";
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
  const { t } = useT();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const infos = [
    { icon: Mail, label: t("Email", "Email"), value: "contact@mh-digital-solution.com", href: "mailto:contact@mh-digital-solution.com" },
    { icon: Phone, label: t("Téléphone / WhatsApp", "Phone / WhatsApp"), value: "+216 58 146 177", href: "tel:+21658146177" },
    { icon: MapPin, label: t("Adresse", "Address"), value: t("Hammamet, Tunisie", "Hammamet, Tunisia") },
    { icon: Clock, label: t("Mode de travail", "Work mode"), value: t("100% télétravail · Lun – Ven", "100% remote · Mon – Fri") },
  ];

  const faqs = [
    {
      q: t("Quels sont vos délais moyens de réalisation ?", "What are your average delivery times?"),
      a: t(
        "Les délais varient selon le projet : comptez environ 2 à 3 semaines pour un site vitrine / sur mesure, et 4 à 8 semaines pour un projet ERP / CRM ou une application complexe.",
        "Timelines depend on project complexity: count about 2-3 weeks for a custom showcase website, and 4-8 weeks for ERP/CRM systems or custom web applications."
      ),
    },
    {
      q: t("Comment se déroule un projet avec vous ?", "How does a project work with your team?"),
      a: t(
        "Nous suivons une méthodologie claire : analyse du besoin & cahier des charges, conception UI/UX, développement, tests et déploiement final avec formation.",
        "We follow a clear methodology: requirements discovery & specifications, UI/UX design, core development, testing, and final deployment with user training."
      ),
    },
    {
      q: t("Proposez-vous une assistance et maintenance après livraison ?", "Do you offer post-launch support and maintenance?"),
      a: t(
        "Oui, tous nos projets incluent une garantie et une période d'accompagnement post-lancement. Nous proposons également des contrats de maintenance évolutive.",
        "Yes, all our projects include a post-launch support period. We also offer ongoing maintenance contracts for updates and performance optimization."
      ),
    },
    {
      q: t("Quelles sont vos technologies de prédilection ?", "What technologies do you specialize in?"),
      a: t(
        "Nous sommes experts en développement web moderne (React, Next.js, Node.js, TypeScript), CMS WordPress sur mesure et intégration d'ERP/CRM (Odoo).",
        "We specialize in modern web technologies (React, Next.js, Node.js, TypeScript), custom WordPress development, and ERP/CRM integration (Odoo)."
      ),
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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
          {/* Colonne de gauche : Infos & WhatsApp */}
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
                  <div>
                    {info.href ? (
                      <a href={info.href} className="text-sm text-muted-foreground mt-0.5 hover:text-orange transition block">
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-sm text-muted-foreground mt-0.5">{info.value}</div>
                    )}
                  </div>
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

          {/* Colonne de droite : FAQ bilingue */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-card p-8 rounded-2xl shadow-card border border-border flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center text-orange flex-shrink-0">
                  <HelpCircle size={22} />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-navy">
                    {t("Questions fréquentes", "Frequently Asked Questions")}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {t("Trouvez rapidement des réponses à vos questions.", "Find quick answers to common questions.")}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, i) => {
                  const isOpen = openFaqIndex === i;
                  return (
                    <div key={i} className="border border-border rounded-xl overflow-hidden transition-colors">
                      <button
                        type="button"
                        onClick={() => toggleFaq(i)}
                        className="w-full p-4 text-left font-bold text-navy flex justify-between items-center bg-background/50 hover:bg-background transition"
                      >
                        <span className="text-sm md:text-base pr-3">{faq.q}</span>
                        <ChevronDown
                          size={18}
                          className={`text-muted-foreground shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-orange" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 pt-0 text-sm text-muted-foreground border-t border-border/50 leading-relaxed bg-card">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Banner bas de FAQ */}
            <div className="p-4 rounded-xl bg-orange/5 border border-orange/20 text-center">
              <p className="text-sm font-semibold text-navy">
                {t("Vous avez une question spécifique ?", "Have a specific question?")}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {t("Contactez-nous directement sur WhatsApp pour une réponse rapide.", "Contact us directly on WhatsApp for an instant answer.")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}