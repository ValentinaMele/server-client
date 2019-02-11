const express = require ('express');
const app = express();

app.get('/', function (req, res){
res.write("hello");
res.end();
});

app.get('/index', function (req,res){
res.sendFile(__dirname + '/html/sito.html');
});




app.listen(process.env.port || 3000);
