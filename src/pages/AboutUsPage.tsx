

import React from 'react';
import PageSection from '@/components/PageSection';
import CallToAction from '@/components/CallToAction';
import { Users, Lightbulb } from 'lucide-react';
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
      <section className="py-2 md:py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/5b821185-5349-41f3-8c0f-4245b2cb373a.png" 
                alt="Brandweave AI" 
                className="h-48 md:h-64 lg:h-80 w-auto"
              />
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Navigating the new rules of brand discovery in an AI-first world.
            </p>
          </div>

          {/* Meet the Founders */}
          <div className="bg-brand-lightGray p-8 rounded-lg shadow-md mb-16">
            <Users size={64} className="text-brand-navy mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-brand-navy text-center mb-8">Meet the Founders</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
                <img 
                  src="/lovable-uploads/297a916a-73bb-4525-bee8-cf3f47ee0f0d.png" 
                  alt="Marenco Kemp" 
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-lg mb-4"
                />
                <h4 className="font-semibold text-brand-navy text-xl mb-2">Marenco Kemp</h4>
                <p className="text-gray-600 leading-relaxed">Marenco has over 20 years of experience in analytics, product, and commercial leadership roles at companies like Google and Microsoft. He resides in Amsterdam with his wife, daughter and two whippets</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
                <img 
                  src="/lovable-uploads/909fa713-0586-4802-89c8-f1a9871b7be8.png" 
                  alt="Andy Bibby" 
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-lg mb-4"
                />
                <h4 className="font-semibold text-brand-navy text-xl mb-2">Andy Bibby</h4>
                <p className="text-gray-600 leading-relaxed">Andy has extensive digital marketing and advertising experience. He is a technologist by training and has held senior roles at Razorfish (Publicis), as well as Microsoft Advertising where he led the global WPP relationship. He lives outside London and is a keen cyclist.</p>
              </div>
            </div>
          </div>

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
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;

