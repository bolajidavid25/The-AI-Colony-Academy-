import Image, { type StaticImageData } from "next/image";
import avatar1 from "../../assets/hero-images/Hero2.jpg";
import avatar2 from "../../assets/hero-images/Hero3.jpg";
import avatar3 from "../../assets/hero-images/Hero4.jpg";
import avatar4 from "../../assets/hero-images/Hero5.jpg";
import avatar5 from "../../assets/hero-images/Hero1.jpg";
import avatar6 from "../../assets/hero-images/Hero6.jpg";

export type LeaderboardEntry = {
  rank: number;
  name: string;
  streak: string;
  xp: string;
  avatar: StaticImageData;
  isYou?: boolean;
};

export const leaderboardEntries: LeaderboardEntry[] = [
  {
    rank: 1,
    name: "Sarah Kingsley",
    streak: "15 days",
    xp: "2,500 XP",
    avatar: avatar1,
  },
  {
    rank: 2,
    name: "James Okonkwo",
    streak: "12 days",
    xp: "2,180 XP",
    avatar: avatar1,
  },
  {
    rank: 3,
    name: "Amara Diallo",
    streak: "11 days",
    xp: "1,960 XP",
    avatar: avatar1,
  },
  {
    rank: 4,
    name: "David Mensah",
    streak: "9 days",
    xp: "1,720 XP",
    avatar: avatar1,
  },
  {
    rank: 5,
    name: "David Chen (you)",
    streak: "8 days",
    xp: "1,540 XP",
    avatar: avatar1,
    isYou: true,
  },
  {
    rank: 6,
    name: "Fatima Bello",
    streak: "7 days",
    xp: "1,410 XP",
    avatar: avatar1,
  },
  {
    rank: 7,
    name: "Kwame Asante",
    streak: "6 days",
    xp: "1,280 XP",
    avatar: avatar1,
  },
  {
    rank: 8,
    name: "Ngozi Eze",
    streak: "5 days",
    xp: "1,150 XP",
    avatar: avatar1,
  },
];
