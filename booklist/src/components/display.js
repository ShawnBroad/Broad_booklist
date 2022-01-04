import {Form, Button, Row, } from "react-bootstrap";


const Display= () =>{
    return(

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



    )

}

export default Display