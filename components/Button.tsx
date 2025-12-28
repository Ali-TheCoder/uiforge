import Link from "next/link";
import { cn } from "@/components/cn";

type BaseProps = {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkProps = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

type Props = ButtonProps | LinkProps;

export default function Button({ variant = "primary", className, children, ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition " +
    "focus:outline-none focus:ring-2 focus:ring-[color:var(--color-secondary)]/60";

  const styles =
    variant === "primary"
      ? "bg-[color:var(--color-primary)]/90 hover:bg-[color:var(--color-primary)] text-white shadow-lg shadow-purple-500/20"
      : "bg-white/5 hover:bg-white/10 text-[color:var(--color-text)] border border-white/10";

  const cls = cn(base, styles, className);

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
