import React from 'react';
import PageSection from '@/components/PageSection';
import SEO from '@/components/SEO';
import { Mail, CheckCircle } from 'lucide-react';

const PricingContactPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Brandweave AI",
    "description": "Get in touch with Brandweave AI to start your AI Brand Intelligence Audit. Contact our founders to improve your brand's AI presence and visibility.",
    "url": "https://brandweave.ai/pricing-contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Brandweave AI",
      "url": "https://brandweave.ai",
      "logo": "https://brandweave.ai/bwlogo.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "founder": [
        {
          "@type": "Person",
          "name": "James Deehan",
          "url": "https://www.linkedin.com/in/jamesdeehan/"
        },
        {
          "@type": "Person",
          "name": "James Donovan", 
          "url": "https://www.linkedin.com/in/jamesgdonovan/"
        }
      ],
      "serviceType": "AI Brand Intelligence Audit",
      "areaServed": "Global"
    }
  };

  return (
    <>
      <SEO
        title="Contact Us - AI Brand Intelligence Audit | Brandweave AI"
        description="Contact Brandweave AI to start your AI Brand Intelligence Audit. Get in touch with our founders to improve your brand's AI presence and visibility across ChatGPT, Claude, and Gemini."
        keywords="contact AI brand audit, AI brand intelligence consultation, ChatGPT brand analysis contact, AI marketing experts, brand strategy consultation, AI audit inquiry"
        canonical="https://brandweave.ai/pricing-contact"
        ogImage="https://brandweave.ai/og-image.jpg"
        ogType="website"
        twitterCard="summary_large_image"
        structuredData={structuredData}
      />
      <div className="animate-fade-in">
      <PageSection>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-navy">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-12">
            Ready to understand how AI sees your brand? Get in touch to start your AI Brand Intelligence Audit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Service Description Section */}
          <div className="bg-brand-lightGray p-8 md:p-12 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold text-brand-navy mb-6 text-center">The AI Brand Intelligence Audit</h2>
            <div className="mb-6">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#FCA311] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-brand-navy">Executive PDF Report</strong>
                    <p className="text-sm mt-1">A detailed ~30-page report containing the full analysis, findings, and strategic roadmap.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#FCA311] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-brand-navy">Data & Methodology Appendix</strong>
                    <p className="text-sm mt-1">A separate ~60-page document that provides full transparency into our methodology and the data used in the audit.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#FCA311] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-brand-navy">Competitor Scorecard</strong>
                    <p className="text-sm mt-1">A direct comparison of your brand's performance against your key competitors.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#FCA311] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-brand-navy">Team Recommendations</strong>
                    <p className="text-sm mt-1">Specific, actionable recommendations for your marketing and product teams to implement.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#FCA311] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-brand-navy">Ongoing Tracking (Optional)</strong>
                    <p className="text-sm mt-1">Options for quarterly or monthly updates are available to continuously track your AI brand presence. Contact us for bespoke packages.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Contact Form Section */}
          <div>
            <h2 className="text-3xl font-semibold text-brand-navy mb-1 text-center md:text-left">Get in Touch</h2>
            <iframe 
              src="https://tally.so/embed/3xogVJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="774" 
              frameBorder="0" 
              scrolling="no"
              title="Contact form"
              style={{ overflow: 'hidden' }}
            ></iframe>
          </div>
        </div>
      </PageSection>
      </div>
    </>
  );
};

export default PricingContactPage;
