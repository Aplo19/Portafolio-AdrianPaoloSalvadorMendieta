import { useEffect, useRef } from "react";

export default function LiquidEther({
  mouseForce = 20,
  cursorSize = 100,
  isViscous = true,
  viscous = 30,
  colors = ["#5227FF", "#FF9FFC", "#B19EEF"],
  autoDemo = true,
  autoSpeed = 0.5,
  autoIntensity = 2.2,
  isBounce = false,
  resolution = 0.5,
}) {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let pointer = { x: 0, y: 0, active: false };
    let time = 0;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const blobs = colors.map((color, index) => ({
      color,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      radius: cursorSize * (0.55 + index * 0.2),
      phase: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      width = Math.max(100, rect.width);
      height = Math.max(100, rect.height);
      canvas.width = Math.round(width * dpr * resolution);
      canvas.height = Math.round(height * dpr * resolution);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr * resolution, 0, 0, dpr * resolution, 0, 0);

      blobs.forEach((blob, i) => {
        blob.x = width * (0.3 + i * 0.2);
        blob.y = height * (0.5 + (i % 2 ? -0.07 : 0.07));
      });
    };

    const onMove = (event) => {
      const rect = wrap.getBoundingClientRect();
      pointer.active = true;
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const onLeave = () => {
      pointer.active = false;
    };

    const drawBlob = (blob) => {
      const g = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius);
      g.addColorStop(0, blob.color);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const tick = () => {
      time += 0.016 * autoSpeed;
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      blobs.forEach((blob, i) => {
        const autoX = width * 0.5 + Math.cos(time + blob.phase) * (cursorSize * autoIntensity + i * 10);
        const autoY = height * 0.5 + Math.sin(time * 1.2 + blob.phase) * (cursorSize * autoIntensity + i * 8);

        const targetX = pointer.active ? pointer.x + Math.cos(blob.phase + time) * 36 : autoX;
        const targetY = pointer.active ? pointer.y + Math.sin(blob.phase + time) * 36 : autoY;

        const force = pointer.active ? mouseForce * 0.002 : 0.01;
        blob.vx += (targetX - blob.x) * force;
        blob.vy += (targetY - blob.y) * force;

        if (isViscous) {
          const drag = Math.max(0.85, 1 - viscous * 0.002);
          blob.vx *= drag;
          blob.vy *= drag;
        }

        blob.x += blob.vx;
        blob.y += blob.vy;

        if (isBounce) {
          if (blob.x < blob.radius || blob.x > width - blob.radius) blob.vx *= -0.8;
          if (blob.y < blob.radius || blob.y > height - blob.radius) blob.vy *= -0.8;
        }

        drawBlob(blob);
      });

      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);

    if (!autoDemo) onLeave();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, [
    autoDemo,
    autoIntensity,
    autoSpeed,
    colors,
    cursorSize,
    isBounce,
    isViscous,
    mouseForce,
    resolution,
    viscous,
  ]);

  return (
    <div ref={wrapRef} className="h-full w-full">
      <canvas ref={canvasRef} className="h-full w-full opacity-85" />
    </div>
  );
}
