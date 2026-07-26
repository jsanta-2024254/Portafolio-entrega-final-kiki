import { useCallback, useMemo, useState } from "react";
import useReducedMotion from "../../shared/hooks/useReducedMotion.jsx";

const INITIAL_TRANSFORM = {
  x: 0,
  y: 0,
  scale: 1
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default function useMagneticHover() {
  const prefersReducedMotion = useReducedMotion();
  const [transform, setTransform] = useState(INITIAL_TRANSFORM);

  const handlePointerMove = useCallback(
    (event) => {
      if (prefersReducedMotion) {
        return;
      }

      const rect = event.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = clamp((event.clientX - centerX) * 0.18, -18, 18);
      const y = clamp((event.clientY - centerY) * 0.18, -18, 18);

      setTransform({
        x,
        y,
        scale: 1.08
      });
    },
    [prefersReducedMotion]
  );

  const handlePointerLeave = useCallback(() => {
    setTransform(INITIAL_TRANSFORM);
  }, []);

  const magneticHandlers = useMemo(
    () => ({
      onPointerMove: handlePointerMove,
      onPointerLeave: handlePointerLeave
    }),
    [handlePointerLeave, handlePointerMove]
  );

  return {
    transform,
    magneticHandlers,
    prefersReducedMotion
  };
}