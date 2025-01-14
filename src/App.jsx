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
function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <h3 id="skills" className="header">
        Skills
      </h3>
      <Skills />
      <h3 id="projects" className="header">
        Projects
      </h3>
      <Projects />
      <GroupProjects />
      <h3 className="header">Reflections</h3>
      <Feedback />
      <h3 className="header">Post-program goals</h3>
      <Goals />
      <Footer />
    </div>
  );
}

export default App;
