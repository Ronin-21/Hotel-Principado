"use client";

import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 600); // espera animación
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loading) return null;
  return (
    <Fade
      duration={600}
      triggerOnce
      direction="up"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
    >
      <div className="w-16 h-16 border-4 border-yellow-500 rounded-full border-t-transparent animate-spin" />
    </Fade>
  );
};

export default Loader;
