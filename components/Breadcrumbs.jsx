import Link from "next/link";
import { ChevronRight } from "lucide-react";

/**
 * Visible breadcrumb navigation. `items` is an array of { label, href }.
 * The final item is rendered as plain text (the current page).
 */
export function Breadcrumbs({ items = [] }) {
  if (items.length === 0) return null;

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={idx} className="breadcrumb-item">
            {item.href && !isLast ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
            )}
            {!isLast && (
              <ChevronRight size={14} className="breadcrumb-sep" aria-hidden="true" />
            )}
          </span>
        );
      })}
    </nav>
  );
}
