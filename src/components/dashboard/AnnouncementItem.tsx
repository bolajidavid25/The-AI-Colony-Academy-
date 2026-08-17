type AnnouncementItemProps = {
  title: string;
  date: string;
  body: string;
};

export default function AnnouncementItem({
  title,
  date,
  body,
}: AnnouncementItemProps) {
  return (
    <article className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
      <p className="text-xs text-[#94A3B8]">{date}</p>
      <h2 className="mt-1 text-base font-bold text-[#0F172A]">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{body}</p>
    </article>
  );
}
