
import React from 'react';
import PageSection from '@/components/PageSection';
import CallToAction from '@/components/CallToAction';
import { Users, Award, Lightbulb } from 'lucide-react';
import usePageMetadata from '@/hooks/usePageMetadata';

const AboutUsPage: React.FC = () => {
  usePageMetadata(
    "About Brandweave AI | Expert-Led AI Brand Strategy",
    "Meet the Brandweave AI team. We help businesses navigate AI-driven brand discovery with expert-led audits and strategic insights for long-term AI brand health."
  );

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
            <div className="space-y-6 mt-6">
              <div className="bg-white p-6 rounded shadow flex items-center space-x-4">
                <img 
                  src="/lovable-uploads/297a916a-73bb-4525-bee8-cf3f47ee0f0d.png" 
                  alt="Marenco Kemp" 
                  className="w-20 h-20 object-cover rounded-lg shadow-sm"
                />
                <div>
                  <h4 className="font-semibold text-brand-navy text-lg">Marenco Kemp</h4>
                  <p className="text-sm text-gray-500">Marenco has over 20 years of experience in analytics, product, and commercial leadership roles at companies like Google and Microsoft. He resides in Amsterdam with his wife, daughter and two whippets</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded shadow flex items-center space-x-4">
                <img 
                  src="/lovable-uploads/909fa713-0586-4802-89c8-f1a9871b7be8.png" 
                  alt="Andy Bibby" 
                  className="w-20 h-20 object-cover rounded-lg shadow-sm"
                />
                <div>
                  <h4 className="font-semibold text-brand-navy text-lg">Andy Bibby</h4>
                  <p className="text-sm text-gray-500">Andy has extensive experience in digital marketing and advertising. A technologist by training, he has held senior roles at Razorfish (Publicis) and Microsoft Advertising, where he led the global WPP relationship. He lives outside London and is a keen cyclist.</p>
                </div>
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
