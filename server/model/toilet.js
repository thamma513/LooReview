var mongoose = require('mongoose');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

 const ReviewSchema = new Schema({
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

var Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
var ReviewSchema = new mongoose.Schema({
    
})