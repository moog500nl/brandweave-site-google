import React from 'react';
import PageSection from '@/components/PageSection';
import ContactForm from '@/components/ContactForm';
import { Mail, ExternalLink } from 'lucide-react';
import usePageMetadata from '@/hooks/usePageMetadata'; // Import the hook

const PricingContactPage: React.FC = () => {
  usePageMetadata(
    "AI Brand Audit Pricing & Contact | Brandweave AI",
    "Get transparent pricing for our comprehensive AI Brand Intelligence Audit. Contact Brandweave AI founders to start improving your brand's AI presence."
  );

  const founders = [
    { name: "Marenco Kemp", email: "marenco@brandweave.ai" }, // Replace with actual emails
    { name: "Andy Bibby", email: "andy@brandweave.ai" },     // Replace with actual emails
  ];

  return (
    <div className="animate-fade-in">
      <PageSection>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-navy">
            Simple and Affordable
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-12">
            Get started with our comprehensive AI Brand Intelligence Audit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Pricing Section */}
          <div className="bg-brand-lightGray p-8 md:p-12 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold text-brand-navy mb-6 text-center">Pricing</h2>
            <div className="text-center mb-6">
              <span className="text-5xl font-bold text-brand-orange">£5,000</span>
              <span className="text-lg text-gray-600"> / per Audit Report</span>
            </div>
            <p className="text-gray-700 mb-4">
              This includes a comprehensive analysis, executive PDF report (≈30 pages) with full data appendix, competitor scorecard, and actionable recommendations.
            </p>
            <p className="text-gray-700">
              Options for quarterly or monthly updates are available to continuously track your AI brand presence. Contact us for bespoke packages.
            </p>
            <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-brand-navy">Contact our founders directly:</p>
              <ul className="mt-2 space-y-1">
                {founders.map(founder => (
                  <li key={founder.name}>
                    <a href={`mailto:${founder.email}`} className="text-brand-navy hover:text-brand-orange flex items-center justify-center">
                       {founder.name}: {founder.email} <ExternalLink size={16} className="ml-1"/>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <h2 className="text-3xl font-semibold text-brand-navy mb-6 text-center md:text-left">Get in Touch</h2>
            <ContactForm />
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default PricingContactPage;
