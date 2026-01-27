
import {
    UserCheck, Truck, Landmark, GraduationCap,
    FileBadge, ShieldCheck, HeartPulse, Plane,
    LayoutGrid
} from 'lucide-react';

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
                <button
                    className={`nav-item ${!selectedCategory ? 'active' : ''}`}
                    onClick={() => onSelectCategory(null)}
                >
                    <LayoutGrid size={20} />
                    <span>All Services</span>
                </button>

                {categories.map(cat => {
                    const Icon = icons[cat.iconName] || LayoutGrid;
                    return (
                        <button
                            key={cat.id}
                            className={`nav-item ${cat.id === selectedCategory ? 'active' : ''} ${cat.isPrivate ? 'private-item' : ''}`}
                            onClick={() => onSelectCategory(cat.id)}
                        >
                            <Icon size={20} />
                            <span>{cat.title}</span>
                        </button>
                    );
                })}
            </nav>
        </aside>
    );
}
