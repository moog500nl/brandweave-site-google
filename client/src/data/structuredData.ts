
export const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Brandweave AI",
  "url": "https://brandweave.ai",
  "logo": "https://brandweave.ai/bwlogo.svg",
  "description": "AI Brand Intelligence platform that helps businesses understand and influence how AI models perceive their brand.",
  "foundingDate": "2024",
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
  }
};

export const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Brandweave AI",
  "url": "https://brandweave.ai",
  "description": "Control your AI narrative and boost brand visibility with AI Brand Intelligence Audits.",
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
  "description": "Comprehensive analysis of how AI models perceive, describe, and recommend your brand.",
  "provider": {
    "@type": "Organization",
    "name": "Brandweave AI"
  },
  "serviceType": "Brand Intelligence Analysis",
  "areaServed": "Global",
  "offers": {
    "@type": "Offer",
    "description": "AI Brand Intelligence Audit Service",
    "availability": "https://schema.org/InStock"
  }
};
