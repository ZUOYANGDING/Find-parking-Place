var mongoose = require('mongoose');

var locationSchema =  mongoose.Schema({
    coordinate : {
        type: [Number],
        index: '2d'
    }
});

module.exports = mongoose.model('Location', locationSchema);