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
    { 
      icon: Brain, 
      title: "1. Interrogate Leading LLMs", 
      description: "Based on your business objectives, we use our proprietary platform to analyse the outputs and 'thought patterns' of top AI models. This systematic process reveals the exact criteria and sources the models are using to form their recommendations about your brand and your competitors. We test for consistency across different phrasing styles, the influence of prompt context on brand mentions, and the stability of brand rankings over time."
    },
    { 
      icon: BarChart2, 
      title: "2. Benchmark Against Your Rivals", 
      description: "We generate a competitive tier table that shows which of your rivals is the default recommendation in your category and, crucially, explains why. This allows you to clearly see your ranking against both incumbent and challenger brands and understand the specific data gaps or content issues affecting your position."
    },
    { 
      icon: ListChecks, 
      title: "3. Deliver Your Visibility, Sentiment & Trust Scorecard", 
      description: "You receive a trackable scorecard that measures your brand's performance across three critical AI metrics: Visibility, Sentiment, and Trust. This scorecard quantifies your position, shows the gap between you and the category leader, and provides a trend line so you can easily measure progress over time as you implement changes."
    },
    { 
      icon: FileText, 
      title: "4. Provide Actionable Recommendations", 
      description: "We translate the AI insights into concrete actions your teams can use to shape future outcomes. The audit report provides a high-level roadmap with clear recommendations designed to improve your score. Wherever possible, we link these actions directly to measurable ROI."
    },
  ];

  const deliverables = [
    { 
      title: "An Executive PDF Report", 
      description: "A detailed ~30-page report containing the full analysis, findings, and strategic roadmap."
    },
    { 
      title: "Data & Methodology Appendix", 
      description: "A separate ~60-page document that provides full transparency into our methodology and the data used in the audit."
    },
    { 
      title: "Competitor Scorecard", 
      description: "A direct comparison of your brand's performance against your key competitors."
    },
    { 
      title: "Team Recommendations", 
      description: "Specific, actionable recommendations for your marketing and product teams to implement."
    },
    { 
      title: "Ongoing Tracking (Optional)", 
      description: "The option for quarterly or monthly updates to track your progress and monitor the competitive landscape."
    },
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
          An expert-led, evidence-based assessment of how Large Language Models (LLMs) surface, describe, and recommend your brand. Every audit is a bespoke project led by one of our founders, where we take the time to understand your specific brand, strategies, and challenges.
        </p>

        {/* Our Process */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-navy">How the Audit is Carried Out: Our Four-Stage Process</h2>
        <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto mb-12">
          Our analysis follows a transparent, four-stage methodology that provides deep insights into how AI models perceive and recommend your brand.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-start text-left">
              <div className="flex items-center mb-4">
                <step.icon size={32} className="text-brand-orange mr-3" />
                <h3 className="text-xl font-semibold text-brand-navy">{step.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* What You Receive */}
        <div className="bg-brand-lightGray p-8 md:p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-brand-navy">What is in the Audit Report?</h2>
          <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto mb-8">
            Upon completion, you will receive a comprehensive package giving your team a clear path forward.
          </p>
          <div className="space-y-6 max-w-4xl mx-auto">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
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
