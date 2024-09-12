import HTML from '../img/HTML-Logo.png'
import CSS from '../img/Css-Logo.png'
import JS from '../img/JavaScript-Logo.png'

export default function skill () {

  return (
    <>
      <div className="tech-logo-container" style={{ padding: '20px', maxWidth: '60%', margin: 'auto', marginBottom:'25px'}} >
        <h3 style={{ textAlign: 'center', marginBottom: '35px' }}>Skills</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '50px', padding: '10px', justifyItems:'center', alignItems: 'center' }}>

          <div>
            <img src= { HTML } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >HTML</p>
          </div>

          <div>
            <img src= { CSS } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >CSS</p>
          </div>

          <div>
            <img src= { JS } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >JavaScript</p>
          </div>

          <div>
            <img src= { HTML } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >React </p>
          </div>

          <div>
            <img src= { HTML } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >Node</p>
          </div>

          <div>
            <img src= { HTML } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >Express</p>
          </div>

          <div>
            <img src= { HTML } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >MongoDB</p>
          </div>

          <div>
            <img src= { HTML } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >PostgreSQL</p>
          </div>

          <div>
            <img src= { HTML } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >Konva JS</p>
          </div>

          <div>
            <img src= { HTML } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >Laravel</p>
          </div>

          <div>
            <img src= { HTML } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >PHP</p>
          </div>

          <div>
            <img src= { HTML } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >MySQL</p>
          </div>

          <div>
            <img src= { HTML } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >BootStrap</p>
          </div>

          <div>
            <img src= { HTML } alt="html" style={{ maxWidth: '100px', height: 'auto', display: 'block' }}/>
            <p style= {{margin: '8px 0 0 5px', fontSize:'20px' }} >XAMPP</p>
          </div>

        </div>
      </div>
    </>
  )
  
}