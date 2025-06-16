

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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-brand-navy px-4">
          The End of Search As You Know It
        </h1>

        <div className="w-full">
          {/* Data Story Section */}
          <div className="space-y-8 md:space-y-12">
            <div className="w-full">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4 text-brand-navy px-4">Generative AI Usage is Exploding</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 px-4">
                Adoption is set to be nearly 50% by the end of 2025. This seismic shift means your audience is increasingly turning to AI for information.
              </p>
              <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg mx-4 md:mx-0">
                <ChartContainer config={chartConfig} className="h-48 md:h-64 lg:h-80 font-sans w-full">
                  <BarChart data={aiAdoptionData} margin={{ top: 10, right: 10, left: 5, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="period" 
                      tick={{ fontSize: 10, fontFamily: 'Roboto, sans-serif' }}
                      className="text-xs md:text-sm"
                    />
                    <YAxis 
                      tick={{ fontSize: 10, fontFamily: 'Roboto, sans-serif' }}
                      label={{ value: 'Share of UK Adults (%)', angle: -90, position: 'insideLeft', style: { fontFamily: 'Roboto, sans-serif', fontSize: '10px' } }}
                      className="text-xs md:text-sm"
                    />
                    <ChartTooltip content={<CustomTooltip />} />
                    <Bar dataKey="share" radius={[4, 4, 0, 0]}>
                      {aiAdoptionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.type === 'forecast' ? '#fca311' : '#14213d'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
                <div className="flex flex-col sm:flex-row justify-center mt-3 md:mt-4 space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-xs md:text-sm">
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-brand-navy mr-2 rounded"></div>
                    <span>Share of UK Adults (%)</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-brand-orange mr-2 rounded"></div>
                    <span>Forecast</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4 text-brand-navy px-4">"Zero-Click" Searches Now Dominate</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 px-4">
                Users get answers directly from AI overviews, reducing the need to click through to websites.
              </p>
              <div className="mx-4 md:mx-0">
                <PlaceholderChart title="Outcomes of Google Searches in EU/UK" />
              </div>
            </div>

            <div className="w-full">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4 text-brand-navy px-4">Direct Impact on Traffic</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 px-4">
                The appearance of AI Overviews in search results leads to significant drops in click-through rates to traditional web pages.
              </p>
              <div className="mx-4 md:mx-0">
                <PlaceholderChart title="Click-through Rate Drops When AI Overviews Appear" />
              </div>
            </div>
          </div>
        </div>

        {/* The Bottom Line */}
        <div className="mt-12 md:mt-16 text-center bg-brand-navy text-brand-white p-6 md:p-8 lg:p-12 rounded-lg shadow-xl mx-4 md:mx-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 !text-brand-white">The Bottom Line</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            If you don't understand how LLMs talk about you, you're optimising for a shrinking market and risk becoming invisible.
          </p>
          <CallToAction to="/ai-audit" text="See The Solution" variant="primary" />
        </div>
      </PageSection>
    </div>
  );
};

export default WhyItMattersPage;

