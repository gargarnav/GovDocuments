
import {
    Book, CreditCard, UserCheck, Truck, FileText,
    Landmark, GraduationCap, FileBadge, ShieldCheck,
    HeartPulse, Plane, HelpCircle
} from 'lucide-react';

const icons = {
    Book, CreditCard, UserCheck, Truck, FileText,
    Landmark, GraduationCap, FileBadge, ShieldCheck,
    HeartPulse, Plane
};

export function ServiceCard({ service, onClick }) {
    const Icon = icons[service.iconName] || HelpCircle;

    return (
        <div className="service-card" onClick={() => onClick(service)}>
            <div className="card-icon">
                <Icon size={32} />
            </div>
            <div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc">{service.description}</p>
            </div>
        </div>
    );
}
