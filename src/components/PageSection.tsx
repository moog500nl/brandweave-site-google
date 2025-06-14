
import React from 'react';

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const PageSection: React.FC<PageSectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default PageSection;
