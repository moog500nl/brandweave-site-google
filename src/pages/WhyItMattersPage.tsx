import React from 'react';
import PageSection from '@/components/PageSection';
import CallToAction from '@/components/CallToAction';
import PlaceholderChart from '@/components/PlaceholderChart';
import usePageMetadata from '@/hooks/usePageMetadata'; // Import the hook

const WhyItMattersPage: React.FC = () => {
  usePageMetadata(
    "Why AI Brand Perception Matters Now | Brandweave AI",
    "AI is reshaping brand discovery. Learn why understanding your AI brand perception is crucial for visibility and growth in a 'zero-click' search world. Brandweave AI explains."
  );

  return (
    <div className="animate-fade-in">
      <PageSection>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brand-navy">
          The End of Search As You Know It
        </h1>

        <div className="grid md:grid-cols-1 gap-12">
          {/* Data Story Section */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-brand-navy">Generative AI Usage is Exploding</h2>
              <p className="text-lg text-gray-700 mb-6">
                Adoption is set to be nearly 50% by the end of 2025. This seismic shift means your audience is increasingly turning to AI for information.
              </p>
              <PlaceholderChart title="UK Adults Who Have Used Generative AI Tools" />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-brand-navy">"Zero-Click" Searches Now Dominate</h2>
              <p className="text-lg text-gray-700 mb-6">
                Users get answers directly from AI overviews, reducing the need to click through to websites.
              </p>
              <PlaceholderChart title="Outcomes of Google Searches in EU/UK" />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-brand-navy">Direct Impact on Traffic</h2>
              <p className="text-lg text-gray-700 mb-6">
                The appearance of AI Overviews in search results leads to significant drops in click-through rates to traditional web pages.
              </p>
              <PlaceholderChart title="Click-through Rate Drops When AI Overviews Appear" />
            </div>
          </div>
        </div>

        {/* The Bottom Line */}
        <div className="mt-16 text-center bg-brand-navy text-brand-white p-8 md:p-12 rounded-lg shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 !text-brand-white">The Bottom Line</h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            If you don't understand how LLMs talk about you, you're optimising for a shrinking market and risk becoming invisible.
          </p>
          <CallToAction to="/ai-audit" text="See The Solution" variant="primary" />
        </div>
      </PageSection>
    </div>
  );
};

export default WhyItMattersPage;
