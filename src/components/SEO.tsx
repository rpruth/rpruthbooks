import { useEffect } from 'react';
import { PageMeta } from '../types';

interface SEOProps {
  meta: PageMeta;
}

function updateOrCreateMetaTag(selector: string, attributes: Record<string, string>) {
  let element = document.querySelector(selector);
  if (element) {
    Object.entries(attributes).forEach(([key, value]) => {
      element!.setAttribute(key, value);
    });
  } else {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => {
      element!.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }
}

export default function SEO({ meta }: SEOProps) {
  useEffect(() => {
    document.title = meta.title;

    const metaTags = [
      { selector: 'meta[name="description"]', attributes: { name: 'description', content: meta.description } },
      { selector: 'meta[name="keywords"]', attributes: { name: 'keywords', content: meta.keywords.join(', ') } },
      { selector: 'meta[name="author"]', attributes: { name: 'author', content: 'R.P. Ruth Books' } },
      { selector: 'meta[name="robots"]', attributes: { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' } },
      { selector: 'meta[property="og:title"]', attributes: { property: 'og:title', content: meta.title } },
      { selector: 'meta[property="og:description"]', attributes: { property: 'og:description', content: meta.description } },
      { selector: 'meta[property="og:url"]', attributes: { property: 'og:url', content: meta.canonicalUrl } },
      { selector: 'meta[property="og:type"]', attributes: { property: 'og:type', content: 'website' } },
      { selector: 'meta[property="og:site_name"]', attributes: { property: 'og:site_name', content: 'R.P. Ruth Books - Author' } },
      { selector: 'meta[property="og:locale"]', attributes: { property: 'og:locale', content: 'en_US' } },
      { selector: 'meta[name="twitter:card"]', attributes: { name: 'twitter:card', content: 'summary_large_image' } },
      { selector: 'meta[name="twitter:title"]', attributes: { name: 'twitter:title', content: meta.title } },
      { selector: 'meta[name="twitter:description"]', attributes: { name: 'twitter:description', content: meta.description } },
    ];

    metaTags.forEach(({ selector, attributes }) => {
      updateOrCreateMetaTag(selector, attributes);
    });

    const linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', meta.canonicalUrl);
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'canonical';
      newLink.href = meta.canonicalUrl;
      document.head.appendChild(newLink);
    }
  }, [meta]);

  return null;
}
