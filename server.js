var express = require('express');
var path = require('path');

var app = express();

/*app.get('/', function(req,res){
	res.sendFile('index.html',{root:path.join(__dirname,'./public')});

})*/

app.use('/', express.static('public'))

app.listen(1337,function(){
	console.log('listening at port 1337');
})


