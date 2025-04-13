import styled from "styled-components";
import { motion as Motion } from "framer-motion";

const Blog = () => {
  return (
    <StyledBlog>
      <div className="container">
        <Motion.div
          className="blog-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Blog</h1>
          <p>
            This is the blog page. You will replace this with your blog posts.
          </p>
        </Motion.div>
      </div>
    </StyledBlog>
  );
};

const StyledBlog = styled.section`
  min-height: 100vh;
  padding: 8rem 0;

  .blog-content {
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

export default Blog;
