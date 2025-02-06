import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GroupProjects from "./components/GroupProjects";
import Goals from "./components/Goals";
import Feedback from "./components/FeedbackReflections";
import Cover from "./components/Cover";
import TOC from "./components/TOC";
import Assessments from "./components/Assesments";
function App() {
  return (
    <div className="App">
      <Nav />
      <h1 className="header">Cover</h1>

      <Cover />
      <h1 className="header">Table of Contents</h1>

      <TOC />
      <About />
      <h1 id="skills" className="header">
        Skills
      </h1>
      <Skills />
      <h1 id="projects" className="header">
        Projects
      </h1>
      <Projects />
      <h1 id="group-projects" className="header">
        Group Projects
      </h1>
      <GroupProjects />
      <h1 id="assessments" className="header">
        Assessments
      </h1>
      <Assessments />
      <h1 id="feedback" className="header">
        Feedback And Reflections
      </h1>
      <Feedback />
      <h1 id="post" className="header">
        Post-program goals
      </h1>
      <Goals />
      <Footer />
    </div>
  );
}

export default App;
