type DashboardPageHeaderProps = {
  title: string;
  description: string;
};

export default function DashboardPageHeader({
  title,
  description,
}: DashboardPageHeaderProps) {
  return (
    <header className="mb-6">
      <h1 className="text-[28px] font-bold tracking-[-0.6px] text-[#0F172A]">
        {title}
      </h1>
      <p className="mt-1 text-sm text-[#94A3B8]">{description}</p>
    </header>
  );
}
