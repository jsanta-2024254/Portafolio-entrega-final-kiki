import { useCallback, useMemo, useState } from "react";
import useReducedMotion from "../../shared/hooks/useReducedMotion.jsx";

const INITIAL_REFLECTION = {
  x: 50,
  y: 50,
  rotateX: 0,
  rotateY: 0
};

export default function useCardReflection() {
  const prefersReducedMotion = useReducedMotion();
  const [reflection, setReflection] = useState(INITIAL_REFLECTION);

  const handlePointerMove = useCallback(
    (event) => {
      if (prefersReducedMotion) {
        return;
      }

      const rect = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      const rotateX = (y - 50) * -0.12;
      const rotateY = (x - 50) * 0.12;

      setReflection({
        x,
        y,
        rotateX,
        rotateY
      });
    },
    [prefersReducedMotion]
  );

  const handlePointerLeave = useCallback(() => {
    setReflection(INITIAL_REFLECTION);
  }, []);

  const style = useMemo(
    () => ({
      "--reflection-x": `${reflection.x}%`,
      "--reflection-y": `${reflection.y}%`,
      rotateX: `${reflection.rotateX}deg`,
      rotateY: `${reflection.rotateY}deg`
    }),
    [reflection]
  );

  return {
    style,
    handlers: {
      onPointerMove: handlePointerMove,
      onPointerLeave: handlePointerLeave
    }
  };
}