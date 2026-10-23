import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Layout } from "../components/Layout";

/* -------------------------------------------------------------------------- */
/*  SEO / GEO / AEO : constantes et données structurées (schema.org)          */
/* -------------------------------------------------------------------------- */

const SITE = "https://www.mh-digital-solution.com";
const SITE_NAME = "MH Digital Solution";
// À créer dans /public : image 1200x630 px, < 300 Ko
const OG_IMAGE = `${SITE}/og-image.png`;

const DEFAULT_TITLE =
  "Agence digitale en Tunisie : sites web, ERP, e-commerce | MH Digital Solution";
const DEFAULT_DESCRIPTION =
  "Agence digitale à Hammamet (Tunisie) : création de sites web, e-commerce, ERP/CRM, logiciels métier, applications mobiles et community management. Devis gratuit sous 24h.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: SITE_NAME,
      url: `${SITE}/`,
      logo: `${SITE}/logo.png`, // à placer dans /public
      email: "contact@mh-digital-solution.com",
      telephone: "+21658146177",
      sameAs: [
        "https://www.linkedin.com/company/mhdigitalsolution",
        "https://www.facebook.com/profile.php?id=61558644863951",
        "https://www.instagram.com/mhdigitalsolution/",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}/#localbusiness`,
      name: SITE_NAME,
      url: `${SITE}/`,
      telephone: "+21658146177",
      email: "contact@mh-digital-solution.com",
      description:
        "Agence digitale à Hammamet (Tunisie) : création de sites web, e-commerce, ERP, CRM, logiciels métier, applications mobiles et community management.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hammamet",
        addressCountry: "TN",
      },
      areaServed: ["TN", "FR"],
      knowsAbout: [
        "Création de sites web",
        "E-commerce",
        "ERP",
        "CRM",
        "Logiciels métier",
        "Applications mobiles",
        "Community management",
      ],
      parentOrganization: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: SITE_NAME,
      inLanguage: "fr",
      publisher: { "@id": `${SITE}/#organization` },
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Pages d'erreur                                                            */
/* -------------------------------------------------------------------------- */

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-orange px-5 py-2.5 text-sm font-semibold text-white shadow-glow"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Une erreur est survenue</h1>
        <p className="mt-2 text-sm text-muted-foreground">Veuillez réessayer ou revenir à l'accueil.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gradient-orange px-5 py-2.5 text-sm font-semibold text-white shadow-glow"
          >
            Réessayer
          </button>
          <a href="/" className="rounded-full border border-input px-5 py-2.5 text-sm font-semibold">Accueil</a>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Route racine                                                              */
/*  NB : pas de canonical ni d'og:url ici. Ils doivent être définis dans      */
/*  chaque route (sinon toutes les pages pointeraient vers l'accueil).        */
/* -------------------------------------------------------------------------- */

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // Valeurs par défaut (chaque route peut les surcharger)
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { name: "author", content: SITE_NAME },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "theme-color", content: "#0f172a" }, // adapter à votre charte

      // Open Graph
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "MH Digital Solution, agence digitale en Tunisie" },

      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: DEFAULT_TITLE },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Outlet />
      </Layout>
    </QueryClientProvider>
  );
}