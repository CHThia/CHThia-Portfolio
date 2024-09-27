import 'bootstrap/dist/css/bootstrap.min.css';
import CHThiaLogo from '../img/CHThia-Logo.png';
import '../css/styles.css'; 

export default function NavBar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" 
        style={{
          position: 'sticky',
          top: 0,
          backgroundColor: '#363636',
          zIndex: 1000
        }}>

        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src={CHThiaLogo} alt="html" style={{ maxWidth: '35px', marginLeft: '15px', height: 'auto', display: 'block' }} />
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home" >HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills" >SKILLS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects" >PROJECTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" >CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
