import Link from "next/link";
import {
  Book,
  CreditCard,
  UserCheck,
  Truck,
  FileText,
  Landmark,
  GraduationCap,
  FileBadge,
  ShieldCheck,
  HeartPulse,
  Plane,
  HelpCircle,
} from "lucide-react";

const icons = {
  Book,
  CreditCard,
  UserCheck,
  Truck,
  FileText,
  Landmark,
  GraduationCap,
  FileBadge,
  ShieldCheck,
  HeartPulse,
  Plane,
};

export function ServiceCard({ service }) {
  const Icon = icons[service.iconName] || HelpCircle;

  return (
    <Link
      href={`/${service.slug}`}
      className="service-card"
      aria-label={`View the document guide for ${service.title}`}
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
