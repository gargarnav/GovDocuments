"use client";

import {
  UserCheck,
  Truck,
  Landmark,
  GraduationCap,
  FileBadge,
  ShieldCheck,
  HeartPulse,
  Plane,
  LayoutGrid,
} from "lucide-react";

const icons = {
  UserCheck,
  Truck,
  Landmark,
  GraduationCap,
  FileBadge,
  ShieldCheck,
  HeartPulse,
  Plane,
};

export function Sidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  isOpen = false,
  onClose = () => {},
}) {
  const select = (id) => {
    onSelectCategory(id);
    onClose();
  };

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "visible" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3>Categories</h3>
        </div>
        <nav className="sidebar-nav">
          <button
            type="button"
            className={`nav-item ${!selectedCategory ? "active" : ""}`}
            onClick={() => select(null)}
          >
            <LayoutGrid size={20} />
            <span>All Services</span>
          </button>

          {categories.map((cat) => {
            const Icon = icons[cat.iconName] || LayoutGrid;
            return (
              <button
                type="button"
                key={cat.id}
                className={`nav-item ${cat.id === selectedCategory ? "active" : ""} ${
                  cat.isPrivate ? "private-item" : ""
                }`}
                onClick={() => select(cat.id)}
              >
                <Icon size={20} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
