
export const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Brandweave AI",
  "alternateName": "Brandweave",
  "url": "https://brandweave.ai",
  "logo": "https://brandweave.ai/bwlogo.svg",
  "description": "AI Brand Intelligence platform that decodes how AI models like ChatGPT, Claude, and Grok perceive your brand. We help businesses control their AI narrative and boost brand visibility.",
  "foundingDate": "2024",
  "slogan": "AI Brand Perception. Decoded.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "hello@brandweave.ai"
  },
  "sameAs": [
    "https://twitter.com/brandweaveai",
    "https://linkedin.com/company/brandweave-ai"
  ],
  "serviceArea": {
    "@type": "Place",
    "name": "Global"
  },
  "knowsAbout": [
    "AI Brand Perception",
    "Large Language Models",
    "Brand Intelligence",
    "Digital Marketing",
    "AI Marketing Strategy"
  ]
};

export const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Brandweave AI",
  "url": "https://brandweave.ai",
  "description": "AI Brand Perception Decoded - Discover what AI thinks of your brand with expert analysis from ChatGPT, Claude, and Grok to control your narrative and boost visibility.",
  "mainEntity": {
    "@type": "Service",
    "name": "AI Brand Intelligence Audit",
    "description": "Comprehensive 5-step process: Analyse, Score, Benchmark, Recommend - to decode AI brand perception"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://brandweave.ai/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Brand Intelligence Audit",
  "description": "Comprehensive 5-step analysis process: Discovery Session, Analyse AI outputs, Score brand perception, Benchmark against competitors, and Recommend strategic improvements for AI brand visibility.",
  "provider": {
    "@type": "Organization",
    "name": "Brandweave AI"
  },
  "serviceType": "AI Brand Intelligence Analysis",
  "category": "Digital Marketing Consulting",
  "areaServed": "Global",
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Businesses seeking AI brand optimization"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Brand Intelligence Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Complete AI Brand Intelligence Audit",
          "description": "Full analysis of ChatGPT, Claude, and Grok brand perception with actionable recommendations"
        },
        "price": "5000",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "1",
    "bestRating": "5"
  }
};
