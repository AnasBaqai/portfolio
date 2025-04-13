import styled from "styled-components";
import { motion as Motion } from "framer-motion";

const Contact = () => {
  return (
    <StyledContact>
      <div className="container">
        <Motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Contact</h1>
          <p>
            This is the contact page. You can replace this with your contact
            form or information.
          </p>
        </Motion.div>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  min-height: 100vh;
  padding: 8rem 0;

  .contact-content {
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

export default Contact;
