"use client";

import { ReactNode } from "react";
import { Slide } from "react-awesome-reveal";

interface SlideInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
  triggerOnce?: boolean;
  cascade?: boolean;
  damping?: number;
}

const SlideComponent = ({
  children,
  direction = "up",
  duration = 1000,
  delay = 0,
  triggerOnce = true,
  cascade = false,
  damping = 0.1,
}: SlideInProps) => {
  return (
    <Slide
      direction={direction}
      duration={duration}
      delay={delay}
      triggerOnce={triggerOnce}
      cascade={cascade}
      damping={damping}
    >
      {children}
    </Slide>
  );
};

export default SlideComponent;
