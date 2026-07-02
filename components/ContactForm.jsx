"use client";

import { useState } from "react";

const CONTACT_EMAIL = "support@bharatapply.online";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "6px",
    border: "1px solid var(--color-border, #cbd5e1)",
    background: "var(--color-surface, #fff)",
    color: "var(--color-text, #1e293b)",
  };

  return (
    <form
      style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1rem" }}
      onSubmit={handleSubmit}
    >
      <div>
        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>
          Name
        </label>
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={update("name")}
          style={inputStyle}
          required
        />
      </div>
      <div>
        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>
          Email
        </label>
        <input
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={update("email")}
          style={inputStyle}
          required
        />
      </div>
      <div>
        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>
          Message
        </label>
        <textarea
          rows="5"
          placeholder="How can we help?"
          value={form.message}
          onChange={update("message")}
          style={inputStyle}
          required
        />
      </div>
      <button
        type="submit"
        className="btn-primary"
        style={{ alignSelf: "flex-start", padding: "0.75rem 2rem" }}
      >
        Send Message
      </button>
    </form>
  );
}
