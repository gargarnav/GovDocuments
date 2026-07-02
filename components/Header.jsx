"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname() || "/";

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <div className="emblem-placeholder">
            <Logo className="logo-icon" size={24} />
          </div>
          <Link href="/" className="brand-text">
            <div className="brand-title">BharatApply</div>
            <span className="subtitle">Document Requirement Guide</span>
          </Link>
        </div>

        <nav
          className="nav-links"
          style={{ display: "flex", alignItems: "center", gap: "2rem" }}
        >
          <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>
            Home
          </Link>
          <Link
            href="/guides"
            className={`nav-link ${pathname.startsWith("/guides") ? "active" : ""}`}
          >
            Guides
          </Link>
          <Link
            href="/about"
            className={`nav-link ${pathname === "/about" ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </div>

      {/* Tricolor Strip */}
      <div className="tricolor-strip">
        <div className="band saffron"></div>
        <div className="band white"></div>
        <div className="band green"></div>
      </div>
    </header>
  );
}
