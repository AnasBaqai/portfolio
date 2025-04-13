import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
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
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <ProjectDetails />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <BlogPage />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
