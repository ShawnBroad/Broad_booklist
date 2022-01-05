import { useSelector } from "react-redux";
import { selectBookList} from "../reducer";
import { Card } from "react-bootstrap";

const Books = () =>{
    const allBooks = useSelector(selectBookList);

    return(
        <>
            {allBooks.map((book, index)=>(
            <Card key={index} style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                <Card.Text>
                {book.text}
                </Card.Text>
            </Card.Body>
            </Card>
            ))}
        </>)
    
}

export default Books