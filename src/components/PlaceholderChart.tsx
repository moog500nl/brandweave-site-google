
import React from 'react';
import { BarChart, TrendingUp, Users, Zap } from 'lucide-react';

interface PlaceholderChartProps {
  title: string;
  className?: string;
}

const PlaceholderChart: React.FC<PlaceholderChartProps> = ({ title, className }) => {
  const getIconForTitle = (title: string) => {
    if (title.includes('Usage') || title.includes('Adults')) {
      return Users;
    } else if (title.includes('Click-through') || title.includes('Traffic')) {
      return TrendingUp;
    } else if (title.includes('AI') || title.includes('Compresses')) {
      return Zap;
    }
    return BarChart;
  };

  const IconComponent = getIconForTitle(title);

  return (
    <div className={`bg-gradient-to-br from-brand-lightGray to-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center group ${className}`}>
      <div className="relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 to-brand-navy/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Main icon with animation */}
        <div className="relative z-10">
          <IconComponent 
            size={64} 
            className="mx-auto text-brand-navy mb-4 group-hover:text-brand-orange transition-colors duration-300 group-hover:scale-110 transform transition-transform" 
          />
          
          {/* Pulsing ring animation */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 border-2 border-brand-orange rounded-full animate-ping opacity-20"></div>
        </div>
        
        <h3 className="text-xl font-semibold text-brand-navy mb-4 group-hover:text-brand-orange transition-colors duration-300">
          {title}
        </h3>
        
        {/* Dynamic data visualization bars */}
        <div className="flex justify-center space-x-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-4 bg-brand-orange rounded-t-md transition-all duration-500 hover:bg-brand-navy"
              style={{
                height: `${Math.random() * 40 + 20}px`,
                animationDelay: `${i * 100}ms`
              }}
            ></div>
          ))}
        </div>
        
        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
          Interactive chart data visualization coming soon
        </p>
        
        {/* Floating particles effect */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-brand-orange rounded-full animate-bounce opacity-60"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-brand-navy rounded-full animate-pulse opacity-40"></div>
      </div>
    </div>
  );
};

export default PlaceholderChart;
