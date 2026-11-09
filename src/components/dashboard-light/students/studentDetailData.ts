import { INITIAL_STUDENTS_DATA } from "./studentsData";

export interface StudentDetail {
  id: string;
  name: string;
  status: "Active" | "Inactive";
  headerStatus: "Pending" | "Active" | "Completed";
  submittedDate: string;
  title: string;
  email: string;
  phone: string;
  gender: string;
  country: string;
  state: string;
  employmentStatus: string;
  educationalLevel: string;
  hasPriorTechExp: boolean;
  agreedToTerms: boolean;
  courseId: string;
  dateApplied: string;
  workSamples: {
    portfolioUrl: string;
    githubUrl: string;
    caseStudyTitle: string;
    caseStudyUrl: string;
  };
  metrics: {
    attendance: string;
    certificateEligibility: string;
    certificateSubtext: string;
    assignmentSubmissions: string;
    assignmentSubmissionsTotal: string;
    leaderboardRank: string;
    leaderboardRankTotal: string;
    topPercent?: string;
    totalPoints: string;
  };
  atRisk: {
    riskLevel: string;
    attendance: string;
    attendanceStatus: string;
    submission: string;
    submissionStatus: string;
    activityPoints: string;
    activityPointsStatus: string;
    criteriaNote: string;
  };
  certificateEligibility: {
    moduleCompletion: string;
    moduleStatus: string;
    attendance: string;
    attendanceStatus: string;
    capstoneProject: string;
    capstoneStatus: string;
    eligibility: string;
  };
  attendanceSessions: Array<{
    id: string;
    session: string;
    startsDate: string;
    status: "Present" | "Absent";
    source: string;
  }>;
  assignmentReviews: Array<{
    id: string;
    assignment: string;
    dueDate: string;
    status: "Approved" | "Reviewed" | "Not Submitted" | "Submitted";
    reviewedBy: string;
    score: string;
  }>;
  recentActivities: Array<{
    id: string;
    requirement: string;
    dateTime: string;
    details: string;
  }>;
  internalNotes: string;
}

export const DEFAULT_STUDENT_DETAIL: StudentDetail = {
  id: "stu-1",
  name: "James Rodriguez",
  status: "Active",
  headerStatus: "Pending",
  submittedDate: "Submitted on Jul 12, 2026 - 12:45 PM",
  title: "Specialist and Machine learning engineer",
  email: "james.rodriguez@gmail.com",
  phone: "+234 9012 345 678",
  gender: "Male",
  country: "Nigeria",
  state: "Lagos",
  employmentStatus: "Employed",
  educationalLevel: "Bachelors Degree",
  hasPriorTechExp: true,
  agreedToTerms: true,
  courseId: "#taaca-2026-123",
  dateApplied: "Jul 12, 2026",
  workSamples: {
    portfolioUrl: "https://jonathan.cooper.dev",
    githubUrl: "https://jonathan.cooper.dev",
    caseStudyTitle: "Drive Link",
    caseStudyUrl: "https://drive.google.com",
  },
  metrics: {
    attendance: "92%",
    certificateEligibility: "Eligible",
    certificateSubtext: "All requirements met",
    assignmentSubmissions: "18",
    assignmentSubmissionsTotal: "20",
    leaderboardRank: "8",
    leaderboardRankTotal: "88",
    topPercent: "Top 9%",
    totalPoints: "780/1000",
  },
  atRisk: {
    riskLevel: "Low Risk",
    attendance: "92%",
    attendanceStatus: "Good",
    submission: "85%",
    submissionStatus: "Good",
    activityPoints: "80/100",
    activityPointsStatus: "Good",
    criteriaNote: "Critical if attendance is < 60% OR submission < 70%. Separate tab. Critical for hitting 35%",
  },
  certificateEligibility: {
    moduleCompletion: "92% (18/20 module)",
    moduleStatus: "Passed",
    attendance: "92%",
    attendanceStatus: "Passed",
    capstoneProject: "Approved",
    capstoneStatus: "Passed",
    eligibility: "Eligible",
  },
  attendanceSessions: [
    {
      id: "att-1",
      session: "Introduction to AI",
      startsDate: "Jan 03, 2026",
      status: "Present",
      source: "Zoom_api",
    },
    {
      id: "att-2",
      session: "Data Collection Plan",
      startsDate: "Jan 03, 2026",
      status: "Present",
      source: "Zoom_api",
    },
    {
      id: "att-3",
      session: "Model building",
      startsDate: "Jan 03, 2026",
      status: "Absent",
      source: "Zoom_api",
    },
    {
      id: "att-4",
      session: "AI Project",
      startsDate: "Jan 03, 2026",
      status: "Present",
      source: "manual_override",
    },
  ],
  assignmentReviews: [
    {
      id: "asg-1",
      assignment: "Introduction to AI",
      dueDate: "Jan 03, 2026",
      status: "Approved",
      reviewedBy: "David Smith",
      score: "98/100",
    },
    {
      id: "asg-2",
      assignment: "Data Collection Plan",
      dueDate: "Jan 03, 2026",
      status: "Reviewed",
      reviewedBy: "Sara Johnson",
      score: "98/100",
    },
    {
      id: "asg-3",
      assignment: "Model building",
      dueDate: "Jan 03, 2026",
      status: "Not Submitted",
      reviewedBy: "—",
      score: "—",
    },
    {
      id: "asg-4",
      assignment: "AI Project",
      dueDate: "Jan 03, 2026",
      status: "Submitted",
      reviewedBy: "—",
      score: "—",
    },
  ],
  recentActivities: [
    {
      id: "act-1",
      requirement: "Attendance Marked",
      dateTime: "Jan 03, 2026 - 10:30 AM",
      details: "Marked present for live session Data handling & prep (zoom_api)",
    },
    {
      id: "act-2",
      requirement: "Assignment Submitted",
      dateTime: "Jan 03, 2026 - 10:30 AM",
      details: 'Submitted "model building" assignment',
    },
    {
      id: "act-3",
      requirement: "Assignment reviewed",
      dateTime: "Jan 03, 2026 - 10:30 AM",
      details: '"data collection plan" reviewed and scored 98/100',
    },
    {
      id: "act-4",
      requirement: "Welcome email sent",
      dateTime: "Jan 03, 2026 - 10:30 AM",
      details: "Enrollment confirmation email sent",
    },
  ],
  internalNotes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
};

export function getStudentDetailById(id: string): StudentDetail {
  const found = INITIAL_STUDENTS_DATA.find((s) => s.id === id);
  if (!found) {
    return DEFAULT_STUDENT_DETAIL;
  }
  return {
    ...DEFAULT_STUDENT_DETAIL,
    id: found.id,
    name: "James Rodriguez", // Always match design mockup
    status: found.status,
  };
}
