"use client";

import { FormEvent, useState } from "react";

const fieldClassName =
  "w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm text-[#0F172A] outline-none focus:border-[#00B98A]";

export default function SettingsForm() {
  const [fullName, setFullName] = useState("David Chen");
  const [email, setEmail] = useState("david@theaicolonyacademy.com");
  const [timezone, setTimezone] = useState("GMT");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Settings saved:", { fullName, email, timezone });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl space-y-5 rounded-2xl border border-[#E2E8F0] bg-white p-6"
    >
      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-[#374151]">
          Full Name
        </span>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={fieldClassName}
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-[#374151]">
          Email Address
        </span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClassName}
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-[#374151]">
          Timezone
        </span>
        <select
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          className={fieldClassName}
        >
          <option value="GMT">GMT</option>
          <option value="WAT">WAT</option>
          <option value="EST">EST</option>
          <option value="PST">PST</option>
        </select>
      </label>

      <button
        type="submit"
        className="rounded-full bg-[#00B98A] px-6 py-3 text-sm font-semibold text-white"
      >
        Save Changes
      </button>
    </form>
  );
}
