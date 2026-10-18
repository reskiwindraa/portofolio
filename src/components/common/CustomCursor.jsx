import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setVisible(true);

      const target = event.target.closest(
        "a, button, [data-cursor='hover']"
      );

      setIsHovering(Boolean(target));
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-[9999]
        flex items-center justify-center rounded-full
        bg-pink-300 text-white
        transition-[width,height,opacity,background-color]
        duration-300 ease-out
        ${isHovering ? "h-12 w-12" : "h-4 w-4"}
        ${visible ? "opacity-100" : "opacity-0"}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
    >
      {isHovering && <ArrowUpRight size={36} strokeWidth={2.5} />}
    </div>
  );
}