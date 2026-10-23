// src/lib/seo.ts
export const SITE = "https://www.mh-digital-solution.com";
export const SITE_NAME = "MH Digital Solution";
export const DEFAULT_OG_IMAGE = `${SITE}/og-image.png`; // 1200x630 dans /public

type SeoOptions = {
  title: string;
  description: string;
  path: string; // "/", "/services", ...
  image?: string;
  type?: "website" | "article";
  jsonLd?: object[]; // un ou plusieurs blocs schema.org propres à la page
};

export const seo = ({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  jsonLd = [],
}: SeoOptions) => {
  const url = `${SITE}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:image", content: image },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: jsonLd.map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  };
};

/** Fil d'Ariane (BreadcrumbList) */
export const breadcrumb = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE}${it.path}`,
  })),
});

/** FAQPage : le texte doit être IDENTIQUE à celui affiché sur la page */
export const faqPage = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});