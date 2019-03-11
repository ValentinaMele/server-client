const express = require ('express');
const app = express();
let c=0;


app.get('/', function (req,res){
res.sendFile(__dirname + '/html/sito.html');
c++;
console.log(c);
});

app.get('/login', function (req, res){
res.sendFile(__dirname + '/html/login.html');


});


app.listen(process.env.PORT || 3000);
