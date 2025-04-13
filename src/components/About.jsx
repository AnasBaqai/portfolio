import styled from "styled-components";
import { motion as Motion } from "framer-motion";

const About = () => {
  return (
    <StyledAbout id="about">
      <div className="container">
        <Motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="about-image">
            <img src="/profile.jpeg" alt="Anas Baqai" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi, I'm Anas Baqai, a passionate Full Stack Developer with
              expertise in building modern web applications. I specialize in
              JavaScript, React, Node.js, and various modern frameworks and
              technologies.
            </p>
            <p>
              With a strong foundation in both frontend and backend development,
              I enjoy creating seamless, user-friendly applications that solve
              real-world problems. My experience includes developing complex
              systems, RESTful APIs, and intuitive user interfaces.
            </p>
            <p>
              I'm constantly learning and adapting to new technologies and
              methodologies to enhance my skills and deliver better solutions.
              I'm particularly interested in performance optimization, clean
              code practices, and building scalable applications.
            </p>
          </div>
        </Motion.div>
      </div>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  padding: 8rem 0;

  .about-content {
    display: flex;
    gap: 4rem;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
    }
  }

  .about-image {
    flex: 1;

    img {
      width: 100%;
      max-width: 350px;
      border-radius: 50%;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      object-fit: cover;
      border: 4px solid var(--primary);
      aspect-ratio: 1 / 1;

      @media (max-width: 768px) {
        max-width: 250px;
        margin: 0 auto;
      }
    }
  }

  .about-text {
    flex: 2;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: var(--primary);
    }

    p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      line-height: 1.8;
    }
  }
`;

export default About;
