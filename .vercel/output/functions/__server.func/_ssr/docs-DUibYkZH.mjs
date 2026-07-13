import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navigation } from "./sitemap-DxlRBYZJ.mjs";
import { F as Footer } from "./Footer-LNypjTSd.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { Z as Zap, i as FileCode, S as Search, j as Shield, k as Link, I as Info } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Docs() {
  const sections = [{
    title: "Getting Started",
    icon: Zap,
    content: "To generate a sitemap, simply enter your website domain in the generator on the homepage. Our engine will automatically discover your pages, images, and videos."
  }, {
    title: "XML Format Requirements",
    icon: FileCode,
    content: "Our generator follows the official Sitemaps.org protocol. Each file can contain up to 50,000 URLs and must not exceed 50MB in size. We use UTF-8 encoding for maximum compatibility."
  }, {
    title: "Max Depth Settings",
    icon: Search,
    content: "The 'Max Depth' setting controls how many levels deep our crawler will go from your homepage. A depth of 3 is usually sufficient for most medium-sized websites."
  }, {
    title: "Robots.txt Compliance",
    icon: Shield,
    content: "Our crawler respects your robots.txt 'Disallow' rules. If you want to index a page that is currently disallowed, you must update your robots.txt file first."
  }, {
    title: "Submitting to Google",
    icon: Link,
    content: "After downloading your sitemap, upload it to your server's root directory and submit the URL to Google Search Console for faster indexing."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#f8fafc]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "pt-32 pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 max-w-5xl mx-auto mb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-black text-slate-900 mb-8", children: "Documentation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-slate-500 font-medium leading-relaxed", children: "Everything you need to know about generating, managing, and optimizing your XML sitemaps for search engines." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 max-w-5xl mx-auto space-y-12 mb-32", children: sections.map((section, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: -20
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, className: "bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl flex gap-8 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(section.icon, { className: "w-7 h-7 text-blue-600" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black text-slate-900 mb-4", children: section.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-lg font-medium leading-relaxed", children: section.content })
        ] })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 max-w-5xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-600 p-12 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-8 h-8 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black", children: "Need custom help?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100 font-medium", children: "Our SEO experts are available for premium support." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@xml-sitemaps.com", className: "bg-white text-blue-600 px-8 py-4 rounded-2xl font-black hover:bg-blue-50 transition-all shadow-xl", children: "Contact Support" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Docs as component
};
