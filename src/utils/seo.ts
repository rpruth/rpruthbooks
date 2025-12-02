import { PageMeta } from '../types';

const baseUrl = 'https://rpruth.com';

export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: 'R.P. Ruth - Author of Compelling Fiction',
    description:
      'Discover the works of R.P. Ruth, author of compelling fiction that explores the depths of human experience and emotion. Browse available books and connect with the author.',
    keywords: [
      'R.P. Ruth',
      'RP Ruth',
      'author',
      'fiction books',
      'contemporary fiction',
      'literary fiction',
      'novelist',
      'book author',
      'fiction writer',
    ],
    canonicalUrl: baseUrl,
  },
  books: {
    title: 'Books by R.P. Ruth - Complete Collection',
    description:
      'Explore the complete collection of books by R.P. Ruth. Browse fiction titles including contemporary and literary works available on Amazon.',
    keywords: [
      'R.P. Ruth books',
      'RP Ruth novels',
      'fiction books',
      'contemporary fiction',
      'literary fiction',
      'buy books',
      'Amazon books',
    ],
    canonicalUrl: `${baseUrl}/books`,
  },
  about: {
    title: 'About R.P. Ruth - Author Biography',
    description:
      'Learn about R.P. Ruth, an author dedicated to crafting narratives that explore the complexities of human nature and the beauty of the written word.',
    keywords: [
      'R.P. Ruth biography',
      'about RP Ruth',
      'author bio',
      'fiction author',
      'writer biography',
    ],
    canonicalUrl: `${baseUrl}/about`,
  },
  contact: {
    title: 'Contact R.P. Ruth - Get in Touch',
    description:
      'Connect with R.P. Ruth for inquiries, speaking engagements, media requests, or general questions about books and writing.',
    keywords: [
      'contact R.P. Ruth',
      'contact RP Ruth',
      'author contact',
      'book inquiries',
      'speaking engagement',
    ],
    canonicalUrl: `${baseUrl}/contact`,
  },
  privacy: {
    title: 'Privacy Policy - R.P. Ruth',
    description:
      'Read the privacy policy for R.P. Ruth\'s website. Learn how we collect, use, and protect your personal information.',
    keywords: [
      'privacy policy',
      'data protection',
      'personal information',
      'website privacy',
    ],
    canonicalUrl: `${baseUrl}/privacy`,
  },
  terms: {
    title: 'Terms of Service - R.P. Ruth',
    description:
      'Terms of Service for R.P. Ruth\'s website. Review the terms and conditions for using this website.',
    keywords: [
      'terms of service',
      'terms and conditions',
      'website terms',
      'user agreement',
    ],
    canonicalUrl: `${baseUrl}/terms`,
  },
};

export function generateStructuredData(page: string, bookData?: any) {
  const baseSchema = {
    '@context': 'https://schema.org',
  };

  switch (page) {
    case 'home':
      return {
        ...baseSchema,
        '@type': 'Person',
        name: 'R.P. Ruth',
        alternateName: 'RP Ruth',
        jobTitle: 'Author',
        url: baseUrl,
        sameAs: ['https://www.amazon.com/stores/RP-Ruth/author/B07VN22QJH'],
        description:
          'Author of compelling fiction that explores the depths of human experience and emotion.',
        knowsAbout: ['Fiction Writing', 'Contemporary Fiction', 'Literary Fiction', 'Business Writing', 'Non-Fiction'],
      };

    case 'books':
      return {
        ...baseSchema,
        '@type': 'CollectionPage',
        name: 'Books by R.P. Ruth',
        description: 'Complete collection of fiction books by R.P. Ruth',
        url: `${baseUrl}/books`,
        mainEntity: {
          '@type': 'ItemList',
          name: 'Books by R.P. Ruth',
          itemListElement: bookData?.map((book: any, index: number) => ({
            '@type': 'Book',
            position: index + 1,
            name: book.title,
            author: {
              '@type': 'Person',
              name: 'R.P. Ruth',
            },
            description: book.description,
            genre: book.genre,
            url: book.amazonUrl,
            image: book.coverImage,
            datePublished: book.publishDate,
          })) || [],
        },
      };

    case 'about':
      return {
        ...baseSchema,
        '@type': 'AboutPage',
        name: 'About R.P. Ruth',
        description: 'Biography and information about author R.P. Ruth',
        url: `${baseUrl}/about`,
        mainEntity: {
          '@type': 'Person',
          name: 'R.P. Ruth',
          jobTitle: 'Author',
          url: baseUrl,
        },
      };

    case 'contact':
      return {
        ...baseSchema,
        '@type': 'ContactPage',
        name: 'Contact R.P. Ruth',
        description: 'Get in touch with author R.P. Ruth',
        url: `${baseUrl}/contact`,
      };

    case 'privacy':
      return {
        ...baseSchema,
        '@type': 'WebPage',
        name: 'Privacy Policy',
        description: 'Privacy Policy for R.P. Ruth website',
        url: `${baseUrl}/privacy`,
      };

    case 'terms':
      return {
        ...baseSchema,
        '@type': 'WebPage',
        name: 'Terms of Service',
        description: 'Terms of Service for R.P. Ruth website',
        url: `${baseUrl}/terms`,
      };

    default:
      return baseSchema;
  }
}
