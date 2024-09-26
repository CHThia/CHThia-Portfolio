import PersonalProfile from '../img/caricatureProfile.png'

export default function homePage() {

  return (
    <>
      <div className="intro" 
        style={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(2 , 1fr)', 
          gap: '20px', 
          padding: '50px',  
          justifyItems:'center', 
          alignItems: 'center', 
          backgroundColor: 'lightblue',
          width: '100vw',
          height: '60vh', 
          boxSizing: 'border-box'
        }}>

        <div className='aboutMe' 
          style={{ 
            width: '600px', 
            height: 'auto',
            margin: '0', 
            textAlign: 'left',
            marginLeft: '375px'
          }}>

          <h1 style={{ 
            textAlign:'left', 
            fontFamily:'roboto, arial', 
            fontWeight: 'bold',
            fontSize:'60px',
            lineHeight: '1.3',  
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
              width: '350px', 
              height: '400px', 
              borderRadius: '25px',
              backgroundColor:'#ffdc5f',
              marginRight:'250px',
              position: 'relative' 
            }}>
              
            <img src={ PersonalProfile } alt="ThiaProfile" style={{ 
              width: '115%', 
              height: 'auto', 
              display: 'block',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }} />
          </div>

      </div>
    </>
  )
}
