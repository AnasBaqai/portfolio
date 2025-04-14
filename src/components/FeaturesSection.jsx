import styled from "styled-components";

const FeaturesSection = ({ features, title = "Key Features" }) => {
  if (!features || features.length === 0) return null;

  return (
    <StyledFeaturesSection>
      <h2>{title}</h2>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            {feature.icon && <div className="feature-icon">{feature.icon}</div>}
            <span>{feature.text || feature}</span>
          </li>
        ))}
      </ul>
    </StyledFeaturesSection>
  );
};

const StyledFeaturesSection = styled.div`
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

  ul {
    margin-left: 0;
    margin-top: 1.5rem;
    list-style: none;
  }

  .features-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 1.2rem;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 1.2rem;
    transition: var(--transition);

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  }

  .feature-icon {
    color: var(--primary);
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 10px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }

    .features-list {
      grid-template-columns: 1fr;
    }
  }
`;

export default FeaturesSection;
