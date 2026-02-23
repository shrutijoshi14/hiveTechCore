import { useEffect } from 'react';

const SEO = ({ title, description }) => {
  useEffect(() => {
    // Update Document Title
    document.title = `${title} | Hive Tech Core`;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update OG Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
  }, [title, description]);

  return null;
};

export default SEO;
