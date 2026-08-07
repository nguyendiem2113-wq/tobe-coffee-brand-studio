import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/* ---------- Buttons ---------- */

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 font-body text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300";

export const CtaLink = ({
  to,
  href,
  variant = "primary",
  className,
  children,
}: {
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: ReactNode;
}) => {
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-mocha hover:text-ivory",
    secondary:
      "border border-primary bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground",
    ghost:
      "border border-ivory/40 bg-transparent text-ivory hover:border-primary hover:bg-primary hover:text-primary-foreground",
  }[variant];

  const cls = cn(base, styles, className);
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to ?? "#"} className={cls}>
      {children}
    </Link>
  );
};

export const CtaButton = ({
  variant = "primary",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" }) => (
  <button
    className={cn(
      base,
      variant === "primary"
        ? "bg-primary text-primary-foreground hover:bg-mocha hover:text-ivory"
        : "border border-primary bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

/* ---------- Section shell ---------- */

export const Section = ({
  id,
  tone = "ivory",
  className,
  children,
}: {
  id?: string;
  tone?: "ivory" | "stone" | "espresso" | "white";
  className?: string;
  children: ReactNode;
}) => {
  const tones = {
    ivory: "bg-background text-foreground",
    stone: "bg-stone text-foreground",
    white: "bg-card text-foreground",
    espresso: "bg-espresso text-ivory",
  }[tone];
  return (
    <section id={id} className={cn("section", tones, className)}>
      <div className="shell">{children}</div>
    </section>
  );
};

export const SectionHead = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
}) => (
  <header
    className={cn(
      "mb-12 max-w-3xl md:mb-16",
      align === "center" && "mx-auto text-center"
    )}
  >
    {eyebrow && (
      <span className={cn("caption mb-4 block", invert ? "text-primary" : "text-primary")}>
        {eyebrow}
      </span>
    )}
    <h2 className={cn("h2-display", invert ? "text-ivory" : "text-foreground")}>{title}</h2>
    {subtitle && (
      <p
        className={cn(
          "mt-5 text-base font-light leading-[1.7]",
          invert ? "text-ivory/70" : "text-muted-foreground"
        )}
      >
        {subtitle}
      </p>
    )}
  </header>
);

/* ---------- Cards ---------- */

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={cn(
      "rounded-sm border border-border bg-card p-7 transition-colors duration-300 hover:border-primary md:p-8",
      className
    )}
  >
    {children}
  </div>
);

export const ImageCard = ({
  image,
  eyebrow,
  title,
  text,
  ratio = "aspect-[4/3]",
}: {
  image: string;
  eyebrow?: string;
  title: string;
  text?: string;
  ratio?: string;
}) => (
  <article className="group">
    <div className={cn("overflow-hidden rounded-sm bg-stone", ratio)}>
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
    </div>
    <div className="pt-5">
      {eyebrow && <span className="caption mb-2 block text-primary">{eyebrow}</span>}
      <h3 className="h3-title text-foreground">{title}</h3>
      {text && <p className="mt-2 text-[15px] font-light leading-[1.7] text-muted-foreground">{text}</p>}
    </div>
  </article>
);

/* ---------- Page hero ---------- */

export const PageHero = ({
  eyebrow,
  title,
  subtitle,
  text,
  image,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  text?: string;
  image: string;
  children?: ReactNode;
}) => (
  <section className="relative flex min-h-[76vh] items-end overflow-hidden bg-espresso pb-16 pt-40 md:min-h-[82vh] md:pb-24 md:pt-48">
    <img
      src={image}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-60"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/70 to-espresso/40" />
    <div className="shell relative z-10">
      <div className="max-w-3xl">
        {eyebrow && <span className="caption mb-5 block text-primary">{eyebrow}</span>}
        <h1 className="h1-display whitespace-pre-line text-ivory">{title}</h1>
        {subtitle && <p className="mt-6 font-heading text-2xl text-ivory/90 md:text-3xl">{subtitle}</p>}
        {text && <p className="mt-6 max-w-2xl text-base font-light leading-[1.75] text-ivory/70">{text}</p>}
        {children && <div className="mt-10 flex flex-wrap gap-4">{children}</div>}
      </div>
    </div>
  </section>
);
