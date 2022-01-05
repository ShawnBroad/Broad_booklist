import  mongoose  from "mongoose";
import Books from '../modal/books.js';

export const getBooks = async (req, res) => {
    try{
        const postBook = await PostBook.find();

        res.status(200).json(postBook);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
},

export const addBooks = async (req, res) => {
    const post= request.body;

    const newPostBook = new PostBook({...Books, createdAt: new Date().toISOString() }) 
    try{
        await PostBook.save();

        res.status(201).json(newPostBook);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}


