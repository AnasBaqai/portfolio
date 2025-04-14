import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectHeader = ({ project }) => {
  return (
    <StyledProjectHeader>
      <div className="title-with-icon">
        {project.systemIcon && (
          <div className="system-icon">{project.systemIcon}</div>
        )}
        <h1>{project.title}</h1>
      </div>
      <div className="project-links">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          <FaGithub /> View Code
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </StyledProjectHeader>
  );
};

const StyledProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1.5rem;

  .title-with-icon {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .system-icon {
    color: var(--primary);
    background-color: rgba(255, 255, 255, 0.1);
    padding: 12px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 2.5rem;
    color: var(--primary);
  }

  .project-links {
    display: flex;
    gap: 1rem;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.7rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1rem;
    transition: var(--transition);
    cursor: pointer;
  }

  .btn-primary {
    background-color: var(--primary);
    color: var(--dark-bg);

    &:hover {
      background-color: #e0e0e0;
      transform: translateY(-3px);
    }
  }

  .btn-secondary {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--light-text);

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default ProjectHeader;
