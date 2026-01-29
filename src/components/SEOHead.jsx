import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export function SEOHead({ 
    title, 
    description, 
    canonicalUrl, 
    ogImage, 
    type = 'website', 
    schema, 
    h1Text, 
    robots,
    keywords,
    datePublished,
    dateModified
}) {
    const location = useLocation();
    const siteTitle = 'BharatApply';
    const baseUrl = 'https://bharatapply.online';
    const fullTitle = title ? `${title}` : siteTitle;

    let fullUrl;
    if (canonicalUrl) {
        fullUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`;
    } else {
        const cleanPath = location.pathname === '/' ? '' : location.pathname;
        const origin = typeof window !== 'undefined' ? window.location.origin : baseUrl;
        fullUrl = `${origin}${cleanPath}`;
    }

    const schemas = Array.isArray(schema) ? schema : (schema ? [schema] : []);

    return (
        <Helmet>
            {/* Basic SEO */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {robots && <meta name="robots" content={robots} />}
            <link rel="canonical" href={fullUrl} />

            {/* Dates for article/content pages */}
            {datePublished && <meta property="article:published_time" content={datePublished} />}
            {dateModified && <meta property="article:modified_time" content={dateModified} />}

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:site_name" content="BharatApply" />
            {ogImage && <meta property="og:image" content={ogImage} />}

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            {ogImage && <meta name="twitter:image" content={ogImage} />}

            {/* Structured Data (JSON-LD) */}
            {schemas.map((s, idx) => (
                <script key={idx} type="application/ld+json">
                    {JSON.stringify(s)}
                </script>
            ))}
        </Helmet>
    );
}
