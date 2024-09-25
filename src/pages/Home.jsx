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
            width:'50%',
            height: '80%',
            marginLeft: '150px'
          }}>

          <h1 style={{ 
            textAlign:'left', 
            fontFamily:'roboto, arial', 
            fontWeight: 'bold',
            lineHeight: '1.5'  
          }}>
            Hi,<br/>
            I&apos;m Thia,<br/>
            FullStack Developer.
          </h1>

          <p style={{ textAlign:'left', marginTop: '0px' }}>
            Front-End Developer | Back-End Developer
          </p>
        </div>

        <div className="imageProfile" 
          style={{ 
            width:'30%',
            height: '100%',
            borderRadius: '150px',
            backgroundColor:'yellow',
            marginRight: '250px'
          }}>
            
        </div>

      </div>
    </>
  )
}



{/* <h1 style={{ marginBottom: '40px', fontWeight: 'bold' }}>Welcome To My Software Engineering Portfolio</h1>
<p>My portfolio website is currently in development but you can visit me at my <a href="https://www.linkedin.com/in/thiach/" target="_blank">linkedin</a> profile.</p>
<p>Thank you for your patience!!</p> */}