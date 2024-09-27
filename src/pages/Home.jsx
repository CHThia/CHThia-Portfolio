import { useEffect } from 'react';
import PersonalProfile from '../img/Animated-CaricatureProfile.gif';

export default function HomePage() {

  useEffect(() => {

    if (window.particlesJS) {
      window.particlesJS('bokeh-effect', {
        particles: {
          number: {
            value: 50, 
          },
          size: {
            value: 20,
            random: true, 
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.18,
            random: false, 
          },
          move: {
            speed: 0.25, 
          },
          line_linked: {
            enable: false,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false, 
            },
          },
        },
        retina_detect: true, 
      });
    }
  }, []);

  return (
    <>
      <div className="intro" 
        style={{
          position: 'relative',
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '50px', 
          padding: '50px',  
          justifyItems: 'center', 
          alignItems: 'center', 
          background: 'linear-gradient(125deg, #d1f4ff, #57b7de)',
          width: '100%', 
          height: '585px',  
          boxSizing: 'border-box',
          boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
        }}>

        <div 
          id="bokeh-effect" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        ></div>

        <div className='aboutMe' 
          style={{ 
            zIndex: 2,
            width: '600px', 
            height: 'auto',
            margin: '0',
            marginTop: '20px', 
            textAlign: 'left',
            marginLeft: '325px'
          }}>

          <h1 style={{ 
            textAlign: 'left', 
            fontFamily: 'roboto, arial', 
            fontWeight: 'bold',
            fontSize: '60px',
            lineHeight: '1.3',  
          }}>
            Hi,<br/>
            I&apos;m Thia (程),<br/>
            FullStack Developer.
          </h1>

          <p style={{ textAlign:'left', marginTop: '0px' }}>
            Software Engineer | Multimedia Designer | VR Enthusiast
            <br />
            <br />
            My software engineering and multimedia design skills fuel my passion for creating functional and
            nicely designed applications. <br />I love merging creativity with code to build standout solutions.
            <br />
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Click to view my <a href="https://www.linkedin.com/in/thiach/" target="_blank">linkedin</a> profile.</span>
          </p>
          
        </div>

        <div className="bgColor" 
          style={{ 
            zIndex: 2,
            width: '275px', 
            height: '400px', 
            borderRadius: '25px',
            backgroundColor: '#ffdc5f',
            marginRight: '200px',
            position: 'relative',
            transform: 'translate(30%, -5%)',
            boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',  
          }}>
              
          <img src={ PersonalProfile } alt="ThiaProfile" style={{ 
            width: '200%', 
            height: 'auto', 
            display: 'block',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-75%, -46%)'
          }} />
        </div>

      </div>
    </>
  );
}
