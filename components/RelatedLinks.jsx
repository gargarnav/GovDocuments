import Link from "next/link";

/**
 * Cross-linking block. `links` is an array of { href, label }.
 * Strengthens internal linking, which helps both crawlers and readers.
 */
export function RelatedLinks({ title = "Related Guides", links = [] }) {
  const valid = links.filter((l) => l && l.href && l.label);
  if (valid.length === 0) return null;

  return (
    <section className="related-links-block">
      <h2>{title}</h2>
      <div className="related-chip-grid">
        {valid.map((l) => (
          <Link key={l.href} href={l.href} className="related-chip">
            <span>{l.label}</span>
            <span className="arrow">&rarr;</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
