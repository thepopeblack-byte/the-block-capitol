import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  href?: string;
  onClick?: () => void;
}
export function Button({
  text,
  variant = "primary",
  className = "",
  href = "/#blockchain-courses",
  onClick,
}: ButtonProps) {
  const classes = `button button-${variant} ${className}`;
  if (onClick)
    return (
      <button type="button" className={classes} onClick={onClick}>
        {text}
      </button>
    );
  if (href.startsWith("https://"))
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    );
  return (
    <Link className={classes} to={href}>
      {text}
      <ArrowRight size={18} aria-hidden="true" />
    </Link>
  );
}
