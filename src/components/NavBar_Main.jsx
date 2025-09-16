import 'bootstrap/dist/css/bootstrap.min.css';
import CHThiaLogo from '../img/CHThia-Logo.png';
import '../css/styles.css'; 
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  // Close menu when resizing to desktop widths or when a hash link is clicked
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992 && open) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') setOpen(false);
  };

  const closeOnNavigate = () => setOpen(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" 
        style={{
          position: 'sticky',
          top: 0,
          backgroundColor: '#363636',
          zIndex: 1000
        }}>

        <div className="container-fluid" style={{ position: 'relative' }}>
          <a className="navbar-brand" href="#home">
            <img src={CHThiaLogo} alt="logo" style={{ maxWidth: '35px', marginLeft: '15px', height: 'auto', display: 'block' }} />
          </a>

          {/* Hamburger button for mobile */}
          <button
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((v) => !v)}
            onKeyDown={handleKeyDown}
            type="button"
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          <div id="primary-navigation" className={`nav-links ${open ? 'open' : ''}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home" onClick={closeOnNavigate}>HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills" onClick={closeOnNavigate}>SKILLS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects" onClick={closeOnNavigate}>PROJECTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={closeOnNavigate}>CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
