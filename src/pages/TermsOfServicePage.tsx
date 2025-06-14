
import React from 'react';
import PageSection from '@/components/PageSection';

const TermsOfServicePage: React.FC = () => {
  return (
    <PageSection>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-brand-navy">Terms of Service</h1>
      <div className="max-w-2xl mx-auto text-gray-700 space-y-4">
        <p>This is a placeholder for the Terms of Service page.</p>
        <p>Please replace this content with your actual Terms of Service. This document should outline the rules and regulations for the use of your website and services.</p>
        <h2 className="text-2xl font-semibold mt-6">1. Acceptance of Terms</h2>
        <p>...</p>
        <h2 className="text-2xl font-semibold mt-6">2. Description of Service</h2>
        <p>...</p>
        <h2 className="text-2xl font-semibold mt-6">3. User Responsibilities</h2>
        <p>...</p>
        <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at legal@brandweave.ai.</p>
      </div>
    </PageSection>
  );
};

export default TermsOfServicePage;
