import Link from "next/link";
import { twMerge } from "tailwind-merge";

const variantClasses = {
  default: "bg-gray-200 text-gray-500",
  outline: "bg-white text-gray-700 border border-gray-300",
  primary: "bg-primary text-white",
  success: "text-blue-500 border border-blue-500",
  danger: "bg-blue-500 text-white",
  secondary:"bg-white text-red-500 border border-red-500",
  tertiary:"bg-green-600 text-white"
};

function Button({
  children,
  variant = "default",
  bgColor,
  textColor,
  icon: Icon,
  href,
  height = "h-10",
  width = "px-4",
  rounded = "rounded-[4px]",
  className,
  loading,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-medium transition duration-200 focus:outline-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

  const variantClass = variantClasses[variant] || variantClasses.default;

  const classes = twMerge(
    baseClasses,
    variantClass,
    height,
    width,
    rounded,
    bgColor,
    textColor,
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {Icon && <Icon className="h-5 w-5" />}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {Icon && <Icon className="h-5 w-5" />}
      {children}
    </button>
  );
}

export default Button;
