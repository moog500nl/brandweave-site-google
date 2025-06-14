
import React from 'react';
import PageSection from '@/components/PageSection';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <PageSection>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-brand-navy">Privacy Policy</h1>
      <div className="max-w-2xl mx-auto text-gray-700 space-y-4">
        <p>This is a placeholder for the Privacy Policy page.</p>
        <p>Please replace this content with your actual Privacy Policy. It should detail how you collect, use, and protect user data in compliance with relevant regulations (e.g., GDPR, CCPA).</p>
        <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
        <p>...</p>
        <h2 className="text-2xl font-semibold mt-6">How We Use Your Information</h2>
        <p>...</p>
        <h2 className="text-2xl font-semibold mt-6">Data Security</h2>
        <p>...</p>
         <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at privacy@brandweave.ai.</p>
      </div>
    </PageSection>
  );
};

export default PrivacyPolicyPage;
