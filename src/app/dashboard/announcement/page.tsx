import AnnouncementsScreen from "../../../components/dashboard/announcement/AnnouncementsScreen";

export const metadata = {
  title: "Announcement | The AI Colony Academy",
  description:
    "Stay up to date with course updates, live sessions, and community announcements at The AI Colony Academy.",
};

export default function DashboardAnnouncementPage() {
  return (
    <div className="mx-auto w-full max-w-[1600px]">
      <AnnouncementsScreen />
    </div>
  );
}
