import { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';

import AnimalChess from '../img/AnimalChess-Thumbnail.JPG'
import Html from '../img/HTML-Logo.png'
import Css from '../img/Css-Logo.png'
import Js from '../img/JavaScript-Logo.png'
import Git from '../img/Github-Logo.png'


export default function ProjectOne() {

  const [showModal, setShowModal] = useState(false);

  function handleCardClick () {
    return setShowModal(true)  
  }

  function handleClose () {
    return setShowModal(false)  
  }

  return(
    <>
      <Card style={{ 
        width: '20rem', 
        borderRadius: '10px', 
        overflow: 'hidden',
        boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.4)', 
        cursor: 'pointer',
      }} 
        onClick={ handleCardClick }
      >
        <Card.Img variant="top" src={ AnimalChess } alt="Animal Chess" />
          <Card.Body>
            <Card.Title style={{ fontSize: '18px', textAlign:'center', marginTop:'3px' }}>Animal Chess (斗兽棋)</Card.Title>
          </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} centered size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>Animal Chess ( <a 
            href='https://king-of-the-jungle.vercel.app/' 
            target='blank' 
            rel="noopener noreferrer"
            style={{ fontSize:'20px'}}>
              Click link to application</a> ) or 
            ( <a 
            href='https://github.com/CHThia/GA-Project01-AnimalChess-2024' 
            target='blank' 
            rel="noopener noreferrer"
            style={{ fontSize:'20px'}}>
            Click link to Git Repository</a> ) 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)',   
          justifyItems:'center', 
          alignItems: 'center',
        }}>
          <div style={{ padding:'30px' }}>
            <img src={ AnimalChess } alt='Animal Chess' style={{ 
              maxWidth: '450px', 
              borderRadius:'15px', 
              border: '2px solid black',
              boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.4)',
            }} />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div>
              <h4 style={{ padding:'5px', textAlign:'left', marginTop: '-10px'}} >Project Info :</h4>
              <p style={{ padding:'5px', textAlign:'left', marginTop: '0', fontSize: '16px' }}>
              Having my first experience in developing a 2D game. 
              I utilized JavaScript with DOM manipulation 
              to handle the game logic of this project and 
              style <br />the overall layout with HTML and CSS.
              </p>

              <h4 style={{ padding:'5px', textAlign:'left', marginTop: '-30px', marginBottom: '10px'}} >Technologies Used :</h4>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(5, 1fr)', 
                justifyItems:'left', 
              }}>
                <div>
                  <img src= { Html } alt="html" style={{ maxWidth: '50px', height: 'auto', display: 'block' }}/>
                  <p style= {{margin: '5px 0 0 5px', fontSize: '15px' }} >HTML</p>
                </div>
                <div>
                  <img src= { Css } alt="css" style={{ maxWidth: '50px', height: 'auto', display: 'block' }}/>
                  <p style= {{margin: '5px 0 0 0px', fontSize:'15px' }} >CSS</p>
                </div>
                <div>
                  <img src= { Js } alt="javascript" style={{ maxWidth: '50px', height: 'auto', display: 'block' }}/>
                  <p style= {{margin: '5px 0 0 -8px', fontSize:'15px' }} >Javascript</p>
                </div>
                <div>
                  <img src= { Git } alt="javascript" style={{ maxWidth: '50px', height: 'auto', display: 'block' }}/>
                  <p style= {{margin: '5px 0 0 0px', fontSize:'15px' }} >GitHub</p>
                </div>
              </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
        </Modal.Footer>
      </Modal>

      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          zIndex: 1040
        }} />
      )}
    </>
  )
}