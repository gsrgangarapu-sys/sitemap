import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Network, X, f as Menu } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 h-10 hidden md:flex items-center justify-between text-[13px] font-medium text-slate-500 lato-regular", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-[#00748b] transition-colors", children: "Tools" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Pro Sitemaps Engine" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#f8fafc] border-t border-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/", className: "flex items-center gap-2 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Network, { className: "w-7 h-7 text-[#00748b] transform rotate-90 group-hover:scale-110 transition-transform duration-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[22px] font-black tracking-tighter text-slate-800 bricolage-grotesque-main", children: [
          "MySitemap",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#00748b]", children: "Generator" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8 rubik-main", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-[14px] font-bold text-[#00748b] transition-colors", children: "Sitemap Generator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/ecommerce-feeds", className: "text-[14px] font-bold text-slate-600 hover:text-[#00748b] transition-colors", children: "eCommerce Feeds" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/rss-generator", className: "text-[14px] font-bold text-slate-600 hover:text-[#00748b] transition-colors", children: "RSS Generator" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "md:hidden text-slate-600",
          onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
          children: isMobileMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-6 h-6" })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isMobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        className: "md:hidden bg-white border-t border-slate-100 overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col px-6 py-4 gap-4 rubik-main font-bold text-[15px] text-slate-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", onClick: () => setIsMobileMenuOpen(false), className: "text-[#00748b]", children: "Sitemap Generator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/ecommerce-feeds", onClick: () => setIsMobileMenuOpen(false), children: "eCommerce Feeds" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/rss-generator", onClick: () => setIsMobileMenuOpen(false), children: "RSS Generator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] w-full bg-slate-100 my-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 text-sm", children: "Pro Sitemaps Engine" })
        ] })
      }
    ) })
  ] });
}
function escapeXml(unsafe) {
  if (!unsafe) return "";
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}
function normalizeUrl(url) {
  if (!url) return "";
  return url.replace(/([^:])\/\//g, "$1/").replace(/^\/\//, "/");
}
function generateSitemapXml(urls) {
  const urlset = urls.map(
    (url) => `
  <url>
    <loc>${escapeXml(normalizeUrl(url.loc))}</loc>
    ${url.lastmod ? `<lastmod>${escapeXml(url.lastmod)}</lastmod>` : ""}
    ${url.changefreq ? `<changefreq>${escapeXml(url.changefreq)}</changefreq>` : ""}
    ${url.priority ? `<priority>${escapeXml(url.priority)}</priority>` : ""}
    ${url.hreflangs?.map((h) => `<xhtml:link rel="alternate" hreflang="${escapeXml(h.lang)}" href="${escapeXml(normalizeUrl(h.href))}" />`).join("") || ""}
    ${url.images?.map((img) => `
    <image:image>
      <image:loc>${escapeXml(normalizeUrl(img.loc))}</image:loc>
      ${img.caption ? `<image:caption>${escapeXml(img.caption)}</image:caption>` : ""}
      ${img.title ? `<image:title>${escapeXml(img.title)}</image:title>` : ""}
    </image:image>`).join("") || ""}
    ${url.videos?.map((v) => `
    <video:video>
      <video:thumbnail_loc>${escapeXml(normalizeUrl(v.thumbnail_loc))}</video:thumbnail_loc>
      <video:title>${escapeXml(v.title)}</video:title>
      <video:description>${escapeXml(v.description)}</video:description>
      ${v.content_loc ? `<video:content_loc>${escapeXml(normalizeUrl(v.content_loc))}</video:content_loc>` : ""}
      ${v.player_loc ? `<video:player_loc>${escapeXml(normalizeUrl(v.player_loc))}</video:player_loc>` : ""}
    </video:video>`).join("") || ""}
  </url>`
  ).join("");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlset}
</urlset>`;
}
export {
  Navigation as N,
  generateSitemapXml as g
};
