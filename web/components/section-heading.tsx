import { type ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <header className={`max-w-[52ch] ${alignCls}`}>
      {eyebrow && (
        <p className="label-eyebrow mb-4">
          <span className="hairline inline-block align-middle mr-3" />
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-navy">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-ink/70 text-base lg:text-[17px] leading-relaxed font-sans">
          {intro}
        </p>
      )}
      {children}
    </header>
  );
}
