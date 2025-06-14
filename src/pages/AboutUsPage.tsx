
import React from 'react';
import PageSection from '@/components/PageSection';
import CallToAction from '@/components/CallToAction';
import { Users, Award, Lightbulb } from 'lucide-react'; // Using Users icon for founders

const AboutUsPage: React.FC = () => {
  const differentiators = [
    "Foundation-level insight into how AI models perceive and rank brands.",
    "Move from 'Model Guesswork' to 'Model Transparency' with evidence-based analysis.",
    "Strategic recommendations focused on long-term AI brand health.",
    "Expert-led audits ensuring deep understanding and actionable outcomes."
  ];

  return (
    <div className="animate-fade-in">
      <PageSection>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-navy">About Brandweave AI</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Navigating the new rules of brand discovery in an AI-first world.
          </p>
        </div>

        {/* Our Mission & Expert-Led */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-brand-navy">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              Brandweave AI helps organisations understand and strategically influence how they are perceived and represented by artificial intelligence. We provide the critical insights needed to thrive as AI becomes the new front door to information and brand discovery.
            </p>
            <Award size={32} className="text-brand-orange mb-2" />
            <h3 className="text-2xl font-semibold mb-2 text-brand-navy">Expert-Led Audits</h3>
            <p className="text-lg text-gray-700">
              Every AI Brand Intelligence Audit is personally led by one of our founders, ensuring you benefit from years of top-tier industry experience and a deep understanding of AI's impact on branding.
            </p>
          </div>
          <div className="bg-brand-lightGray p-8 rounded-lg shadow-md">
             <Users size={64} className="text-brand-navy mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-brand-navy text-center">Meet the Founders</h3>
            <p className="text-gray-600 text-center mt-2 mb-4">
              (Founder photos and detailed biographies will be here.)
            </p>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold text-brand-navy">Marenco Kemp</h4>
                <p className="text-sm text-gray-500">Extensive experience at world-leading companies like Google, Microsoft, and Uber.</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold text-brand-navy">Andy Bibby</h4>
                <p className="text-sm text-gray-500">Decades of expertise in digital strategy and brand management at global enterprises.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Unique Approach */}
        <div className="bg-brand-navy p-8 md:p-12 rounded-lg shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 !text-brand-white">Our Unique Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-start p-4 bg-blue-800 rounded">
                <Lightbulb className="h-6 w-6 text-brand-orange mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-200">{item}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <CallToAction to="/pricing-contact" text="Contact Our Experts" variant="primary" />
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default AboutUsPage;
