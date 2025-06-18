import React from 'react';
import PageSection from '@/components/PageSection';
import CallToAction from '@/components/CallToAction';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, FileText, BarChart2, ListChecks, Brain } from 'lucide-react';
import usePageMetadata from '@/hooks/usePageMetadata';

const AiAuditPage: React.FC = () => {
  usePageMetadata(
    "AI Brand Intelligence Audit | Understand Your AI Score | Brandweave AI",
    "Our AI Brand Audit provides an expert assessment of how LLMs perceive your brand. Get actionable insights, competitor benchmarks, and improve your AI visibility."
  );

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

  const faqs = [
    {
      question: "What exactly is an AI Brand Intelligence Audit?",
      answer: "Our AI Brand Intelligence Audit is a comprehensive analysis that tests how major AI models like ChatGPT, Claude, and Gemini perceive, describe, and recommend your brand. We provide quantifiable scores for visibility, sentiment, and trust, along with actionable recommendations to improve your AI brand presence."
    },
    {
      question: "How long does the audit process take?",
      answer: "The audit process typically takes 5-7 business days from initiation. This includes comprehensive testing across multiple AI models, analysis of results, competitive benchmarking, and preparation of your detailed report with actionable recommendations."
    },
    {
      question: "Why is AI brand perception important for my business?",
      answer: "AI is fundamentally changing how customers discover and research brands. As more people rely on AI assistants for recommendations and information, your brand's visibility and perception in these systems directly impacts your future customer acquisition and market position. Being invisible to AI means being invisible to tomorrow's customers."
    }
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

        {/* FAQ Section */}
        <div className="bg-brand-lightGray p-8 md:p-12 rounded-lg shadow-lg mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-brand-navy">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-white rounded-lg shadow-md border-0 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-navy hover:bg-gray-50 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center mt-12">
              <CallToAction to="/pricing-contact" text="Have More Questions? Contact Us" variant="secondary" />
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default AiAuditPage;
