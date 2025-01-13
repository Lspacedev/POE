import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GroupProjects from "./components/GroupProjects";
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
