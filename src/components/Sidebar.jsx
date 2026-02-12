
import {
    UserCheck, Truck, Landmark, GraduationCap,
    FileBadge, ShieldCheck, HeartPulse, Plane,
    LayoutGrid
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { AdContainer } from './AdContainer';

const icons = {
    UserCheck, Truck, Landmark, GraduationCap,
    FileBadge, ShieldCheck, HeartPulse, Plane
};

export function Sidebar({ categories, selectedCategory, onSelectCategory }) {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h3>Categories</h3>
            </div>
            <nav className="sidebar-nav">
                <Link
                    to="/"
                    className={`nav-item ${!selectedCategory ? 'active' : ''}`}
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        if (window.innerWidth < 768) onSelectCategory(null); // Close sidebar on mobile
                    }}
                >
                    <LayoutGrid size={20} />
                    <span>All Services</span>
                </Link>

                {categories.map(cat => {
                    const Icon = icons[cat.iconName] || LayoutGrid;
                    return (
                        <Link
                            key={cat.id}
                            to={`/?category=${cat.id}`}
                            className={`nav-item ${cat.id === selectedCategory ? 'active' : ''} ${cat.isPrivate ? 'private-item' : ''}`}
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                if (window.innerWidth < 768) onSelectCategory(cat.id); // Close sidebar on mobile
                            }}
                        >
                            <Icon size={20} />
                            <span>{cat.title}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Minimal Ad Placeholder */}
            <AdContainer format="sidebar-bottom" />
        </aside>
    );
}
