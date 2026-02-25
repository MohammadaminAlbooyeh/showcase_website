import Head from 'next/head';
import { useRouter } from 'next/router';

const SEO = ({ 
  title = 'My Portfolio', 
  description = 'Welcome to my professional portfolio showcasing my projects and skills in web development.',
  image = '/og-image.jpg',
  type = 'website'
}) => {
  const router = useRouter();
  const siteName = 'My Portfolio';
  const baseUrl = 'https://your-portfolio-url.com';
  const currentUrl = `${baseUrl}${router.asPath}`;
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{`${title} | ${siteName}`}</title>
      <meta name="title" content={`${title} | ${siteName}`} />
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={`${title} | ${siteName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={`${title} | ${siteName}`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content="@yourusername" />
      
      {/* Additional SEO tags */}
      <link rel="canonical" href={currentUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Your Name" />
      <meta name="keywords" content="web development, portfolio, react, nextjs, django, full stack developer" />
      
      {/* Structured Data / JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Your Name',
            url: currentUrl,
            sameAs: [
              'https://github.com/MohammadaminAlbooyeh?tab=overview&from=2026-02-01&to=2026-02-23',
              'https://www.linkedin.com/in/amin-a-95a541176/',
              'mailto:amin.albooyeh@gmail.com'
            ],
            jobTitle: 'Full Stack Developer',
            image: image,
            description: description,
            knowsAbout: [
              'Web Development',
              'React',
              'Next.js',
              'Django',
              'Python',
              'JavaScript'
            ]
          })
        }}
      />
    </Head>
  );
};

export default SEO;