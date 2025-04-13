import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const NotFound = () => {
  return (
    <StyledNotFound>
      <div className="container">
        <Motion.div
          className="not-found-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for doesn't exist or has been moved.</p>

          <Link to="/">
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Home
            </Motion.button>
          </Link>
        </Motion.div>
      </div>
    </StyledNotFound>
  );
};

const StyledNotFound = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .not-found-content {
    max-width: 600px;
  }

  h1 {
    font-size: 8rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--gray-text);
  }

  button {
    padding: 0.8rem 2rem;
    background-color: var(--primary);
    color: var(--dark-bg);
    border-radius: 4px;
    font-weight: 600;
    font-size: 1rem;
    transition: var(--transition);

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

export default NotFound;
