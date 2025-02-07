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
import { IoIosArrowUp } from "react-icons/io";

function App() {
  return (
    <div className="App">
      <Nav />

      <Cover />

      <TOC />
      <About />

      <Skills />

      <Projects />

      <GroupProjects />

      <Assessments />

      <Feedback />

      <Goals />
      <a href="#nav" className="FAB">
        <div>
          <IoIosArrowUp color="white" />
        </div>
      </a>

      <Footer />
    </div>
  );
}

export default App;
