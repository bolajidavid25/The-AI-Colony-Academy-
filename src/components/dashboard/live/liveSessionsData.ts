export type LiveSessionActionType = "zoom" | "calendar";

export interface LiveSessionItem {
  id: string;
  month: string;
  day: string;
  title: string;
  host: string;
  dateLabel: string;
  timeLabel: string;
  actionType: LiveSessionActionType;
  actionLabel: string;
  isoStart: string;
  isoEnd: string;
  zoomUrl: string;
}

export const LIVE_SESSIONS: LiveSessionItem[] = [
  {
    id: "live-1",
    month: "Jul",
    day: "8",
    title: "Building AI Agents",
    host: "With John Doe",
    dateLabel: "Tomorrow, Jul 8, 2026",
    timeLabel: "6:00PM GMT",
    actionType: "zoom",
    actionLabel: "Join Zoom",
    isoStart: "20260708T180000Z",
    isoEnd: "20260708T193000Z",
    zoomUrl: "https://zoom.us",
  },
  {
    id: "live-2",
    month: "Jul",
    day: "10",
    title: "Building AI Agents",
    host: "With John Doe",
    dateLabel: "Tomorrow, Jul 8, 2026",
    timeLabel: "6:00PM GMT",
    actionType: "calendar",
    actionLabel: "Add To Calendar",
    isoStart: "20260710T180000Z",
    isoEnd: "20260710T193000Z",
    zoomUrl: "https://zoom.us",
  },
  {
    id: "live-3",
    month: "Jul",
    day: "15",
    title: "Building AI Agents",
    host: "With John Doe",
    dateLabel: "Tomorrow, Jul 8, 2026",
    timeLabel: "6:00PM GMT",
    actionType: "calendar",
    actionLabel: "Add To Calendar",
    isoStart: "20260715T180000Z",
    isoEnd: "20260715T193000Z",
    zoomUrl: "https://zoom.us",
  },
];
