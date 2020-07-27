const router = require("express").Router();
const auth = require("../middleware/auth");


// user authorized views - they all use the "auth" middleware
router.get("/", auth, (req, res) => res.render("dashboard"));
router.get("/user/page2", auth, (req, res) => res.render("page2"));
router.get("/user/profile", auth, (req, res) => res.render("profile"));

// login and register forms view
router.get("/user/login", (req, res) => res.render("login"));
router.get("/user/register", (req, res) => res.render("register"));

module.exports = router;


// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    //res.sendFile(path.join(__dirname, "../public/blog.html"));
    res.sendFile(path.join(__dirname, "../public/webstore.html"));
  });

  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  app.get("/ws-cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/ws-cms.html"));
  });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

};
