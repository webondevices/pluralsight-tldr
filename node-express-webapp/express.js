var express = require('express');
var port = 5000;


// Create and instance of the express app
var app = express();

// Middleware sets up public folder to serve static files
app.use(express.static('public'));


// Setup views folder the templates
app.set('views', './src/views');

// Use Jade view templating engine
app.set('view engine', 'jade');

// OR EJS view templating engine
app.set('view engine', 'ejs');

// OR Handlebars view templating engine
var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');


// Handle /about route and send view from template file and pass in data
app.get('/about', function(req, res) {
	res.render('about', {title: 'About page'});
});

// Handle /hello route and send string message
app.get('/hello', function(req, res) {
	res.send('Hello');
});


// Create individual router
var bookRouter = express.Router();

bookRouter.route('/')
	.get(function(req, res){
		res.send('Hello from Books');
	});

// Route with ID parameter
bookRouter.route('/:id')
	.get(function(req, res){
		var id = req.params.id;
		res.send('Hello Book No: ' + id);
	});

app.use('/books', bookRouter);


// Express server listening on specified port
app.listen(port, function(err) {
	console.log('server listening on port: ' + port);
});