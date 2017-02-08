// add form with <form name="signUp" action="/auth/signUp" method="post"></form>
// npm install body-parser

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var mongodb = require('mongodb').MongoClient;

var authRouter = express.Router();

// Parses incoming post body to json and adds to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Authentication middleware
app.use(cookieParser());
app.use(session({secret: 'randomName'}));
app.use(passport.initialize());
app.use(passport.session());

// Bundle user up for the session 
passport.serializeUser(function(user, done){
	done(null, user.id);
});

// Pull user back from session 
passport.deserializeUser(function(user, done){
	done(null, user);
});

// Local strategy to define what username and passwords are through request
passport.use(new LocalStrategy({
	usernameField: 'userName',
	passwordField: 'password'
},
function(username, password, done){
	var url = 'mongodb://localhost:27017/myLibrary';
	mongodb.connect(url, function(err, db){

		var collection = db.collection('users');
		collection.findOne({username: username}, function(err, results){

			// Check password is matching
			if (results.password === password) {
				var user = results;
				done(null, user);
			} else {
				done(null, false, {message: 'Wrong password'});
			}
		});
	});
}));

authRouter.route('/signUp')
	.post(function(req, res){
		// req.body contains object of form field vlaues

		var url = 'mongodb://localhost:27017/myLibrary';
		mongodb.connect(url, function(err, db){

			// doesn't exist but creates it automatically
			var collection = db.collection('users');
			var user = {
				username: req.body.userName,
				password: req.body.password
			};

			collection.insert(user, function(err, results){
				
				// req.login is added by passport middleware
				req.login(results.ops[0], function(){
					res.redirect('auth/profile');
				});
			});
		});
	});
};

authRouter.route('/signIn')
	.post(passport.authenticate('local', {
		failRedirect: '/',

	}), function(req, res) {
		res.redirect('auth/profile');
	});

authRouter.route('/profile')
	.all(function(req, res, next){
		if (!req.user) {
			res.redirect('/');
		}
		
		next();
	})
	.get(function(req, res){

		// Just send user object back as JSON
		res.json(req.user)
	});

app.use('/auth', authRouter);