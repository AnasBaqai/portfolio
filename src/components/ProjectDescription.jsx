import styled from "styled-components";

const ProjectDescription = ({ project }) => {
  return (
    <StyledProjectDescription>
      <h2>Overview</h2>
      <p>{project.description}</p>
      {project.fullDescription && <p>{project.fullDescription}</p>}

      {project.credentials && (
        <div className="project-credentials">
          <h3>Demo Credentials</h3>
          <p>
            Username: <strong>{project.credentials.username}</strong>
          </p>
          <p>
            Password: <strong>{project.credentials.password}</strong>
          </p>
        </div>
      )}
    </StyledProjectDescription>
  );
};

const StyledProjectDescription = styled.div`
  margin-top: 2.5rem;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    color: var(--primary);
    position: relative;
    padding-bottom: 0.5rem;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 3px;
      width: 60px;
      background-color: var(--primary);
    }
  }

  h3 {
    font-size: 1.3rem;
    margin: 1.5rem 0 1rem;
    color: var(--primary);
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: var(--light-text);
  }

  .project-credentials {
    background-color: rgba(255, 255, 255, 0.05);
    padding: 1.8rem;
    border-radius: 8px;
    margin: 2.5rem 0;
    border-left: 3px solid var(--primary);

    h3 {
      margin-top: 0;
    }

    p {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export default ProjectDescription;
