import { useEffect } from 'react';

export function AdLoader() {
    useEffect(() => {
        const loadAds = () => {
            if (document.getElementById('google-ads-script')) return;

            const script = document.createElement('script');
            script.id = 'google-ads-script';
            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8431329527460254';
            script.async = true;
            script.crossOrigin = 'anonymous';
            document.body.appendChild(script);
        };

        // Delay loading by 3 seconds to prioritize LCP/FCP
        const timer = setTimeout(() => {
            // Use requestIdleCallback if available for even less impact
            if (window.requestIdleCallback) {
                window.requestIdleCallback(loadAds);
            } else {
                loadAds();
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return null;
}
