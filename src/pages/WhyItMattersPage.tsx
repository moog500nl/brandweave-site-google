
import React from 'react';
import PageSection from '@/components/PageSection';
import CallToAction from '@/components/CallToAction';
import PlaceholderChart from '@/components/PlaceholderChart';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import usePageMetadata from '@/hooks/usePageMetadata';

const WhyItMattersPage: React.FC = () => {
  usePageMetadata(
    "Why AI Brand Perception Matters Now | Brandweave AI",
    "AI is reshaping brand discovery. Learn why understanding your AI brand perception is crucial for visibility and growth in a 'zero-click' search world. Brandweave AI explains."
  );

  const aiAdoptionData = [
    { period: 'May 2023', share: 26, type: 'actual' },
    { period: 'May 2024', share: 38, type: 'actual' },
    { period: 'May 2025', share: 49, type: 'actual' },
    { period: 'May 2026', share: 55, type: 'forecast' }
  ];

  const chartConfig = {
    share: {
      label: "Share of UK Adults (%)",
    },
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="font-roboto text-sm">{`${label}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

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
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                <ChartContainer config={chartConfig} className="h-64 md:h-80 font-sans">
                  <BarChart data={aiAdoptionData} margin={{ top: 20, right: 20, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="period" 
                      tick={{ fontSize: 12, fontFamily: 'Roboto, sans-serif' }}
                    />
                    <YAxis 
                      tick={{ fontSize: 12, fontFamily: 'Roboto, sans-serif' }}
                      label={{ value: 'Share of UK Adults (%)', angle: -90, position: 'insideLeft', style: { fontFamily: 'Roboto, sans-serif' } }}
                    />
                    <ChartTooltip content={<CustomTooltip />} />
                    <Bar dataKey="share" radius={[4, 4, 0, 0]}>
                      {aiAdoptionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.type === 'forecast' ? '#fca311' : '#14213d'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
                <div className="flex justify-center mt-4 space-x-4 md:space-x-6 text-sm">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-brand-navy mr-2 rounded"></div>
                    <span>Share of UK Adults (%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-brand-orange mr-2 rounded"></div>
                    <span>Forecast</span>
                  </div>
                </div>
              </div>
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
