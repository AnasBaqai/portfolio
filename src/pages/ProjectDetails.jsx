import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { projectDetailsData } from "../data/projectDetailsData";
import ProjectHeader from "../components/ProjectHeader";
import ProjectDescription from "../components/ProjectDescription";
import TechnologiesSection from "../components/TechnologiesSection";
import FeaturesSection from "../components/FeaturesSection";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetailsData.find((p) => p.id === id) || {
    id,
    title: `Project ${id}`,
    description: "This project details will be added soon.",
    fullDescription: "",
    image: "https://via.placeholder.com/600x400",
    technologies: [],
    features: [],
    architecture: [],
  };

  return (
    <StyledProjectDetails>
      <div className="container">
        <Motion.div
          className="project-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProjectHeader project={project} />

          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>

          <ProjectDescription project={project} />

          <TechnologiesSection technologies={project.technologies} />

          <FeaturesSection features={project.features} title="Key Features" />

          <FeaturesSection
            features={project.architecture}
            title="Architecture"
          />

          <div className="project-navigation">
            <Link to="/projects" className="btn btn-back">
              Back to Projects
            </Link>
          </div>
        </Motion.div>
      </div>
    </StyledProjectDetails>
  );
};

const StyledProjectDetails = styled.section`
  min-height: 100vh;
  padding: 10rem 0 5rem;

  .project-content {
    max-width: 900px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    padding: 2.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  .project-image {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 2.5rem;

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  .project-navigation {
    margin-top: 3.5rem;
    display: flex;
    justify-content: center;
  }

  .btn-back {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.7rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1rem;
    transition: var(--transition);
    background-color: transparent;
    color: var(--light-text);
    border: 1px solid var(--light-text);

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-3px);
    }
  }

  @media (max-width: 768px) {
    padding: 8rem 0 3rem;

    .project-content {
      padding: 1.5rem;
    }
  }
`;

export default ProjectDetails;
