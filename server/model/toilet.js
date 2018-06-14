var mongoose = require('mongoose');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

 const ToiletSchema = new Schema({
    poi: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    _creator: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    _rating: [{
        type: Schema.Types.ObjectId,
        ref: 'Rating'
    }]
}, {
    timestamps: true
});

var Toilet = mongoose.model('Toilet', ToiletSchema);

module.exports = Toilet;