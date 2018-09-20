var db = require("../models");


module.exports = function(app) {
    // Get all examples
    // Create a new example
    //app.post("/api/examples", function(req, res) {
    // db.Example.create(req.body).then(function(dbExample) {
    //res.json(dbExample);
    //});
    //});

    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json("/home");
    });

    app.post("/api/signup", function(req, res) {
        console.log(req.body);
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function() {
            res.redirect(307, "/api/login");
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    })

    // Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function(req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });

    //routes for CRUD operations 

    //appt route
    app.get("/user_appt", function(req, res) {
        db.Appt.findAll({ where: { UserId: req.user.id } }).then(function(data) {
            res.json(data);
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });

    app.post("/create_appt", function(req, res) {
        db.Appt.create({
            UserId: req.user.id,
            date: req.body.date,
            time: req.body.time,
            type: req.body.type,
            reason: req.body.reason
        }).then(function() {
            res.status(201).end();
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });

    app.delete("/user_appt/:id", function(req, res) {
        db.Appt.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbAppt) {
            res.json(dbAppt);
        });
    });

    //meds 
    app.get("/user_meds", function(req, res) {
        db.Med.findAll({ where: { UserId: req.user.id } }).then(function(data) {
            res.json(data);
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });

    app.post("/new_meds", function(req, res) {
        db.Med.create({
            UserId: req.user.id,
            name: req.body.name,
            is_prescription: req.body.is_prescription,
            condition: req.body.condition,
            dose: req.body.dose
        }).then(function() {
            res.status(201).end();
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });

    app.delete("/user_meds/:id", function(req, res) {
        db.Appt.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbMeds) {
            res.json(dbMeds);
        });
    });

    //history 
    app.get("/med_history", function(req, res) {
        db.History.findAll({ where: { UserId: req.user.id } }).then(function(data) {
            res.json(data);
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });

    app.post("/med_history", function(req, res) {
        db.History.create({
            UserId: req.user.id,
            event: req.body.event,
            date: req.body.date
        }).then(function(err) {
            console.log(err);
            res.json(err);
        });
    });

    app.delete("/med_history/:id", function(req, res) {
        db.Appt.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbHistory) {
            res.json(dbHistory);
        });
    });

    //insurance 
    app.get("/insurance", function(req, res) {
        db.Insurance.findAll({ where: { UserId: req.user.id } }).then(function(data) {
            res.json(data);
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });

    app.post("/insurance", function(req, res) {
        db.Insurance.create({
            UserId: req.user.id,
            type: req.body.type,
            carrier: req.body.carrier,
            insured_name: req.body.insured_name,
            id_number: req.body.id_number,
            group_id: req.body.group_id,
            effective_date: req.body.effective_date
        }).then(function(err) {
            console.log(err);
            res.json(err);
        });
    });

    app.delete("/insurance/:id", function(req, res) {
        db.Appt.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbInsurance) {
            res.json(dbInsurance);
        });
    });



};






// Delete an example by id
//app.delete("/api/examples/:id", function(req, res) {
//db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//res.json(dbExample);
//});
//});
//};