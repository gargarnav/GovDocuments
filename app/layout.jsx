import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/context/ThemeContext";
import { Header } from "@/components/Header";
import { organizationSchema, websiteSchema } from "@/lib/seoSchemas";

// Global stylesheets (order matters: base variables first)
import "@/styles/index.css";
import "@/styles/app.css";
import "@/styles/layout.css";
import "@/styles/about.css";
import "@/styles/GuidePage.css";
import "@/styles/GuidesIndex.css";
import "@/styles/site.css";

const GA_MEASUREMENT_ID = "G-4S2264NZPY";
const ADSENSE_CLIENT = "ca-pub-8431329527460254";

export const metadata = {
  metadataBase: new URL("https://bharatapply.online"),
  title: {
    default: "BharatApply - Indian Government Document Guide",
    template: "%s | BharatApply",
  },
  description:
    "BharatApply is a free guide to the documents required for Indian government services. Find exact checklists, file size and format rules, fees, and processing times for Aadhaar, PAN, Passport, Driving License, and more.",
  applicationName: "BharatApply",
  authors: [{ name: "BharatApply Editorial Team" }],
  keywords: [
    "government documents India",
    "Aadhaar documents required",
    "PAN card documents",
    "passport documents",
    "driving license requirements",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "BharatApply",
    title: "BharatApply - Indian Government Document Guide",
    description:
      "Find exact document requirements, file specifications, fees, and processing times for Indian government services.",
    url: "https://bharatapply.online",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "BharatApply - Indian Government Document Guide",
    description:
      "Find exact document requirements and file specifications for Indian government services.",
    images: ["/og-image.svg"],
  },
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
  robots: { index: true, follow: true },
  other: { "google-adsense-account": ADSENSE_CLIENT },
};

export const viewport = {
  themeColor: "#003366",
  width: "device-width",
  initialScale: 1,
};

// Runs before paint to apply the saved theme and avoid a flash of the wrong theme.
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema()]),
          }}
        />
      </head>
      <body>
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>

        {/* Google AdSense loader (verification + future ads). No ad units are
            rendered until the account is approved. */}
        <Script
          id="adsense-loader"
          async
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
        />

        <ThemeProvider>
          <div className="app-container">
            <Header />
            {children}
          </div>
        </ThemeProvider>
        <VercelAnalytics />
      </body>
    </html>
  );
}
