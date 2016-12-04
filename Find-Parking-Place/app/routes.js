module.exports = function(app, passport) {
    app.get('/', function(req, res) {
        res.render('index.html');
    });

    app.get('/login', function(req, res) {
        res.render('login.html');
    });

    app.get('/signup', function(req, res) {

        res.render('signup.html');
    });

    app.get('/test', isLoggedIn, function(req, res) {
        res.render('test.html');
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/find', function(req, res) {
        var Location = require('../app/models/locations.js');
        Location.find({}, function(err, park) {
            if (err) {
                console.log("cannot find position");
                res.send("These no place");
            } else {
                console.log(park);
                res.send(park);
            }
        });
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/login.html', // redirect to the secure profile section
        failureRedirect : '/signup.html', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/test.html', // redirect to the secure profile section
        failureRedirect : '/login.html', // redirect back to the login page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.post('/report', function(req, res) {
        //res.send("position has been accept");
        console.log(req.body.lat);
        console.log(req.body.lng);
        var Location = require('../app/models/locations.js');
        var newLocation = new Location();
        newLocation.coordinate = [req.body.lat, req.body.lng];
        newLocation.save(function(err) {
            if (err) {
                res.send("position store failed");
            } else {
                res.send("position store success");
            }
        })
    });





}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/');
    }
}

