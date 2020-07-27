// var db = require("../models");
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// // GET route which calls uses Sequelize's findAll method.
// // This route then hands the data it receives to handlebars so index can be rendered.
// module.exports = function (app) {
// Dependencies
// =============================================================

//   //GET route for getting all the posts
//   app.get("/api//", function (req, res) {

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // GET route for getting all webstores
  app.get("/api/webstores/", function(req, res) {
    db.Webstore.findAll({})
      .then(function(dbWebstore) {
        res.json(dbWebstore);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/webstores/store_name/:name", function(req, res) {
    db.Webstore.findAll({
      where: {
        store_name: req.params.name
      }
    })
      .then(function(dbWebstore) {
        res.json(dbWebstore);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for retrieving a single webStore
  app.get("/api/webstores/:id", function(req, res) {
    db.Webstore.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbWebstore) {
        res.json(dbPost);
      });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
  // POST route for saving a new webstore

  app.post("/api/webstores", function(req, res) {
    console.log(req.body);
    debugger;
    db.Webstore.create({
      manager_staff_id:req.body.manager_staff_id,
      address_idody: req.body.address_id,
      last_update: req.body.last_update,
      store_name: req.body.store_name
    })
      .then(function(dbWebstore) {
        res.json(dbWebstore);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // DELETE route for deleting webstores
  app.delete("/api/webstores/:id", function(req, res) {
    db.Webstore.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // PUT route for updating posts
  app.put("/api/webstores", function(req, res) {
    db.Webstore.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};

