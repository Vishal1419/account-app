var Nature = require('../models/nature');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/accountdb');

var natures = [
    new Nature({
        name: 'Assets',
        isSystemGenerated: true
    }),
    new Nature({
        name: 'Expenses',
        isSystemGenerated: true
    }),
    new Nature({
        name: 'Incomes',
        isSystemGenerated: true
    }),
    new Nature({
        name: 'Liabilities',
        isSystemGenerated: true
    })
];

var done = 0;

for(var i = 0; i < natures.length; i++)
{
    natures[i].save(function(err, result){
        done++;
        if(done == natures.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}