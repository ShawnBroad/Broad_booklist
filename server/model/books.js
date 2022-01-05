import mongoose  from "mongoose";

const bookSchema = mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    text: {type: String, required: true},
});

const Books = mongoose.model('Books', bookSchema)

export default Books;