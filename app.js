var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile('public/html/index.html')
})

app.get('/home', function (req, res) {
	res.sendFile('public/html/index.html')
})

app.listen(3000, function() {
	console.log('listening on port 3000!')
})