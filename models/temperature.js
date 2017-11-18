const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const {led, sensor}      = require('./hardware');

const temperatureSchema = new Schema({
    temperature: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: function(){
            return new Date();
        }
    }
});
temperatureSchema.statics.hardware = {};
temperatureSchema.statics.hardware.led = led;
temperatureSchema.statics.hardware.sensor = sensor;

module.exports = mongoose.model(
    'temperature',
    temperatureSchema
);
