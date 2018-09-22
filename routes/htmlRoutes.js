// var express = require("express");
// var app = express();

// var port = 3306;

var isAuthenticated = require('../config/middleware/isAuthenticated.js')

//homepage 
module.exports = function(app){
    // app.get("/", function(req, res){
    //     res.render("login");
    // })

    app.get("/", function(req, res) {
        // If the user already has an account send them to the members page
        // if (req.user) {
        //   res.redirect("index");
        // }
        res.render("login");
    });

    app.get("/signup", function(req, res) {
        // If the user already has an account send them to the members page
        // if (req.user) {
        //   res.redirect("index");
        // }
        res.render("sign-up");
    });

    app.get("/home", isAuthenticated, function(req, res){
        res.render("index");
    });
};


//API endpoints for appointments 

    //GET user appointments 
    //POST user appointments 
        
//API endpoints for ?

    //GET alergies 
    //POST new allergies 

//API Endpoints for ?

    //GET vaccinations 
    //POST vacciantions 
