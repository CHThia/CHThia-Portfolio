import { useState } from 'react';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';


export default function ContactForm() {

  const [status, setStatus] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mwpejjkw', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setShowAlert(true);
        form.reset();
      } else {
        setStatus('error');
        setShowAlert(true);
      }

      setTimeout(() => {
        setShowAlert(false);
        setStatus('');
      }, 3500);

    } catch (error) {
      setStatus('error');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        setStatus('');
      }, 3500);
    }
  };


  return (
    <>
      <div className="form-title" style={{ 
        padding: '20px', 
        maxWidth: '20%',
        height: '70px', 
        margin: 'auto',
        marginTop: '70px',
        marginBottom: '25px',
        backgroundColor: '#fccf05',
        borderRadius: '50px',
        boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)'
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontWeight: 'bold', 
          fontFamily:'roboto, arial', 
          fontSize: '30px', 
          transform: 'translate(0, -5%)' }}>
            Get In Touch With Me
        </h2>
      </div>
      
      <div className="form-container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '80px', 
        padding: '20px', 
        maxWidth: '60%', 
        margin: 'auto', 
       }}>
        
        <div className="contact-details" style={{ padding: '20px'}}>
          <h3 style={{ fontFamily:'roboto, arial', fontWeight: 'bold' }}>Contact Details</h3>
          <hr />
          <p style={{ textAlign:'left', marginTop:'25px', fontFamily:'roboto, arial' }}>
            <span style={{ fontWeight: 'bold' }}>Email: </span>capitoljazzpro@gmail.com
          </p>
          <p style={{ textAlign:'left', marginTop:'-25px', fontFamily:'roboto, arial' }}>
            <span style={{ fontWeight: 'bold' }}>Phone: </span>+65 90467815
          </p>
          <p style={{ textAlign:'left', marginTop:'-25px', fontFamily:'roboto, arial' }}>
            <span style={{ fontWeight: 'bold' }}>LinkedIn: </span>
              <a href='https://www.linkedin.com/in/thiach/' 
              target='blank' 
              rel="noopener noreferrer">
                www.linkedin.com/in/thiach
              </a>
          </p>
        </div>
        
        <div className="form-details" style={{
          width: '100%', 
          height: '500px', 
          boxSizing: 'border-box'
        }}>
          <Container>
            <Row>
              <Col md={12} className="mx-auto">
                {showAlert && status === 'success' && (
                  <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    Your message has been sent!
                  </Alert>
                )}
                {showAlert && status === 'error' && (
                  <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                    Something went wrong. Please try again.
                  </Alert>
                )}
                <Form onSubmit={handleSubmit}>

                  <Form.Group controlId="formName" className="mb-3" style={{ fontFamily:'roboto, arial' }}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your name" required style={{ width: '450px' }} />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-3" style={{ fontFamily:'roboto, arial' }}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter your email" required style={{ width: '450px' }} />
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-4" style={{ fontFamily:'roboto, arial' }}>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="message" rows={6} placeholder="Enter your message" required style={{ width: '450px' }} />
                  </Form.Group>

                  <Button variant="primary" type="submit" style={{ fontFamily:'roboto, arial' }}>
                    Submit
                  </Button>
                </Form>

              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}