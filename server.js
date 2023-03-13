const express = require('express');
const app = express()

// routes
app.get('/', (req, res) => {
     res.send(`Hello Node Api !!!`);
});

app.get('/blog', (req, res) => {
     res.send(`Blog post it is!!!`);
});

// port
app.listen(3000, ()=>{
     console.log(`>>> Node Api started succesfully!!! <<<`);
});