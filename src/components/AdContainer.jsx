import React, { useEffect } from 'react';

export function AdContainer({ format = 'auto', style, slot = '1234567890' }) {
    useEffect(() => {
        try {
            // Check if scripts are loaded
            if (window.adsbygoogle) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (e) {
            console.error("AdSense error", e);
        }
    }, []);

    return (
        <div className="ad-container" style={{
            minHeight: '250px',
            background: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px dashed #cbd5e1',
            margin: '2rem 0',
            ...style
        }}>
            <ins className="adsbygoogle"
                style={{ display: 'block', width: '100%' }}
                data-ad-client="ca-pub-8431329527460254"
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive="true"></ins>
            <span style={{ position: 'absolute', fontSize: '10px', color: '#cbd5e1' }}>Advertisement</span>
        </div>
    );
}
