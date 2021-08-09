const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json()); // bodyParser to handle json data

app.use(cors());

app.get('/', function(req, res){
    res.send("Hello form server!");
});

app.post('/enroll', function(req, res){
    // unathoursed request -> status 401
    console.log(req.body);
    res.status(200).send({"message": "data received"});
    // ok status response, indicates that the request has been succeeded
})

app.listen(PORT, function(){
    console.log("Server running on localhost: " + 3000);    
});