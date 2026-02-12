import React, { useState, useEffect } from 'react';
import { AdContainer } from './AdContainer';

export function DelayedAd({ style, format, slot }) {
    const [showAd, setShowAd] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAd(true);
        }, 3000); // 3 seconds delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`delayed-ad-wrapper ${showAd ? 'visible' : ''}`} style={{
            opacity: showAd ? 1 : 0,
            transition: 'opacity 0.5s ease-in',
            minHeight: showAd ? 'auto' : '0',
            ...style
        }}>
            {showAd && <AdContainer format={format} slot={slot} />}
        </div>
    );
}
