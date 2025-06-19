import React from 'react';
import PageSection from '@/components/PageSection';
import CallToAction from '@/components/CallToAction';
import PlaceholderChart from '@/components/PlaceholderChart';
import SEO from '@/components/SEO';

import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import { CheckCircle } from 'lucide-react';
import { organizationData, websiteData, serviceData } from '@/data/structuredData';

const HomePage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [organizationData, websiteData, serviceData]
  };

  const salesFunnelData = [
    {
      stage: 'Initial Research',
      'Traditional Search': 10,
      'LLM Answer Engines': 3
    },
    {
      stage: 'Short List',
      'Traditional Search': 5,
      'LLM Answer Engines': 2
    },
    {
      stage: 'Final Evaluation',
      'Traditional Search': 3,
      'LLM Answer Engines': 2
    }
  ];

  const salesFunnelConfig = {
    'Traditional Search': {
      label: "Traditional Search",
      color: "#14213d",
    },
    'LLM Answer Engines': {
      label: "LLM Answer Engines",
      color: "#fca311",
    },
  };

  const howItWorksSteps = [
    { title: "Analyse", description: "We interrogate top LLMs to understand their outputs and thought patterns regarding your brand." },
    { title: "Score", description: "Receive a quantifiable Visibility, Sentiment & Trust Scorecard for your brand." },
    { title: "Benchmark", description: "See how you stack up against rivals and who the default AI recommendation is." },
    { title: "Recommend", description: "Get a clear roadmap of concrete actions to improve your AI brand presence." },
  ];



  return (
    <>
      <SEO
        title="Brandweave AI: Control Your AI Narrative & Boost Brand Visibility"
        description="Is your brand invisible to AI? Brandweave AI offers expert Audits to understand & influence how AI models perceive your brand. Take control of your AI narrative."
        keywords="AI brand perception, brand intelligence audit, AI marketing, brand visibility, LLM optimization, ChatGPT brand analysis, AI narrative control"
        canonical="https://brandweave.ai/"
        structuredData={structuredData}
      />
      
      <div className="animate-fade-in">
        {/* Hero Section */}
        <PageSection className="bg-gradient-to-br from-brand-navy to-blue-900 text-brand-white text-center overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 !text-brand-white transform transition-all duration-1000 animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0 translate-y-8">
              AI Brand Perception. Decoded.
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300 transform transition-all duration-1000 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0 translate-y-8">
              We show you what AI thinks of your brand and how to make it think differently.
            </p>
            
            {/* Logo Row */}
            <div className="mb-8 flex justify-center items-center space-x-8 transform transition-all duration-1000 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] opacity-0 translate-y-8">
              <img 
                src="/lovable-uploads/478d9acb-1b95-45d6-9355-043f8a18aef7.png" 
                alt="Google Logo" 
                className="h-8 md:h-10 lg:h-12 opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110"
              />
              <img 
                src="/lovable-uploads/289933b9-18b5-4ab7-bb8a-ba65cb34cf07.png" 
                alt="Logo" 
                className="h-8 md:h-10 lg:h-12 opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110"
              />
              <img 
                src="/lovable-uploads/0d170c73-2163-4c71-aac2-d976d801a76d.png" 
                alt="Logo" 
                className="h-8 md:h-10 lg:h-12 opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110"
              />
            </div>
            
            <div className="space-x-0 space-y-4 md:space-y-0 md:space-x-4 transform transition-all duration-1000 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] opacity-0 translate-y-8">
              <CallToAction to="/ai-audit" text="Learn About The Audit" variant="outline" />
              <CallToAction to="/why-it-matters" text="Why This Matters Now" variant="outline" />
            </div>
          </div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
            <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_reverse]"></div>
          </div>
        </PageSection>

        {/* The Problem, Simplified */}
        <PageSection className="relative">
          <div className="text-center mb-12 transform transition-all duration-1000 animate-[slideInFromLeft_0.8s_ease-out_forwards] opacity-0 -translate-x-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
              Brand Discovery Has Fundamentally Changed
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              AI is reshaping how customers find and perceive brands. Don't get left behind.
            </p>
          </div>
          <div className="transform transition-all duration-1000 animate-[slideInFromRight_0.8s_ease-out_0.2s_forwards] opacity-0 translate-x-8">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto hover:shadow-2xl transition-shadow duration-500">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-brand-navy text-center">AI Compresses the Sales Funnel</h3>
              <ChartContainer config={salesFunnelConfig} className="h-64 md:h-80 w-full">
                <BarChart data={salesFunnelData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="stage" 
                    tick={{ fontSize: 12, fontFamily: 'system-ui, sans-serif' }}
                    className="text-sm"
                  />
                  <YAxis 
                    tick={{ fontSize: 12, fontFamily: 'system-ui, sans-serif' }}
                    label={{ value: 'Number of Brands Considered', angle: -90, position: 'insideLeft', style: { fontFamily: 'system-ui, sans-serif', fontSize: '12px', textAnchor: 'middle' }, offset: -10 }}
                    className="text-sm"
                  />
                  <ChartTooltip />
                  <Bar dataKey="Traditional Search" fill="#14213d" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="LLM Answer Engines" fill="#fca311" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
              <div className="flex justify-center mt-4 space-x-6 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-brand-navy mr-2 rounded"></div>
                  <span>Traditional Search</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-brand-orange mr-2 rounded"></div>
                  <span>LLM Answer Engines</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mt-6 mb-6 text-gray-600 transform transition-all duration-1000 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] opacity-0 translate-y-4">
            Visual representation of how Large Language Models (LLMs) end up mentioning fewer brands than traditional search results, potentially impacting your reach. Source: SurferSEO
          </p>
          <div className="text-center mb-4 transform transition-all duration-1000 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] opacity-0 translate-y-4">
            <CallToAction to="/why-it-matters" text="Explore the Risk" variant="secondary" />
          </div>
        </PageSection>

        {/* The Solution, Introduced */}
        <PageSection className="bg-brand-lightGray relative overflow-hidden">
          <div className="text-center relative z-10">
            <div className="transform transition-all duration-1000 animate-[scaleIn_0.8s_ease-out_forwards] opacity-0 scale-95">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
                Introducing the Brandweave AI Brand Intelligence Audit
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                The definitive way to understand and influence how AI models perceive, describe, and recommend your brand.
              </p>

            </div>
          </div>
          
          {/* Subtle animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-navy rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-brand-orange rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-brand-navy rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </PageSection>

        {/* How It Works (Overview) */}
        <PageSection className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-navy transform transition-all duration-1000 animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0 translate-y-8">
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 transform opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_forwards]"
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-8 w-8 text-brand-orange mr-3 transition-all duration-300 hover:scale-110" />
                  <h3 className="text-xl font-semibold text-brand-navy">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 transform transition-all duration-1000 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] opacity-0 translate-y-8">
            <CallToAction to="/pricing-contact" text="Get Audit" variant="secondary" />
          </div>
        </PageSection>



        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(2rem);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideInFromLeft {
            from {
              opacity: 0;
              transform: translateX(-2rem);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInFromRight {
            from {
              opacity: 0;
              transform: translateX(2rem);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
        `}</style>
      </div>
    </>
  );
};

export default HomePage;
