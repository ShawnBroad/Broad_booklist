import {Form, Button, Row, Card } from "react-bootstrap";


const Display= () =>{
    return(
<>
<Form>
  <Row>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Title</Form.Label>
    <Form.Control as="textarea" rows={3} />
    </Form.Group>
  </Row>
  <Row>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Author</Form.Label>
    <Form.Control as="textarea" rows={3} />
    </Form.Group>
  </Row>
  <Row>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Synopsis</Form.Label>
    <Form.Control as="textarea" rows={3} />
    </Form.Group>
 </Row>
 <Row>
    <Button variant="primary" type='submit'>
        Submit
    </Button>
</Row>
</Form>
<Row>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title>Horus Rising</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Dan Abnett</Card.Subtitle>
        <Card.Text>
        The start of Horus taking over as Warmaster
        </Card.Text>
    </Card.Body>
    </Card>
</Row>
</>


    )

}

export default Display