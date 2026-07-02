"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Printer, RotateCcw } from "lucide-react";

/**
 * Interactive, persistent "documents to prepare" checklist.
 * Progress is saved in localStorage so a user can return later, and the list
 * is print friendly for taking to a government office.
 */
export function DocumentChecklist({ items = [], storageKey, title = "Your Preparation Checklist" }) {
  const cleanItems = useMemo(
    () => items.filter(Boolean).map((label, i) => ({ id: `${i}-${label}`, label })),
    [items]
  );
  const [checked, setChecked] = useState({});

  useEffect(() => {
    if (!storageKey) return;
    try {
      const saved = window.localStorage.getItem(`checklist:${storageKey}`);
      if (saved) setChecked(JSON.parse(saved));
    } catch (e) {
      // ignore corrupt storage
    }
  }, [storageKey]);

  const persist = (next) => {
    setChecked(next);
    if (!storageKey) return;
    try {
      window.localStorage.setItem(`checklist:${storageKey}`, JSON.stringify(next));
    } catch (e) {
      // ignore quota errors
    }
  };

  const toggle = (id) => persist({ ...checked, [id]: !checked[id] });
  const reset = () => persist({});

  const doneCount = cleanItems.filter((it) => checked[it.id]).length;
  const pct = cleanItems.length ? Math.round((doneCount / cleanItems.length) * 100) : 0;

  if (cleanItems.length === 0) return null;

  return (
    <div className="checklist-tool">
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <CheckCircle2 size={22} color="var(--color-secondary, #16a34a)" />
        {title}
      </h2>
      <p style={{ margin: "0.25rem 0 0", color: "var(--color-text-muted, #64748b)" }}>
        Tick each item as you gather it. Your progress is saved on this device.
        {"  "}
        <strong>
          {doneCount} of {cleanItems.length} ready ({pct}%)
        </strong>
      </p>
      <div className="checklist-progress" aria-hidden="true">
        <span style={{ width: `${pct}%` }} />
      </div>

      {cleanItems.map((it) => (
        <label
          key={it.id}
          className={`checklist-item ${checked[it.id] ? "done" : ""}`}
        >
          <input
            type="checkbox"
            checked={Boolean(checked[it.id])}
            onChange={() => toggle(it.id)}
          />
          <span>{it.label}</span>
        </label>
      ))}

      <div className="checklist-actions">
        <button type="button" className="checklist-btn" onClick={() => window.print()}>
          <Printer size={16} style={{ verticalAlign: "-3px", marginRight: "0.35rem" }} />
          Print checklist
        </button>
        <button type="button" className="checklist-btn" onClick={reset}>
          <RotateCcw size={16} style={{ verticalAlign: "-3px", marginRight: "0.35rem" }} />
          Reset
        </button>
      </div>
    </div>
  );
}
