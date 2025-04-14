import styled from "styled-components";

export const StyledProjects = styled.section`
  padding: 8rem 0 5rem;
  min-height: 100vh;

  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
    color: var(--primary);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }

  @media (max-width: 768px) {
    padding-top: 6rem;

    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
`;
