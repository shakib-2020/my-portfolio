import React from "react";
import clsx from "clsx"; // Utility for conditional classNames
import Link, { LinkProps } from "next/link";

// Define the possible variants for the button
type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "outline"
  | "outlineBlue";

// Define the props for the Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href: string;
  children: React.ReactNode;
}

// Create the Button component
const Button: React.FC<ButtonProps> = ({
  variant = "primary", // Default variant
  children,
  className,
  href = "",
  ...props
}) => {
  // Define the base styles and variant styles
  const baseStyles = "px-4 py-2 font-normal rounded-3xl transition-all";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline:
      "bg-[#333333] text-white border-2 border-[#D5D5D5] hover:bg-gray-600",
    outlineBlue:
      "bg-[#333333] text-white border-2 border-blue-600 hover:bg-blue-600",
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      <Link href={href}>{children}</Link>
    </button>
  );
};

export default Button;
