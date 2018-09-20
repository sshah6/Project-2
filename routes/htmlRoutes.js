//var db = require("../models");
var isAuthenticated = require('../config/middleware/isAuthenticated.js');


module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        //db.Example.findAll({}).then(function(dbExamples) {
        res.render("login");
        //msg: "Welcome!",
        //examples: dbExamples

    });


    // Load example page and pass in an example by id
    //app.get("/example/:id", function(req, res) {
    app.get("/signup", function(req, res) {
        //db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
        res.render("sign-up", {
            //example: dbExample
        });
    });


    // Render 404 page for any unmatched routes
    //app.get("*", function(req, res) {
    //res.render("404");
    //});

    app.get("/home", isAuthenticated, function(req, res) {
        res.render("index");
    });
};