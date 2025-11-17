import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const interactiveSelectors = "a, button, input, select, textarea, [role='button'], .cursor-interactive";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarsePointer) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) {
      return;
    }

    const updateCursorPosition = (event: MouseEvent) => {
      setIsVisible(true);
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      setIsActive(Boolean((event.target as HTMLElement | null)?.closest(interactiveSelectors)));
    };

    const hideCursor = () => setIsVisible(false);
    const showCursor = () => setIsVisible(true);
    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseenter", showCursor);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseenter", showCursor);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={cn(
        "custom-cursor pointer-events-none fixed left-0 top-0 z-[9999] bg-transparent",
        isVisible ? "opacity-100" : "opacity-0",
        isActive && "custom-cursor--active",
        isPressed && "custom-cursor--pressed",
      )}
    />
  );
};

export default CustomCursor;

