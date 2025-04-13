import styled from "styled-components";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;

  .container {
    max-width: 600px;
    width: 100%;
  }

  .not-found-content {
    text-align: center;
    padding: 3rem;
    background: var(--color-bg-variant);
    border-radius: 10px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 8rem;
    margin: 0;
    color: var(--color-primary);
  }

  h2 {
    font-size: 2.5rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
    color: var(--color-light);
  }

  button {
    background: var(--color-primary);
    color: var(--color-white);
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;

const NotFound = () => {
  return (
    <StyledNotFound>
      <div className="container">
        <Motion.div
          className="not-found-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
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

export default NotFound;
