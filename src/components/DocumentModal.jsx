import { X, FileCheck, Image, FileText } from 'lucide-react';
import { useEffect } from 'react';

export function DocumentModal({ service, onClose }) {
    useEffect(() => {
        // Prevent scrolling when modal is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (!service) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    <X size={24} />
                </button>

                <header className="modal-header">
                    <div className="modal-icon-wrapper">
                        {/* We can re-use the icon if we pass it or just use a generic one, 
                 or map it again. For simplicity, just title here. 
             */}
                        <h2>{service.title} Requirements</h2>
                    </div>
                    <p className="modal-subtitle">{service.description}</p>
                </header>

                <div className="modal-body">
                    <section className="requirements-section">
                        <h3 className="section-title">Required Documents</h3>
                        <div className="requirements-list">
                            {service.requirements.map((req, index) => (
                                <div key={index} className="requirement-item">
                                    <div className="req-header">
                                        <FileCheck size={20} className="req-icon" />
                                        <h4>{req.type}</h4>
                                    </div>
                                    <p className="req-desc">{req.description}</p>
                                    {req.options && (
                                        <ul className="req-options">
                                            {req.options.map((opt, i) => (
                                                <li key={i}>{opt}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {req.specs && <p className="req-specs"><strong>Specs:</strong> {req.specs}</p>}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="file-specs-section">
                        <h3 className="section-title">File Specifications</h3>
                        <div className="specs-grid">
                            {Object.entries(service.fileSpecs).map(([key, spec]) => (
                                <div key={key} className="spec-card">
                                    <div className="spec-header">
                                        {key === 'photo' ? <Image size={18} /> : <FileText size={18} />}
                                        <span className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                    </div>
                                    <div className="spec-details">
                                        <div className="spec-row">
                                            <span>Format:</span>
                                            <strong>{spec.format}</strong>
                                        </div>
                                        <div className="spec-row">
                                            <span>Size:</span>
                                            <strong>{spec.size}</strong>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
