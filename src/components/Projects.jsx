import { motion as Motion } from "framer-motion";
import { useRef } from "react";
import { projectData } from "../data/projectData";
import ProjectCard from "./ProjectCard";
import { StyledProjects } from "../styles/ProjectsStyles";

const Projects = () => {
  const ref = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <StyledProjects id="projects">
      <div className="container">
        <Motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Projects
        </Motion.h2>

        <Motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variants={itemVariants}
            />
          ))}
        </Motion.div>
      </div>
    </StyledProjects>
  );
};

export default Projects;
