import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import logoAsset from "@/assets/mh-logo.png.asset.json";
import { QuoteProvider, useQuote } from "./QuoteDialog";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/portefeuille", label: "Portefeuille" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  const { open: openQuote } = useQuote();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/85 border-b border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logoAsset.url} alt="MH Digital Solution" className="h-12 w-auto transition-transform group-hover:scale-105" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "text-orange" : "text-navy hover:text-orange"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-gradient-orange rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={openQuote}
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-orange text-white font-semibold px-5 py-2.5 rounded-full text-sm shadow-glow hover:scale-105 active:scale-95 transition"
          >
            Demander un devis
          </button>
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-3 px-3 rounded-lg text-navy hover:bg-accent font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => { setOpen(false); openQuote(); }}
                className="mt-2 bg-gradient-orange text-white font-semibold px-5 py-3 rounded-full shadow-glow"
              >
                Demander un devis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  const { open: openQuote } = useQuote();
  return (
    <footer className="bg-gradient-navy text-white mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logoAsset.url} alt="MH Digital Solution" className="h-16 w-auto bg-white rounded-xl p-2" />
          <p className="mt-4 text-white/70 text-sm leading-relaxed">
            Agence digitale spécialisée dans la création de solutions web sur mesure, ERP et logiciels métier.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-orange mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {nav.map(n => (
              <li key={n.to}><Link to={n.to} className="hover:text-orange transition">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-orange mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Sites web sur mesure</li>
            <li>E-commerce</li>
            <li>ERP & CRM</li>
            <li>Logiciels métier</li>
            <li>Applications mobiles</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-orange mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 text-orange" /> contact@mhdigital.com</li>
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 text-orange" /> +212 6 00 00 00 00</li>
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-orange" /> Casablanca, Maroc</li>
          </ul>
          <button
            onClick={openQuote}
            className="mt-5 bg-gradient-orange text-white font-semibold px-5 py-2.5 rounded-full text-sm shadow-glow"
          >
            Demander un devis
          </button>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} MH Digital Solution. Tous droits réservés.
      </div>
    </footer>
  );
}

export function Layout({ children }: { children?: ReactNode }) {
  return (
    <QuoteProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children ?? <Outlet />}</main>
        <Footer />
      </div>
    </QuoteProvider>
  );
}
