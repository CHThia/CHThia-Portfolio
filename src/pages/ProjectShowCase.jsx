import ProjectOne from '../components/Project_01'
import ProjectTwo from '../components/Project_02'
import ProjectThree from '../components/Project_03'
import ProjectFour from '../components/Project_04'


export default function ProjectShowcase() {

  return(
    <>
     <div className="project-showcase-container" style={{ padding: '20px', maxWidth: '70%', margin: 'auto', marginBottom:'25px' }} >

      <h3 style={{ textAlign: 'center', marginTop:'20px', marginBottom: '35px' }}>Project Showcases</h3>

      <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '50px', 
          padding: '10px', 
          justifyItems:'center', 
          alignItems: 'center', 
          marginTop: '35px' 
        }}>

          <ProjectOne />
          <ProjectTwo />
          <ProjectThree />
          <ProjectFour />

        </div>

     </div>
    </>
  )
}