import styled from "styled-components";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <StyledHero>
      <div className="container">
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
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 5rem;

  .hero-content {
    max-width: 800px;
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
  }
`;

export default Hero;
