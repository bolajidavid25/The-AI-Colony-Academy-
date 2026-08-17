import Image, { type StaticImageData } from "next/image";

type CourseCardProps = {
  title: string;
  subtitle?: string;
  audience: string;
  duration: string;
  image: StaticImageData;
};

export default function CourseCard({
  title,
  subtitle,
  audience,
  duration,
  image,
}: CourseCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#F3F5F4]">
      <div className="relative h-[180px] w-full overflow-hidden rounded-t-2xl">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 185, 138, 0) 0%, rgba(0, 185, 138, 0.2) 100%)",
          }}
        />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="text-[17px] font-bold leading-snug text-[#002B1F]">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-1 text-[13px] leading-snug text-[#5A7A72]">
            {subtitle}
          </p>
        )}

        <p className="mt-3 text-[10px] font-medium uppercase leading-relaxed tracking-[0.04em] text-[#9CA3AF]">
          {audience}
        </p>

        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="flex items-center gap-1.5 text-[13px] text-[#6B7280]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="shrink-0"
            >
              <circle
                cx="7"
                cy="7"
                r="5.5"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M7 4V7L9 8.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {duration}
          </span>

          <a
            href="#scholarship-form"
            className="inline-flex items-center gap-1 rounded-full bg-[#00B98A] px-4 py-2 text-[12px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Apply Now
            <span aria-hidden="true" className="text-[13px] leading-none">
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
