import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useReducedMotion from "../../shared/hooks/useReducedMotion.jsx";

const CENTER_POSITION = {
  x: 50,
  y: 50,
  active: true
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default function useMouseRadar() {
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const [position, setPosition] = useState(CENTER_POSITION);

  const updateFromPointer = useCallback(
    (event) => {
      if (prefersReducedMotion) {
        return;
      }

      const container = containerRef.current;

      if (!container) {
        return;
      }

      const rect = container.getBoundingClientRect();
      const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
      const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100);

      setPosition({
        x,
        y,
        active: true
      });
    },
    [prefersReducedMotion]
  );

  const handlePointerLeave = useCallback(() => {
    if (prefersReducedMotion) {
      return;
    }

    setPosition((currentPosition) => ({
      ...currentPosition,
      active: false
    }));
  }, [prefersReducedMotion]);

  const handlePointerEnter = useCallback(() => {
    if (prefersReducedMotion) {
      return;
    }

    setPosition((currentPosition) => ({
      ...currentPosition,
      active: true
    }));
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const isTouchDevice =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    if (!isTouchDevice) {
      return undefined;
    }

    const startedAt = performance.now();

    const animateRadar = (time) => {
      const elapsed = (time - startedAt) / 1000;

      setPosition({
        x: 50 + Math.cos(elapsed * 0.65) * 22,
        y: 48 + Math.sin(elapsed * 0.85) * 16,
        active: true
      });

      animationFrameRef.current = requestAnimationFrame(animateRadar);
    };

    animationFrameRef.current = requestAnimationFrame(animateRadar);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [prefersReducedMotion]);

  const effectivePosition = useMemo(() => {
    if (prefersReducedMotion) {
      return CENTER_POSITION;
    }

    return position;
  }, [position, prefersReducedMotion]);

  return {
    containerRef,
    position: effectivePosition,
    prefersReducedMotion,
    radarHandlers: {
      onPointerMove: updateFromPointer,
      onPointerEnter: handlePointerEnter,
      onPointerLeave: handlePointerLeave
    }
  };
}