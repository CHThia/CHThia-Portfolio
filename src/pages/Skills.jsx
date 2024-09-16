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
      <div className="tech-logo-container" style={{ padding: '20px', maxWidth: '60%', margin: 'auto', marginBottom:'25px'}} >
        <h3 style={{ textAlign: 'center', marginBottom: '35px' }}>Software Engineering Skills</h3>
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
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >HTML</p>
          </div>

          <div>
            <img src= { Css } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >CSS</p>
          </div>

          <div>
            <img src= { Js } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >JavaScript</p>
          </div>

          <div>
            <img src= { BootStrap } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >BootStrap</p>
          </div>

          <div>
            <img src= { Git } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >GitHub</p>
          </div>

          <div>
            <img src= { ReactJS } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >React </p>
          </div>

          <div>
            <img src= { Node } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >Node</p>
          </div>

          <div>
            <img src= { Express } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >Express</p>
          </div>

          <div>
            <img src= { MongoDB } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >MongoDB</p>
          </div>

          <div>
            <img src= { PostgreSQL } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >PostgreSQL</p>
          </div>

          <div>
            <img src= { Konva } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >Konva JS</p>
          </div>

          <div>
            <img src= { Laravel } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >Laravel</p>
          </div>

          <div>
            <img src= { Php } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >PHP</p>
          </div>

          <div>
            <img src= { MySQL } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >MySQL</p>
          </div>

          <div>
            <img src= { Xampp } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >XAMPP</p>
          </div>

        </div>
      </div>
    </>
  )
}