import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "primary" | "outline";

type BaseProps = {
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-base transition-colors cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "bg-tangelo text-white hover:bg-tangelo-hover",
  outline:
    "border-2 border-chocolate text-chocolate hover:bg-chocolate hover:text-linen",
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { ...rest } = props as ButtonAsLink;
    return <a className={classes} {...rest} />;
  }

  return <button className={classes} {...(props as ButtonAsButton)} />;
}
