import { ArrowRight } from "lucide-react";

/**
 * Button reusable.
 * - Jika diberi `href` → dirender sebagai <a>, selain itu <button>.
 * - variant   : primary | pink | blue | outline | link
 * - size      : sm | md | lg
 * - leftIcon  : elemen ikon di kiri teks (mis. <Plus />)
 * - rightIcon : elemen ikon di kanan teks
 * - arrow     : pintasan untuk panah → di kanan (bergeser saat hover)
 * - iconOnly  : tombol bulat berisi satu ikon (pakai prop `icon`)
 */

const variants = {
  primary: "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md",
  pink:
    "bg-[#FFF1F2] text-[#FF8FB1] hover:bg-[#FFE0E6] hover:shadow-md dark:bg-pink-500/10 dark:hover:bg-pink-500/20",
  blue:
    "bg-[#EAF2FF] text-blue-500 hover:bg-[#D8E8FF] hover:shadow-md dark:bg-blue-500/10 dark:hover:bg-blue-500/20",
  outline:
    "border-2 border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-500/10",
  link: "text-blue-500 hover:text-blue-600",
};

const sizes = {
  sm: "px-4 py-2 text-sm gap-2 rounded-xl",
  md: "px-6 py-3 text-md gap-2.5 rounded-2xl",
  lg: "px-6 py-4 text-lg gap-3 rounded-2xl",
};

const linkSizes = {
  sm: "text-sm gap-3",
  md: "text-md gap-4",
  lg: "text-lg gap-5",
};

const iconOnlySizes = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-[68px] w-[68px]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  arrow = false,
  iconOnly = false,
  icon,
  className = "",
  ...props
}) {
  const isLink = variant === "link";

  const sizeClass = iconOnly
    ? `${iconOnlySizes[size]} rounded-full`
    : isLink
    ? linkSizes[size]
    : sizes[size];

  const classes = [
    "group inline-flex w-fit cursor-pointer items-center justify-center font-bold",
    "transition-all duration-300",
    !isLink && !iconOnly ? "hover:-translate-y-1" : "",
    variants[variant],
    sizeClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = iconOnly ? (
    icon
  ) : (
    <>
      {leftIcon}
      {children}
      {rightIcon}
      {arrow && (
        <ArrowRight
          size={28}
          strokeWidth={1.5}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}