import React from 'react';
import PageSection from '@/components/PageSection';
import ContactForm from '@/components/ContactForm';
import { Mail } from 'lucide-react';
import usePageMetadata from '@/hooks/usePageMetadata'; // Import the hook

const PricingContactPage: React.FC = () => {
  usePageMetadata(
    "AI Brand Audit Pricing & Contact | Brandweave AI",
    "Get transparent pricing for our comprehensive AI Brand Intelligence Audit. Contact Brandweave AI founders to start improving your brand's AI presence."
  );



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
            <div className="mb-6">
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong className="text-brand-navy">An Executive PDF Report</strong>
                  <p className="text-sm ml-4 mt-1">A detailed ~30-page report containing the full analysis, findings, and strategic roadmap.</p>
                </li>
                <li>
                  <strong className="text-brand-navy">Data & Methodology Appendix</strong>
                  <p className="text-sm ml-4 mt-1">A separate ~60-page document that provides full transparency into our methodology and the data used in the audit.</p>
                </li>
                <li>
                  <strong className="text-brand-navy">Competitor Scorecard</strong>
                  <p className="text-sm ml-4 mt-1">A direct comparison of your brand's performance against your key competitors.</p>
                </li>
                <li>
                  <strong className="text-brand-navy">Team Recommendations</strong>
                  <p className="text-sm ml-4 mt-1">Specific, actionable recommendations for your marketing and product teams to implement.</p>
                </li>
                <li>
                  <strong className="text-brand-navy">Ongoing Tracking (Optional)</strong>
                  <p className="text-sm ml-4 mt-1">Options for quarterly or monthly updates are available to continuously track your AI brand presence. Contact us for bespoke packages.</p>
                </li>
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
