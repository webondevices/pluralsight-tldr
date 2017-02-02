// Download and install mongodb from mongodb.org

// run mongod from command line to start the environment

// it needs /data/db folder

// run mongo to browse databases

// install mongodb npm module with npm install mongodb

var mongodb = require('mongodb').MongoClient();

var url = 'mongodb://localhost:27017/myLibrary';

mongodb.connect(url, function(err, db){
	var collection = db.collection('books');

	// use insertMany to enter array of elements to database
	// or insertOne for single object
	collection.insertMany(booksObject, function(err, results) {
		// data has been sent
		// use data then close connection
		db.close();
	});


	// find all elements in db
	// {} contains query
	collection.find({}, function(err, results) {
		// data has been received
	});


	// find first found elements in db
	// {} contains query
	collection.findOne({}, function(err, results) {
		// data has been received
	});
});
