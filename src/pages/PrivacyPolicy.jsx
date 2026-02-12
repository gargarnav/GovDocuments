import React from 'react';
import { SEOHead } from '../components/SEOHead';
import '../styles/GuidesIndex.css'; // Reusing styles for consistent typography

export default function PrivacyPolicy() {
    return (
        <div className="content-container guide-content-wrapper">
            <SEOHead
                title="Privacy Policy – BharatApply"
                description="Privacy Policy for BharatApply. Learn how we collect, use, and protect your data. AdSense and Cookie policy included."
                canonicalUrl="/privacy-policy"
            />

            <article className="long-form-content">
                <h1>Privacy Policy</h1>
                <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

                <h2>1. Introduction</h2>
                <p>Welcome to BharatApply ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of information when you use our services.</p>

                <h2>2. Information We Collect</h2>
                <p>We do not collect any personal information (such as name, email, or phone number) unless you voluntarily provide it to us through our contact forms or newsletter subscriptions.</p>
                <h3>Log Data</h3>
                <p>Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>

                <h2>3. Cookies and Web Beacons</h2>
                <p>We use cookies to store information about visitors' preferences, to record user-specific information on which pages the site visitor accesses or visits, and to personalize or customize our web page content based upon visitors' browser type or other information that the visitor sends via their browser.</p>

                <h2>4. Google AdSense & DoubleClick DART Cookie</h2>
                <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a></p>

                <h2>5. Third-Party Privacy Policies</h2>
                <p>BharatApply's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>

                <h2>6. Analytics</h2>
                <p>We may use third-party Service Providers such as Google Analytics to monitor and analyze the use of our Service. Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.</p>

                <h2>7. GDPR Data Protection Rights</h2>
                <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: The right to access, rectification, erasure, restrict processing, object to processing, and data portability.</p>

                <h2>8. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul>
                    <li>By email: support@bharatapply.online</li>
                    <li>By visiting this page on our website: <a href="/contact">/contact</a></li>
                </ul>
            </article>
        </div>
    );
}
