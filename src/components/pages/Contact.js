import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <Form>

      <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name here" />
      </Form.Group>

      <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;