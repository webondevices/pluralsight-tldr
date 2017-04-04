// Structural patterns
// Flyweight pattern

// Shares data across objects
// Smaller memory footprint
// Only useful if we have large number of objects


//
// Don't create unique instance for each individual book
let Book = function(id, title, author, genre, pageCount,publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate,availability)
    this.id = id;
    this.title = title;
    this.author = author;    
    this.genre = genre;
    this.pageCount = pageCount;
    this.publisherID = publisherID;
    this.ISBN = ISBN;
    this.checkoutDate = checkoutDate;
    this.checkoutMember = checkoutMember;
    this.dueReturnDate = dueReturnDate;
    this.availability = availability;
}

// Instead optimise with Flyweight
let Book = function(title, author, genre, pageCount, publisherID, ISBN){
    this.title = title;
    this.author = author;    
    this.genre = genre;
    this.pageCount = pageCount;
    this.publisherID = publisherID;
    this.ISBN = ISBN;
};

// Handle this with a book factory:
let BookFactory = (function(){

    let existingBooks = {};

    return {
        createBook: function(title, author, genre, pageCount, publisherID, ISBN) {

	        // Find out if a particular book meta-data combination has been created before
			let existingBook = existingBooks[ISBN];

			if (existingBook) {
				return existingBook;
			} else {

				// If not, let's create a new instance of it and store it
				let book = new Book(title, author, genre, pageCount, publisherID, ISBN);
				existingBooks[ISBN] = book;
				return book;
			}
		}
	}   
})();

// Manage extra data with Record Manager
let BookRecordManager = (function() {

    let bookRecordDatabase = {};

    return {

        // Add a new book into the library system
        addBookRecord: function(id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability) {
            
            let book = bookFactory.createBook(title, author, genre, pageCount, publisherID, ISBN);

            bookRecordDatabase[id] = {
                checkoutMember: checkoutMember,
                checkoutDate: checkoutDate,
                dueReturnDate: dueReturnDate,
                availability: availability,
                book: book
            };
        },

     	updateCheckoutStatus: function(bookID, newStatus, checkoutDate, checkoutMember, newReturnDate) {

			let record = bookRecordDatabase[bookID];
			record.availability = newStatus;
			record.checkoutDate = checkoutDate;
			record.checkoutMember = checkoutMember;
			record.dueReturnDate = newReturnDate;
    	},

	    extendCheckoutPeriod: function(bookID, newReturnDate) {
	        bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
	    },

		isPastDue: function(bookID) {

			let currentDate = new Date();
			return currentDate.getTime() > Date.parse(bookRecordDatabase[bookID].dueReturnDate);   
		}
	};
})();