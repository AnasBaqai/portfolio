import styled from "styled-components";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    const setDimensions = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setDimensions();
    window.addEventListener("resize", setDimensions);

    // Particle properties
    const particleCount = 200;
    const particles = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        radius: Math.random() * 1 + 0.5,
        color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`,
        speed: Math.random() * 0.5 + 0.2,
        connectionRadius: 100,
      });
    }

    // Mouse move handler for canvas
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    // Add event listener for mouse movement
    canvas.addEventListener("mousemove", handleMouseMove);

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((particle, i) => {
        // Move particle toward viewer (z-axis)
        particle.z -= particle.speed;

        // If particle is too close, reset to back
        if (particle.z <= 1) {
          particle.z = 1000;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Calculate 3D projection
        const scale = 400 / particle.z;

        // Calculate center of canvas
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        // Apply mouse influence (subtle warping)
        const mouseInfluenceX = ((mousePosition.x - centerX) / centerX) * 0.15;
        const mouseInfluenceY = ((mousePosition.y - centerY) / centerY) * 0.15;

        // Project from 3D to 2D with mouse influence
        const projectedX =
          (particle.x - centerX) * scale +
          centerX +
          mouseInfluenceX * particle.z * 0.05;
        const projectedY =
          (particle.y - centerY) * scale +
          centerY +
          mouseInfluenceY * particle.z * 0.05;

        // Calculate size based on distance
        const size = particle.radius * scale;

        // Draw particle
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections between close particles
        for (let j = i + 1; j < particles.length; j++) {
          const otherParticle = particles[j];
          const otherScale = 400 / otherParticle.z;

          const otherX =
            (otherParticle.x - centerX) * otherScale +
            centerX +
            mouseInfluenceX * otherParticle.z * 0.05;
          const otherY =
            (otherParticle.y - centerY) * otherScale +
            centerY +
            mouseInfluenceY * otherParticle.z * 0.05;

          const dx = projectedX - otherX;
          const dy = projectedY - otherY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Only connect close particles and with similar z-index (depth)
          if (
            distance < particle.connectionRadius &&
            Math.abs(particle.z - otherParticle.z) < 300
          ) {
            // Opacity based on distance
            const opacity = 1 - distance / particle.connectionRadius;
            ctx.beginPath();
            ctx.moveTo(projectedX, projectedY);
            ctx.lineTo(otherX, otherY);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`;
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setDimensions);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <StyledHero>
      <div className="container">
        <div className="hero-wrapper">
          <Motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
          >
            <Motion.h1 variants={fadeIn} transition={{ duration: 0.6 }}>
              Anas Baqai
            </Motion.h1>
            <Motion.h2
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Full Stack Developer
            </Motion.h2>
            <Motion.p
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I design and develop scalable web applications
              <br />
              with modern technologies and best practices.
            </Motion.p>
            <Motion.div
              className="cta"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/projects">
                <Motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </Motion.button>
              </Link>
            </Motion.div>
          </Motion.div>

          <div className="hero-animation">
            <Motion.div
              className="starfield-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <canvas ref={canvasRef} className="starfield-canvas"></canvas>
            </Motion.div>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 5rem;

  .container {
    width: 100%;
  }

  .hero-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .hero-content {
    max-width: 600px;
    padding-left: 2rem;
  }

  .hero-animation {
    flex: 1;
    max-width: 500px;
    height: 400px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
  }

  .starfield-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
  }

  .starfield-canvas {
    width: 100%;
    height: 100%;
    cursor: move;
  }

  h1 {
    font-size: 5rem;
    margin-bottom: 0.5rem;
    color: var(--primary);
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: var(--gray-text);
    font-weight: 400;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    line-height: 1.8;
  }

  button {
    padding: 0.8rem 2rem;
    background-color: var(--primary);
    color: var(--dark-bg);
    border-radius: 4px;
    font-weight: 600;
    font-size: 1rem;
    transition: var(--transition);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #e0e0e0;
    }
  }

  @media (max-width: 992px) {
    .hero-wrapper {
      flex-direction: column;
      text-align: center;
    }

    .hero-content {
      max-width: 100%;
      padding-left: 0;
    }

    .hero-animation {
      margin-top: 2rem;
      margin-left: 0;
      height: 300px;
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }

    .hero-animation {
      height: 250px;
    }
  }
`;

export default Hero;
