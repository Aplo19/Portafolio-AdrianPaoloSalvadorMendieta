import { useEffect, useRef } from "react";

export default function LightRays({
  raysOrigin = "top-center",
  raysColor = "#ffffff",
  raysSpeed = 1,
  lightSpread = 0.5,
  rayLength = 3,
  pulsating = false,
  fadeDistance = 1,
  saturation = 1,
  followMouse = true,
  mouseInfluence = 0.1,
  noiseAmount = 0,
  distortion = 0,
}) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let t = 0;
    let pointerX = 0.5;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const rayCount = 44;
    const rays = Array.from({ length: rayCount }, (_, i) => ({
      seed: i * 0.7 + Math.random() * 3,
      spread: ((i / (rayCount - 1)) * 2 - 1) * lightSpread,
      alpha: 0.06 + Math.random() * 0.07,
      widthFactor: 0.3 + Math.random() * 0.9,
    }));

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      width = Math.max(200, rect.width);
      height = Math.max(200, rect.height);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (ev) => {
      if (!followMouse) return;
      const rect = wrap.getBoundingClientRect();
      pointerX = Math.max(0, Math.min(1, (ev.clientX - rect.left) / rect.width));
    };

    const originX = () => {
      if (raysOrigin === "top-left") return width * 0.2;
      if (raysOrigin === "top-right") return width * 0.8;
      return width * (0.5 + (pointerX - 0.5) * mouseInfluence * 2);
    };

    const draw = () => {
      t += 0.008 * raysSpeed;
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      const ox = originX();
      const oy = 0;
      const pulse = pulsating ? 0.85 + Math.sin(t * 4) * 0.15 : 1;
      const endY = height * Math.max(0.2, Math.min(1.6, fadeDistance));
      const lengthScale = Math.max(1.3, Math.min(4.5, rayLength));

      rays.forEach((ray) => {
        const wobble = Math.sin(t + ray.seed) * (noiseAmount * 35 + distortion * 20);
        const x2 = ox + ray.spread * width * lengthScale + wobble;
        const y2 = endY * lengthScale;

        const grad = ctx.createLinearGradient(ox, oy, x2, y2);
        grad.addColorStop(0, "rgba(255,255,255,0)");
        grad.addColorStop(0.08, raysColor);
        grad.addColorStop(1, "rgba(255,255,255,0)");

        ctx.strokeStyle = grad;
        ctx.globalAlpha = ray.alpha * pulse * saturation;
        ctx.lineWidth = 1 + ray.widthFactor * 2.4;
        ctx.beginPath();
        ctx.moveTo(ox, oy);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    resize();
    loop();
    wrap.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      wrap.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, [
    distortion,
    fadeDistance,
    followMouse,
    lightSpread,
    mouseInfluence,
    noiseAmount,
    pulsating,
    rayLength,
    raysColor,
    raysOrigin,
    raysSpeed,
    saturation,
  ]);

  return (
    <div ref={wrapRef} className="h-full w-full">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
