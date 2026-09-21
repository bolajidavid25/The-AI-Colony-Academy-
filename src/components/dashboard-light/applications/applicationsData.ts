export type Status = "Approved" | "Waitlisted" | "Pending" | "Rejected";

export interface Application {
  id: string;
  name: string;
  email: string;
  course: string;
  sampleScore: string | null;
  motivationScore: string | null;
  status: Status;
  dateApplied: string;
  avatarInitial: string;
}

export const TABS = ["All", "Pending", "Accepted", "Waitlisted", "Rejected"] as const;
export type Tab = typeof TABS[number];

export const APPLICATIONS_DATA: Application[] = [
  {
    id: "1",
    name: "Ogunmepo James Bond",
    email: "ogunepojamesbond@gmail.com",
    course: "AI for African use cases",
    sampleScore: "4.5/5",
    motivationScore: "60%",
    status: "Approved",
    dateApplied: "July 14, 2026",
    avatarInitial: "O",
  },
  {
    id: "2",
    name: "Ogunmepo James Bond",
    email: "ogunepojamesbond@gmail.com",
    course: "AI for African use cases",
    sampleScore: "4.5/5",
    motivationScore: "60%",
    status: "Waitlisted",
    dateApplied: "July 14, 2026",
    avatarInitial: "O",
  },
  {
    id: "3",
    name: "Ogunmepo James Bond",
    email: "ogunepojamesbond@gmail.com",
    course: "AI for African use cases",
    sampleScore: null,
    motivationScore: null,
    status: "Pending",
    dateApplied: "July 14, 2026",
    avatarInitial: "O",
  },
  {
    id: "4",
    name: "Ogunmepo James Bond",
    email: "ogunepojamesbond@gmail.com",
    course: "AI for African use cases",
    sampleScore: "4.5/5",
    motivationScore: "60%",
    status: "Approved",
    dateApplied: "July 14, 2026",
    avatarInitial: "O",
  },
  {
    id: "5",
    name: "Ogunmepo James Bond",
    email: "ogunepojamesbond@gmail.com",
    course: "AI for African use cases",
    sampleScore: null,
    motivationScore: null,
    status: "Pending",
    dateApplied: "July 14, 2026",
    avatarInitial: "O",
  },
  {
    id: "6",
    name: "Ogunmepo James Bond",
    email: "ogunepojamesbond@gmail.com",
    course: "AI for African use cases",
    sampleScore: "4.5/5",
    motivationScore: "60%",
    status: "Approved",
    dateApplied: "July 14, 2026",
    avatarInitial: "O",
  },
  {
    id: "7",
    name: "Ogunmepo James Bond",
    email: "ogunepojamesbond@gmail.com",
    course: "AI for African use cases",
    sampleScore: "4.5/5",
    motivationScore: "60%",
    status: "Approved",
    dateApplied: "July 14, 2026",
    avatarInitial: "O",
  },
];
