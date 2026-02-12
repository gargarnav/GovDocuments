import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import '../styles/GuidesIndex.css';

export default function Contact() {
    return (
        <div className="content-container guide-content-wrapper">
            <SEOHead
                title="Contact Us – BharatApply"
                description="Get in touch with the BharatApply team for queries, feedback, or suggestions."
                canonicalUrl="/contact"
            />

            <article className="long-form-content">
                <h1>Contact Us</h1>
                <p className="intro-text">
                    Have questions about a document requirement? Found an error in our guides? Or just want to say hello?
                    We'd love to hear from you.
                </p>

                <div className="contact-grid" style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
                    <div className="contact-card" style={{ padding: '2rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <Mail size={32} color="#2563eb" style={{ marginBottom: '1rem' }} />
                        <h3>Email Us</h3>
                        <p>For general inquiries, corrections, and feedback:</p>
                        <a href="mailto:support@bharatapply.online" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2563eb', textDecoration: 'none' }}>
                            support@bharatapply.online
                        </a>
                    </div>
                </div>

                <div style={{ marginTop: '3rem' }}>
                    <h2>Send us a Message</h2>
                    <form style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                            <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                            <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                            <textarea rows="5" placeholder="How can we help?" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}></textarea>
                        </div>
                        <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', padding: '0.75rem 2rem' }}>
                            Send Message
                        </button>
                    </form>
                </div>
            </article>
        </div>
    );
}
