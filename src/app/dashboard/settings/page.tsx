import SettingsScreen from "../../../components/dashboard/settings/SettingsScreen";

export const metadata = {
  title: "Settings | The AI Colony Academy",
  description:
    "Manage your profile details, password, security settings, and notifications at The AI Colony Academy.",
};

export default function DashboardSettingsPage() {
  return (
    <div className="mx-auto w-full max-w-[1600px]">
      <SettingsScreen />
    </div>
  );
}
