import NavBar from "../components/NavBar_Main"
import Home from "../pages/Home"
import Skills from "../pages/Skills"
import ProjectShowCase from '../pages/ProjectShowCase'
import Contact from "../pages/Contact"

export default function App() {

  return (
    <>
      <NavBar />
      <div style={{ marginTop: '35px' }}>
        <Home />
      </div>
      <hr/>
      <Skills />
      <hr/>
      <ProjectShowCase />
      <hr/>
      <Contact />
    </>
  )
}
