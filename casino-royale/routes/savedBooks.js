const Book = require('../models/Book');

function savedBooks(app) {

  app.get('/api/savedBooks', function(request, response) {
    Book.find({})
      .then(function(data) {
        response.json(data);
      });
    // response.json([
    //   {
    //     title: 'Ip Man\'s guide to peace and wellness',
    //     authors: ['Ip Man'],
    //     description: 'Through studying martial arts, Ip decided he didn\'t wanna.'
    //   }
    // ]);
  });

}

module.exports = savedBooks;
