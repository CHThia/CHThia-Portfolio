import PersonalProfile from '../img/caricatureProfile.PNG'

export default function homePage() {

  return (
    <>
      <div className="intro" 
        style={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '10px', 
          padding: '50px',  
          justifyItems:'center', 
          alignItems: 'center', 
          backgroundColor: 'lightblue' 
        }}>

        <div className='aboutMe' 
          style={{ 
            width:'70%',
            height: '80%',
            marginLeft: '500px'
          }}>

          <h1 style={{ 
            textAlign:'left', 
            fontFamily:'roboto, arial', 
            fontWeight: 'bold',
            fontSize:'60px',
            lineHeight: '1.3'  
          }}>
            Hi,<br/>
            I&apos;m Thia,<br/>
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
            width:'30%',
            height: '88%',
            borderRadius: '25px',
            backgroundColor:'#ffdc5f',
            marginRight: '200px',
            position: 'relative' 
          }}>
            
          <img src={ PersonalProfile } alt="ThiaProfile" style={{ 
            maxWidth: '125%', 
            height: 'auto', 
            display: 'block',
            transform: 'translateX(-10%)', 
            position: 'relative',
          }} />
        </div>

      </div>
    </>
  )
}
