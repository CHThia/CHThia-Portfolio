import NavBar from "../components/NavBar_Main"
import Home from "../pages/Home"
import Skills from "../pages/Skills"
import ProjectShowCase from '../pages/ProjectShowCase'
import Contact from "../pages/Contact"

export default function App() {

  return (
    <>
      <NavBar />
      
      <div id='home' >
        <Home />
      </div>
      
      <div id="skills">
        <Skills />
      </div>
      <hr/>
      <div id="projects">
        <ProjectShowCase />
      </div>
      <hr/>
      <div id="contact">
        <Contact />
      </div>
    </>
  )
}
