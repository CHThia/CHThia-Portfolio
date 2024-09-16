import { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';

import YoungDaVinci from '../img/YoungDaVinci-Thumbnail.JPG'
import ReactJS from '../img/React-Logo.png'
import Node from '../img/Node-Logo.png'
import Express from '../img/Express-Logo.png'
import PostgreSQL from '../img/PostgreSQL-Logo.png'
import Konva from '../img/Konva-Logo.png'
import Git from '../img/Github-Logo.png'


export default function ProjectThree() {

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
        <Card.Img variant="top" src={ YoungDaVinci } alt="Young Da Vinci" />
          <Card.Body>
            <Card.Title style={{ fontSize: '18px', textAlign:'center', marginTop:'3px' }}>Young Da Vinci (Drawing App)</Card.Title>
          </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} centered size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>Young DaVinci ( <a 
            href='https://ga-project04-youngdavinci-p79n.onrender.com/' 
            target='blank' 
            rel="noopener noreferrer"
            style={{ fontSize:'20px'}}>
              Click link to application</a> ) or 
            ( <a 
            href='https://github.com/CHThia/GA-Project04-YoungDaVinci-2024' 
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
            <img src={ YoungDaVinci } alt='Young Da Vinci' style={{ 
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
              Young DaVinci is an online drawing platform designed for kids and young teens. 
              The drawing materials are created by the teacher, who will assign <br />the drawing homework to each student based on their age and 
              drawing abilities. In addition, the teacher will monitor the progress of each <br />student&apos;s 
              homework and provide feedback to help them in their drawing processes or learning journey.
              </p>

              <h4 style={{ padding:'5px', textAlign:'left', marginTop: '-40px', marginBottom: '10px'}} >Technologies Used :</h4>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(6, 1fr)', 
                justifyItems:'left', 
              }}>
                <div>
                  <img src= { ReactJS } alt="html" style={{ maxWidth: '50px', height: 'auto', display: 'block' }}/>
                  <p style= {{margin: '5px 0 0 5px', fontSize: '15px' }} >React</p>
                </div>
                <div>
                  <img src= { Node } alt="css" style={{ maxWidth: '50px', height: 'auto', display: 'block' }}/>
                  <p style= {{margin: '5px 0 0 0px', fontSize:'15px' }} >Node</p>
                </div>
                <div>
                  <img src= { Express } alt="javascript" style={{ maxWidth: '50px', height: 'auto', display: 'block' }}/>
                  <p style= {{margin: '5px 0 0 0px', fontSize:'15px' }} >Express</p>
                </div>
                <div>
                  <img src= { PostgreSQL } alt="javascript" style={{ maxWidth: '50px', height: 'auto', display: 'block' }}/>
                  <p style= {{margin: '5px 0 0 -10px', fontSize:'15px' }} >PostgreSQL</p>
                </div>
                <div>
                  <img src= { Konva } alt="javascript" style={{ maxWidth: '50px', height: 'auto', display: 'block' }}/>
                  <p style= {{margin: '5px 0 0 1px', fontSize:'15px' }} >Konva</p>
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