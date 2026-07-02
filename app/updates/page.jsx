import Link from "next/link";
import { CalendarClock } from "lucide-react";
import serviceContent from "@/data/serviceContent";
import { guidePages } from "@/data/guidePages";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { breadcrumbSchema } from "@/lib/seoSchemas";

const BASE = "https://bharatapply.online";

export const metadata = {
  title: "Recently Updated Guides",
  description:
    "See which BharatApply document guides and service checklists were most recently reviewed and updated.",
  alternates: { canonical: "/updates" },
};

function formatDate(value) {
  return new Date(value).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function UpdatesPage() {
  const serviceEntries = Object.entries(serviceContent).map(([slug, data]) => ({
    href: `/${slug}`,
    title: data.title,
    date: data.dateModified,
    type: "Service Guide",
  }));

  const guideEntries = guidePages.map((g) => ({
    href: `/guides/${g.slug}`,
    title: g.h1,
    date: g.dateModified,
    type: "Long-Form Guide",
  }));

  const allEntries = [...serviceEntries, ...guideEntries].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const schema = breadcrumbSchema([
    { name: "Home", url: `${BASE}/` },
    { name: "Recently Updated", url: `${BASE}/updates` },
  ]);

  return (
    <div className="static-page-layout">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="content-container guide-content-wrapper">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Recently Updated" }]}
        />
        <article className="long-form-content">
          <h1>Recently Updated Guides</h1>
          <p className="intro-text">
            Government requirements change without much notice. This page lists
            every guide and service checklist on BharatApply along with the date
            it was last reviewed, so you can see at a glance how current the
            information is.
          </p>

          <div className="updates-list">
            {allEntries.map((entry) => (
              <Link key={entry.href} href={entry.href} className="updates-row">
                <div className="updates-row-main">
                  <span className="updates-row-type">{entry.type}</span>
                  <h3>{entry.title}</h3>
                </div>
                <div className="updates-row-date">
                  <CalendarClock size={16} />
                  {formatDate(entry.date)}
                </div>
              </Link>
            ))}
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}
