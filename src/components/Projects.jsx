import styled from "styled-components";
import { motion as Motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCar,
  FaTools,
  FaWarehouse,
  FaChartLine,
  FaBarcode,
  FaUserCog,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiMui,
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiHtml5,
} from "react-icons/si";

// Placeholder project image URLs (replace with your actual images when deploying)
const PROJECT_IMAGE = "https://via.placeholder.com/600x400";

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

  const projectData = [
    {
      id: 1,
      title: "Car Parts Management System",
      description:
        "A comprehensive system for managing car parts inventory, orders, and sales with secure authentication, inventory tracking, and reporting features.",
      image: "/car-parts-system.png",
      github: "https://github.com/AnasBaqai/car-parts-system",
      live: "https://car-parts-system-ars.vercel.app/login",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Material-UI", icon: <SiMui /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ],
      link: "/projects/1",
      icons: [
        <FaCar key="car" />,
        <FaTools key="tools" />,
        <FaWarehouse key="warehouse" />,
        <FaChartLine key="chart" />,
        <FaBarcode key="barcode" />,
        <FaUserCog key="admin" />,
      ],
    },
    {
      id: 2,
      title: "Project Name",
      description: "A short description of the project and its features.",
      image: PROJECT_IMAGE,
      github: "#",
      live: "#",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
      link: "/projects/2",
    },
    {
      id: 3,
      title: "Project Name",
      description: "A short description of the project and its features.",
      image: PROJECT_IMAGE,
      github: "#",
      live: "#",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
      link: "/projects/3",
    },
    {
      id: 4,
      title: "Project Name",
      description: "A short description of the project and its features.",
      image: PROJECT_IMAGE,
      github: "#",
      live: "#",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
      link: "/projects/4",
    },
  ];

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
            <Motion.div
              className="project-card"
              key={project.id}
              variants={itemVariants}
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
                      <span key={index} className="tech-tag">
                        {tech.icon}{" "}
                        <span className="tech-name">{tech.name}</span>
                      </span>
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
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>
              </Link>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
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

  .project-card {
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

  .project-card:hover .project-image img {
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
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .tech-tag {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--light-text);
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .tech-name {
    margin-top: 2px;
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
    padding-top: 6rem;

    .projects-grid {
      grid-template-columns: 1fr;
    }

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

export default Projects;
