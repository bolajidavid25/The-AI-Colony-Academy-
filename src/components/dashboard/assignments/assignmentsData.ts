export type AssignmentStatus = "Pending" | "Submitted" | "Graded" | "Rejected";

export interface AssignmentAttachment {
  id: string;
  name: string;
  size: string;
  type: "PDF" | "ZIP" | "DOC";
}

export interface SubmittedFile {
  id: string;
  name: string;
  size: string;
}

export interface AssignmentSubmission {
  submittedAt: string;
  files: SubmittedFile[];
}

export interface AssignmentFeedback {
  score: number;
  maxScore: number;
  instructorName: string;
  instructorRole: string;
  gradedAt: string;
  comment: string;
}

export interface AssignmentItem {
  id: string;
  title: string;
  courseModule: string;
  dueIn: string;
  dueDate: string;
  dueTimestamp: number;
  status: AssignmentStatus;
  description: string;
  requirements: string[];
  deliverables: string[];
  attachments: AssignmentAttachment[];
  submission?: AssignmentSubmission;
  feedback?: AssignmentFeedback;
  rejectionReason?: string;
}

export const ASSIGNMENT_FILTER_OPTIONS: Array<"All Categories" | AssignmentStatus> = [
  "All Categories",
  "Pending",
  "Submitted",
  "Graded",
  "Rejected",
];

export const ASSIGNMENT_SORT_OPTIONS = [
  "Sort By Recent",
  "Due Soonest",
  "Title (A-Z)",
] as const;

export type AssignmentSortOption = (typeof ASSIGNMENT_SORT_OPTIONS)[number];

const SHARED_BRIEF_ATTACHMENTS: AssignmentAttachment[] = [
  { id: "att-1", name: "Assignment Brief", size: "200kb", type: "PDF" },
  { id: "att-2", name: "Assignment Brief 1", size: "200kb", type: "PDF" },
  { id: "att-3", name: "Assignment Brief 2", size: "200kb", type: "PDF" },
  { id: "att-4", name: "Assignment Brief 3", size: "200kb", type: "PDF" },
  { id: "att-5", name: "Assignment Brief 4", size: "200kb", type: "PDF" },
];

const EXACT_SCREENSHOT_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const EXACT_SCREENSHOT_REQUIREMENTS = [
  "Use RAG for knowledge retrieval",
  "Support multi-turn conversations",
  "Include fall back of unknown answers",
  "Deploy and share live demo",
];

const EXACT_SCREENSHOT_DELIVERABLES = [
  "Source code (Github link)",
  "Demo video (5-10 mins)",
  "Project Report (PDF)",
];

