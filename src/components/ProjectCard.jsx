import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, variants }) => {
  return (
    <StyledProjectCard
      key={project.id}
      variants={variants}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <Link to={project.link}>
        <div className="project-image">
          <img src={project.image} alt={project.title} />
          {project.icons && (
            <div className="project-icons">
              {project.icons.map((icon, idx) => (
                <div key={idx} className="project-feature-icon">
                  {icon}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <div className="project-tech">
            {project.technologies.map((tech, index) => (
              <div key={index} className="tech-icon" title={tech.name}>
                {tech.icon}
              </div>
            ))}
          </div>

          <div className="project-links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub /> Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt /> Live
              </a>
            )}
          </div>
        </div>
      </Link>
    </StyledProjectCard>
  );
};

const StyledProjectCard = styled(Motion.div)`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  transition: var(--transition);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  height: 100%;

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  a {
    display: block;
    height: 100%;
  }

  .project-image {
    overflow: hidden;
    position: relative;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }

  .project-icons {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    gap: 15px;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(3px);
  }

  .project-feature-icon {
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      background-color: rgba(255, 255, 255, 0.25);
    }
  }

  &:hover .project-image img {
    transform: scale(1.05);
  }

  .project-info {
    padding: 1.5rem;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
      color: var(--primary);
    }

    p {
      color: var(--gray-text);
      line-height: 1.6;
      margin-bottom: 1rem;
    }
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
    justify-content: center;
  }

  .tech-icon {
    background-color: rgba(255, 255, 255, 0.05);
    color: var(--primary);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    transition: var(--transition);

    &:hover {
      transform: translateY(-3px);
      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    }
  }

  .project-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--light-text);
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    transition: var(--transition);

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  @media (max-width: 768px) {
    .project-icons {
      gap: 10px;
    }

    .project-feature-icon {
      width: 30px;
      height: 30px;
      font-size: 14px;
    }
  }
`;

export default ProjectCard;
