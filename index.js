const http = require('http');
const express = require('express');
const path = require('path'); 
const countapi = require('countapi-js');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());
app.use(express.static("express"));
app.use(express.static(__dirname + '/express'));


//defaul url for site 
app.use('/', function(req,res){
	res.sendFile(path.join(__dirname+'/express/index.html'));
});

const server = http.createServer(app);

// port solution
const port = process.env.PORT || 3000;
server.listen(port);

// prints 
console.debug('Server listening on port ' + port);
