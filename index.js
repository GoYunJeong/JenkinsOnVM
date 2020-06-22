var express = require('express');
var http = require('http');
const app = express();
var server = http.createServer(app);

app.get('/', function(req, res){
    res.send('I like test05');
});

app.get('/start', function(req, res){
    res.send('start page!');
});

server.listen(3000, '127.0.0.1', function(){
    console.log('Server listen on 44444444444 port!'+ server.address().port);
    console.log('test!'+ server.address().port);
});