export const INITIAL_ASSIGNMENTS: AssignmentItem[] = [
  {
    id: "asg-1",
    title: "Create An AI Customer Support agent",
    courseModule: "AI Engineering - Module 4",
    dueIn: "3 days",
    dueDate: "July 10, 2026. 11:00AM",
    dueTimestamp: new Date("2026-07-10T11:00:00").getTime(),
    status: "Pending",
    description: EXACT_SCREENSHOT_DESCRIPTION,
    requirements: EXACT_SCREENSHOT_REQUIREMENTS,
    deliverables: EXACT_SCREENSHOT_DELIVERABLES,
    attachments: SHARED_BRIEF_ATTACHMENTS,
  },
  {
    id: "asg-2",
    title: "Create An AI Customer Support agent",
    courseModule: "AI Engineering - Module 4",
    dueIn: "3 days",
    dueDate: "July 10, 2026. 11:00AM",
    dueTimestamp: new Date("2026-07-10T11:00:00").getTime(),
    status: "Submitted",
    description: EXACT_SCREENSHOT_DESCRIPTION,
    requirements: EXACT_SCREENSHOT_REQUIREMENTS,
    deliverables: EXACT_SCREENSHOT_DELIVERABLES,
    attachments: SHARED_BRIEF_ATTACHMENTS,
    submission: {
      submittedAt: "July 10, 2026. 11:00AM",
      files: [
        { id: "sub-file-1", name: "Assignment Brief", size: "200kb" },
        { id: "sub-file-2", name: "Assignment Brief 1", size: "200kb" },
      ],
    },
  },
  {
    id: "asg-3",
    title: "Create An AI Customer Support agent",
    courseModule: "AI Engineering - Module 4",
    dueIn: "3 days",
    dueDate: "July 10, 2026. 11:00AM",
    dueTimestamp: new Date("2026-07-10T11:00:00").getTime(),
    status: "Graded",
    description: EXACT_SCREENSHOT_DESCRIPTION,
    requirements: EXACT_SCREENSHOT_REQUIREMENTS,
    deliverables: EXACT_SCREENSHOT_DELIVERABLES,
    attachments: SHARED_BRIEF_ATTACHMENTS,
    submission: {
      submittedAt: "July 10, 2026. 11:00AM",
      files: [
        { id: "sub-file-3", name: "Assignment Brief", size: "200kb" },
        { id: "sub-file-3b", name: "Assignment Brief 1", size: "200kb" },
      ],
    },
  },
  {
    id: "asg-4",
    title: "Create An AI Customer Support agent",
    courseModule: "AI Engineering - Module 4",
    dueIn: "3 days",
    dueDate: "July 10, 2026. 11:00AM",
    dueTimestamp: new Date("2026-07-10T11:00:00").getTime(),
    status: "Graded",
    description: EXACT_SCREENSHOT_DESCRIPTION,
    requirements: EXACT_SCREENSHOT_REQUIREMENTS,
    deliverables: EXACT_SCREENSHOT_DELIVERABLES,
    attachments: SHARED_BRIEF_ATTACHMENTS,
    submission: {
      submittedAt: "July 10, 2026. 11:00AM",
      files: [
        { id: "sub-file-4", name: "Assignment Brief", size: "200kb" },
        { id: "sub-file-4b", name: "Assignment Brief 1", size: "200kb" },
      ],
    },
    feedback: {
      score: 94,
      maxScore: 100,
      instructorName: "Jermaine Doe",
      instructorRole: "Lead AI Instructor",
      gradedAt: "July 10, 2026. 11:00AM",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  },
  {
    id: "asg-5",
    title: "Create An AI Customer Support agent",
    courseModule: "AI Engineering - Module 4",
    dueIn: "3 days",
    dueDate: "July 10, 2026. 11:00AM",
    dueTimestamp: new Date("2026-07-10T11:00:00").getTime(),
    status: "Pending",
    description: EXACT_SCREENSHOT_DESCRIPTION,
    requirements: EXACT_SCREENSHOT_REQUIREMENTS,
    deliverables: EXACT_SCREENSHOT_DELIVERABLES,
    attachments: SHARED_BRIEF_ATTACHMENTS.slice(0, 4),
  },
  {
    id: "asg-6",
    title: "Create An AI Customer Support agent",
    courseModule: "AI Engineering - Module 4",
    dueIn: "3 days",
    dueDate: "July 10, 2026. 11:00AM",
    dueTimestamp: new Date("2026-07-10T11:00:00").getTime(),
    status: "Rejected",
    description: EXACT_SCREENSHOT_DESCRIPTION,
    requirements: EXACT_SCREENSHOT_REQUIREMENTS,
    deliverables: EXACT_SCREENSHOT_DELIVERABLES,
    attachments: SHARED_BRIEF_ATTACHMENTS.slice(0, 4),
    rejectionReason:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    submission: {
      submittedAt: "July 10, 2026. 11:00AM",
      files: [
        { id: "sub-file-5", name: "Assignment Brief", size: "200kb" },
        { id: "sub-file-5b", name: "Assignment Brief 1", size: "200kb" },
      ],
    },
  },
  {
    id: "asg-7",
    title: "Create An AI Customer Support agent",
    courseModule: "AI Engineering - Module 4",
    dueIn: "3 days",
    dueDate: "July 10, 2026. 11:00AM",
    dueTimestamp: new Date("2026-07-10T11:00:00").getTime(),
    status: "Graded",
    description: EXACT_SCREENSHOT_DESCRIPTION,
    requirements: EXACT_SCREENSHOT_REQUIREMENTS,
    deliverables: EXACT_SCREENSHOT_DELIVERABLES,
    attachments: SHARED_BRIEF_ATTACHMENTS.slice(0, 3),
    submission: {
      submittedAt: "July 10, 2026. 11:00AM",
      files: [
        { id: "sub-file-6", name: "Assignment Brief", size: "200kb" },
        { id: "sub-file-6b", name: "Assignment Brief 1", size: "200kb" },
      ],
    },
    feedback: {
      score: 90,
      maxScore: 100,
      instructorName: "Jermaine Doe",
      instructorRole: "Lead AI Instructor",
      gradedAt: "July 10, 2026. 11:00AM",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  },
  {
    id: "asg-8",
    title: "Create An AI Customer Support agent",
    courseModule: "AI Engineering - Module 4",
    dueIn: "3 days",
    dueDate: "July 10, 2026. 11:00AM",
    dueTimestamp: new Date("2026-07-10T11:00:00").getTime(),
    status: "Pending",
    description: EXACT_SCREENSHOT_DESCRIPTION,
    requirements: EXACT_SCREENSHOT_REQUIREMENTS,
    deliverables: EXACT_SCREENSHOT_DELIVERABLES,
    attachments: SHARED_BRIEF_ATTACHMENTS.slice(0, 4),
  },
  {
    id: "asg-9",
    title: "Create An AI Customer Support agent",
    courseModule: "AI Engineering - Module 4",
    dueIn: "3 days",
    dueDate: "July 10, 2026. 11:00AM",
    dueTimestamp: new Date("2026-07-10T11:00:00").getTime(),
    status: "Pending",
    description: EXACT_SCREENSHOT_DESCRIPTION,
    requirements: EXACT_SCREENSHOT_REQUIREMENTS,
    deliverables: EXACT_SCREENSHOT_DELIVERABLES,
    attachments: SHARED_BRIEF_ATTACHMENTS,
  },
  {
    id: "asg-10",
    title: "Create An AI Customer Support agent",
    courseModule: "AI Engineering - Module 4",
    dueIn: "3 days",
    dueDate: "July 10, 2026. 11:00AM",
    dueTimestamp: new Date("2026-07-10T11:00:00").getTime(),
    status: "Graded",
    description: EXACT_SCREENSHOT_DESCRIPTION,
    requirements: EXACT_SCREENSHOT_REQUIREMENTS,
    deliverables: EXACT_SCREENSHOT_DELIVERABLES,
    attachments: SHARED_BRIEF_ATTACHMENTS.slice(0, 3),
    submission: {
      submittedAt: "July 10, 2026. 11:00AM",
      files: [
        { id: "sub-file-7", name: "Assignment Brief", size: "200kb" },
        { id: "sub-file-7b", name: "Assignment Brief 1", size: "200kb" },
      ],
    },
    feedback: {
      score: 96,
      maxScore: 100,
      instructorName: "Jermaine Doe",
      instructorRole: "Lead AI Instructor",
      gradedAt: "July 10, 2026. 11:00AM",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  },
  {
    id: "asg-11",
    title: "Create An AI Customer Support agent",
    courseModule: "AI Engineering - Module 4",
    dueIn: "3 days",
    dueDate: "July 10, 2026. 11:00AM",
    dueTimestamp: new Date("2026-07-10T11:00:00").getTime(),
    status: "Submitted",
    description: EXACT_SCREENSHOT_DESCRIPTION,
    requirements: EXACT_SCREENSHOT_REQUIREMENTS,
    deliverables: EXACT_SCREENSHOT_DELIVERABLES,
    attachments: SHARED_BRIEF_ATTACHMENTS.slice(0, 2),
    submission: {
      submittedAt: "July 10, 2026. 11:00AM",
      files: [
        { id: "sub-file-8", name: "Assignment Brief", size: "200kb" },
        { id: "sub-file-8b", name: "Assignment Brief 1", size: "200kb" },
      ],
    },
  },
  {
    id: "asg-12",
    title: "Create An AI Customer Support agent",
    courseModule: "AI Engineering - Module 4",
    dueIn: "3 days",
    dueDate: "July 10, 2026. 11:00AM",
    dueTimestamp: new Date("2026-07-10T11:00:00").getTime(),
    status: "Pending",
    description: EXACT_SCREENSHOT_DESCRIPTION,
    requirements: EXACT_SCREENSHOT_REQUIREMENTS,
    deliverables: EXACT_SCREENSHOT_DELIVERABLES,
    attachments: SHARED_BRIEF_ATTACHMENTS.slice(0, 4),
  },
];
