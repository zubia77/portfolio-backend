import express from 'express';


const app = express()

const port = process.env.PORT || 3070;

app.get('/', (req, res) => {
    res.send('<h1>Zubi\'s Portfolio</h1>')
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});