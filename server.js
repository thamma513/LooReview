var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var db = require('./config/connection.js')


mongoose.connect(db.db_dev).catch((reason) => {
    console.log('could not connect to database for ' + reason);
}).then((connection) => {
    console.log(connection.connectionOptions);
});

console.log(db.db_dev);

// Route for saving/updating an Article's associated Note
app.post("/articles/:id", function(req, res) {
  // Create a new note and pass the req.body to the entry
  db.Note.create(req.body)
    .then(function(dbNote) {
      // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
    })
    .then(function(dbArticle) {
      // If we were able to successfully update an Article, send it back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(static('./client/public'));
// routes
require('./server/routs')(app);


app.listen(port, (e) => {
    if(e) throw e;
    console.log('server listening on port:' + port);
});
