const express = require('express');
const app = express();
const {makeCharacter} = require('./Controllers/characterController')

app.use(express.json());

app.use( express.static( `${__dirname}/../build` ) );

app.put("/api/makeCharacter", makeCharacter)

app.listen(5050, () =>{
    console.log(`Listening on port 5050`);
})