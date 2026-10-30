"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { CohortFormSchema, CohortFormData } from "./cohortSchema";

// ─── Shared input classes ─────────────────────────────────────────────────────

const inputBase =
  "h-10 w-full rounded-lg border border-[#E2E8F0] bg-[#FFF] px-3.5 text-[14px] font-normal leading-none tracking-[-0.03em] text-[#A0A5B0] outline-none placeholder:text-[#A0A5B0] focus:border-[#00B98A] transition-colors";

const inputError =
  "border-red-400 focus:border-red-400";

// ─── Date Picker Input ────────────────────────────────────────────────────────
// Displays "Select date" placeholder (type="text") until focused,
// then switches to type="date" to open the native picker.
// On blur, reverts to text if no value was chosen.

function DatePickerInput({
  className,
  hasError,
  rhfOnChange,
  rhfOnBlur,
  name,
  inputRef,
}: {
  className: string;
  hasError: boolean;
  rhfOnChange: React.ChangeEventHandler<HTMLInputElement>;
  rhfOnBlur: React.FocusEventHandler<HTMLInputElement>;
  name: string;
  inputRef: React.Ref<HTMLInputElement>;
}) {
  const [inputType, setInputType] = useState<"text" | "date">("text");

  return (
    <input
      ref={inputRef}
      name={name}
      type={inputType}
      placeholder="Select date"
      className={`${className} ${hasError ? inputError : ""}`}
      onFocus={() => setInputType("date")}
      onChange={rhfOnChange}
      onBlur={(e) => {
        if (!e.target.value) setInputType("text");
        rhfOnBlur(e);
      }}
    />
  );
}

// ─── Form Field Wrapper ───────────────────────────────────────────────────────

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="font-['Inter'] text-[11px] font-bold leading-none tracking-[-0.03em]"
        style={{ color: "#828282" }}
      >
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

// ─── Create Cohort Form ───────────────────────────────────────────────────────

