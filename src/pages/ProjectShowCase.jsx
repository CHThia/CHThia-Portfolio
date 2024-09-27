import ProjectOne from '../components/Project_01'
import ProjectTwo from '../components/Project_02'
import ProjectThree from '../components/Project_03'
import ProjectFour from '../components/Project_04'
import ProjectFive from '../components/Project_05'


export default function ProjectShowcase() {

  return(
    <>
    <div style={{ backgroundColor: '#fff4de', boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.3)', }}>
     <div className="project-showcase-container" style={{ 
      padding: '20px', 
      maxWidth: '70%', 
      margin: 'auto', 
      marginBottom: '25px' 
      }} 
    >
      <h3 style={{ 
        textAlign: 'center',  
        fontWeight:'bold', 
        fontFamily:'roboto, arial', 
        margin: '35px 0 35px 0',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'  }}>
        PROJECT SHOWCASE
      </h3>
      <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '50px', 
          padding: '10px', 
          justifyItems:'center', 
          alignItems: 'center', 
          marginTop: '35px',
          marginBottom: '45px',
          fontFamily: 'roboto, arial'
        }}>
          <ProjectOne />
          <ProjectTwo />
          <ProjectThree />
          <ProjectFive />
          <ProjectFour />
        </div>
     </div>
    </div>
    </>
  )
}