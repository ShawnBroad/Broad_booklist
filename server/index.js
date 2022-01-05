import express from 'express';


const app = express();

app.use(express.json());

const PORT= 5000;

app.post('/books', (req, res) => {

    res.status(200).send("successful post")
}); 

app.get('/books', (req,res) =>{
    res.status(200).send("successful get")
});

// app.use('/books', bookRoutes);



app.listen(PORT, () => console.log(`server is running on port ${PORT}`));