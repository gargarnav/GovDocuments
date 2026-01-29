import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export function SEOHead({ title, description, canonicalUrl, ogImage, type = 'website', schema, h1Text, robots }) {
    const location = useLocation();
    const siteTitle = 'BharatApply';
    const baseUrl = 'https://bharatapply.online';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

    // Generate canonical URL: use provided canonicalUrl, or generate from location
    // Always use clean URL without query parameters to avoid duplicate content
    let fullUrl;
    if (canonicalUrl) {
        fullUrl = canonicalUrl;
    } else {
        // Remove query parameters and hash from pathname for canonical URL
        const cleanPath = location.pathname === '/' ? '' : location.pathname;
        // Ensure we use the current origin dynamically or fall back to the hardcoded one
        const origin = typeof window !== 'undefined' ? window.location.origin : baseUrl;
        fullUrl = `${origin}${cleanPath}`;
    }

    return (
        <Helmet>
            {/* Basic SEO */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {robots && <meta name="robots" content={robots} />}
            <link rel="canonical" href={fullUrl} />

            {/* H1 tag for SEO - added to body via react-helmet */}
            {h1Text && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "headline": h1Text
                    })}
                </script>
            )}

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            {ogImage && <meta property="og:image" content={ogImage} />}

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            {ogImage && <meta name="twitter:image" content={ogImage} />}

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}
