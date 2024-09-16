import { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';

import AttendanceLogger from '../img/AttendanceLogger-Thumbnail.JPG'
import ReactJS from '../img/React-Logo.png'
import Node from '../img/Node-Logo.png'
import Express from '../img/Express-Logo.png'
import MongoDB from '../img/MongoDB-Logo.png'
import Git from '../img/Github-Logo.png'


export default function ProjectFour() {

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
        <Card.Img variant="top" src={ AttendanceLogger } alt="Young Da Vinci" />
          <Card.Body>
            <Card.Title style={{ fontSize: '18px', textAlign:'center', marginTop:'3px' }}>Attendance Logger</Card.Title>
          </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} centered size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>Attendance Logger ( <a 
            href='https://project-3-geekery.onrender.com/' 
            target='blank' 
            rel="noopener noreferrer"
            style={{ fontSize:'20px'}}>
              Click link to application</a> ) or 
            ( <a 
            href='https://github.com/ThiaCH/Project-3-Geekery' 
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
            <img src={ AttendanceLogger } alt='Attendance Logger' style={{ 
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
              The Attendance Login Application is designed to streamline <br />the process of monitoring and managing attendance for a certain educational institution. This prototype concept is intended to provide <br />a user-friendly interface that caters to both administrators and students <br />by enhancing efficiency and accessibility.
              </p>

              <h4 style={{ padding:'5px', textAlign:'left', marginTop: '-40px', marginBottom: '10px'}} >Technologies Used :</h4>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(5, 1fr)', 
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
                  <img src= { MongoDB } alt="javascript" style={{ maxWidth: '50px', height: 'auto', display: 'block' }}/>
                  <p style= {{margin: '5px 0 0 -10px', fontSize:'15px' }} >MongoDB</p>
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