import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from "react-bootstrap";
import { addBook, selectBookList } from "../reducer";

const InputBook = () =>{
    const dispatch = useDispatch();


    const bookObj = {
        title: '',
        author: '',
        text: '',
    };

const [bookData, setBookData] = useState(bookObj);

// const clear = () => {
//     setBookData(bookObj);
// };

const submitHandler = (e) =>{
    e.preventDefault();

    dispatch(addBook(bookData));
    // clear();
}

const changeHandler = (e) =>{
    setBookData({
        ...bookData,
        [e.target.name]: e.target.value,

    })
}
    return(
        <>
        <h1>Add a book</h1>
      
    <Form autoComplete='off' onSubmit={submitHandler}>
       <Form.Group> 
        <Form.Label>Title</Form.Label>
        <Form.Control as='textarea' rows={3} placeholder='Title' name='title' value={bookData.title} onChange={changeHandler}/>
        <Form.Label>Author</Form.Label>
        <Form.Control as='textarea' rows={3} placeholder='Author' name='author' value={bookData.author} onChange={changeHandler}/>
        <Form.Label>Synopsis</Form.Label>
        <Form.Control as='textarea' rows={3} placeholder='Synopsis' name='text' value={bookData.text} onChange={changeHandler}/>
       </Form.Group>
       <Button variant="primary" type="submit">
           Submit
           </Button>
        {/* <Button variant ="primary" onClick={clear}>
            Clear
        </Button>  */}
    </Form>
     
    
        </>

    )
}

export default InputBook