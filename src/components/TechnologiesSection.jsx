import styled from "styled-components";

const TechnologiesSection = ({ technologies }) => {
  if (!technologies || technologies.length === 0) return null;

  return (
    <StyledTechnologiesSection>
      <h2>Technologies Used</h2>
      <div className="tech-stack">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-item" title={tech.name}>
            <div className="tech-icon">{tech.icon}</div>
          </div>
        ))}
      </div>
    </StyledTechnologiesSection>
  );
};

const StyledTechnologiesSection = styled.div`
  margin: 2.5rem 0;

  h2 {
    font-size: 1.8rem;
    margin: 0 0 1.2rem;
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

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1.5rem;
    justify-content: center;
  }

  .tech-item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    transition: var(--transition);

    &:hover {
      transform: translateY(-5px);
      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  }

  .tech-icon {
    font-size: 3rem;
    color: var(--primary);
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }

    .tech-stack {
      gap: 1.5rem;
    }

    .tech-item {
      width: 70px;
      height: 70px;
    }

    .tech-icon {
      font-size: 2.5rem;
    }
  }
`;

export default TechnologiesSection;
