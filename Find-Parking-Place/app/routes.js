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

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/login.html', // redirect to the secure profile section
        failureRedirect : '/signup.html', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/test.html', // redirect to the secure profile section
        failureRedirect : '/login.html', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));



}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/');
    }
}

