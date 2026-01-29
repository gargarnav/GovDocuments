
import {
    Book, CreditCard, UserCheck, Truck, FileText,
    Landmark, GraduationCap, FileBadge, ShieldCheck,
    HeartPulse, Plane, HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const icons = {
    Book, CreditCard, UserCheck, Truck, FileText,
    Landmark, GraduationCap, FileBadge, ShieldCheck,
    HeartPulse, Plane
};

export function ServiceCard({ service, onClick }) {
    const Icon = icons[service.iconName] || HelpCircle;
    // Create SEO-friendly URL with service ID for crawlers
    const serviceUrl = `/?service=${service.id}`;

    const handleClick = (e) => {
        e.preventDefault();
        onClick(service);
    };

    return (
        <Link 
            to={serviceUrl} 
            className="service-card" 
            onClick={handleClick}
            aria-label={`View details for ${service.title}`}
        >
            <div className="card-icon">
                <Icon size={32} />
            </div>
            <div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc">{service.description}</p>
            </div>
        </Link>
    );
}
