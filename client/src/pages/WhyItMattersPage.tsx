import React from 'react';
import PageSection from '@/components/PageSection';
import CallToAction from '@/components/CallToAction';
import PlaceholderChart from '@/components/PlaceholderChart';
import SEO from '@/components/SEO';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, LineChart, Line } from 'recharts';

const WhyItMattersPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Why AI Brand Perception Matters Now",
    "description": "AI is reshaping brand discovery. Learn why understanding your AI brand perception is crucial for visibility and growth in a 'zero-click' search world.",
    "author": {
      "@type": "Organization",
      "name": "Brandweave AI"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Brandweave AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://brandweave.ai/bwlogo.svg"
      }
    },
    "datePublished": "2024-12-17",
    "dateModified": "2024-12-17"
  };

  const aiAdoptionData = [
    { period: 'May 2023', share: 26, type: 'actual' },
    { period: 'May 2024', share: 38, type: 'actual' },
    { period: 'May 2025', share: 49, type: 'actual' },
    { period: 'May 2026', share: 55, type: 'forecast' }
  ];

  const ctrData = [
    { scenario: 'Without AIO', Desktop: 20, Mobile: 13 },
    { scenario: 'With AIO', Desktop: 7, Mobile: 3 }
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
    <>
      <SEO
        title="Why AI Brand Perception Matters Now"
        description="AI is reshaping brand discovery. Learn why understanding your AI brand perception is crucial for visibility and growth in a 'zero-click' search world. Brandweave AI explains."
        keywords="AI brand perception, zero-click search, AI overviews, brand visibility, LLM impact, search evolution, brand discovery"
        canonical="https://brandweave.ai/why-it-matters"
        structuredData={structuredData}
      />
      
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
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4 text-brand-navy px-4">Direct Impact on Traffic</h2>
                <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 px-4">
                  The appearance of AI Overviews in search results leads to significant drops in click-through rates to traditional web pages (source: Internal Mail Online Audit). Users get answers directly from AI overviews, reducing the need to click through to websites.
                </p>
                <div className="mx-4 md:mx-0">
                  <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg md:text-xl font-semibold text-center mb-4 text-brand-navy">
                      Click-through Rate Drops When AI Overviews Appear
                    </h3>
                    <ChartContainer
                      config={{
                        Desktop: {
                          label: "Desktop",
                          color: "#14213D",
                        },
                        Mobile: {
                          label: "Mobile", 
                          color: "#FCA311",
                        },
                      }}
                      className="h-[300px] w-full"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={ctrData}
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 40,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                          <XAxis 
                            dataKey="scenario" 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#666' }}
                          />
                          <YAxis 
                            domain={[0, 20]}
                            label={{ value: 'CTR (%)', angle: -90, position: 'insideLeft' }}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#666' }}
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line 
                            type="monotone" 
                            dataKey="Desktop" 
                            stroke="#14213D" 
                            strokeWidth={1}
                            dot={{ fill: "#14213D", strokeWidth: 1, r: 3 }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="Mobile" 
                            stroke="#FCA311" 
                            strokeWidth={1}
                            dot={{ fill: "#FCA311", strokeWidth: 1, r: 3 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                    <div className="flex flex-col sm:flex-row justify-center mt-3 md:mt-4 space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-xs md:text-sm">
                      <div className="flex items-center justify-center">
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-[#14213D] mr-2 rounded"></div>
                        <span>Desktop</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-[#FCA311] mr-2 rounded"></div>
                        <span>Mobile</span>
                      </div>
                    </div>
                  </div>
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
    </>
  );
};

export default WhyItMattersPage;
