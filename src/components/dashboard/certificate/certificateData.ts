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
    id: "adv-ai-marketing",
    title: "Advanced AI Marketing - Certificate.",
    courseName: "Advanced AI Marketing Course",
    shortLabel: "Advanced AI Marketing",
    completionDate: "12, November 2026",
    issuedDate: "12 November 2026",
    subtitleText: "Completion Date: 12, November 2026, Issued on 12 November 2026",
    recipientName: "Jermaine Doe",
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering - Certificate.",
    courseName: "Prompt Engineering Masterclass",
    shortLabel: "Prompt Engineering",
    completionDate: "24, October 2026",
    issuedDate: "24 October 2026",
    subtitleText: "Completion Date: 24, October 2026, Issued on 24 October 2026",
    recipientName: "Jermaine Doe",
  },
  {
    id: "ai-filmmaking",
    title: "AI For Filmmaking - Certificate.",
    courseName: "AI for Filmmaking & Creative Direction",
    shortLabel: "AI For Filmmaking",
    completionDate: "18, September 2026",
    issuedDate: "18 September 2026",
    subtitleText: "Completion Date: 18, September 2026, Issued on 18 September 2026",
    recipientName: "Jermaine Doe",
  },
  {
    id: "ai-african-use-cases",
    title: "AI For African Use Cases - Certificate.",
    courseName: "AI For African Use Cases",
    shortLabel: "AI For African Use Cases",
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
  { id: "tag-1", label: "Advanced AI Marketing", certId: "adv-ai-marketing" },
  { id: "tag-2", label: "Prompt Engineering", certId: "prompt-engineering" },
  { id: "tag-3", label: "AI For Filmmaking", certId: "ai-filmmaking" },
  { id: "tag-4", label: "AI For African Use Cases", certId: "ai-african-use-cases" },
];
