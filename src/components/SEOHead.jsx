import { Helmet } from 'react-helmet-async';

export function SEOHead({ title, description, canonicalUrl, ogImage, type = 'website', schema }) {
    const siteTitle = 'BharatApply';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const fullUrl = canonicalUrl || 'https://bharatapply.online';

    return (
        <Helmet>
            {/* Basic SEO */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullUrl} />

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
