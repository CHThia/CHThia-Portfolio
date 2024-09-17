import 'bootstrap/dist/css/bootstrap.min.css';


export default function navBar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" 
        style={{
          position:'sticky',
          top: 0,
          zIndex: 1000
        }}>

        <div className="container-fluid">

          <a className="navbar-brand" href="#home">Logo PlaceHolder</a>

          {/* <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>

          </div>

        </div>

      </nav>
    </>
  )
}