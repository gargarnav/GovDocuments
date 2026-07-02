import { HomeClient } from "@/components/HomeClient";
import {
  organizationSchema,
  websiteSchema,
  faqSchema,
} from "@/lib/seoSchemas";

export const metadata = {
  title: "Indian Government Documents Guide",
  description:
    "Find exact requirements for Aadhaar, PAN, Passport, Driving License, and other government documents in India. Complete checklists, file specifications, fees, and processing times.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    question: "How do I apply for a PAN Card online?",
    answer:
      "Visit the NSDL or UTIITSL website. You will need proof of identity (Aadhaar), proof of address, and a photograph. Our PAN card guide details the exact file sizes needed for upload.",
  },
  {
    question: "What documents are required for a new Passport?",
    answer:
      "For a fresh passport you generally need proof of address (Aadhaar, Voter ID, and similar), proof of date of birth (Birth Certificate, 10th Marksheet), and possibly a non-ECR proof if eligible.",
  },
  {
    question: "Is it mandatory to link Aadhaar with PAN?",
    answer:
      "Yes. As per CBDT guidelines, linking Aadhaar with PAN is mandatory to prevent your PAN from becoming inoperative. Ensure your demographic details match in both documents.",
  },
  {
    question: "What is the processing time for government documents?",
    answer:
      "Processing times vary. Aadhaar updates typically take 7 to 15 days, PAN card applications 15 to 20 days, and passport applications 30 to 45 days depending on the type and verification required.",
  },
  {
    question: "Can I track my application status online?",
    answer:
      "Yes, most government portals provide online tracking. You can track Aadhaar using your enrolment number, PAN using your acknowledgment number, and passport using your file number on the respective official websites.",
  },
];

export default function HomePage() {
  const schemas = [
    organizationSchema,
    websiteSchema(),
    faqSchema(homeFaqs),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <HomeClient />
    </>
  );
}
