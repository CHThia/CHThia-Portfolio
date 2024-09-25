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
            height: '90%',
            marginLeft: '550px'
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
          <div className="bgColor" 
            style={{ 
              width: '325px',     
              height: '325px',    
              backgroundColor: '#ffdc5f',
              borderRadius: '20px',
              position: 'fixed',
              top: '33%', 
              right: '25%', 
              transform: 'translateY(-50%)', 
              zIndex: '10',
              boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',  
            }}
          >
            <img src={PersonalProfile} alt="ThiaProfile" style={{ 
                width: '325px',
                height: '325px',    
                objectFit: 'cover', 
                display: 'block',
            }} />
          </div>
        </div>
      </div>
    </>
  )
}



{/* <h1 style={{ marginBottom: '40px', fontWeight: 'bold' }}>Welcome To My Software Engineering Portfolio</h1>
<p>My portfolio website is currently in development but you can visit me at my <a href="https://www.linkedin.com/in/thiach/" target="_blank">linkedin</a> profile.</p>
<p>Thank you for your patience!!</p> */}