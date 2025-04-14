import styled from "styled-components";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <StyledFooter>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Link to="/">
                <h3>ANAS BAQAI</h3>
                <p>Full Stack Developer</p>
              </Link>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contact Me</h4>
              <ul>
                <li>
                  <FaPhone /> <a href="tel:+491707413792">+49 170 7413792</a>
                </li>
                <li>
                  <FaEnvelope />{" "}
                  <a href="mailto:muhammadanas94036@gmail.com">
                    muhammadanas94036@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-social">
              <h4>Connect</h4>
              <div className="social-icons">
                <Motion.a
                  href="https://github.com/AnasBaqai"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaGithub />
                </Motion.a>
                <Motion.a
                  href="https://www.linkedin.com/in/muhammadanasbaqai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaLinkedinIn />
                </Motion.a>
                <Motion.a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTwitter />
                </Motion.a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Anas Baqai. All rights reserved.</p>
          </div>
        </div>
      </StyledFooter>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const StyledFooter = styled.footer`
  padding: 4rem 0 2rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .footer-logo {
    h3 {
      font-size: 1.5rem;
      color: var(--primary);
      margin-bottom: 0.5rem;
      letter-spacing: 1px;
    }

    p {
      color: var(--gray-text);
      font-size: 0.9rem;
    }
  }

  h4 {
    font-size: 1.1rem;
    color: var(--primary);
    margin-bottom: 1.2rem;
    position: relative;
    padding-bottom: 0.5rem;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 30px;
      height: 2px;
      background-color: var(--primary);
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.8rem;

      a {
        color: var(--light-text);
        transition: var(--transition);

        &:hover {
          color: var(--primary);
        }
      }
    }
  }

  .footer-contact {
    ul li {
      display: flex;
      align-items: center;
      gap: 0.6rem;

      svg {
        color: var(--primary);
        font-size: 1.1rem;
      }
    }
  }

  .social-icons {
    display: flex;
    gap: 1rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 255, 255, 0.1);
      color: var(--light-text);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 1.1rem;
      transition: var(--transition);

      &:hover {
        background-color: var(--primary);
        color: var(--dark-bg);
      }
    }
  }

  .footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    color: var(--gray-text);
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 0 1.5rem;

    .footer-content {
      grid-template-columns: 1fr;
      text-align: center;
    }

    h4 {
      &:after {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .footer-contact ul li {
      justify-content: center;
    }

    .social-icons {
      justify-content: center;
    }
  }
`;

export default Footer;
