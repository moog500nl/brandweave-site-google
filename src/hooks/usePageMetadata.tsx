import { useEffect } from 'react';

// This hook is now deprecated in favor of the SEO component
// Keeping for backward compatibility but recommend using SEO component instead
const usePageMetadata = (title: string, description: string) => {
  useEffect(() => {
    console.warn('usePageMetadata is deprecated. Please use the SEO component instead.');
    
    if (title) {
      document.title = title;
    }

    if (description) {
      let metaDescriptionTag = document.querySelector('meta[name="description"]');
      if (!metaDescriptionTag) {
        metaDescriptionTag = document.createElement('meta');
        metaDescriptionTag.setAttribute('name', 'description');
        document.head.appendChild(metaDescriptionTag);
      }
      metaDescriptionTag.setAttribute('content', description);
    }
  }, [title, description]);
};

export default usePageMetadata;
