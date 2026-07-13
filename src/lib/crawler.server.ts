import { createServerFn } from "@tanstack/react-start";
import * as cheerio from 'cheerio';

export const fetchPageHtml = createServerFn({ method: "POST" }).handler(async ({ data: { url, useJS } }: { data: { url: string, useJS: boolean } }) => {
  const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
  
  try {
    let html = '';
    let status = 200;

    // Fetch with timeout
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      
      const response = await fetch(url, {
        headers: {
          "User-Agent": USER_AGENT,
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.5",
          "Accept-Encoding": "gzip, deflate",
        },
        redirect: 'follow',
        signal: controller.signal as any
      });
      
      clearTimeout(timeoutId);
      status = response.status;
      
      if (response.ok) {
        html = await response.text();
      } else {
        return { error: `HTTP ${response.status}`, links: [], images: [], metadata: null };
      }
    } catch (err: any) {
      const msg = err?.name === 'AbortError' ? 'Request timed out' : (err?.message || 'Network error');
      console.error(`Fetch failed for ${url}: ${msg}`);
      return { error: msg, links: [], images: [], metadata: null };
    }

    if (!html || html.length < 50) {
      return { error: 'Empty or minimal response', links: [], images: [], metadata: null };
    }
    
    const $ = cheerio.load(html);
    const links: string[] = [];
    const images: { loc: string; caption: string; title: string }[] = [];
    
    // Link Extraction — from <a>, <link>, and <area> tags
    $('a[href], area[href]').each((_: any, el: any) => {
      const href = $(el).attr('href');
      if (href && !href.startsWith("#") && !href.startsWith("javascript:") && 
          !href.startsWith("mailto:") && !href.startsWith("tel:") && !href.startsWith("data:")) {
        try {
          const resolved = new URL(href, url);
          resolved.hash = '';
          links.push(resolved.toString());
        } catch {}
      }
    });

    // Also extract from canonical and alternate links
    $('link[rel="canonical"], link[rel="alternate"]').each((_: any, el: any) => {
      const href = $(el).attr('href');
      if (href) {
        try {
          const resolved = new URL(href, url);
          resolved.hash = '';
          links.push(resolved.toString());
        } catch {}
      }
    });
    
    // Image Extraction
    $('img').each((_: any, el: any) => {
      const src = $(el).attr('src') || $(el).attr('data-src') || $(el).attr('data-lazy-src');
      if (src && !src.startsWith('data:')) {
        try {
          images.push({
            loc: src.startsWith('http') ? src : new URL(src, url).toString(),
            caption: $(el).attr('alt') || "",
            title: $(el).attr('title') || ""
          });
        } catch {}
      }
    });

    const metadata = {
      title: $('title').text()?.trim() || "No Title",
      description: $('meta[name="description"]').attr('content') || "",
      h1Count: $('h1').length,
      wordCount: $.text().split(/\s+/).filter(Boolean).length,
      isJSRendered: false
    };
    
    return { links: [...new Set(links)], images, metadata, status, error: null };
  } catch (err: any) {
    console.error(`Server error crawling ${url}:`, err);
    return { error: err.message || "Server error", links: [], images: [], metadata: null };
  }
});

export const checkRobotsTxt = createServerFn({ method: "POST" }).handler(async ({ data: url }: { data: string }) => {
  try {
    const parsed = new URL(url);
    const robotsUrl = `${parsed.origin}/robots.txt`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    const response = await fetch(robotsUrl, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; SitemapBot/1.0)" },
      signal: controller.signal as any
    });
    clearTimeout(timeoutId);
    
    if (response.ok) {
      const content = await response.text();
      const disallows: string[] = [];
      const sitemapUrls: string[] = [];
      const lines = content.split('\n');
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.toLowerCase().startsWith('disallow:')) {
          const path = trimmed.substring(9).trim();
          if (path && path !== '/') {
            disallows.push(path);
          }
        }
        if (trimmed.toLowerCase().startsWith('sitemap:')) {
          const sitemapUrl = trimmed.substring(8).trim();
          if (sitemapUrl) sitemapUrls.push(sitemapUrl);
        }
      }
      return { exists: true, disallows, sitemapUrls, content };
    }
    return { exists: false, disallows: [], sitemapUrls: [], content: null };
  } catch {
    return { exists: false, disallows: [], sitemapUrls: [], content: null };
  }
});
