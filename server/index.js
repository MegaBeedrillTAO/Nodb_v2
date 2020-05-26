const express = require('express');
const app = express();

app.use(express.json());

app.use( express.static( `${__dirname}/../build` ) );

app.listen(5050, () =>{
    console.log(`Listening on port 5050`);
})