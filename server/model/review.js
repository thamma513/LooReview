var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RatingSchema = new Schema({
    
        cleanliness: {
            type: Number,
            unique: true,
            required: true
        },
        toiletPQ: {
            type: Number,
            unique: true,
            required: true
        },
        accesability: {
        type: Number,
        unique: true,
        required: true
    },
    hasChang: {
        type: Boolean,
        default: false
    },
    hasPrivacy: {
        type: Boolean,
        default: false
    },
    isComfy: {
        type: Boolean,
        default: false
    },
    hasTowels: {
        type: Boolean,
        default: false
    },
    hasTempCont: {
        type: Boolean,
        default: false
    },
    hasMirror: {
        type: Boolean,
        default: false
    },
    hasManyStalls: {
        type: Boolean,
        default: false
    },
    hasTrash: {
        type: Boolean,
        default: false
    },

}, {
    timestamps: true
});


var Rating = mongoose.model('Rating', RatingSchema);

module.exports = Rating;