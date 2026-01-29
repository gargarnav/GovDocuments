import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with actual ID
const FB_PIXEL_ID = 'XXXXXXXXXXXXXXX'; // Replace with actual ID

export function Analytics() {
    const location = useLocation();

    useEffect(() => {
        // Google Analytics 4 Initialization
        if (!window.gtag) {
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag() { window.dataLayer.push(arguments); }
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', GA_MEASUREMENT_ID);
        }

        // Facebook Pixel Initialization
        if (!window.fbq) {
            !function (f, b, e, v, n, t, s) {
                if (f.fbq) return; n = f.fbq = function () {
                    n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
                n.queue = []; t = b.createElement(e); t.async = !0;
                t.src = v; s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
            }(window, document, 'script',
                'https://connect.facebook.net/en_US/fbevents.js');

            window.fbq('init', FB_PIXEL_ID);
            window.fbq('track', 'PageView');
        }
    }, []);

    // Track Page Views on Route Change
    useEffect(() => {
        if (window.gtag) {
            window.gtag('config', GA_MEASUREMENT_ID, {
                page_path: location.pathname + location.search,
            });
        }
        if (window.fbq) {
            window.fbq('track', 'PageView');
        }
    }, [location]);

    return null;
}
