import React, { useEffect } from 'react';

export const NewCursor = () => {

  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`; 
    };
    
    document.addEventListener('mousemove', moveCursor);

    const hoverElements =  document.querySelectorAll("[data-cursor='hover']")
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("scale-150"); 
        cursor.classList.add("bg-transparent");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("scale-150");
        cursor.classList.remove("bg-transparent");
      });
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });

    };
  }, []);

  return (
    <div className="cursor fixed w-6 h-6 border border-black bg-black rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-300 ease-out"></div>
  );
};
