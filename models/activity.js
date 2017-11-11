const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const activitySchema = new Schema({
    distance: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: function(){
            return new Date();
        }
    },
    action: {
        type: String,
        default: 'ON',
        enum: ['ON', 'OFF']
    }
});


module.exports = mongoose.model(
    'activty', 
    activitySchema
);