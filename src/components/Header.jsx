import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <StyledHeader
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={scrolled ? "scrolled" : ""}
    >
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            ANAS BAQAI
          </Link>
          <nav>
            <ul>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about">About</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/projects">Projects</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/blog">Blog</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">Contact</Link>
              </motion.li>
            </ul>
          </nav>
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled(motion.header)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 1.5rem 0;
  transition: var(--transition);
  background-color: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(5px);

  &.scrolled {
    padding: 1rem 0;
    background-color: rgba(17, 17, 17, 0.95);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--primary);
  }

  nav ul {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  nav a {
    position: relative;
    font-size: 1rem;
    font-weight: 500;
    color: var(--light-text);
    padding: 0.5rem 0;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary);
      transition: var(--transition);
    }

    &:hover:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .header-content {
      flex-direction: column;
      gap: 1rem;
    }

    nav ul {
      gap: 1rem;
    }
  }
`;

export default Header;
