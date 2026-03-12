import { useEffect, useRef } from "react";

export default function MagneticCursor() {
  const cursorRef = useRef(null);
  const scaleRef = useRef(1);
  const colorRef = useRef("transparent")

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      cursor.style.transform = `
        translate(${e.clientX}px, ${e.clientY}px)
        scale(${scaleRef.current})
      `;
      cursor.style.backgroundColor = colorRef.current;
    };

    const onEnter = () => {
      scaleRef.current = 2;
      colorRef.current = "transparent";
    };

    const onLeave = () => {
      scaleRef.current = 1;
      colorRef.current = "black";
    };

    window.addEventListener("mousemove", moveCursor);

    const elements = document.querySelectorAll("[data-cursor='magnetic']");
    elements.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        fixed top-0 left-0 z-50 pointer-events-none
        w-6 h-6 rounded-2xl border border-black
        -translate-x-1/2 -translate-y-1/2
        transition-transform duration-200 ease-out
      "
    />
  );
}
