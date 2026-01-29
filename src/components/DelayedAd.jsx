import React, { useState, useEffect } from 'react';

export function DelayedAd({ delay = 3000, style = {}, className = '' }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    if (!isVisible) {
        // Return a placeholder or null depending on layout needs.
        // Returning a placeholder with min-height prevents layout shifts when it pops in.
        return <div aria-hidden="true" style={{ minHeight: '100px', ...style }} className={`delayed-ad-placeholder ${className}`}></div>;
    }

    return (
        <div
            className={`ad-container fade-in ${className}`}
            style={{
                opacity: 0,
                animation: 'fadeIn 0.5s ease forwards',
                margin: '2rem auto',
                maxWidth: '728px',
                minHeight: '90px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f1f5f9',
                border: '1px dashed #cbd5e1',
                color: '#94a3b8',
                fontSize: '0.875rem',
                ...style
            }}
        >
            <div className="ad-label">Advertisement</div>
            <ins className="adsbygoogle"
                style={{ display: 'block', width: '100%', height: '100%' }}
                data-ad-client="ca-pub-8431329527460254"
                data-ad-slot="auto"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({ });
            </script>
        </div>
    );
}
