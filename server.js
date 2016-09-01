var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");

var CONTACTS_COLLECTION = "collection";

// Babel ES6/JSX Compiler
require('babel-register');

var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./src/routes');

var app = express();
app.use(express.static(__dirname + "/public"));
app.set('port', process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// app.use(function(req, res) {
//   Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
//     if (err) {
//       res.status(500).send(err.message);
//     } else if (redirectLocation) {
//       res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
//     } else if (renderProps) {
//       var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
//       var page = swig.renderFile('views/index.html', { html: html });
//       res.status(200).send(page);
//     } else {
//       res.status(404).send('Page Not Found');
//     }
//   });
// });

// Initialize the server
var server = require('http').createServer(app);

// Socket.io --- keep track of online users
var io = require('socket.io')(server);
var onlineUsers = 0;
io.sockets.on('connection', function(socket) {
  onlineUsers++;

  io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

  socket.on('disconnect', function() {
    onlineUsers--;
    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  });
});

// Launch the app
server.listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});

// Connect to the database before starting the application server
// console.log(process.env);
// mongodb.MongoClient.connect(process.env.MONGODB_URI, function(err, database) {
//   if(err) {
//     console.log(err);
//     process.exit(1);
//   }
//
//   // Save database object from the callback for reuse
//   db = database;
//   console.log("Database connection ready");
//
// });

// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
// function handleError(res, reason, message, code) {
//   console.log("ERROR: " + reason);
//   res.status(code || 500).json({"error": message});
// }
//
// /*  "/contacts"
//  *    GET: finds all contacts
//  *    POST: creates a new contact
//  */
//
// app.get("/contacts", function(req, res) {
//   db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
//     if (err) {
//       handleError(res, err.message, "Failed to get contacts.");
//     } else {
//       res.status(200).json(docs);
//     }
//   });
// });
//
// app.post("/contacts", function(req, res) {
//   var newContact = req.body;
//   newContact.createDate = new Date();
//
//   if (!(req.body.firstName || req.body.lastName)) {
//     handleError(res, "Invalid user input", "Must provide a first or last name.", 400);
//   }
//
//   db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, doc) {
//     if (err) {
//       handleError(res, err.message, "Failed to create new contact.");
//     } else {
//       res.status(201).json(doc.ops[0]);
//     }
//   });
// });
//
// /*  "/contacts/:id"
//  *    GET: find contact by id
//  *    PUT: update contact by id
//  *    DELETE: deletes contact by id
//  */
//
// app.get("/contacts/:id", function(req, res) {
//   db.collection(CONTACTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
//     if (err) {
//       handleError(res, err.message, "Failed to get contact");
//     } else {
//       res.status(200).json(doc);
//     }
//   });
// });
//
// app.put("/contacts/:id", function(req, res) {
//   var updateDoc = req.body;
//   delete updateDoc._id;
//
//   db.collection(CONTACTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
//     if (err) {
//       handleError(res, err.message, "Failed to update contact");
//     } else {
//       res.status(204).end();
//     }
//   });
// });
//
// app.delete("/contacts/:id", function(req, res) {
//   db.collection(CONTACTS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
//     if (err) {
//       handleError(res, err.message, "Failed to delete contact");
//     } else {
//       res.status(204).end();
//     }
//   });
// });
