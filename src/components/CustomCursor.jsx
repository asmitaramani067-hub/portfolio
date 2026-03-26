import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const trailRef = useRef({ x: -100, y: -100 });
  const posRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);

    let raf;
    const animate = () => {
      trailRef.current = {
        x: trailRef.current.x + (posRef.current.x - trailRef.current.x) * 0.1,
        y: trailRef.current.y + (posRef.current.y - trailRef.current.y) * 0.1,
      };
      setTrail({ ...trailRef.current });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const onIn = () => setHovering(true);
    const onOut = () => setHovering(false);
    const els = document.querySelectorAll("a, button");
    els.forEach((el) => { el.addEventListener("mouseenter", onIn); el.addEventListener("mouseleave", onOut); });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      els.forEach((el) => { el.removeEventListener("mouseenter", onIn); el.removeEventListener("mouseleave", onOut); });
    };
  }, []);

  const ringSize = hovering ? 44 : 28;

  return (
    <>
      {/* Dot */}
      <div
        className="fixed z-[9998] pointer-events-none rounded-full bg-white mix-blend-difference"
        style={{ width: 10, height: 10, left: pos.x - 5, top: pos.y - 5, transition: "none" }}
      />
      {/* Ring */}
      <div
        className="fixed z-[9997] pointer-events-none rounded-full border border-indigo-400/50"
        style={{
          width: ringSize,
          height: ringSize,
          left: trail.x - ringSize / 2,
          top: trail.y - ringSize / 2,
          transition: "width 0.2s, height 0.2s",
        }}
      />
    </>
  );
}
