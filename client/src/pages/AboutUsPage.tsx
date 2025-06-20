
import React from 'react';
import PageSection from '@/components/PageSection';
import CallToAction from '@/components/CallToAction';
import { Users, HelpCircle, Lightbulb } from 'lucide-react';
import usePageMetadata from '@/hooks/usePageMetadata';

const AboutUsPage: React.FC = () => {
  usePageMetadata(
    "About Brandweave AI | Expert-Led AI Brand Strategy",
    "Meet the Brandweave AI team. We help businesses navigate AI-driven brand discovery with expert-led audits and strategic insights for long-term AI brand health."
  );

  const topBoxes = [
    {
      icon: HelpCircle,
      text: "As search shifts from keywords to questions, from results to answers, most brands are still optimising for a world that's disappearing."
    },
    {
      icon: Lightbulb,
      text: "We help you audit how your brand shows up across AI platforms like ChatGPT, Gemini, Perplexity, Claude and Grok, combining deep research, expert insight, and a tailored roadmap."
    }
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
                  className="w-32 h-48 md:w-40 md:h-60 object-cover rounded-lg shadow-lg mb-4"
                />
                <div className="flex items-center justify-center mb-2">
                  <h4 className="font-semibold text-brand-navy text-xl">Marenco Kemp</h4>
                  <img 
                    src="/linkedin-logo.png" 
                    alt="LinkedIn" 
                    className="w-6 h-6 ml-3 cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </div>
                <p className="text-gray-600 leading-relaxed">With over two decades of leadership experience forged at pioneering companies like Google and Microsoft, Marenco has a proven track record in analytics and product development. At Microsoft Advertising, he built the company's first analytics function outside of the US, and while at YouTube, his machine learning analytics work was recognised with the prestigious annual Platinum Award. He lives in Amsterdam with his wife, daughter, and two whippets.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
                <img 
                  src="/lovable-uploads/909fa713-0586-4802-89c8-f1a9871b7be8.png" 
                  alt="Andy Bibby" 
                  className="w-32 h-48 md:w-40 md:h-60 object-cover rounded-lg shadow-lg mb-4"
                />
                <div className="flex items-center justify-center mb-2">
                  <h4 className="font-semibold text-brand-navy text-xl">Andy Bibby</h4>
                  <img 
                    src="/linkedin-logo.png" 
                    alt="LinkedIn" 
                    className="w-6 h-6 ml-3 cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </div>
                <p className="text-gray-600 leading-relaxed">A seasoned expert in digital marketing and advertising, Andy has a proven track record of leadership at top-tier organisations like Razorfish (Publicis) and Microsoft Advertising. His ability to merge technical knowledge with commercial strategy culminated in him leading the global WPP relationship for Microsoft. Grounded by his training as a technologist, Andy brings a uniquely analytical and strategic approach to his work. He is a keen cyclist and resides just outside London.</p>
              </div>
            </div>
          </div>

          <div className="bg-brand-navy p-8 md:p-12 rounded-lg shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 !text-brand-white">Our Unique Approach</h2>
            
            {/* Top two boxes */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {topBoxes.map((box, index) => (
                <div key={index} className="flex items-start p-4 bg-blue-800 rounded">
                  <box.icon className="h-6 w-6 text-brand-orange mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-200">{box.text}</p>
                </div>
              ))}
            </div>
            
            {/* Bottom full-width box */}
            <div className="flex items-center justify-center p-4 bg-blue-800 rounded mb-8">
              <p className="text-lg text-gray-200 font-bold text-center">
                No dashboards. No keyword fluff. Just strategy, recommendations, and priorities.
              </p>
            </div>
            
            <div className="text-center">
              <CallToAction to="/pricing-contact" text="Get Audit" variant="primary" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
