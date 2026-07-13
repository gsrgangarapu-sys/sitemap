import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as TSS_SERVER_FUNCTION, c as createServerFn } from "./server-BTmofNUn.mjs";
import "../_libs/sonner.mjs";
import { N as Navigation, g as generateSitemapXml } from "./sitemap-DxlRBYZJ.mjs";
import "../_libs/seroval.mjs";
import { G as Globe, C as ChevronDown, N as Network, a as Code, S as Search, L as LoaderCircle, b as CircleAlert, c as Check, D as Download, F as FlaskConical, d as FileText, M as Map, e as Star } from "../_libs/lucide-react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const fetchPageHtml_createServerFn_handler = createServerRpc({
  id: "9cfc38e9b44415ad6c389b4a676fa47153360beb1e12690a186d5ed702712330",
  name: "fetchPageHtml",
  filename: "src/routes/index.tsx"
}, (opts) => fetchPageHtml.__executeServer(opts));
const fetchPageHtml = createServerFn({
  method: "GET"
}).handler(fetchPageHtml_createServerFn_handler, async ({
  data: {
    url,
    useJS
  }
}) => {
  const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
  try {
    const cheerioModule = await import("../_libs/cheerio.mjs");
    const cheerio = cheerioModule.default || cheerioModule;
    let html = "";
    let status = 200;
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1e4);
      const response = await fetch(url, {
        headers: {
          "User-Agent": USER_AGENT,
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.5",
          "Accept-Encoding": "gzip, deflate"
        },
        redirect: "follow",
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      status = response.status;
      if (response.ok) {
        html = await response.text();
      } else {
        return {
          error: `HTTP ${response.status}`,
          links: [],
          images: [],
          metadata: null
        };
      }
    } catch (err) {
      const msg = err?.name === "AbortError" ? "Request timed out" : err?.message || "Network error";
      console.error(`Fetch failed for ${url}: ${msg}`);
      return {
        error: msg,
        links: [],
        images: [],
        metadata: null
      };
    }
    if (!html || html.length < 50) {
      return {
        error: "Empty or minimal response",
        links: [],
        images: [],
        metadata: null
      };
    }
    const $ = cheerio.load(html);
    const links = [];
    const images = [];
    $("a[href], area[href]").each((_, el) => {
      const href = $(el).attr("href");
      if (href && !href.startsWith("#") && !href.startsWith("javascript:") && !href.startsWith("mailto:") && !href.startsWith("tel:") && !href.startsWith("data:")) {
        try {
          const resolved = new URL(href, url);
          resolved.hash = "";
          links.push(resolved.toString());
        } catch {
        }
      }
    });
    $('link[rel="canonical"], link[rel="alternate"]').each((_, el) => {
      const href = $(el).attr("href");
      if (href) {
        try {
          const resolved = new URL(href, url);
          resolved.hash = "";
          links.push(resolved.toString());
        } catch {
        }
      }
    });
    $("img").each((_, el) => {
      const src = $(el).attr("src") || $(el).attr("data-src") || $(el).attr("data-lazy-src");
      if (src && !src.startsWith("data:")) {
        try {
          images.push({
            loc: src.startsWith("http") ? src : new URL(src, url).toString(),
            caption: $(el).attr("alt") || "",
            title: $(el).attr("title") || ""
          });
        } catch {
        }
      }
    });
    const metadata = {
      title: $("title").text()?.trim() || "No Title",
      description: $('meta[name="description"]').attr("content") || "",
      h1Count: $("h1").length,
      wordCount: $.text().split(/\s+/).filter(Boolean).length,
      isJSRendered: false
    };
    return {
      links: [...new Set(links)],
      images,
      metadata,
      status,
      error: null
    };
  } catch (err) {
    console.error(`Server error crawling ${url}:`, err);
    return {
      error: err.message || "Server error",
      links: [],
      images: [],
      metadata: null
    };
  }
});
const checkRobotsTxt_createServerFn_handler = createServerRpc({
  id: "ae6c19e73a84f0cbd0a9ae9f8e1489c498f770fdf4b230865bbca81e276bf24b",
  name: "checkRobotsTxt",
  filename: "src/routes/index.tsx"
}, (opts) => checkRobotsTxt.__executeServer(opts));
const checkRobotsTxt = createServerFn({
  method: "GET"
}).handler(checkRobotsTxt_createServerFn_handler, async ({
  data: url
}) => {
  try {
    const parsed = new URL(url);
    const robotsUrl = `${parsed.origin}/robots.txt`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5e3);
    const response = await fetch(robotsUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; SitemapBot/1.0)"
      },
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (response.ok) {
      const content = await response.text();
      const disallows = [];
      const sitemapUrls = [];
      const lines = content.split("\n");
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.toLowerCase().startsWith("disallow:")) {
          const path = trimmed.substring(9).trim();
          if (path && path !== "/") {
            disallows.push(path);
          }
        }
        if (trimmed.toLowerCase().startsWith("sitemap:")) {
          const sitemapUrl = trimmed.substring(8).trim();
          if (sitemapUrl) sitemapUrls.push(sitemapUrl);
        }
      }
      return {
        exists: true,
        disallows,
        sitemapUrls,
        content
      };
    }
    return {
      exists: false,
      disallows: [],
      sitemapUrls: [],
      content: null
    };
  } catch {
    return {
      exists: false,
      disallows: [],
      sitemapUrls: [],
      content: null
    };
  }
});
function AccordionItem({
  question,
  answer
}) {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-slate-200 py-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsOpen(!isOpen), className: "w-full flex items-center justify-between text-left font-bold text-slate-800 hover:text-[#00748b] transition-colors", children: [
      question,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-5 h-5 text-slate-400 transform transition-transform ${isOpen ? "rotate-180" : ""}` })
    ] }),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-slate-600 leading-relaxed text-[15px] animate-in fade-in slide-in-from-top-2", children: answer })
  ] });
}
function Index() {
  const [url, setUrl] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("idle");
  const [progress, setProgress] = reactExports.useState(0);
  const [discoveredUrls, setDiscoveredUrls] = reactExports.useState([]);
  const [logs, setLogs] = reactExports.useState([]);
  const [robotsData, setRobotsData] = reactExports.useState(null);
  const [stats, setStats] = reactExports.useState({
    pages: 0,
    images: 0,
    time: 0,
    h1Count: 0,
    wordCount: 0,
    skipped: 0
  });
  const [settings, setSettings] = reactExports.useState({
    maxPages: 500,
    maxDepth: 3,
    changefreq: "weekly",
    priority: "0.8",
    useJS: false
  });
  const [xmlPreview, setXmlPreview] = reactExports.useState("");
  const isScanning = reactExports.useRef(false);
  const handleGenerate = async (e) => {
    e.preventDefault();
    let targetUrl = url.trim();
    if (!targetUrl) return;
    if (!targetUrl.startsWith("http")) targetUrl = "https://" + targetUrl;
    if (isScanning.current) return;
    isScanning.current = true;
    setStatus("scanning");
    setProgress(0);
    setDiscoveredUrls([]);
    setLogs([{
      msg: "🚀 Initializing Crawler...",
      type: "info"
    }]);
    setStats({
      pages: 0,
      images: 0,
      time: 0,
      h1Count: 0,
      wordCount: 0,
      skipped: 0
    });
    try {
      const robots = await checkRobotsTxt({
        data: targetUrl
      });
      setRobotsData(robots);
      const startTime = Date.now();
      const foundUrls = /* @__PURE__ */ new Set();
      const queue = [{
        url: targetUrl,
        depth: 0
      }];
      const domain = new URL(targetUrl).hostname;
      const MAX_CONCURRENCY = 25;
      let activePromises = 0;
      let skippedCount = 0;
      const discoveredSet = /* @__PURE__ */ new Set();
      const processNext = async () => {
        if (!isScanning.current || foundUrls.size >= settings.maxPages || queue.length === 0) return;
        const {
          url: currentUrl,
          depth: currentDepth
        } = queue.shift();
        if (foundUrls.has(currentUrl)) return;
        foundUrls.add(currentUrl);
        setLogs((prev) => [...prev.slice(-9), {
          msg: `→ Scanning: ${currentUrl}`,
          type: "pending"
        }]);
        activePromises++;
        try {
          const result = await fetchPageHtml({
            data: {
              url: currentUrl,
              useJS: settings.useJS
            }
          });
          if (!result.error) {
            setDiscoveredUrls([...foundUrls]);
            if (currentDepth < settings.maxDepth) {
              for (const link of result.links || []) {
                try {
                  const u = new URL(link, currentUrl);
                  u.hash = "";
                  const clean = u.href.replace(/\/$/, "");
                  if (!discoveredSet.has(clean)) {
                    discoveredSet.add(clean);
                    const isSameDomain = u.hostname === domain || u.hostname === `www.${domain}` || `www.${u.hostname}` === domain;
                    if (isSameDomain) {
                      if (clean.match(/\.(pdf|jpg|jpeg|png|gif|zip|exe|dmg|iso|mp4|css|js)$/i)) {
                        skippedCount++;
                      } else if (!foundUrls.has(clean)) {
                        queue.push({
                          url: clean,
                          depth: currentDepth + 1
                        });
                      }
                    } else {
                      skippedCount++;
                    }
                  }
                } catch {
                }
              }
            }
            setStats((prev) => ({
              ...prev,
              pages: foundUrls.size,
              skipped: skippedCount,
              images: prev.images + (result.images?.length || 0)
            }));
            const totalKnown = foundUrls.size + queue.length;
            const calculatedProgress = totalKnown === 0 ? 0 : foundUrls.size / totalKnown * 100;
            setProgress((prev) => Math.max(prev, Math.min(calculatedProgress, 99)));
          }
        } catch (err) {
          console.error("Crawl error:", err);
        } finally {
          activePromises--;
        }
      };
      while (isScanning.current && foundUrls.size < settings.maxPages && (queue.length > 0 || activePromises > 0)) {
        if (queue.length > 0 && activePromises < MAX_CONCURRENCY) {
          processNext();
        } else {
          await new Promise((r) => setTimeout(r, 50));
        }
      }
      setStats((prev) => ({
        ...prev,
        time: (Date.now() - startTime) / 1e3
      }));
      setStatus("completed");
      const xml = generateSitemapXml([...foundUrls].map((u) => ({
        loc: u,
        lastmod: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        changefreq: settings.changefreq,
        priority: settings.priority
      })));
      setXmlPreview(xml);
    } catch (err) {
      setStatus("error");
    } finally {
      isScanning.current = false;
    }
  };
  const downloadXml = () => {
    const blob = new Blob([xmlPreview], {
      type: "application/xml"
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `sitemap.xml`;
    link.click();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#fafcff] text-slate-800 font-sans selection:bg-[#00748b]/20 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#00748b]/10 blur-[120px] pointer-events-none z-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[#00b87c]/10 blur-[120px] pointer-events-none z-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-400/5 blur-[120px] pointer-events-none z-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-white/40 to-transparent pointer-events-none -z-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 max-w-5xl mx-auto pt-12 pb-16 text-center min-h-[400px]", children: [
          status === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in slide-in-from-bottom-4 duration-500 mt-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-black text-slate-800 mb-5 tracking-tight bricolage-grotesque-main", children: "Generate a Sitemap for Your Website" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed text-[17px] lato-regular", children: "Create XML, HTML, or Visual sitemaps to help search engines crawl your site, improve navigation for users, and plan your website structure." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 mb-6 font-medium text-sm", children: "Enter your website’s root URL and choose a sitemap format to continue:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleGenerate, className: "max-w-4xl mx-auto bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col md:flex-row items-center p-2 mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 w-full flex items-center px-4 py-2 md:py-0 border-b border-slate-200 md:border-b-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-5 h-5 text-slate-400 shrink-0 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: url, onChange: (e) => setUrl(e.target.value), placeholder: "https:// Website URL", className: "w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400 font-medium" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[1px] h-8 bg-slate-200 hidden md:block mx-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-48 px-2 py-2 md:py-0 border-b border-slate-200 md:border-b-0 flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "bg-transparent text-slate-700 font-bold outline-none w-full cursor-pointer appearance-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "XML Sitemap" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "HTML Sitemap" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Visual Sitemap" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-slate-400 pointer-events-none" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: !url.trim(), className: "w-full md:w-auto mt-4 md:mt-0 bg-[#00748b] hover:bg-[#006074] text-white px-8 py-3.5 rounded-md text-[15px] font-bold transition-all disabled:opacity-50 whitespace-nowrap shadow-[0_4px_14px_0_rgba(0,116,139,0.39)] hover:shadow-[0_6px_20px_rgba(0,116,139,0.23)] hover:-translate-y-0.5 rubik-main", children: "Start creating" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-[13px] mb-12 font-medium", children: "Start generating in seconds." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-4 mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-white border border-slate-200 text-slate-700 px-6 py-2.5 rounded font-bold hover:bg-slate-50 transition-colors shadow-sm text-sm", children: "Open generator" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-[#f0f8ff] text-[#00748b] px-6 py-2.5 rounded font-bold hover:bg-[#e1f0fa] transition-colors shadow-sm text-sm", children: "Discover plans" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-[#f0f8ff] flex items-center justify-center text-[#00748b] mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Network, { className: "w-6 h-6" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-slate-800 mb-3 text-[19px] bricolage-grotesque-main tracking-tight", children: "Pro Sitemaps" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 text-[15px] leading-relaxed lato-regular", children: "Automatically maintain your sitemaps without lifting a finger. Ensure all new content is indexed instantly and accurately by major search engines." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-[#f0f8ff] flex items-center justify-center text-[#00748b] mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Code, { className: "w-6 h-6" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-slate-800 mb-3 text-[19px] bricolage-grotesque-main tracking-tight", children: "Generator Script" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 text-[15px] leading-relaxed lato-regular", children: "Download our standalone PHP script to generate sitemaps locally on your own server. Total control with no limits on pages or configurations." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-[#f0f8ff] flex items-center justify-center text-[#00748b] mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-6 h-6" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-slate-800 mb-3 text-[19px] bricolage-grotesque-main tracking-tight", children: "SEO Tools" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 text-[15px] leading-relaxed lato-regular", children: "Boost your website's visibility with our suite of SEO diagnostics. Analyze headers, validate structures, and simulate search bots in real time." })
              ] })
            ] })
          ] }),
          status === "scanning" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in max-w-5xl mx-auto mt-12 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl relative text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-1.5 bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-[#00748b] transition-all duration-300 relative", style: {
              width: `${progress}%`
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/40 animate-[shimmer_1s_infinite]" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[1.3fr_1fr] gap-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-10 flex flex-col h-full border-b md:border-b-0 border-slate-200 relative z-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-[#f0f8ff] flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-7 h-7 text-[#00748b] animate-spin" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-slate-800 tracking-tight", children: "Scanning your website..." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-500 text-[14px] truncate max-w-[250px] font-medium", children: url })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5 mb-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 rounded-xl p-5 border border-slate-100 flex flex-col justify-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-end mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-500 text-[11px] font-bold uppercase tracking-widest", children: "Overall Progress" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-black text-[#00748b] tracking-tighter leading-none", children: [
                        Math.round(progress),
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-slate-200 rounded-full h-2.5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#00748b] h-full transition-all duration-300", style: {
                      width: `${progress}%`
                    } }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 rounded-xl p-4 border border-slate-100", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1", children: "Discovered" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black text-slate-800", children: stats.pages })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 rounded-xl p-4 border border-slate-100", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1", children: "Assets" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black text-slate-800", children: stats.images })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0f172a] rounded-xl overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] flex flex-col flex-1 min-h-[180px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#1e293b] px-4 py-2.5 flex items-center gap-2 border-b border-white/10 shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-red-500/80" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-amber-500/80" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-emerald-500/80" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-3 text-[11px] font-mono font-medium text-slate-400", children: "live_crawler.log" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex-1 flex flex-col justify-end font-mono text-[12px] text-slate-400 relative overflow-hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#0f172a] to-transparent pointer-events-none z-10" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 flex flex-col justify-end", children: logs.slice(-6).map((log, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "truncate", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500 mr-3", children: "GET" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-300", children: log.msg.replace("→ Scanning: ", "").replace("🚀 Initializing Crawler...", "Engine initialized successfully.") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 text-emerald-500/50 text-[10px]", children: "200" })
                    ] }, i)) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#f8fafc] p-8 md:p-10 flex items-center justify-center border-l border-slate-200 relative overflow-hidden min-h-[450px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-72 h-72 bg-[#00748b]/10 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-[460px] max-w-[100%] bg-white rounded-xl shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden border border-slate-200/80 relative z-10 transform transition-transform duration-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-100/80 backdrop-blur-sm px-4 py-3 flex items-center gap-2 border-b border-slate-200 shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 shrink-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-[#ff5f56]" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-[#27c93f]" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto bg-white border border-slate-200/80 rounded flex-1 ml-4 text-center text-[11px] font-medium text-slate-500 py-1.5 truncate shadow-sm", children: (() => {
                      try {
                        return new URL(url).hostname;
                      } catch {
                        return url;
                      }
                    })() })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] bg-slate-50 overflow-hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-slate-400 gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 animate-spin text-[#00748b]" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-400", children: "Capturing visual..." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url`, alt: "Website Preview", className: "absolute inset-0 w-full h-full object-cover object-top relative z-10 transition-opacity duration-1000 opacity-0", onLoad: (e) => {
                      e.currentTarget.style.opacity = "1";
                    } })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in max-w-xl mx-auto mt-20 text-center bg-white p-12 rounded-2xl border border-slate-200 shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-10 h-10 text-red-500" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-slate-800 mb-4 tracking-tight", children: "Scan Failed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 mb-8 leading-relaxed", children: "We encountered an unexpected error while scanning this website. This usually happens if the site blocks bots or is temporarily offline." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStatus("idle"), className: "bg-slate-800 text-white px-8 py-3.5 rounded font-bold hover:bg-slate-700 transition-colors shadow-md", children: "Start New Scan" })
          ] }),
          status === "completed" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-700 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-6 h-6 text-[#00748b]", strokeWidth: 3 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[26px] font-black text-slate-800 tracking-tight bricolage-grotesque-main", children: "Your Sitemap is ready!" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-200 rounded-lg max-w-4xl mx-auto relative z-10 pb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-left pb-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[16px] text-slate-700 mb-8 font-medium", children: [
                  "Website: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-900", children: url })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between px-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-[240px] h-[240px]", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full transform -rotate-90", viewBox: "0 0 160 160", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "80", cy: "80", r: "70", fill: "none", stroke: "#f59e0b", strokeWidth: "10" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "80", cy: "80", r: "70", fill: "none", stroke: "#00b87c", strokeWidth: "10", strokeDasharray: `${2 * Math.PI * 70}`, strokeDashoffset: stats.pages + stats.skipped > 0 ? 2 * Math.PI * 70 * (stats.skipped / (stats.pages + stats.skipped)) : 2 * Math.PI * 70, strokeLinecap: "butt" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center pt-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[44px] font-black text-[#334155] leading-none tracking-tight", children: stats.pages + stats.skipped }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-2", children: "Discovered" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-28 h-[1px] bg-slate-200 my-4" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 text-center", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-1", children: "Added" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#00b87c] font-bold text-[22px] leading-none", children: stats.pages })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[1px] h-10 bg-slate-200" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-1", children: "Skipped" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#f59e0b] font-bold text-[22px] leading-none", children: stats.skipped })
                          ] })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-5 h-5 text-[#00b87c]", strokeWidth: 3 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#00b87c] font-bold text-[16px]", children: "Completed." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-2 w-full max-w-[480px]", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: downloadXml, className: "bg-[#00b87c] text-white px-5 py-3 rounded-md font-bold text-[14px] transition-colors hover:bg-[#00a06c] flex items-center justify-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                        " Download XML"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStatus("details"), className: "bg-[#00748b] text-white px-5 py-3 rounded-md font-bold text-[14px] transition-colors hover:bg-[#006074]", children: "View sitemap details" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStatus("idle"), className: "bg-[#f1f5f9] text-slate-600 px-6 py-3 rounded-md font-bold text-[14px] transition-colors hover:bg-[#e2e8f0]", children: "Close" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:block w-[320px] aspect-[16/10] border border-slate-200 rounded-lg overflow-hidden relative bg-white shrink-0 self-start mt-8", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-slate-400 gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin text-slate-300" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url`, alt: "Website Preview", className: "absolute inset-0 w-full h-full object-cover object-top relative z-10 animate-in fade-in duration-1000" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border-t border-slate-200 p-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-5 h-5 text-[#d32f2f]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#00748b] font-medium text-[15px]", children: [
                  "Keep your sitemap auto-updated with ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#d32f2f] font-bold", children: "PRO Sitemaps" })
                ] })
              ] }) })
            ] })
          ] }),
          status === "details" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-700 mt-4 pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm max-w-3xl mx-auto text-left relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-[22px] font-bold text-slate-800 mb-6 tracking-tight", children: [
              "Sitemap for ",
              new URL(url).hostname
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-slate-50 border border-slate-100 rounded-lg p-6 mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[140px_1fr] gap-y-4 text-[14px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-500 font-bold", children: "Starting URL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#00748b] font-bold break-all hover:underline cursor-pointer", children: url }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-500 font-bold", children: "Updated on" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-800 font-medium", children: (/* @__PURE__ */ new Date()).toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit"
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-500 font-bold", children: "Pages indexed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-800 font-medium", children: stats.pages })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-slate-800 mb-6 tracking-tight", children: "What's next?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: downloadXml, className: "w-full max-w-lg bg-[#00748b] text-white px-6 py-4 rounded shadow-sm font-bold text-[15px] transition-colors hover:bg-[#006074] flex items-center justify-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-5 h-5" }),
                " Download your XML sitemap file"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-6 h-6 text-slate-300 my-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-lg bg-slate-50 border border-slate-200 text-slate-700 px-6 py-4 rounded text-center text-[15px] font-medium shadow-sm", children: "Upload it into the domain root folder of your website." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-6 h-6 text-slate-300 my-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-lg bg-slate-50 border border-slate-200 text-slate-700 px-6 py-4 rounded text-center text-[15px] font-medium shadow-sm flex flex-col items-center gap-1.5", children: [
                "Open Google Search console and add your sitemap URL.",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px] text-slate-500 font-normal", children: [
                  "e.g. ",
                  url.replace(/\/$/, ""),
                  "/sitemap.xml"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row justify-center gap-4 pt-6 border-t border-slate-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center justify-center gap-2 text-[#00748b] bg-[#f0f8ff] border border-[#d6eaf8] px-6 py-3 rounded text-[14px] font-bold hover:bg-[#e1f0fa] transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4" }),
                " View XML Sitemap in Browser"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setStatus("completed"), className: "flex items-center justify-center gap-2 text-slate-600 bg-slate-50 border border-slate-200 px-6 py-3 rounded text-[14px] font-bold hover:bg-slate-100 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
                " Sitemap Preview"
              ] })
            ] })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-20 px-6 border-t border-slate-200 mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-slate-800 mb-8 tracking-tight text-center", children: "Frequently Asked Questions about XML Sitemaps" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionItem, { question: "What is a sitemap?", answer: "A sitemap is a file where you provide information about the pages, videos, and other files on your site, and the relationships between them. Search engines like Google read this file to more intelligently crawl your site." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionItem, { question: "Why do I need an XML sitemap?", answer: "XML sitemaps help search engines navigate your website and discover new or updated content quickly. This is especially important for large websites, new websites with few external links, or sites with rich media content." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionItem, { question: "How does this sitemap generator work?", answer: "Our tool acts like a search engine bot. It starts at your homepage, finds all internal links, and follows them to map out your entire website structure automatically. It then formats this data into standard XML, HTML, or Visual formats." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionItem, { question: "Is this sitemap generator free to use?", answer: "Yes! Our public generator allows you to create search-engine ready sitemaps for free up to a certain page limit. For larger websites, we offer premium Pro plans with automatic syncing." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionItem, { question: "How do I submit my sitemap to Google?", answer: "Once generated, download your XML file and upload it to the root folder of your website (e.g., yourdomain.com/sitemap.xml). Then, log into Google Search Console, navigate to the 'Sitemaps' section, and enter your sitemap's URL to submit it." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-slate-800 mb-8 tracking-tight text-center", children: "Visual Sitemap FAQs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionItem, { question: "What is a visual sitemap?", answer: "A visual sitemap is a diagram that shows the hierarchical structure of a website. Unlike XML sitemaps built for search engines, visual sitemaps are designed for humans to plan UI/UX, website architecture, and content strategy." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionItem, { question: "How do I create a visual sitemap?", answer: "Select 'Visual Sitemap' from the dropdown in our generator above, enter your URL, and click 'Start creating'. We will automatically crawl your site and generate a beautiful, exportable flowchart of your website's pages." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-[#f8fafc] py-20 px-6 border-t border-slate-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-slate-800 mb-6 tracking-tight", children: "More Than Just a Sitemap Creation Tool" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 text-[16px] leading-relaxed max-w-3xl mx-auto", children: "MySitemapGenerator is a suite of cloud-based tools designed to help with SEO, digital marketing, online sales, and content publishing. Our solutions are platform-agnostic and easy to use — no installation, plugins, or technical setup required. You can start creating and managing essential files for your website in just a few clicks." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-slate-800 mb-4 tracking-tight", children: "Try Quick File Creation with Public Free" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 text-[15px] leading-relaxed max-w-2xl mx-auto", children: "With our Public Free plan, you get up to 3 free file creation requests per day, even without registering an account. It's a simple way to test our tools and generate essential website files instantly." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [{
              title: "XML Sitemap Generator",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Code, { className: "w-6 h-6 text-[#00748b]" }),
              desc: "Standard XML format for Google & Bing."
            }, {
              title: "Visual Sitemap Generator",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Map, { className: "w-6 h-6 text-[#00b87c]" }),
              desc: "Beautiful flowcharts for UX planning."
            }, {
              title: "HTML Sitemap Generator",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-6 h-6 text-blue-500" }),
              desc: "Human-readable directory for visitors."
            }, {
              title: "RSS Feed Generator",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Network, { className: "w-6 h-6 text-orange-500" }),
              desc: "Automated content syndication feeds."
            }, {
              title: "Product Feed Generator",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-6 h-6 text-purple-500" }),
              desc: "Data feeds for Google Shopping & Ads."
            }, {
              title: "Yandex YML Generator",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-6 h-6 text-red-500" }),
              desc: "Format optimized for Yandex services."
            }].map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mb-4 border border-slate-100", children: card.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-slate-800 mb-2", children: card.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-[13px]", children: card.desc })
            ] }, i)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-white border-t border-slate-200 pt-16 pb-24 px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-black tracking-tight text-slate-800 mb-8", children: [
            "MySitemap",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#00748b]", children: "Generator" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-6 text-[13px] font-bold text-slate-600 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-[#00748b] transition-colors", children: "About" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-[#00748b] transition-colors", children: "Privacy Policy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-[#00748b] transition-colors", children: "Terms of Use" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-[#00748b] transition-colors", children: "Contact" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-slate-400 text-sm", children: [
            "©MySitemapGenerator ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            ". All rights reserved."
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-0 left-0 right-0 bg-slate-800 text-white p-4 z-50 animate-in slide-in-from-bottom-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "By using this website, you consent to the storage of cookies on your device." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-white text-slate-800 hover:bg-slate-100 px-8 py-2.5 rounded text-sm font-bold shadow-sm transition-colors whitespace-nowrap", children: "Accept" })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  checkRobotsTxt_createServerFn_handler,
  Index as default,
  fetchPageHtml_createServerFn_handler
};
