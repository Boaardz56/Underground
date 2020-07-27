// var db = require("../models");

// // GET route which calls uses Sequelize's findAll method.
// // This route then hands the data it receives to handlebars so index can be rendered.
// module.exports = function (app) {

//   //GET route for getting all the posts
//   app.get("/api/posts/", function (req, res) {
//     db.Film.findAll({});
//   }).then(function (dbFilm) {
//     res.json(dbFilm);
//   });
// };

// app.get("/api/posts/:id", function (req, res) {
//   db.Film.findOne({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(function (dbFilm) {
//       res.json(dbFilm);
//     });
// });

// //POST route for saving new post
// app.post("/api/posts", function (req, res) {
//   console.log(req.body);
//   db.Film.create({
//     film_name: req.body.film_name,
//     film_genre: req.body.film_genre
//   })
//     .then(function (dbFilm) {
//       res.json(dbFilm);
//     });
// });

// app.delete("/api/posts/:id", function(req, res) {

//   var ID = req.params.id;

//   db.Film.destroy({
//     where: { id: ID }
//   }).then(function(dbFilm) {
//     res.json(dbFilm);
//   });
// });
