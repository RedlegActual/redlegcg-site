import React from 'react';
import SEO from './SEO';

const HomePageSEO: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Redleg Consulting Group',
    description: 'Helping expert consultants and agencies scale past $50k/mo with data-driven infrastructure and AI systems.',
    url: 'https://redlegcg.com',
    logo: 'https://redlegcg.com/assets/redleg-logo-main.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales'
    },
    sameAs: [
      'https://www.linkedin.com/company/redleg-consulting-group',
      'https://twitter.com/redlegcg'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Redleg Consulting Group',
    url: 'https://redlegcg.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://redlegcg.com/blog?search={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://redlegcg.com'
      }
    ]
  };

  // Combine all schemas
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, websiteSchema, breadcrumbSchema]
  };

  return (
    <SEO
      title="Websites & Systems"
      description="Veteran-led web design and systems consulting. We build structured, high-performance websites and scalable automation that help businesses grow clearly and confidently."
      structuredData={structuredData}
    />
  );
};

export default HomePageSEO;
