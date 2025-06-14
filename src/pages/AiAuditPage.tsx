
import React from 'react';
import PageSection from '@/components/PageSection';
import CallToAction from '@/components/CallToAction';
import { CheckCircle, FileText, BarChart2, ListChecks, Brain } from 'lucide-react'; // Added Brain icon

const AiAuditPage: React.FC = () => {
  const processSteps = [
    { icon: Brain, title: "Interrogate Top LLMs", description: "We analyse AI outputs and thought patterns to understand how leading models perceive your brand." },
    { icon: BarChart2, title: "Benchmark vs Rivals", description: "We show you who the default recommendation is in your category and, critically, why." },
    { icon: ListChecks, title: "Visibility, Sentiment & Trust Scorecard", description: "Receive a quantifiable, trackable score for your brand's AI presence against competitors." },
    { icon: FileText, title: "Actionable Recommendations", description: "We translate complex insights into a clear roadmap of concrete actions for your teams." },
  ];

  const deliverables = [
    "Executive PDF report (≈30 pages) with a full data appendix.",
    "Scorecard comparing your brand against key competitors on critical AI metrics.",
    "Actionable recommendations tailored for your marketing and product teams to enhance AI visibility and sentiment.",
  ];

  return (
    <div className="animate-fade-in">
      <PageSection>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-brand-navy">
          The AI Brand Intelligence Audit
        </h1>
        <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12">
          An expert-led, evidence-based assessment of how Large Language Models (LLMs) surface, describe, and recommend your brand.
        </p>

        {/* Our Process */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-navy">Our Process</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <step.icon size={48} className="text-brand-orange mb-4" />
              <h3 className="text-2xl font-semibold text-brand-navy mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* What You Receive */}
        <div className="bg-brand-lightGray p-8 md:p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-brand-navy">What You Receive</h2>
          <ul className="space-y-4 max-w-2xl mx-auto">
            {deliverables.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">{item}</p>
              </li>
            ))}
          </ul>
          <div className="text-center mt-12">
            <CallToAction to="/pricing-contact" text="View Pricing and Get Started" variant="primary" />
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default AiAuditPage;
