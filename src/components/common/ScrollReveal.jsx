
import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  
useEffect(() => {
  const element = ref.current;

  if (!element) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setVisible(entry.isIntersecting);
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  observer.observe(element);

  return () => observer.disconnect();
}, []);

  const initialTransform = {
    up: "translate3d(0, 40px, 0)",
    down: "translate3d(0, -40px, 0)",
    left: "translate3d(40px, 0, 0)",
    right: "translate3d(-40px, 0, 0)",
    scale: "scale(0.9)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0, 0, 0) scale(1)"
          : initialTransform[direction] || initialTransform.up,
        transitionProperty: "opacity, transform",
        transitionDuration: "700ms",
        transitionTimingFunction:
          "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
