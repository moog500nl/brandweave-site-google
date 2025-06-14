
import { useEffect } from 'react';

const usePageMetadata = (title: string, description: string) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let metaDescriptionTag = document.querySelector('meta[name="description"]');
      if (!metaDescriptionTag) {
        // If for some reason it's not in index.html, create and append it.
        metaDescriptionTag = document.createElement('meta');
        metaDescriptionTag.setAttribute('name', 'description');
        document.head.appendChild(metaDescriptionTag);
      }
      metaDescriptionTag.setAttribute('content', description);
    }
  }, [title, description]);
};

export default usePageMetadata;
