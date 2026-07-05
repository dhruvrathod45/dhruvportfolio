import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Use springs to give the follower a smooth lagging behavior
  const followerX = useSpring(cursorX, { stiffness: 220, damping: 28 });
  const followerY = useSpring(cursorY, { stiffness: 220, damping: 28 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, input, textarea, select, .project-card, .stat-card, .skill-group, .timeline-card, .contact-card");
      if (target) {
        document.querySelector(".custom-cursor")?.classList.add("hovered");
        document.querySelector(".custom-cursor-follower")?.classList.add("hovered");
      } else {
        document.querySelector(".custom-cursor")?.classList.remove("hovered");
        document.querySelector(".custom-cursor-follower")?.classList.remove("hovered");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{
          left: cursorX,
          top: cursorY,
        }}
      />
      <motion.div
        className="custom-cursor-follower"
        style={{
          left: followerX,
          top: followerY,
        }}
      />
    </>
  );
}

export default CustomCursor;
