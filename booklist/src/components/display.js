import {Form, Button, Row, Card} from "react-bootstrap";
import { useState} from "react";


let initialTitle= 'Horus Rising';
let initialAuthor = 'Dan Abnett';
let initialTXT = 'The start of Horus taking over as Warmaster';




const Display= () =>{
    const [title,setTitle] = useState(initialTitle)
    const [author,setAuthor] = useState(initialAuthor)
    const [text, setText]= useState(initialTXT)
    
    const bookinfo = {}


    const handleChange = (e) =>{
    setTitle(e.target.value)}

    const handleChange2 = (e) =>{
        setAuthor(e.target.value)
    }

    const handleChange3 = (e) =>{
        setText(e.target.value)
    }


    return(

<>
<Form>
  <Row>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Title</Form.Label>
    <Form.Control type='text' as="textarea" rows={3} name='title' onChange={handleChange}  />
    </Form.Group>
  </Row>
  <Row>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Author</Form.Label>
    <Form.Control type='text' as="textarea" rows={3} onChange={handleChange2} />
    </Form.Group>
  </Row>
  <Row>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Synopsis</Form.Label>
    <Form.Control type='text' as="textarea" rows={3} onChange={handleChange3} />
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
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
        <Card.Text>
        {text}
        </Card.Text>
    </Card.Body>
    </Card>
</Row>
</> 


    )

}

export default Display