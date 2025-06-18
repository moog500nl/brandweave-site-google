
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
                src="/bwlogo.svg" 
                alt="Brandweave AI" 
                className="h-24 md:h-32 lg:h-40 w-auto"
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
                  className="w-32 h-48 md:w-40 md:h-60 object-cover rounded-lg shadow-lg mb-4"
                />
                <h4 className="font-semibold text-brand-navy text-xl mb-2">Marenco Kemp</h4>
                <p className="text-gray-600 leading-relaxed">With over two decades of leadership experience forged at pioneering companies like Google and Microsoft, Marenco has a proven track record in analytics and product development. At Microsoft Advertising, he built the company's first analytics function outside of the US, and while at YouTube, his work was recognised with the prestigious annual Platinum Award. He lives in Amsterdam with his wife, daughter, and two whippets.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
                <img 
                  src="/lovable-uploads/909fa713-0586-4802-89c8-f1a9871b7be8.png" 
                  alt="Andy Bibby" 
                  className="w-32 h-48 md:w-40 md:h-60 object-cover rounded-lg shadow-lg mb-4"
                />
                <h4 className="font-semibold text-brand-navy text-xl mb-2">Andy Bibby</h4>
                <p className="text-gray-600 leading-relaxed">A seasoned expert in digital marketing and advertising, Andy has a proven track record of leadership at top-tier organisations like Razorfish (Publicis) and Microsoft Advertising. His ability to merge technical knowledge with commercial strategy culminated in him leading the global WPP relationship for Microsoft. Grounded by his training as a technologist, Andy brings a uniquely analytical and strategic approach to his work. He is a keen cyclist and resides just outside London.</p>
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
