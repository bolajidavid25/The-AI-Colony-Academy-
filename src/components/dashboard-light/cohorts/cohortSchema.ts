import { z } from "zod";

// ─── Zod Schema ───────────────────────────────────────────────────────────────
// This schema is the single source of truth for validation rules and TypeScript
// types for the "Create New Cohort" form.

export const CohortFormSchema = z
  .object({
    cohortName: z.string().min(1, "Cohort name is required"),
    thinkficCourseId: z.string().min(1, "Thinkfic Course ID is required"),
    instructor: z.string().min(1, "Instructor is required"),
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().min(1, "End date is required"),
    durationWeeks: z
      .string()
      .min(1, "Duration is required")
      .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "Duration must be a positive number",
      }),
    maxSeats: z
      .string()
      .min(1, "Max seats / capacity is required")
      .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "Capacity must be a positive number",
      }),
    sponsor: z.string().optional(),
    circleSpaceId: z.string().min(1, "Circle Space ID is required"),
    description: z
      .string()
      .max(500, "Description must be 500 characters or fewer")
      .optional(),
    applicationOpenDate: z.string().min(1, "Application open date is required"),
    applicationCloseDate: z.string().min(1, "Application close date is required"),
    applicationStatus: z.enum(["Active", "Draft", "Archived", "Pending"], {
      error: "Please select a valid status",
    }),
  })
  // Cross-field: end date must be after start date
  .refine(
    (data) => {
      if (!data.startDate || !data.endDate) return true;
      return new Date(data.endDate) > new Date(data.startDate);
    },
    {
      message: "End date must be after start date",
      path: ["endDate"],
    }
  )
  // Cross-field: application close date must be after open date
  .refine(
    (data) => {
      if (!data.applicationOpenDate || !data.applicationCloseDate) return true;
      return new Date(data.applicationCloseDate) > new Date(data.applicationOpenDate);
    },
    {
      message: "Application close date must be after open date",
      path: ["applicationCloseDate"],
    }
  );

// TypeScript type automatically derived from the schema — no duplication needed
export type CohortFormData = z.infer<typeof CohortFormSchema>;
