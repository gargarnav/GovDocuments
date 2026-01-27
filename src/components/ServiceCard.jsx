import { Book, CreditCard, UserCheck, Truck, FileText } from 'lucide-react';

const icons = {
    Book,
    CreditCard,
    UserCheck,
    Truck,
    FileText
};

export function ServiceCard({ service, onClick }) {
    const Icon = icons[service.iconName] || FileText;

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
