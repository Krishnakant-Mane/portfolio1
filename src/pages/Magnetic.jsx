export default function Magnetic({ children }) {
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    e.currentTarget.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const reset = (e) => {
    e.currentTarget.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-block transition-transform duration-200 ease-out"
    >
      {children}
    </div>
  );
}
