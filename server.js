const express = require('express');
const app = express()

// routes
app.get('/', (req, res) => {
     res.send(`Hello Node Api !!!`);
});

// port
app.listen(3001, ()=>{
     console.log(`Node Api started!`);
});