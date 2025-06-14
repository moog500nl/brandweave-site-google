
import React from 'react';
import PageSection from '@/components/PageSection';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import usePageMetadata from '@/hooks/usePageMetadata'; // Import the hook

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Placeholder content - in a real app, fetch this based on slug
  const post = {
    title: `Blog Post: ${slug?.split('-').join(' ').toUpperCase() || 'Sample Post Title'}`,
    date: '2025-06-14',
    author: 'Brandweave AI Team',
    // For a real app, an excerpt property would be better for the meta description
    content: `
      <p>This is placeholder content for the blog post titled "${slug?.split('-').join(' ') || 'Sample Post'}".</p>
      <p class="mt-4">In a real application, this content would be fetched from a CMS or markdown files based on the slug: <strong>${slug}</strong>.</p>
      <h2 class="text-2xl font-semibold text-brand-navy mt-6 mb-3">A Subheading Example</h2>
      <p>Further details and paragraphs would go here, discussing the intricacies of AI brand intelligence, strategies for improvement, or case studies relevant to the topic.</p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        <li>Key takeaway one.</li>
        <li>Important insight two.</li>
        <li>Actionable advice three.</li>
      </ul>
      <p class="mt-4">The structure would include more text, possibly images, and other rich media to engage the reader.</p>
    `,
  };

  usePageMetadata(
    `${post.title} | Brandweave AI Blog`,
    `Read the blog post "${post.title}" on Brandweave AI. Discover insights on AI brand strategy, intelligence, and the future of brand perception.` // Generic description using title
  );

  return (
    <div className="animate-fade-in">
      <PageSection>
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-brand-orange hover:text-opacity-80 mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-brand-navy">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-6">
            Published on {post.date} by {post.author}
          </p>
          {/* In a real app, you'd use a Markdown renderer or sanitize HTML */}
          <div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </PageSection>
    </div>
  );
};

export default BlogPostPage;
