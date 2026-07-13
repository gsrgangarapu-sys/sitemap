import { T as TSS_SERVER_FUNCTION, c as createServerFn } from "./server-XRDYmVk2.mjs";
import { l as load } from "../_libs/cheerio.mjs";
import "../_libs/parse5.mjs";
import "../_libs/iconv-lite.mjs";
import "../_libs/encoding-sniffer.mjs";
import "../_libs/undici.mjs";
import "../_libs/whatwg-mimetype.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
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
import "../_libs/domelementtype.mjs";
import "../_libs/parse5-htmlparser2-tree-adapter+[...].mjs";
import "../_libs/domhandler.mjs";
import "../_libs/dom-serializer.mjs";
import "../_libs/entities.mjs";
import "../_libs/htmlparser2.mjs";
import "../_libs/domutils.mjs";
import "../_libs/cheerio-select.mjs";
import "../_libs/css-select.mjs";
import "../_libs/boolbase.mjs";
import "../_libs/css-what.mjs";
import "../_libs/nth-check.mjs";
import "string_decoder";
import "../_libs/safer-buffer.mjs";
import "buffer";
import "../_libs/whatwg-encoding.mjs";
import "node:assert";
import "node:net";
import "node:querystring";
import "node:events";
import "node:diagnostics_channel";
import "node:util";
import "node:tls";
import "node:buffer";
import "node:zlib";
import "node:perf_hooks";
import "node:util/types";
import "node:sqlite";
import "node:worker_threads";
import "node:url";
import "node:console";
import "node:fs/promises";
import "node:path";
import "node:timers";
import "node:dns";
import "node:http";
import "node:crypto";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const fetchPageHtml_createServerFn_handler = createServerRpc({
  id: "1eb9c965c3accd8968c71a27032f353ce5febfe3106564dc848167eb5a29b1d1",
  name: "fetchPageHtml",
  filename: "src/lib/crawler.server.ts"
}, (opts) => fetchPageHtml.__executeServer(opts));
const fetchPageHtml = createServerFn({
  method: "POST"
}).handler(fetchPageHtml_createServerFn_handler, async ({
  data: {
    url,
    useJS
  }
}) => {
  const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
  try {
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
    const $ = load(html);
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
  id: "55312efa061fa510ac20c8e856917448a68e2ad6e3215227c2e06d4fd1038f7f",
  name: "checkRobotsTxt",
  filename: "src/lib/crawler.server.ts"
}, (opts) => checkRobotsTxt.__executeServer(opts));
const checkRobotsTxt = createServerFn({
  method: "POST"
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
export {
  checkRobotsTxt_createServerFn_handler,
  fetchPageHtml_createServerFn_handler
};
