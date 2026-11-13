export interface EarnedCertificate {
  id: string;
  title: string;
  courseName: string;
  shortLabel: string;
  completionDate: string;
  issuedDate: string;
  subtitleText: string;
  recipientName: string;
}

export interface CompletedCourseCertificate {
  id: string;
  courseName: string;
  shortLabel: string;
  issuedDate: string;
  recipientName: string;
}

export const EARNED_CERTIFICATES: EarnedCertificate[] = [
  {
    id: "ai-software-engineering",
    title: "AI for Software Engineering - Certificate.",
    courseName: "AI for Software Engineering",
    shortLabel: "AI for Software Engineering",
    completionDate: "12, November 2026",
    issuedDate: "12 November 2026",
    subtitleText: "Completion Date: 12, November 2026, Issued on 12 November 2026",
    recipientName: "Jermaine Doe",
  },
  {
    id: "ai-product-management",
    title: "AI for Product Management - Certificate.",
    courseName: "AI for Product Management",
    shortLabel: "AI for Product Management",
    completionDate: "28, October 2026",
    issuedDate: "28 October 2026",
    subtitleText: "Completion Date: 28, October 2026, Issued on 28 October 2026",
    recipientName: "Jermaine Doe",
  },
  {
    id: "ai-marketing",
    title: "AI for Marketing - Certificate.",
    courseName: "AI for Marketing",
    shortLabel: "AI for Marketing",
    completionDate: "14, October 2026",
    issuedDate: "14 October 2026",
    subtitleText: "Completion Date: 14, October 2026, Issued on 14 October 2026",
    recipientName: "Jermaine Doe",
  },
  {
    id: "ai-automation",
    title: "AI Automation - Certificate.",
    courseName: "AI Automation",
    shortLabel: "AI Automation",
    completionDate: "29, September 2026",
    issuedDate: "29 September 2026",
    subtitleText: "Completion Date: 29, September 2026, Issued on 29 September 2026",
    recipientName: "Jermaine Doe",
  },
  {
    id: "ai-storytelling",
    title: "AI for StoryTelling - Certificate.",
    courseName: "AI for StoryTelling",
    shortLabel: "AI for StoryTelling",
    completionDate: "15, September 2026",
    issuedDate: "15 September 2026",
    subtitleText: "Completion Date: 15, September 2026, Issued on 15 September 2026",
    recipientName: "Jermaine Doe",
  },
  {
    id: "ai-african-use-cases",
    title: "AI for African Use Cases - Certificate.",
    courseName: "AI for African Use Cases",
    shortLabel: "AI for African Use Cases",
    completionDate: "30, August 2026",
    issuedDate: "30 August 2026",
    subtitleText: "Completion Date: 30, August 2026, Issued on 30 August 2026",
    recipientName: "Jermaine Doe",
  },
];

export const COMPLETED_COURSES: CompletedCourseCertificate[] = EARNED_CERTIFICATES.map(
  (c) => ({
    id: c.id,
    courseName: c.courseName,
    shortLabel: c.shortLabel,
    issuedDate: c.issuedDate,
    recipientName: c.recipientName,
  })
);

export const EARNED_TAG_PILLS: Array<{ id: string; label: string; certId: string }> = [
  { id: "tag-1", label: "AI for Software Engineering", certId: "ai-software-engineering" },
  { id: "tag-2", label: "AI for Product Management", certId: "ai-product-management" },
  { id: "tag-3", label: "AI for Marketing", certId: "ai-marketing" },
  { id: "tag-4", label: "AI Automation", certId: "ai-automation" },
  { id: "tag-5", label: "AI for StoryTelling", certId: "ai-storytelling" },
  { id: "tag-6", label: "AI for African Use Cases", certId: "ai-african-use-cases" },
];
