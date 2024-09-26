import PersonalProfile from '../img/caricatureProfile.png'

export default function homePage() {

  return (
    <>
      <div className="intro" 
        style={{
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '50px', 
          padding: '50px',  
          justifyItems:'center', 
          alignItems: 'center', 
          background: 'linear-gradient(125deg, #d1f4ff, #57b7de)',
          width: '100%', 
          height: '550px',  
          boxSizing: 'border-box',
          boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.3)',
        }}>

        <div className='aboutMe' 
          style={{ 
            width: '600px', 
            height: 'auto',
            margin: '0',
            marginTop: '30px', 
            textAlign: 'left',
            marginLeft: '325px'
          }}>

          <h1 style={{ 
            textAlign:'left', 
            fontFamily:'roboto, arial', 
            fontWeight: 'bold',
            fontSize:'60px',
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
            <span style={{ fontStyle:'italic'}}>Click to view my <a href="https://www.linkedin.com/in/thiach/" target="_blank">linkedin</a> profile.</span>
          </p>
          
        </div>

          <div className="bgColor" 
            style={{ 
              width: '275px', 
              height: '400px', 
              borderRadius: '25px',
              backgroundColor:'#ffdc5f',
              marginRight:'200px',
              position: 'relative',
              transform: 'translate(30%)',
              boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',  
            }}>
              
            <img src={ PersonalProfile } alt="ThiaProfile" style={{ 
              width: '185%', 
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
  )
}
