/** @type {import('next').NextConfig} */

// Content Security Policy tuned to allow Google AdSense and Google Analytics
// while keeping the site locked down otherwise.
const ContentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://*.googlesyndication.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google.com https://adservice.google.com https://tpc.googlesyndication.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: https:",
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://*.googlesyndication.com https://*.google.com https://region1.google-analytics.com",
  "frame-src https://googleads.g.doubleclick.net https://pagead2.googlesyndication.com https://*.googlesyndication.com https://tpc.googlesyndication.com https://www.google.com",
  // Note: no "upgrade-insecure-requests". Production is already HTTPS, so it is
  // a no-op there, but on `next dev` (http://localhost) strict browsers like
  // Safari take it literally, try to load every asset (CSS included) over
  // https://localhost, and fail silently, leaving the page unstyled.
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: ContentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig = {
  reactStrictMode: true,
  // We lint with our own config; do not fail production builds on lint.
  eslint: { ignoreDuringBuilds: true },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  // Consolidate ranking signals on one host. Google was indexing both
  // www and non-www as separate URLs, splitting link equity. Canonicals
  // already point to the non-www host, so redirect www -> non-www.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.bharatapply.online" }],
        destination: "https://bharatapply.online/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
