
import React from 'react';
import PageSection from '@/components/PageSection';
import CallToAction from '@/components/CallToAction';
import PlaceholderChart from '@/components/PlaceholderChart';
import { CheckCircle } from 'lucide-react';
import usePageMetadata from '@/hooks/usePageMetadata';

const HomePage: React.FC = () => {
  usePageMetadata(
    "Brandweave AI: Control Your AI Narrative & Boost Brand Visibility",
    "Is your brand invisible to AI? Brandweave AI offers expert Audits to understand & influence how AI models perceive your brand. Take control of your AI narrative."
  );

  const howItWorksSteps = [
    { title: "Analyse", description: "We interrogate top LLMs to understand their outputs and thought patterns regarding your brand." },
    { title: "Score", description: "Receive a quantifiable Visibility, Sentiment & Trust Scorecard for your brand." },
    { title: "Recommend", description: "Get a clear roadmap of concrete actions to improve your AI brand presence." },
    { title: "Benchmark", description: "See how you stack up against rivals and who the default AI recommendation is." },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <PageSection className="bg-gradient-to-br from-brand-navy to-blue-900 text-brand-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 !text-brand-white">
          Control Your AI Narrative
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
          Is Your Brand Invisible to AI? Understand and influence how AI models see your brand.
        </p>
        
        {/* Logo Row */}
        <div className="mb-8 flex justify-center items-center space-x-8">
          <img 
            src="/lovable-uploads/478d9acb-1b95-45d6-9355-043f8a18aef7.png" 
            alt="Google Logo" 
            className="h-8 md:h-10 lg:h-12 opacity-90"
          />
          <img 
            src="/lovable-uploads/289933b9-18b5-4ab7-bb8a-ba65cb34cf07.png" 
            alt="Logo" 
            className="h-8 md:h-10 lg:h-12 opacity-90"
          />
          <img 
            src="/lovable-uploads/0d170c73-2163-4c71-aac2-d976d801a76d.png" 
            alt="Logo" 
            className="h-8 md:h-10 lg:h-12 opacity-90"
          />
        </div>
        
        <div className="space-x-0 space-y-4 md:space-y-0 md:space-x-4">
          <CallToAction to="/ai-audit" text="Learn About The Audit" variant="primary" />
          <CallToAction to="/why-it-matters" text="Why This Matters Now" variant="outline" />
        </div>
      </PageSection>

      {/* The Problem, Simplified */}
      <PageSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
            Brand Discovery Has Fundamentally Changed
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            AI is reshaping how customers find and perceive brands. Don't get left behind.
          </p>
        </div>
        <PlaceholderChart title="AI Compresses the Sales Funnel" className="max-w-3xl mx-auto" />
        <p className="text-center mt-8 text-gray-600">
          Visual representation of how LLMs consider fewer brands than traditional search, impacting your reach.
        </p>
      </PageSection>

      {/* The Solution, Introduced */}
      <PageSection className="bg-brand-lightGray">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
            Introducing the Brandweave AI Brand Intelligence Audit
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            The definitive way to understand and influence how AI models perceive, describe, and recommend your brand.
          </p>
          <CallToAction to="/ai-audit" text="Discover Your AI Score" variant="secondary" />
        </div>
      </PageSection>

      {/* How It Works (Overview) */}
      <PageSection>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-navy">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-brand-orange mr-3" />
                <h3 className="text-xl font-semibold text-brand-navy">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </div>
  );
};

export default HomePage;
