var express = require('express'),
	path = require('path');

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'public/html', 'index.html'));
})

app.get('/home', function (req, res) {
	res.sendFile(path.join(__dirname, 'public/html', 'index.html'));
})

app.listen(3000, function() {
	console.log('listening on port 3000!')
})