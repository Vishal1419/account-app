var Effect = require('../models/effect');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/accountdb');

var effects = [
    new Effect({
        name: 'Balance Sheet',
        isSystemGenerated: true
    }),
    new Effect({
        name: 'Profit & Loss A/c',
        isSystemGenerated: true
    }),
    new Effect({
        name: 'Trading Account',
        isSystemGenerated: true
    })
];

var done = 0;

for(var i = 0; i < effects.length; i++)
{
    effects[i].save(function(err, result){
        done++;
        if(done == effects.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}