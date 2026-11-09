"use client";

import React, { useState } from "react";
import { EditPencilDetailIcon } from "./StudentDetailIcons";

interface StudentInternalNotesCardProps {
  initialNotes?: string;
  onSaveNotes?: (notes: string) => void;
}

export default function StudentInternalNotesCard({
  initialNotes = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  onSaveNotes,
}: StudentInternalNotesCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [notes, setNotes] = useState(initialNotes);

  const handleSave = () => {
    setIsEditing(false);
    onSaveNotes?.(notes);
  };

  return (
    <div
      className="rounded-xl p-5 border-0 shadow-none flex flex-col justify-between"
      style={{ backgroundColor: "#F9F9F9" }}
    >
      <div>
        {/* Header */}
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-bold" style={{ color: "#154535" }}>
            Internal Notes
          </h2>
          <button
            type="button"
            onClick={() => setIsEditing((prev) => !prev)}
            aria-label="Edit notes"
            className="p-1 transition-opacity hover:opacity-70 cursor-pointer border-0 bg-transparent"
            style={{ color: "#626262" }}
          >
            <EditPencilDetailIcon className="h-3.5 w-3.5" color="#626262" />
          </button>
        </div>

        {/* Content */}
        {isEditing ? (
          <div>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={5}
              className="w-full resize-none rounded-lg border-0 bg-white p-3 text-xs font-medium leading-relaxed outline-none shadow-none"
              style={{ color: "#154535" }}
            />
            <div className="mt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setNotes(initialNotes);
                  setIsEditing(false);
                }}
                className="rounded-lg px-2.5 py-1 text-xs font-semibold hover:opacity-80 cursor-pointer border-0"
                style={{ backgroundColor: "#E2E8F0", color: "#64748B" }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="rounded-lg px-3 py-1 text-xs font-bold text-white hover:opacity-90 cursor-pointer border-0 shadow-none"
                style={{ backgroundColor: "#31CA92" }}
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <p className="text-xs font-medium leading-relaxed" style={{ color: "#154535" }}>
            {notes}
          </p>
        )}
      </div>
    </div>
  );
}
