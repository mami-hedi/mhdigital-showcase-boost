import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Lang = "fr" | "en";
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (fr: string, en: string) => string };

const I18nCtx = createContext<Ctx>({
  lang: "fr",
  setLang: () => {},
  t: (fr) => fr,
});

export const useT = () => useContext(I18nCtx);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mh_lang") as Lang | null;
      if (saved === "fr" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("mh_lang", l); } catch {}
  };

  const t = (fr: string, en: string) => (lang === "fr" ? fr : en);

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function LangSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useT();
  return (
    <div className={`inline-flex items-center gap-1 rounded-full bg-accent border border-border p-1 ${compact ? "" : ""}`}>
      <button
        onClick={() => setLang("fr")}
        aria-label="Français"
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition ${
          lang === "fr" ? "bg-gradient-orange text-white shadow-glow" : "text-navy hover:bg-card"
        }`}
      >
        <FlagFR /> FR
      </button>
      <button
        onClick={() => setLang("en")}
        aria-label="English"
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition ${
          lang === "en" ? "bg-gradient-orange text-white shadow-glow" : "text-navy hover:bg-card"
        }`}
      >
        <FlagGB /> EN
      </button>
    </div>
  );
}

export function FlagFR({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={(size * 2) / 3} viewBox="0 0 3 2" className="rounded-sm overflow-hidden shrink-0">
      <rect width="1" height="2" fill="#0055A4" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#EF4135" />
    </svg>
  );
}

export function FlagGB({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={(size * 2) / 3} viewBox="0 0 60 40" className="rounded-sm overflow-hidden shrink-0">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="12" />
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}
