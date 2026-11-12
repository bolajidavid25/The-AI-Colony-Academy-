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
  {
    id: "adv-ai-marketing",
    title: "Advanced AI Marketing Course",
    subtitle: "Full-Funnel AI Strategy & Growth",
    track: "Growth",
    audience: "FOR MARKETERS, FOUNDERS & SOCIAL LEADS",
    duration: "8 weeks",
    sessions: "16 Sessions",
    image: course2,
    progress: 100,
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering Masterclass",
    subtitle: "Advanced Reasoning, Tool Use & LLM Architecture",
    track: "AI Engineering ",
    audience: "FOR DEVELOPERS, ENGINEERS & RESEARCHERS",
    duration: "6 weeks",
    sessions: "12 Sessions",
    image: course3,
    progress: 100,
  },
  {
    id: "ai-filmmaking",
    title: "AI for Filmmaking & Creative Direction",
    subtitle: "Generative Video, Audio & Storytelling",
    track: "Creative",
    audience: "FOR CREATORS, DIRECTORS & DESIGNERS",
    duration: "6 weeks",
    sessions: "10 Sessions",
    image: course4,
    progress: 100,
  },
];

export const continueLearningCourse = myCourses[0];

export const instructor = {
  name: "Jermaine Doe",
  role: "AI Marketer",
  photo: instructorPhoto,
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
};
export type Lesson = {
  id:number;
  title:string;
}
export const modules = [
  {
    id: 1,
    title: "1. Introduction to the creator economy",
    status: "complete" as const,
    detail: "Complete",
    lessons: [
            { title: "Welcome", duration: "5m" },
            { title: "The Basics", duration: "15m" }
    ]
  },
  {
    id: 2,
    title: "2. Introduction to the creator economy",
    status: "in-progress" as const,
    detail: "In Progress - 25m left",
    lessons:[
      { title: "Welcome", duration: "5m" },
      { title: "The Basics", duration: "15m" }
    ]
  },
  {
    id: 3,
    title: "3. Introduction to the creator economy",
    status: "locked" as const,
    detail: "Locked",
    lessons: [
      { title: "Welcome", duration: "5m" },
      { title: "The Basics", duration: "15m" }
    ]
  },
];

export const learnings = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
];
