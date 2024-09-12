// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AnimalChess from '../img/AnimalChess-Thumbnail.JPG'
import MTG from '../img/MTG-Thumbnail.JPG'
import YoungDaVinci from '../img/YoungDaVinci-Thumbnail.JPG'


export default function ProjectShowcase() {

  return(
    <>
     <div className="project-showcase-container" style={{ padding: '20px', maxWidth: '70%', margin: 'auto', marginBottom:'25px' }} >
      <h3 style={{ textAlign: 'center', marginTop:'20px', marginBottom: '35px' }}>Project Showcases</h3>
      <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '50px', padding: '10px', 
          justifyItems:'center', 
          alignItems: 'center', 
          marginTop: '35px' 
        }}>

          <Card style={{ 
            width: '20rem', 
            borderRadius: '10px', 
            overflow: 'hidden',
            boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.4)'  
          }}>
            <Card.Img variant="top" src={AnimalChess} alt="Animal Chess" />
            <Card.Body>
              <Card.Title>Animal Chess</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card content.
              </Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>

          <Card style={{ 
            width: '20rem', 
            borderRadius: '10px', 
            overflow: 'hidden',
            boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.4)'  
          }}>
            <Card.Img variant="top" src={MTG} alt="Animal Chess" />
            <Card.Body>
              <Card.Title>MTG - Deck Builds</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card content.
              </Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>

          <Card style={{ 
            width: '20rem', 
            borderRadius: '10px', 
            overflow: 'hidden',
            boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.4)'  
          }}>
            <Card.Img variant="top" src={YoungDaVinci} alt="Animal Chess" />
            <Card.Body>
              <Card.Title>Animal Chess</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card content.
              </Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>

        </div>

     </div>
    </>
  )
}