export default function CreateCohortForm() {
  const router = useRouter();

  // ── React Hook Form + Zod ──────────────────────────────────────────────────
  // zodResolver bridges the Zod schema to React Hook Form.
  // RHF calls schema.safeParse(values) on blur/submit and populates
  // formState.errors with Zod's validation messages.
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CohortFormData>({
    resolver: zodResolver(CohortFormSchema),
    defaultValues: {
      cohortName: "",
      thinkficCourseId: "",
      instructor: "",
      startDate: "",
      endDate: "",
      durationWeeks: "",
      maxSeats: "",
      sponsor: "",
      circleSpaceId: "",
      description: "",
      applicationOpenDate: "",
      applicationCloseDate: "",
      applicationStatus: "Active",
    },
    mode: "onTouched", // Validate on blur; re-validate on change after first error
  });

  // Watch description length for the character counter
  const description = watch("description") ?? "";

  // ── Submit Handler ─────────────────────────────────────────────────────────
  // handleSubmit intercepts the native form submit, runs zodResolver,
  // and only calls this function if ALL fields pass validation.
  const onSubmit = async (data: CohortFormData) => {
    // In a real app: await api.createCohort(data)
    console.log("✅ Cohort created:", data);
    router.push("/dashboard-light/cohorts");
  };

  return (
    <div className="min-h-screen w-full pb-10">
      {/* ── Page Header ── */}
      <div className="mb-8 pb-4 border-b border-[#8FF9D1]">
        <h1
          className="font-['Inter'] text-[32px] font-bold leading-none tracking-[-0.03em] text-[#154535]"
        >
          Create New Cohort
        </h1>
        <p
          className="mt-1 font-['Inter'] text-[16px] font-normal leading-none tracking-[-0.03em] text-[#154535]"
        >
          Add a new training cohort. Fill in the details below to get started.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* ── Basic Info Section ── */}
        <div className="rounded-xl border border-[#F1F5F9] bg-[#F9F9F9] p-6 mb-5">
          <div className="mb-5">
            <h2
              className="font-['Inter'] text-[16px] font-bold leading-none tracking-[-0.03em] text-[#154535]"
            >
              Basic Info
            </h2>
            <p
              className="font-['Inter'] text-[11px] font-normal leading-[145%] tracking-[-0.024em] text-[#94A3B8] mt-0.5 text-justify"
            >
              You have full control to manage your own account setting.
            </p>
          </div>

          {/* Row 1: Cohort Name | Thinkfic Course ID | Instructor */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-4">
            <Field label="Cohort Name" required error={errors.cohortName?.message}>
              <input
                type="text"
                placeholder="Enter cohort name"
                className={`${inputBase} ${errors.cohortName ? inputError : ""}`}
                {...register("cohortName")}
              />
            </Field>

            <Field label="Thinkfic Course ID" required error={errors.thinkficCourseId?.message}>
              <input
                type="text"
                placeholder="Enter thinkfic course id"
                className={`${inputBase} ${errors.thinkficCourseId ? inputError : ""}`}
                {...register("thinkficCourseId")}
              />
            </Field>

            <Field label="Instructor" required error={errors.instructor?.message}>
              <div className="relative">
                <select
                  className={`${inputBase} appearance-none pr-9 cursor-pointer ${errors.instructor ? inputError : ""}`}
                  {...register("instructor")}
                >
                  <option value="">Select instructor</option>
                  <option value="james-rodriguez">James Rodriguez</option>
                  <option value="sarah-johnson">Sarah Johnson</option>
                  <option value="mike-chen">Mike Chen</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </div>
            </Field>
          </div>

          {/* Row 2: Start Date | End Date | Duration */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-4">
            <Field label="Start Date" required error={errors.startDate?.message}>
              <div className="relative">
                <input
                  type="date"
                  className={`${inputBase} pr-10 ${errors.startDate ? inputError : ""}`}
                  {...register("startDate")}
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
              </div>
            </Field>

            <Field label="End Date" required error={errors.endDate?.message}>
              <div className="relative">
                <input
                  type="date"
                  className={`${inputBase} pr-10 ${errors.endDate ? inputError : ""}`}
                  {...register("endDate")}
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
              </div>
            </Field>

            <Field label="Duration (Weeks)" required error={errors.durationWeeks?.message}>
              <input
                type="number"
                min="1"
                placeholder="Enter duration in weeks"
                className={`${inputBase} ${errors.durationWeeks ? inputError : ""}`}
                {...register("durationWeeks")}
              />
            </Field>
          </div>

          {/* Row 3: Max Seats | Sponsor | Circle Space ID */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-4">
            <Field label="Max Seats / Capacity" required error={errors.maxSeats?.message}>
              <input
                type="number"
                min="1"
                placeholder="Enter capacity (e.g. 100)"
                className={`${inputBase} ${errors.maxSeats ? inputError : ""}`}
                {...register("maxSeats")}
              />
            </Field>

            <Field label="Sponsor (Optional)" error={errors.sponsor?.message}>
              <input
                type="text"
                placeholder="Enter sponsor name"
                className={inputBase}
                {...register("sponsor")}
              />
            </Field>

            <Field label="Circle Space ID" required error={errors.circleSpaceId?.message}>
              <input
                type="text"
                placeholder="Enter circle space id"
                className={`${inputBase} ${errors.circleSpaceId ? inputError : ""}`}
                {...register("circleSpaceId")}
              />
            </Field>
          </div>

          {/* Row 4: Description (full width) */}
          <Field label="Cohort Description" error={errors.description?.message}>
            <div className="relative">
              <textarea
                rows={4}
                maxLength={500}
                placeholder="Enter a brief description of this cohort..."
                className={`w-full resize-none rounded-lg border border-[#E2E8F0] bg-[#FFF] px-3.5 py-3 font-['Inter'] text-[14px] font-normal leading-none tracking-[-0.03em] text-[#A0A5B0] outline-none placeholder:text-[#A0A5B0] focus:border-[#00B98A] transition-colors ${
                  errors.description ? inputError : ""
                }`}
                {...register("description")}
              />
              <span className="absolute bottom-2.5 right-3 text-xs text-[#94A3B8]">
                {description.length}/500
              </span>
            </div>
          </Field>
        </div>

        {/* ── Additional Settings Section ── */}
        <div className="rounded-xl border border-[#F1F5F9] bg-white p-6 mb-8">
          <h2 className="mb-5 font-['Inter'] text-[16px] font-bold leading-none tracking-[-0.03em] text-[#154535]">Additional Settings</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Field label="Application open date" required error={errors.applicationOpenDate?.message}>
              <div className="relative">
                <DatePickerInput
                  className={`${inputBase} pr-10`}
                  hasError={!!errors.applicationOpenDate}
                  rhfOnChange={register("applicationOpenDate").onChange}
                  rhfOnBlur={register("applicationOpenDate").onBlur}
                  name={register("applicationOpenDate").name}
                  inputRef={register("applicationOpenDate").ref}
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
              </div>
            </Field>

            <Field label="Application close date" required error={errors.applicationCloseDate?.message}>
              <div className="relative">
                <DatePickerInput
                  className={`${inputBase} pr-10`}
                  hasError={!!errors.applicationCloseDate}
                  rhfOnChange={register("applicationCloseDate").onChange}
                  rhfOnBlur={register("applicationCloseDate").onBlur}
                  name={register("applicationCloseDate").name}
                  inputRef={register("applicationCloseDate").ref}
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
              </div>
            </Field>

            <Field label="Application Statuse" required error={errors.applicationStatus?.message}>
              <div className="relative">
                <select
                  className={`${inputBase} appearance-none pr-9 cursor-pointer ${
                    errors.applicationStatus ? inputError : ""
                  }`}
                  {...register("applicationStatus")}
                >
                  <option value="Active">Active</option>
                  <option value="Draft">Draft</option>
                  <option value="Archived">Archived</option>
                  <option value="Pending">Pending</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </div>
            </Field>
          </div>
        </div>

        {/* ── Form Actions ── */}
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => router.push("/dashboard-light/cohorts")}
            className="rounded-lg bg-[#A0A5B0] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#8A8F9A] transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-lg bg-[#31CA92] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#28B07E] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Creating…" : "+ Create Cohort"}
          </button>
        </div>
      </form>
    </div>
  );
}
