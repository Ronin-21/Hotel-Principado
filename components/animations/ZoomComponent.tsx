"use client";

import { ReactNode } from "react";
import { Zoom } from "react-awesome-reveal";

interface ZoomInProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  triggerOnce?: boolean;
  cascade?: boolean;
  damping?: number;
  className?: string;
}

const ZoomComponent = ({
  children,
  duration = 1000,
  delay = 0,
  triggerOnce = true,
  cascade = false,
  damping = 0.1,
  className,
}: ZoomInProps) => {
  return (
    <Zoom
      duration={duration}
      delay={delay}
      triggerOnce={triggerOnce}
      cascade={cascade}
      damping={damping}
      className={className}
    >
      {children}
    </Zoom>
  );
};

export default ZoomComponent;
