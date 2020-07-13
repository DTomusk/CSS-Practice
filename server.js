var express = require('express'),
	pug = require('pug');

var app = express();

app.set('view engine', 'pug');


app.get('/flex', function(req, res) {
	res.render('flex', {})
})

app.get('/drop', function(req, res) {
	res.render('drop', {})
})

app.get('/boxes', function(req, res) {
	res.render('boxes', {})
})

app.get('/transition', function(req, res) {
	res.render('transition', {})
})

app.listen(3000, function() {
	console.log("Listening on 3000");
});