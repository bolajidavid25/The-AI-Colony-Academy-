import type { StaticImageData } from "next/image";
import defaultAvatar from "../../../assets/hero-images/Hero2.jpg";

export type LeaderboardPeriod = "This Month" | "This Week" | "All Time";

export interface TopLearnerCardData {
  id: string;
  rank: number;
  name: string;
  xp: string;
  coursesCompleted: string;
  streakText: string;
  badges: string[];
  extraBadgeCount: number;
  rankColor: string;
  avatar: StaticImageData;
}

export interface LeaderboardTableRow {
  id: string;
  rank: number;
  user: string;
  lessonsCompleted: string;
  streak: string;
  badges: string[];
  xp: string;
  avatar: StaticImageData;
  period: LeaderboardPeriod[];
}

export const LEADERBOARD_PERIODS: LeaderboardPeriod[] = [
  "This Month",
  "This Week",
  "All Time",
];

export const TOP_THREE_LEARNERS: TopLearnerCardData[] = [
  {
    id: "top-1",
    rank: 1,
    name: "James",
    xp: "2,500",
    coursesCompleted: "12 courses completed",
    streakText: "15 days streak",
    badges: ["Code Streak", "Fast Learner"],
    extraBadgeCount: 1,
    rankColor: "#31CA92",
    avatar: defaultAvatar,
  },
  {
    id: "top-2",
    rank: 2,
    name: "Henry",
    xp: "2,500",
    coursesCompleted: "12 courses completed",
    streakText: "15 days streak",
    badges: ["Code Streak", "Fast Learner"],
    extraBadgeCount: 1,
    rankColor: "#2E544A",
    avatar: defaultAvatar,
  },
  {
    id: "top-3",
    rank: 3,
    name: "Racheal",
    xp: "2,500",
    coursesCompleted: "12 courses completed",
    streakText: "15 days streak",
    badges: ["Code Streak", "Fast Learner"],
    extraBadgeCount: 1,
    rankColor: "#FF9E00",
    avatar: defaultAvatar,
  },
];

export const LEADERBOARD_ROWS: LeaderboardTableRow[] = Array.from(
  { length: 12 },
  (_, index) => ({
    id: `lb-row-${index + 1}`,
    rank: 3,
    user: "John Doe",
    lessonsCompleted: "8 Lessons",
    streak: "15 days",
    badges: ["Code Streak", "Fast Learner"],
    xp: "2,000",
    avatar: defaultAvatar,
    period: ["This Month", "This Week", "All Time"],
  })
);
