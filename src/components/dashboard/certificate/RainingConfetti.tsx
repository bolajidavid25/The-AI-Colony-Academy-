"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  speedY: number;
  speedX: number;
  wobble: number;
  wobbleSpeed: number;
  rotation: number;
  rotationSpeed: number;
  tilt: number;
  tiltSpeed: number;
  opacity: number;
  shape: "rect" | "circle" | "ribbon" | "star";
  delay: number; // frames before starting to drop
}

const CONFETTI_COLORS = [
  "#31CA92", // TAACA Mint
  "#154535", // TAACA Forest Green
  "#C026D3", // Magenta
  "#9333EA", // Purple
  "#F59E0B", // Amber Gold
  "#FBBF24", // Yellow Gold
  "#F43F5E", // Coral Pink
  "#06B6D4", // Cyan
  "#8B5CF6", // Violet
];

interface RainingConfettiProps {
  /** Changing this key triggers a new raining shower */
  triggerKey: number | string;
  particleCount?: number;
}

export default function RainingConfetti({
  triggerKey,
  particleCount = 140,
}: RainingConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isRunning = true;

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const particles: Particle[] = [];
    const shapes: Particle["shape"][] = ["rect", "rect", "circle", "ribbon", "star"];

    for (let i = 0; i < particleCount; i++) {
      const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const width = shape === "ribbon" ? 4 : Math.random() * 8 + 6;
      const height = shape === "ribbon" ? Math.random() * 26 + 18 : Math.random() * 10 + 8;

      particles.push({
        x: Math.random() * canvas.width,
        y: -Math.random() * 200 - 20, // Start just above the top of screen
        width,
        height,
        color,
        speedY: Math.random() * 3.5 + 2.5, // Natural downward drift
        speedX: Math.random() * 2 - 1,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.08 + 0.03,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 4,
        tilt: Math.random() * 10,
        tiltSpeed: Math.random() * 0.07 + 0.04,
        opacity: 1,
        shape,
        delay: Math.floor(Math.random() * 45), // Staggered drop release over ~0.75s
      });
    }

    let frameCount = 0;

    function render() {
      if (!ctx || !canvas || !isRunning) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let aliveCount = 0;
      frameCount++;

      for (const p of particles) {
        if (frameCount < p.delay) {
          aliveCount++;
          continue;
        }

        p.y += p.speedY;
        p.wobble += p.wobbleSpeed;
        p.x += Math.sin(p.wobble) * 1.8 + p.speedX;
        p.rotation += p.rotationSpeed;
        p.tilt += p.tiltSpeed;

        // Start fading as it approaches the bottom 25% of viewport
        if (p.y > canvas.height * 0.75) {
          p.opacity -= 0.02;
          if (p.opacity < 0) p.opacity = 0;
        }

        if (p.y <= canvas.height && p.opacity > 0) {
          aliveCount++;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = p.opacity;

          // 3D Flip scale factor
          const flipScale = Math.cos(p.tilt);

          ctx.fillStyle = p.color;
          ctx.strokeStyle = p.color;

          if (p.shape === "circle") {
            ctx.beginPath();
            ctx.ellipse(0, 0, p.width / 2, (p.width / 2) * Math.abs(flipScale), 0, 0, Math.PI * 2);
            ctx.fill();
          } else if (p.shape === "ribbon") {
            ctx.lineWidth = p.width;
            ctx.beginPath();
            ctx.moveTo(-5, -p.height / 2);
            ctx.bezierCurveTo(
              8 * flipScale,
              -p.height / 4,
              -8 * flipScale,
              p.height / 4,
              5,
              p.height / 2
            );
            ctx.stroke();
          } else if (p.shape === "star") {
            ctx.beginPath();
            const r = (p.width * 0.7) * Math.abs(flipScale);
            for (let s = 0; s < 5; s++) {
              ctx.lineTo(
                Math.cos(((18 + s * 72) * Math.PI) / 180) * r,
                -Math.sin(((18 + s * 72) * Math.PI) / 180) * r
              );
              ctx.lineTo(
                Math.cos(((54 + s * 72) * Math.PI) / 180) * (r / 2),
                -Math.sin(((54 + s * 72) * Math.PI) / 180) * (r / 2)
              );
            }
            ctx.closePath();
            ctx.fill();
          } else {
            // Standard rectangle confetti with 3D flutter
            ctx.scale(1, flipScale);
            ctx.beginPath();
            ctx.roundRect(-p.width / 2, -p.height / 2, p.width, p.height, 2);
            ctx.fill();
          }

          ctx.restore();
        }
      }

      if (aliveCount > 0) {
        animationFrameId = requestAnimationFrame(render);
      }
    }

    render();

    return () => {
      isRunning = false;
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [triggerKey, particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 h-full w-full"
      aria-hidden="true"
    />
  );
}
