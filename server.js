

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
    res.send('Welcome to Server!');
});

app.listen(8080, ()=>{
    console.log('Server running on localhost:8080');
});