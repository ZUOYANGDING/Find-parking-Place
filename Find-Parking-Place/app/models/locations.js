var mongoose = require('mongoose');

var locationSchema =  mongoose.Schema({
    coordinate : {
        lat    :  Number,
        long   :  Number
    }
});

module.exports = mongoose.model('Location', locationSchema);