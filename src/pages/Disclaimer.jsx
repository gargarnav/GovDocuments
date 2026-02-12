import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Footer } from '../components/Footer';
import '../styles/GuidesIndex.css';

export default function Disclaimer() {
    return (
        <div className="static-page-layout">
            <div className="content-container guide-content-wrapper">
                <SEOHead
                    title="Disclaimer – BharatApply"
                    description="Disclaimer for BharatApply. We are an informational website and not affiliated with any government body."
                    canonicalUrl="/disclaimer"
                />

                <article className="long-form-content">
                    <h1>Disclaimer</h1>
                    <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

                    <div className="alert-box" style={{ background: '#fff3cd', border: '1px solid #ffeeba', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
                        <strong>Important Notice:</strong> BharatApply is an independent informational platform and is <u>NOT</u> affiliated, associated, authorized, endorsed by, or in any way officially connected with the Government of India, any state government, or any of their agencies or subsidiaries.
                    </div>

                    <h2>1. Information Accuracy</h2>
                    <p>The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.</p>

                    <h2>2. No Professional Advice</h2>
                    <p>The information contained on this Service is not intended as, and shall not be understood or construed as, professional or legal advice. You should not act upon this information without consulting with the appropriate professional or official government source.</p>

                    <h2>3. External Links</h2>
                    <p>Through this website, you are able to link to other websites which are not under the control of BharatApply. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>

                    <h2>4. Limitation of Liability</h2>
                    <p>In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>

                    <h2>5. Consent</h2>
                    <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
                </article>
            </div>
            <Footer />
        </div>
    );
}
