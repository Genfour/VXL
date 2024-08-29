import { useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

export default function ConfettiComponent() {
  const confettiRef = useRef(null);

  useEffect(() => {
    const makeShot = () => {
      confettiRef.current &&
        confettiRef.current({
          spread: 60,
          startVelocity: 30,
          particleCount: 100,
          origin: { y: 0.6 },
        });
    };

    const interval = setInterval(makeShot, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ReactCanvasConfetti
      ref={confettiRef}
      style={{
        position: "absolute",
        width: "100%",
        height: "1000px",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
}
