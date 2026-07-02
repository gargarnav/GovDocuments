/**
 * SEO Schema Generators
 * Centralized JSON-LD schema generation for various page types
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BharatApply",
  "url": "https://bharatapply.online",
  "logo": "https://bharatapply.online/favicon.svg",
  "description": "Guide to Indian Government Documents & Applications",
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "url": "https://bharatapply.online"
  }
};

export const websiteSchema = (baseUrl = "https://bharatapply.online") => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "BharatApply",
  "url": baseUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${baseUrl}/?search={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const servicePageSchema = (service, baseUrl = "https://bharatapply.online") => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": `What documents are required for ${service.title}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `${service.title} requires specific documents. Visit ${baseUrl}/?service=${service.id} for detailed requirements.`
      }
    },
    {
      "@type": "Question",
      "name": `How do I apply for ${service.title} online?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `You can apply for ${service.title} on the official government portal. BharatApply provides a guide with required documents and specifications.`
      }
    }
  ]
});

export const articleSchema = (title, description, datePublished, dateModified, authorName = "BharatApply") => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "datePublished": datePublished,
  "dateModified": dateModified,
  "author": {
    "@type": "Organization",
    "name": authorName
  },
  "publisher": {
    "@type": "Organization",
    "name": "BharatApply",
    "logo": {
      "@type": "ImageObject",
      "url": "https://bharatapply.online/favicon.svg"
    }
  }
});
