// ─── Types ────────────────────────────────────────────────────────────────────

export type CohortStatus = "Open" | "Close" | "Archived" | "Draft" | "Pending" | "Active";

export type Instructor = {
  id: string;
  name: string;
  role: "Lead Instructor" | "Instructor";
  title: string;
  email: string;
  phone: string;
  avatarInitials: string;
  avatarUrl?: string;
};

export type Session = {
  id: string;
  title: string;
  date: string;
  time: string;
};

export type ActivityItem = {
  id: string;
  type: "session" | "assignment" | "student" | "update";
  label: string;
  date: string;
  time: string;
};

export type Cohort = {
  id: string;
  name: string;
  status: CohortStatus;
  studentSeats: { enrolled: number; total: number };
  startDate: string;
  endDate: string;
  courses: number;
  thinkficCourseId: string;
  duration: string;
  capacity: number;
  enrolledStudents: number;
  sponsor: string;
  circleSpaceId: string;
  createdAt: string;
  description: string;
  instructors: Instructor[];
  sessions: Session[];
  recentActivity: ActivityItem[];
};

// ─── Mock Data ────────────────────────────────────────────────────────────────

export const COHORTS_DATA: Cohort[] = [
  {
    id: "1",
    name: "AI for marketers",
    status: "Open",
    studentSeats: { enrolled: 66, total: 100 },
    startDate: "Jan 03, 2026",
    endDate: "July 14, 2026",
    courses: 5,
    thinkficCourseId: "AI Marketing",
    duration: "12 Weeks",
    capacity: 100,
    enrolledStudents: 66,
    sponsor: "Google",
    circleSpaceId: "circle_ai_marketing_001",
    createdAt: "May 28, 2026, 10:30 AM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    instructors: [
      {
        id: "i1",
        name: "James Rodriguez",
        role: "Lead Instructor",
        title: "AI Specialist and Machine learning engineer",
        email: "James.rodriguez@gmail",
        phone: "+234 9012 345 678",
        avatarInitials: "JR",
        avatarUrl: "https://i.pravatar.cc/150?img=11",
      },
      {
        id: "i2",
        name: "James Rodriguez",
        role: "Instructor",
        title: "AI Specialist and Machine learning engineer",
        email: "James.rodriguez@gmail",
        phone: "+234 9012 345 678",
        avatarInitials: "JR",
        avatarUrl: "https://i.pravatar.cc/150?img=32",
      },
      {
        id: "i3",
        name: "James Rodriguez",
        role: "Instructor",
        title: "AI Specialist and Machine learning engineer",
        email: "James.rodriguez@gmail",
        phone: "+234 9012 345 678",
        avatarInitials: "JR",
        avatarUrl: "https://i.pravatar.cc/150?img=57",
      },
    ],
    sessions: [
      {
        id: "s1",
        title: "Introduction to AI",
        date: "Jun 07, 2026",
        time: "10:00am - 12:00pm (GMT)",
      },
      {
        id: "s2",
        title: "Machine Learning Basics",
        date: "Jun 09, 2026",
        time: "10:00am - 12:00pm (GMT)",
      },
      {
        id: "s3",
        title: "Deep Learning fundamentals",
        date: "Jul 12, 2026",
        time: "3:00pm - 4:00pm (GMT)",
      },
      {
        id: "s4",
        title: "AI Project Workshop",
        date: "Jun 07, 2026",
        time: "10:00am - 12:00pm (GMT)",
      },
    ],
    recentActivity: [
      {
        id: "a1",
        type: "session",
        label: "Live session scheduled: introduction to AI",
        date: "Jun 09, 2026",
        time: "10:00am - 12:00pm (GMT)",
      },
      {
        id: "a2",
        type: "assignment",
        label: "Assignment Created",
        date: "Jun 09, 2026",
        time: "10:00am - 12:00pm (GMT)",
      },
      {
        id: "a3",
        type: "student",
        label: "New student Enrolled",
        date: "Jun 09, 2026",
        time: "10:00am - 12:00pm (GMT)",
      },
      {
        id: "a4",
        type: "update",
        label: "Cohort Update by Admin User",
        date: "Jun 09, 2026",
        time: "10:00am - 12:00pm (GMT)",
      },
    ],
  },
  {
    id: "2",
    name: "AI for founders",
    status: "Close",
    studentSeats: { enrolled: 66, total: 100 },
    startDate: "Jan 03, 2026",
    endDate: "July 14, 2026",
    courses: 5,
    thinkficCourseId: "AI Founders",
    duration: "12 Weeks",
    capacity: 100,
    enrolledStudents: 66,
    sponsor: "Google",
    circleSpaceId: "circle_ai_founders_001",
    createdAt: "May 28, 2026, 10:30 AM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    instructors: [],
    sessions: [],
    recentActivity: [],
  },
  {
    id: "3",
    name: "AI for filmmaking",
    status: "Archived",
    studentSeats: { enrolled: 66, total: 100 },
    startDate: "Jan 03, 2026",
    endDate: "July 14, 2026",
    courses: 5,
    thinkficCourseId: "AI Film",
    duration: "12 Weeks",
    capacity: 100,
    enrolledStudents: 66,
    sponsor: "Google",
    circleSpaceId: "circle_ai_film_001",
    createdAt: "May 28, 2026, 10:30 AM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    instructors: [],
    sessions: [],
    recentActivity: [],
  },
  {
    id: "4",
    name: "AI for african use cases",
    status: "Draft",
    studentSeats: { enrolled: 66, total: 100 },
    startDate: "Jan 03, 2026",
    endDate: "July 14, 2026",
    courses: 5,
    thinkficCourseId: "AI Africa",
    duration: "12 Weeks",
    capacity: 100,
    enrolledStudents: 66,
    sponsor: "Google",
    circleSpaceId: "circle_ai_africa_001",
    createdAt: "May 28, 2026, 10:30 AM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    instructors: [],
    sessions: [],
    recentActivity: [],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

// 7. Status styles — no border
// Open:     text #31CA92, bg #8FF9D1
// Close:    text #FF9E00, bg #FF9E001A (light tint)
// Archived: text #FE4F08, bg #FE4F081A (light tint)
// Draft:    text #9E90F2, bg #9E90F21A (light tint)
export const STATUS_STYLES: Record<CohortStatus, string> = {
  Open: "bg-[#8FF9D1] text-[#31CA92]",
  Close: "bg-[#FF9E0020] text-[#FF9E00]",
  Archived: "bg-[#FE4F0820] text-[#FE4F08]",
  Draft: "bg-[#9E90F220] text-[#9E90F2]",
  Pending: "bg-[#FF9E0020] text-[#FF9E00]",
  Active: "bg-[#8FF9D1] text-[#31CA92]",
};
