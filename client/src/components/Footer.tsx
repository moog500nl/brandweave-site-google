
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-navy text-brand-lightGray py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {currentYear} Brandweave AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
