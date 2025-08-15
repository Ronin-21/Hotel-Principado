import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  size?: keyof typeof buttonVariants.size;
  variant?: keyof typeof buttonVariants.variant;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const buttonVariants = {
  variant: {
    default:
      "bg-primary text-white font-medium hover:bg-primary/90 cursor-pointer",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent",
    secondary: "bg-secondary text-secondary hover:bg-secondary/80",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
  },
};

const MyButton = ({
  children,
  size = "default",
  variant = "default",
  type = "button",
  className = "",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${buttonVariants.size[size]} ${buttonVariants.variant[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default MyButton;
