import type { StaticImageData } from "next/image";

import course1 from "../../../assets/Courses/C-1.jpg";
import course2 from "../../../assets/Courses/C-2.jpg";
import course3 from "../../../assets/Courses/C-3.jpg";
import course4 from "../../../assets/Courses/C-4.jpg";
import instructorPhoto from "../../../assets/hero-images/Hero2.jpg";

export type Course = {
  id: string;
  title: string;
  subtitle: string;
  track: string;
  audience: string;
  duration: string;
  sessions: string;
  image: StaticImageData;
  progress: number;
};

export const myCourses: Course[] = [
  {
    id: "ai-for-marketers",
    title: "AI for Founders",
    subtitle: "Campaign Operating System",
    track: "AI Engineering ",
    audience: "FOR MARKETERS, BRAND MANAGERS, SOCIAL LEADS",
    duration: "8 weeks",
    sessions: "14 Sessions",
    image: course1,
    progress: 40,
  },
];

export const continueLearningCourse = myCourses[0];

export const instructor = {
  name: "Jermaine Doe",
  role: "AI Marketer",
  photo: instructorPhoto,
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
};
interface Lesson {
  id:number;
  title:string;
}
export const modules = [
  {
    id: 1,
    title: "1. Introduction to the creator economy",
    status: "complete" as const,
    detail: "Complete",
    lessons: Lesson[]
  },
  {
    id: 2,
    title: "2. Introduction to the creator economy",
    status: "in-progress" as const,
    detail: "In Progress - 25m left",
    lessons: Lesson[]
  },
  {
    id: 3,
    title: "3. Introduction to the creator economy",
    status: "locked" as const,
    detail: "Locked",
    lessons: Lesson[]
  },
];

export const learnings = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
];
