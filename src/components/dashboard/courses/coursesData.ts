import type { StaticImageData } from "next/image";

import course1 from "../../../assets/Courses/C-1.jpg";
import course2 from "../../../assets/Courses/C-2.jpg";
import course3 from "../../../assets/Courses/C-3.jpg";
import course4 from "../../../assets/Courses/C-4.jpg";
import course5 from "../../../assets/Courses/C-5.jpg";
import course6 from "../../../assets/Courses/C-6.jpg";
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
    id: "ai-software-engineering",
    title: "AI for Software Engineering",
    subtitle: "Code Generation, Architecture & Agent Workflows",
    track: "Software Engineering",
    audience: "FOR SOFTWARE ENGINEERS, DEVELOPERS & TECH LEADS",
    duration: "8 weeks",
    sessions: "16 Sessions",
    image: course1,
    progress: 60,
  },
  {
    id: "ai-product-management",
    title: "AI for Product Management",
    subtitle: "AI PRDs, Roadmaps & Strategy",
    track: "Product Management",
    audience: "FOR PRODUCT MANAGERS, FOUNDERS & STRATEGISTS",
    duration: "8 weeks",
    sessions: "14 Sessions",
    image: course2,
    progress: 100,
  },
  {
    id: "ai-marketing",
    title: "AI for Marketing",
    subtitle: "Full-Funnel AI Strategy & Growth",
    track: "Marketing",
    audience: "FOR MARKETERS, BRAND MANAGERS & SOCIAL LEADS",
    duration: "8 weeks",
    sessions: "16 Sessions",
    image: course3,
    progress: 100,
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    subtitle: "Workflow Orchestration & Autonomous Ops",
    track: "Automation",
    audience: "FOR OPERATORS, BUILDERS & BUSINESS LEADS",
    duration: "6 weeks",
    sessions: "12 Sessions",
    image: course4,
    progress: 100,
  },
  {
    id: "ai-storytelling",
    title: "AI for StoryTelling",
    subtitle: "Generative Video, Audio & Storytelling",
    track: "Creative Direction",
    audience: "FOR CREATORS, DIRECTORS & DESIGNERS",
    duration: "8 weeks",
    sessions: "14 Sessions",
    image: course5,
    progress: 100,
  },
  {
    id: "ai-african-use-cases",
    title: "AI for African Use Cases",
    subtitle: "Local Solutions, Data & Deployment",
    track: "Regional Impact",
    audience: "FOR AFRICAN BUILDERS, INNOVATORS & OPERATORS",
    duration: "8 weeks",
    sessions: "14 Sessions",
    image: course6,
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
