
import React from 'react';
import { BarChart } from 'lucide-react'; // Using an icon as placeholder

interface PlaceholderChartProps {
  title: string;
  className?: string;
}

const PlaceholderChart: React.FC<PlaceholderChartProps> = ({ title, className }) => {
  return (
    <div className={`bg-brand-lightGray p-8 rounded-lg shadow-md text-center ${className}`}>
      <BarChart size={48} className="mx-auto text-brand-navy mb-4" />
      <h3 className="text-xl font-semibold text-brand-navy mb-2">{title}</h3>
      <p className="text-gray-600">Chart data will be displayed here.</p>
    </div>
  );
};

export default PlaceholderChart;
