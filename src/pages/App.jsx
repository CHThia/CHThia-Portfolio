import NavBar from "../components/NavBar_Main"
import Home from "../pages/Home"

export default function App() {

  return (
    <>
      <NavBar />

      <div style={{ marginTop: '35px' }}>
        <Home/>
      </div>

    </>
  )
}
