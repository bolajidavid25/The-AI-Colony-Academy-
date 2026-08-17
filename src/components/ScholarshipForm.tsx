"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";

const courseOptions = [
  "Ai Market",
  "AI for Founders",
  "Prompt Engineering for Real Work",
  "AI Filmmaking and Storytelling",
  "AI for African Use Cases",
];

type FormState = {
  fullName: string;
  email: string;
  course: string;
  motivation: string;
  workSamples: File | null;
};

const initialFormState: FormState = {
  fullName: "",
  email: "",
  course: "Ai Market",
  motivation: "",
  workSamples: null,
};

const inputClassName =
  "w-full rounded-lg border-0 bg-white px-4 py-3.5 text-sm text-[#0A0A0A] outline-none ring-0 focus:outline-none";

export default function ScholarshipForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleChange(field: keyof Omit<FormState, "workSamples">, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setForm((prev) => ({ ...prev, workSamples: file }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Scholarship application:", form);
  }

  return (
    <section
      id="scholarship-form"
      aria-labelledby="scholarship-form-heading"
      className="w-full bg-[#F9FAFB] px-6 py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1260px] grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="lg:pt-2">
          <h2
            id="scholarship-form-heading"
            className="text-4xl font-bold leading-[1.1] tracking-[-1.2px] text-[#002B1F] lg:text-[46px]"
          >
            Apply For A{" "}
            <span className="text-[#00B98A]">Scholarship</span>
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#9CA3AF]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-[#374151]">
              Full Name
            </span>
            <input
              type="text"
              name="fullName"
              required
              value={form.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className={inputClassName}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-[#374151]">
              Email Address
            </span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={inputClassName}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-[#374151]">
              Course
            </span>
            <div className="relative">
              <select
                name="course"
                required
                value={form.course}
                onChange={(e) => handleChange("course", e.target.value)}
                className={`${inputClassName} appearance-none pr-10`}
              >
                {courseOptions.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
              >
                ▾
              </span>
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-[#374151]">
              Motivation
            </span>
            <textarea
              name="motivation"
              required
              rows={5}
              value={form.motivation}
              onChange={(e) => handleChange("motivation", e.target.value)}
              className={`${inputClassName} resize-none`}
            />
          </label>

          <div className="block">
            <span className="mb-2 block text-sm font-semibold text-[#374151]">
              Upload ur work samples
            </span>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className={`${inputClassName} text-left ${
                form.workSamples ? "text-[#0A0A0A]" : "text-[#9CA3AF]"
              }`}
            >
              {form.workSamples ? form.workSamples.name : "Upload"}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              name="workSamples"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-[#00B98A] py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
