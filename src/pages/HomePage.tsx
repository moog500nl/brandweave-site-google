
import React from 'react';
import PageSection from '@/components/PageSection';
import CallToAction from '@/components/CallToAction';
import PlaceholderChart from '@/components/PlaceholderChart';
import { CheckCircle, Sparkles, Zap, TrendingUp } from 'lucide-react';
import usePageMetadata from '@/hooks/usePageMetadata';

const HomePage: React.FC = () => {
  usePageMetadata(
    "Brandweave AI: Control Your AI Narrative & Boost Brand Visibility",
    "Is your brand invisible to AI? Brandweave AI offers expert Audits to understand & influence how AI models perceive your brand. Take control of your AI narrative."
  );

  const howItWorksSteps = [
    { 
      title: "Analyse", 
      description: "We interrogate top LLMs to understand their outputs and thought patterns regarding your brand.",
      icon: Zap,
      color: "from-blue-500 to-purple-600"
    },
    { 
      title: "Score", 
      description: "Receive a quantifiable Visibility, Sentiment & Trust Scorecard for your brand.",
      icon: TrendingUp,
      color: "from-green-500 to-blue-500"
    },
    { 
      title: "Recommend", 
      description: "Get a clear roadmap of concrete actions to improve your AI brand presence.",
      icon: Sparkles,
      color: "from-orange-500 to-red-500"
    },
    { 
      title: "Benchmark", 
      description: "See how you stack up against rivals and who the default AI recommendation is.",
      icon: CheckCircle,
      color: "from-purple-500 to-pink-500"
    },
  ];

  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Hero Section with enhanced visuals */}
      <PageSection className="bg-gradient-to-br from-brand-navy via-blue-900 to-purple-900 text-brand-white text-center relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-brand-orange/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-16 w-16 h-16 bg-blue-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400/25 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-brand-orange/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 !text-brand-white animate-fade-in">
            Control Your AI Narrative
            <Sparkles className="inline-block ml-4 text-brand-orange animate-spin-slow" size={48} />
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Is Your Brand Invisible to AI? Understand and influence how AI models see your brand.
          </p>
          <div className="space-x-0 space-y-4 md:space-y-0 md:space-x-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <CallToAction to="/ai-audit" text="Learn About The Audit" variant="primary" />
            <CallToAction to="/why-it-matters" text="Why This Matters Now" variant="outline" />
          </div>
        </div>
      </PageSection>

      {/* The Problem, Simplified */}
      <PageSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy relative">
            Brand Discovery Has Fundamentally Changed
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-brand-orange rounded-full animate-ping"></div>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            AI is reshaping how customers find and perceive brands. Don't get left behind.
          </p>
        </div>
        <div className="transform hover:scale-105 transition-transform duration-300">
          <PlaceholderChart title="AI Compresses the Sales Funnel" className="max-w-3xl mx-auto" />
        </div>
        <p className="text-center mt-8 text-gray-600 animate-fade-in">
          Visual representation of how LLMs consider fewer brands than traditional search, impacting your reach.
        </p>
      </PageSection>

      {/* The Solution, Introduced */}
      <PageSection className="bg-gradient-to-r from-brand-lightGray to-gray-100 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-navy to-brand-orange transform rotate-12 scale-150"></div>
        </div>
        
        <div className="text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
            Introducing the Brandweave AI Brand Intelligence Audit
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            The definitive way to understand and influence how AI models perceive, describe, and recommend your brand.
          </p>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <CallToAction to="/ai-audit" text="Discover Your AI Score" variant="secondary" />
          </div>
        </div>
      </PageSection>

      {/* How It Works (Overview) with enhanced cards */}
      <PageSection>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-navy">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksSteps.map((step, index) => (
            <div 
              key={index} 
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient background that appears on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors duration-300">
                    <step.icon className="h-8 w-8 text-brand-orange group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy ml-3 group-hover:text-brand-orange transition-colors duration-300">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {step.description}
                </p>
                
                {/* Animated accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-orange group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </PageSection>
    </div>
  );
};

export default HomePage;
