import styled from "styled-components";
import { motion as Motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <StyledAbout id="about">
      <div className="container">
        <Motion.div
          className="about-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Motion.div
            className="about-image-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="about-image">
              <img src="/profile.jpeg" alt="Anas Baqai" />
            </div>
            <div className="image-decoration"></div>
          </Motion.div>

          <div className="about-text">
            <Motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              About Me
            </Motion.h2>

            <Motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
            >
              Hi, I'm Anas Baqai, a passionate Full Stack Developer with
              expertise in building modern web applications. I specialize in
              JavaScript, React, Node.js, and various modern frameworks and
              technologies.
            </Motion.p>

            <Motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              With a strong foundation in both frontend and backend development,
              I enjoy creating seamless, user-friendly applications that solve
              real-world problems. My experience includes developing complex
              systems, RESTful APIs, and intuitive user interfaces.
            </Motion.p>

            <Motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ delay: 0.3 }}
            >
              I'm constantly learning and adapting to new technologies and
              methodologies to enhance my skills and deliver better solutions.
              I'm particularly interested in performance optimization, clean
              code practices, and building scalable applications.
            </Motion.p>
          </div>
        </Motion.div>
      </div>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  padding: 8rem 0;
  background-color: rgba(255, 255, 255, 0.02);

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .about-content {
    display: flex;
    gap: 5rem;
    align-items: center;
    position: relative;
  }

  .about-image-container {
    flex: 1;
    position: relative;
    padding-left: 2rem;
  }

  .about-image {
    position: relative;
    z-index: 2;

    img {
      width: 100%;
      max-width: 350px;
      border-radius: 50%;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      object-fit: cover;
      border: 4px solid var(--primary);
      aspect-ratio: 1 / 1;
    }
  }

  .image-decoration {
    position: absolute;
    width: 200px;
    height: 200px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    animation: pulse 6s infinite ease-in-out;
  }

  @keyframes pulse {
    0% {
      width: 200px;
      height: 200px;
      opacity: 0.5;
    }
    50% {
      width: 300px;
      height: 300px;
      opacity: 0.2;
    }
    100% {
      width: 200px;
      height: 200px;
      opacity: 0.5;
    }
  }

  .about-text {
    flex: 2;
    padding-right: 2rem;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: var(--primary);
      position: relative;
      display: inline-block;

      &:after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 60px;
        height: 3px;
        background-color: var(--primary);
      }
    }

    p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--light-text);
    }
  }

  @media (max-width: 992px) {
    .about-content {
      gap: 3rem;
    }
  }

  @media (max-width: 768px) {
    .about-content {
      flex-direction: column;
      text-align: center;
      gap: 3rem;
    }

    .about-image-container {
      padding-left: 0;
    }

    .about-image img {
      max-width: 250px;
      margin: 0 auto;
    }

    .about-text {
      padding-right: 0;

      h2 {
        &:after {
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
`;

export default About;
