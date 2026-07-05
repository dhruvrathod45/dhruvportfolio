import { useEffect, useRef } from "react";

function BackgroundEffects() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const maxParticles = 65;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.6 + 0.4;
        this.speedX = Math.random() * 0.16 - 0.08;
        this.speedY = Math.random() * 0.16 - 0.08;
        this.alpha = Math.random() * 0.5 + 0.15;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = canvas.width;
        else if (this.x > canvas.width) this.x = 0;

        if (this.y < 0) this.y = canvas.height;
        else if (this.y > canvas.height) this.y = 0;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = "#d4af37"; // Luxury gold accent particle color
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
      }
    };
    init();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="background-container">
      <div className="noise-overlay" />
      <div className="glow-blobs">
        <div className="glow-blob blob-1" />
        <div className="glow-blob blob-2" />
        <div className="glow-blob blob-3" />
      </div>
      <canvas ref={canvasRef} className="particle-canvas" />
    </div>
  );
}

export default BackgroundEffects;
