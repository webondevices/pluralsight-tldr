// add form with <form name="signUp" action="/auth/signUp" method="post"></form>
// npm install body-parser

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongodb = require('mongodb').MongoClient();

var authRouter = express.Router();

// Parses incoming post body to json and adds to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

authRouter.route('signUp')
	.post(function(req, res){
		// req.body contains object of form field vlaues
	});
};

app.use('/books', bookRouter);