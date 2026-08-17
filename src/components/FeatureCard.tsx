import type { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  variant?: "plain" | "elevated";
};

export default function FeatureCard({
  title,
  description,
  icon,
  variant = "plain",
}: FeatureCardProps) {
  const content = (
    <>
      <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center">
        {icon}
      </div>

      <h3 className="mb-3.5 text-[20px] font-bold leading-[117%] tracking-[-0.4px] text-[#0A0A0A]">
        {title}
      </h3>

      <p className="m-0 text-[14px] leading-normal text-black/[0.49]">
        {description}
      </p>
    </>
  );

  if (variant === "elevated") {
    return (
      <article className="flex h-full flex-col rounded-xl bg-white p-8 shadow-[0_6px_32px_rgba(0,0,0,0.10)]">
        {content}
      </article>
    );
  }

  return <article className="flex w-full flex-col">{content}</article>;
}
