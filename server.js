const express = require ('express');
const app = express();



app.get('/', function (req,res){
res.sendFile(__dirname + '/html/sito.html');
});

app.get('/login', function (req, res){
res.sendFile(__dirname + '/html/login.html');
});


app.listen(process.env.port || 3000);
