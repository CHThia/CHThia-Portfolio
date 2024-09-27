import Html from '../img/HTML-Logo.png'
import Css from '../img/Css-Logo.png'
import Js from '../img/JavaScript-Logo.png'
import ReactJS from '../img/React-Logo.png'
import Node from '../img/Node-Logo.png'
import Express from '../img/Express-Logo.png'
import MongoDB from '../img/MongoDB-Logo.png'
import PostgreSQL from '../img/PostgreSQL-Logo.png'
import Konva from '../img/Konva-Logo.png'
import Laravel from '../img/Laravel-Logo.png'
import Php from '../img/Php-Logo.png'
import MySQL from '../img/MySQL-Logo.png'
import BootStrap from '../img/BootStrap-Logo.png'
import Xampp from '../img/XAMPP-Logo.png'
import Git from '../img/Github-Logo.png'


export default function skill () {

  return (
    <>
      <div className="tech-logo-container" style={{ 
        padding: '20px', 
        maxWidth: '60%', 
        margin: 'auto', 
        marginBottom:'35px',
        width: '100%', 
        height: '675px',  
        boxSizing: 'border-box',
      }} >
        
        <h3 style={{ 
          textAlign: 'center', 
          fontWeight:'bold', 
          fontFamily:'roboto, arial', 
          margin: '35px 0 35px 0',
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center'  }}>
            TECHNOLOGY SKILLS
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(5, 1fr)', 
          gap: '50px', 
          padding: '10px', 
          justifyItems:'center', 
          alignItems: 'center', 
          marginTop: '35px' 
        }}>

          <div>
            <img src= { Html } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px',  fontFamily:'roboto, arial' }}>HTML</p>
          </div>

          <div>
            <img src= { Css } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px',  fontFamily:'roboto, arial' }}>CSS</p>
          </div>

          <div>
            <img src= { Js } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px',  fontFamily:'roboto, arial' }}>JavaScript</p>
          </div>

          <div>
            <img src= { BootStrap } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px',  fontFamily:'roboto, arial' }}>BootStrap</p>
          </div>

          <div>
            <img src= { Git } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px',  fontFamily:'roboto, arial' }}>GitHub</p>
          </div>

          <div>
            <img src= { ReactJS } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px',  fontFamily:'roboto, arial' }}>React </p>
          </div>

          <div>
            <img src= { Node } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px',  fontFamily:'roboto, arial' }}>Node</p>
          </div>

          <div>
            <img src= { Express } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px',  fontFamily:'roboto, arial' }}>Express</p>
          </div>

          <div>
            <img src= { MongoDB } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px',  fontFamily:'roboto, arial' }}>MongoDB</p>
          </div>

          <div>
            <img src= { PostgreSQL } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px',  fontFamily:'roboto, arial' }}>PostgreSQL</p>
          </div>

          <div>
            <img src= { Konva } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px',  fontFamily:'roboto, arial' }}>Konva JS</p>
          </div>

          <div>
            <img src= { Laravel } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px',  fontFamily:'roboto, arial' }}>Laravel</p>
          </div>

          <div>
            <img src= { Php } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px',  fontFamily:'roboto, arial' }}>PHP</p>
          </div>

          <div>
            <img src= { MySQL } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px',  fontFamily:'roboto, arial' }}>MySQL</p>
          </div>

          <div>
            <img src= { Xampp } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px',  fontFamily:'roboto, arial' }}>XAMPP</p>
          </div>

        </div>
      </div>
    </>
  )
}