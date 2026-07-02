"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CheckCircle2, CircleDashed, HelpCircle, XCircle } from "lucide-react";
import { CORE_DOCUMENTS, evaluateServices } from "@/lib/proofFinder";

const STATUS_META = {
  ready: {
    label: "You likely have everything",
    icon: CheckCircle2,
    color: "var(--color-secondary, #16a34a)",
  },
  partial: {
    label: "You have some of it",
    icon: CircleDashed,
    color: "#d97706",
  },
  "not-ready": {
    label: "You are missing key proofs",
    icon: XCircle,
    color: "#dc2626",
  },
  unassessable: {
    label: "Requirements are situational",
    icon: HelpCircle,
    color: "var(--color-text-muted, #64748b)",
  },
};

export function ProofFinderTool() {
  const [selected, setSelected] = useState({});

  const selectedIds = useMemo(
    () => Object.keys(selected).filter((id) => selected[id]),
    [selected]
  );

  const results = useMemo(() => evaluateServices(selectedIds), [selectedIds]);
  const hasSelection = selectedIds.length > 0;

  const toggle = (id) => setSelected((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="proof-finder">
      <div className="proof-finder-docs">
        <h2>1. Select the documents you already have</h2>
        <div className="proof-doc-grid">
          {CORE_DOCUMENTS.map((doc) => (
            <label
              key={doc.id}
              className={`proof-doc-chip ${selected[doc.id] ? "active" : ""}`}
            >
              <input
                type="checkbox"
                checked={Boolean(selected[doc.id])}
                onChange={() => toggle(doc.id)}
              />
              <span>{doc.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="proof-finder-results">
        <h2>2. See what you are ready to apply for</h2>
        {!hasSelection ? (
          <p className="proof-finder-empty">
            Select at least one document above to see your results.
          </p>
        ) : (
          <div className="proof-results-list">
            {results.map((r) => {
              const meta = STATUS_META[r.status];
              const Icon = meta.icon;
              return (
                <Link
                  key={r.id}
                  href={`/${r.slug}`}
                  className={`proof-result-card status-${r.status}`}
                >
                  <div className="proof-result-head">
                    <Icon size={20} color={meta.color} />
                    <h3>{r.title}</h3>
                  </div>
                  <p className="proof-result-status" style={{ color: meta.color }}>
                    {meta.label}
                    {r.total > 0 ? ` (${r.satisfied}/${r.total} proof categories covered)` : ""}
                  </p>
                  {r.missing.length > 0 && (
                    <p className="proof-result-missing">
                      Still need: {r.missing.join(", ")}
                    </p>
                  )}
                  {r.situational.length > 0 && (
                    <p className="proof-result-situational">
                      Also required: {r.situational.join(", ")}
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
