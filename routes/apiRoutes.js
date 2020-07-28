var db = require("../models");
const router = require("express").Router();

// Routes
// =============================================================

//WEBSTORE CONNECTION

// GET route for getting all webstores
router.get("/webstores/", function (req, res) {
  console.log("getting all webstores");
  db.Webstore.findAll({})
    .then(function (dbWebstore) {
      console.log("this is webstore db", dbWebstore);
      res.json(dbWebstore);
    });
});

// // Get route for returning posts of a specific category
// router.get("/webstores/store_name/:name", function (req, res) {
//   db.Webstore.findAll({
//     where: {
//       store_name: req.params.name
//     }
//   })
//     .then(function (dbWebstore) {
//       res.json(dbWebstore);
//     });
// });

//FILM CONNECTION
router.get("/films/", function (req, res) {
  console.log("getting all films");
  db.Films.findAll({})
    .then(function (dbFilms) {
      console.log("this is films db", dbFilms);
      res.json(dbFilms);
    });
});


//   // Get route for retrieving a single webStore
//   app.get("/webstores/:id", function(req, res) {
//     db.Webstore.findOne({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(function(dbWebstore) {
//         res.json(dbPost);
//       });
//   });

//   app.post("/webstores", function(req, res) {
//     console.log(req.body);

//     db.Webstore.create({
//       manager_staff_id:req.body.manager_staff_id,
//       address_idody: req.body.address_id,
//       last_update: req.body.last_update,
//       store_name: req.body.store_name
//     })
//       .then(function(dbWebstore) {
//         res.json(dbWebstore);
//       });
//   });

// DELETE route for deleting webstores
//   app.delete("/webstores/:id", function(req, res) {
//     db.Webstore.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });

//   // PUT route for updating posts
//   app.put("/webstores", function(req, res) {
//     db.Webstore.update(req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });
module.exports = router;