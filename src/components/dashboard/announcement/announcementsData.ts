export type AnnouncementCategory =
  | "All"
  | "Course Update"
  | "Live Sessions"
  | "Community";

export interface AnnouncementItem {
  id: string;
  category: "Course Update" | "Live Sessions" | "Community";
  categoryColor: string;
  timeAgo: string;
  title: string;
  description: string;
  extendedText?: string;
  iconType: "logo" | "book" | "calendar";
  iconBg: string;
  eventDate?: string;
  eventTime?: string;
  linkHref?: string;
  linkText?: string;
  isRead?: boolean;
}

export const INITIAL_ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: "announcement-1",
    category: "Course Update",
    categoryColor: "#64748B",
    timeAgo: "2 hours ago",
    title: "Welcome to AI Colony Academy! 👋",
    description:
      "We're excited to have you on this journey. Explore your courses, join live sessions, and connect with our community.",
    extendedText:
      "Here are three quick steps to get the most out of your academy experience:\n• Complete your student profile to personalise course recommendations.\n• Explore your cohort modules and stay on track with weekly assignments.\n• Join our weekly live sessions to ask questions directly to industry instructors.",
    iconType: "logo",
    iconBg: "bg-[#061C19]",
    linkHref: "/dashboard/courses",
    linkText: "Explore Courses",
    isRead: false,
  },
  {
    id: "announcement-2",
    category: "Course Update",
    categoryColor: "#FF5D2A",
    timeAgo: "2 days ago",
    title: "New module Added: AI Agent Memory",
    description: "A new module has been added to the AI for Software Engineering course",
    extendedText:
      "Module 5 covers working memory buffers, vector retrieval embeddings, and durable semantic storage across agent execution loops. Now available with code walkthroughs.",
    iconType: "book",
    iconBg: "bg-[#FF5D2A]",
    linkHref: "/dashboard/courses",
    linkText: "Open Course",
    isRead: false,
  },
  {
    id: "announcement-3",
    category: "Live Sessions",
    categoryColor: "#31CA92",
    timeAgo: "1 day ago",
    title: "Upcoming Live Session: Building AI Agents",
    description:
      "Join us this Saturday for an exclusive live session with David Smith, Don't miss out!",
    extendedText:
      "In this 90-minute live workshop, David Smith demonstrates multi-agent tool calling pipelines, supervisor patterns, and real-time failure recovery.",
    iconType: "calendar",
    iconBg: "bg-[#31CA92]",
    eventDate: "Tomorrow, Jul 8, 2026",
    eventTime: "6:00PM GMT",
    linkHref: "/dashboard/live",
    linkText: "Go to Live Sessions",
    isRead: true,
  },
];
