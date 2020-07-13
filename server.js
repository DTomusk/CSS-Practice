var express = require('express'),
	pug = require('pug');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('views'));

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

app.get('/sidebar', function(req, res) {
	res.render('sidebar', {})
})

app.get('/project', function(req, res) {
	res.render('project', {})
})

app.listen(3000, function() {
	console.log("Listening on 3000");
	console.log(__dirname);
});