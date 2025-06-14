
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-navy text-brand-lightGray py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {currentYear} Brandweave AI. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          <Link to="/privacy-policy" className="hover:text-brand-orange transition-colors">Privacy Policy</Link>
          <span className="text-brand-lightGray">|</span>
          <Link to="/terms-of-service" className="hover:text-brand-orange transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
