var express = require('express'),
	pug = require('pug');

var app = express();

app.set('view engine', 'pug');


app.get('/flex', function(req, res) {
	res.render('flex', {})
})

app.listen(3000, function() {
	console.log("Listening on 3000");
});