import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

// Lazy loading for future pages
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const BlogPage = lazy(() => import("./pages/Blog"));
const ContactPage = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const LoadingWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: var(--primary);
  padding-top: 80px;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <About />
              <Projects />
            </main>
          }
        />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<LoadingWrapper>Loading...</LoadingWrapper>}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <Suspense fallback={<LoadingWrapper>Loading...</LoadingWrapper>}>
              <ProjectDetails />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<LoadingWrapper>Loading...</LoadingWrapper>}>
              <BlogPage />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<LoadingWrapper>Loading...</LoadingWrapper>}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<LoadingWrapper>Loading...</LoadingWrapper>}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
