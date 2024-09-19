import { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';

import SocialNetworkClone from '../img/Social Network Clone-Thumbnail.JPG'
import Laravel from '../img/Laravel-Logo.png'
import Php from '../img/Php-Logo.png'
import MySQL from '../img/MySQL-Logo.png'
import BootStrap from '../img/BootStrap-Logo.png'
import Xampp from '../img/XAMPP-Logo.png'
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
        <Card.Img variant="top" src={ SocialNetworkClone } alt="SocialNetworkClone" />
          <Card.Body>
            <Card.Title style={{ fontSize: '18px', textAlign:'center', marginTop:'3px' }}>Social Network (Twitter Clone) </Card.Title>
          </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} centered size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>Social Network
            ( <a 
            href='https://shrouded-ridge-17109-69191d3d5f8f.herokuapp.com/' 
            target='blank' 
            rel="noopener noreferrer"
            style={{ fontSize:'20px'}}>
              Click link to application</a> ) 
            or 
            ( <a 
            href='https://github.com/CHThia/Project-Twitter-Clone-2024' 
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
            <img src={ SocialNetworkClone } alt='SocialNetworkClone' style={{ 
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
              I developed a simple Social Media Platform to sharpen my full-stack skills. Built with Laravel, the app includes user authentication, tweet-like posts, <br />
              and a follow system. I used XAMPP for MySQL management, gaining hands-on experience in both front-end and back-end development. <br />Special Thanks - Yelo Code (YouTube) for his tutorials & insights.
              </p>

              <h4 style={{ padding:'5px', textAlign:'left', marginTop: '-40px', marginBottom: '10px'}} >Technologies Used :</h4>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(6, 1fr)', 
                justifyItems:'left', 
              }}>
                <div>
                  <img src= { Laravel } alt="html" style={{ maxWidth: '50px', height: 'auto', display: 'block' }}/>
                  <p style= {{margin: '5px 0 0 5px', fontSize: '15px' }} >Laravel</p>
                </div>
                <div>
                  <img src= { Php } alt="css" style={{ maxWidth: '50px', height: 'auto', display: 'block' }}/>
                  <p style= {{margin: '5px 0 0 0px', fontSize:'15px' }} >Php</p>
                </div>
                <div>
                  <img src= { MySQL } alt="javascript" style={{ maxWidth: '50px', height: 'auto', display: 'block' }}/>
                  <p style= {{margin: '5px 0 0 0px', fontSize:'15px' }} >MySQL</p>
                </div>
                <div>
                  <img src= { BootStrap } alt="javascript" style={{ maxWidth: '50px', height: 'auto', display: 'block' }}/>
                  <p style= {{margin: '5px 0 0 -10px', fontSize:'15px' }} >BootStrap</p>
                </div>
                <div>
                  <img src= { Xampp } alt="javascript" style={{ maxWidth: '50px', height: 'auto', display: 'block' }}/>
                  <p style= {{margin: '5px 0 0 0px', fontSize:'15px' }} >XAMPP</p>
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