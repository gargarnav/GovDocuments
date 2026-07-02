import { GuidesIndexClient } from "@/components/GuidesIndexClient";
import { Footer } from "@/components/Footer";
import { breadcrumbSchema } from "@/lib/seoSchemas";

const BASE = "https://bharatapply.online";

export const metadata = {
  title: "Government Document Guides",
  description:
    "Step-by-step guides on the documents required for Indian government services: Passport, PAN, Aadhaar, Driving License, Voter ID, and more.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Government Document Guides | BharatApply",
    description:
      "Complete guides on required documents for Indian government services and certificates.",
    url: `${BASE}/guides`,
  },
};

export default function GuidesPage() {
  const schema = breadcrumbSchema([
    { name: "Home", url: `${BASE}/` },
    { name: "Guides", url: `${BASE}/guides` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <GuidesIndexClient />
      <Footer />
    </>
  );
}
