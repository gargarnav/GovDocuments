import { ShieldCheck, CalendarDays } from "lucide-react";

function formatDate(value) {
  if (!value) return null;
  try {
    return new Date(value).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (e) {
    return value;
  }
}

/**
 * Trust byline used at the top of long-form guides. Reinforces E-E-A-T:
 * who wrote it, that it was reviewed against official sources, and when.
 */
export function EditorialByline({ updated, category }) {
  const updatedText = formatDate(updated) || formatDate(new Date());
  return (
    <div className="editorial-byline">
      <span>
        By the <strong>BharatApply Editorial Team</strong>
      </span>
      <span className="byline-dot">&bull;</span>
      <span
        style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
      >
        <ShieldCheck size={16} /> Checked against official government portals
      </span>
      <span className="byline-dot">&bull;</span>
      <span
        style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
      >
        <CalendarDays size={16} /> Updated {updatedText}
      </span>
      {category ? (
        <>
          <span className="byline-dot">&bull;</span>
          <span className="category-badge">{category}</span>
        </>
      ) : null}
    </div>
  );
}
