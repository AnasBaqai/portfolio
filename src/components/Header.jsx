import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion as Motion } from "framer-motion";

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
          <div className="logo-container">
            <div className="avatar">
              <img src="/avatar.png" alt="Anas Baqai" />
            </div>
            <Link to="/" className="logo">
              ANAS BAQAI
            </Link>
          </div>
          <nav>
            <ul>
              <Motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about">About</Link>
              </Motion.li>
              <Motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/projects">Projects</Link>
              </Motion.li>
              <Motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/blog">Blog</Link>
              </Motion.li>
              <Motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">Contact</Link>
              </Motion.li>
            </ul>
          </nav>
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled(Motion.header)`
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

  .container {
    padding-left: 1rem;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: 1.5rem;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--primary);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
    margin-right: 2rem;
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
    .logo-container {
      margin-left: 0;
    }

    .header-content {
      flex-direction: column;
      gap: 1rem;
    }

    nav ul {
      gap: 1rem;
      margin-right: 0;
    }
  }
`;

export default Header;
