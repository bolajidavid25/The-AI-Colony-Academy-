import CourseCard from "./CourseCard";

import course1 from "../assets/Courses/C-1.jpg";
import course2 from "../assets/Courses/C-2.jpg";
import course3 from "../assets/Courses/C-3.jpg";
import course4 from "../assets/Courses/C-4.jpg";
import course5 from "../assets/Courses/C-5.jpg";
import course6 from "../assets/Courses/C-6.jpg";

const courses = [
  {
    title: "AI for Marketers",
    subtitle: "Campaign Operating System",
    audience: "FOR MARKETERS, BRAND MANAGERS, SOCIAL LEADS",
    duration: "8 weeks",
    image: course1,
  },
  {
    title: "AI for Founders",
    subtitle: "Build, Launch, Grow with AI",
    audience: "FOR MARKETERS, BRAND MANAGERS, SOCIAL LEADS",
    duration: "8 weeks",
    image: course2,
  },
  {
    title: "Prompt Engineering for Real Work,",
    audience: "FOR ALL KNOWLEDGE WORKERS",
    duration: "4 weeks",
    image: course3,
  },
  {
    title: "AI Filmmaking and Storytelling,",
    audience: "FOR CREATORS, VIDEO PRODUCERS, CONTENT TEAMS",
    duration: "8 weeks",
    image: course4,
  },
  {
    title: "AI for African Use Cases",
    audience: "FOR AFRICAN BUILDERS AND OPERATORS",
    duration: "8 weeks",
    image: course5,
  },
  {
    title: "Prompt Engineering for Real Work,",
    audience: "FOR ALL KNOWLEDGE WORKERS",
    duration: "4 weeks",
    image: course6,
  },
];

export default function AvailableCourses() {
  return (
    <section
      id="courses"
      aria-labelledby="available-courses-heading"
      className="w-full bg-white px-6 py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1260px]">
        <header className="mb-12 text-center">
          <h2
            id="available-courses-heading"
            className="text-3xl font-bold tracking-[-1px] text-[#002B1F] md:text-4xl lg:text-[42px]"
          >
            Available Courses
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {courses.map((course, index) => (
            <CourseCard
              key={`${course.title}-${index}`}
              title={course.title}
              subtitle={course.subtitle}
              audience={course.audience}
              duration={course.duration}
              image={course.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
