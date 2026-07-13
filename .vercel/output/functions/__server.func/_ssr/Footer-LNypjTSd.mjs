import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { M as Map, T as Twitter, l as Github, m as Linkedin, n as Facebook } from "../_libs/lucide-react.mjs";
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-white border-t border-slate-100 pt-24 pb-12 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-12 mb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1 md:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 font-bold text-xl tracking-tight mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Map, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-900", children: "XML-Sitemaps" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-medium mb-8 leading-relaxed", children: "Empowering website owners and SEO experts with the gold standard of sitemap generation since 2005." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4", children: [Twitter, Github, Linkedin, Facebook].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5" }) }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-black text-slate-900 mb-6 uppercase text-xs tracking-widest", children: "Product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-slate-500 font-bold hover:text-blue-600 transition-colors", children: "Generator" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#pricing", className: "text-slate-500 font-bold hover:text-blue-600 transition-colors", children: "PRO Cloud" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#pricing", className: "text-slate-500 font-bold hover:text-blue-600 transition-colors", children: "Pricing" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-black text-slate-900 mb-6 uppercase text-xs tracking-widest", children: "Resources" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs", className: "text-slate-500 font-bold hover:text-blue-600 transition-colors", children: "Documentation" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "text-slate-500 font-bold hover:text-blue-600 transition-colors", children: "About Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-slate-500 font-bold hover:text-blue-600 transition-colors", children: "SEO Tools" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-black text-slate-900 mb-6 uppercase text-xs tracking-widest", children: "Legal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-slate-500 font-bold hover:text-blue-600 transition-colors", children: "Privacy Policy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-slate-500 font-bold hover:text-blue-600 transition-colors", children: "Terms of Use" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-slate-500 font-bold hover:text-blue-600 transition-colors", children: "GDPR" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-sm font-medium", children: "© 2005-2026 XML-Sitemaps. All rights reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 text-slate-400 text-sm font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-emerald-500" }),
        "All Systems Operational"
      ] }) })
    ] })
  ] }) });
}
export {
  Footer as F
};
