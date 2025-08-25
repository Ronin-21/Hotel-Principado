"use client";

import { ReactNode } from "react";
import { Fade } from "react-awesome-reveal";

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
  triggerOnce?: boolean;
  cascade?: boolean;
  damping?: number;
  className?: string;
}

const FadeComponent = ({
  children,
  direction = "up",
  duration = 1000,
  delay = 0,
  triggerOnce = true,
  cascade = false,
  damping = 0.1,
  className,
}: FadeInProps) => {
  return (
    <Fade
      direction={direction}
      duration={duration}
      delay={delay}
      triggerOnce={triggerOnce}
      cascade={cascade}
      damping={damping}
      className={className}
    >
      {children}
    </Fade>
  );
};

export default FadeComponent;
