import { useEffect } from 'react';

/**
 * Custom hook to update document title, meta descriptions,
 * OpenGraph, Twitter cards, canonical links, and optional JSON-LD structured data.
 */
export function usePageMeta({
  title,
  description,
  canonical,
  schema,
} = {}) {
  useEffect(() => {
    // 1. Title
    const prevTitle = document.title;
    if (title) {
      document.title = `${title} | Karka AI Academy`;
    }

    // Helper to safely set or create meta tags
    const setMeta = (selector, attribute, value) => {
      if (!value) return;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.startsWith('meta[name=')) {
          const name = selector.match(/name="([^"]+)"/)?.[1];
          if (name) el.setAttribute('name', name);
        } else if (selector.startsWith('meta[property=')) {
          const property = selector.match(/property="([^"]+)"/)?.[1];
          if (property) el.setAttribute('property', property);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attribute, value);
    };

    // 2. Descriptions
    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
      setMeta('meta[name="twitter:description"]', 'content', description);
    }

    // 3. OpenGraph / Twitter titles
    if (title) {
      const fullTitle = `${title} | Karka AI Academy`;
      setMeta('meta[property="og:title"]', 'content', fullTitle);
      setMeta('meta[name="twitter:title"]', 'content', fullTitle);
    }

    // 4. Canonical URL
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    const targetCanonical = canonical || (window.location.origin + window.location.pathname);
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', targetCanonical);
    setMeta('meta[property="og:url"]', 'content', targetCanonical);
    setMeta('meta[name="twitter:url"]', 'content', targetCanonical);

    // 5. Schema JSON-LD injection if provided
    let scriptEl = null;
    if (schema) {
      scriptEl = document.createElement('script');
      scriptEl.type = 'application/ld+json';
      scriptEl.id = 'page-json-ld';
      scriptEl.textContent = JSON.stringify(schema);
      document.head.appendChild(scriptEl);
    }

    return () => {
      document.title = prevTitle;
      if (scriptEl && scriptEl.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
    };
  }, [title, description, canonical, schema]);
}
