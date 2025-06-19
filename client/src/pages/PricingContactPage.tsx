import React from 'react';
import PageSection from '@/components/PageSection';
import { Mail, CheckCircle } from 'lucide-react';
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
            Unique and Comprehensive
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-12">
            Be the Brand AI Trusts and Recommends
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Pricing Section */}
          <div className="bg-brand-lightGray p-8 md:p-12 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold text-brand-navy mb-6 text-center">Introductory Pricing</h2>
            <div className="text-center mb-6">
              <span className="text-5xl font-bold text-brand-orange">£5,000</span>
              <span className="text-lg text-gray-600"> / per Audit Report</span>
            </div>
            <div className="mb-6">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#FCA311] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-brand-navy">An Executive PDF Report</strong>
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
  );
};

export default PricingContactPage;
