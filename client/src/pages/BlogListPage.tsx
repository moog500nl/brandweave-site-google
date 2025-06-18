import React from 'react';
import PageSection from '@/components/PageSection';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import usePageMetadata from '@/hooks/usePageMetadata'; // Import the hook

// Placeholder blog posts
const blogPosts = [
  { id: '1', title: 'Understanding Your Brand in the Age of AI', date: '2025-06-10', excerpt: 'A deep dive into how AI is changing brand perception and what you can do about it...', slug: 'understanding-brand-in-ai-age' },
  { id: '2', title: 'Top 5 Metrics to Track for AI Brand Health', date: '2025-05-28', excerpt: 'Learn which key performance indicators are crucial for monitoring your brand\'s visibility and sentiment in AI models.', slug: 'top-5-metrics-ai-brand-health' },
  { id: '3', title: 'Case Study: How Company X Improved Their AI Score', date: '2025-05-15', excerpt: 'An inside look at the strategies that helped one company significantly boost their AI-driven brand presence.', slug: 'case-study-company-x' },
];

const BlogListPage: React.FC = () => {
  usePageMetadata(
    "Brandweave AI Blog | Insights on AI and Brand Strategy",
    "Explore the Brandweave AI blog for the latest insights, tips, and news on AI brand perception, visibility, and navigating the future of brand discovery."
  );

  return (
    <div className="animate-fade-in">
      <PageSection>
        <div className="flex justify-center mb-12">
          <img 
            src="@assets/v1_logo_vertical_on white or grey (1)_1750245161941.png" 
            alt="Brandweave AI" 
            className="h-32 md:h-40 w-auto"
          />
        </div>
        <p className="text-xl text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Insights, tips, and news on navigating the AI-first world of brand discovery.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
              {/* Placeholder for image: <img src="/placeholder.jpg" alt={post.title} className="w-full h-48 object-cover" /> */}
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-2xl font-semibold text-brand-navy mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                <p className="text-gray-700 mb-4 flex-grow">{post.excerpt}</p>
                <Button asChild variant="link" className="mt-auto self-start p-0 text-brand-orange hover:text-opacity-80">
                  <Link to={`/blog/${post.slug}`}>Read More &rarr;</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        {/* Note: Full blog functionality (CMS, dynamic posts) would be a next step. */}
      </PageSection>
    </div>
  );
};

export default BlogListPage;
