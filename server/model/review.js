var mongoose = require('mongoose');

<<<<<<< HEAD
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
    
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
=======
var ReviewSchema = new mongoose.Schema({
    comment: String,
    isAccessable: {
>>>>>>> ca1da99760e6c32d702a375d4a47337b437d4072
        type: Boolean,
        default: false
    },
    hasTampons: {
        type: Boolean,
        default: false
    },
    hasMirror: {
        type: Boolean,
        default: false
    },
    hasChangingStation: {
        type: Boolean,
        default: false
    },
    styleRate: {
        type: Number,
        min: 0,
        max:5,
        default: 0    
    },
    cleanRate:{
        type: Number,
        min: 0,
        max:5,
        default: 0
    },
    restId: {
        type: String
    },
    userInfo: {
        username: {
            type: String
        },
        userId: {
            type: String
        }
    },
    created: {
        type: Date,
        default: Date.now()
    },
    reviewScore: {
        upVotes: {
            type: Number
        },
        downVotes: {
            type: Number
        }
    }
});

<<<<<<< HEAD

var Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
=======
module.exports = mongoose.model('Review', ReviewSchema);
>>>>>>> ca1da99760e6c32d702a375d4a47337b437d4072
