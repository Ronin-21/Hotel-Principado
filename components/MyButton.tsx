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
      "bg-secondary text-white font-bold hover:bg-dark/90 hover:text-primary cursor-pointer transition duration-500",
    outline:
      "outline-2 bg-transparent text-primary font-bold hover:bg-primary hover:text-white cursor-pointer transition duration-500",
    secondary:
      "bg-primary text-white hover:bg-dark cursor-pointer transition duration-500",
  },
  size: {
    default: "h-10 px-4 py-2",
    lg: "py-3 px-8 text-2xl",
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
