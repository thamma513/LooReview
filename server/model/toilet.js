const mongoose = require('mongoose');

let ToiletSchema = new mongoose.Schema({
    geoData: {
        location: {
            lat: {
                type: Number
            },
            lng: {
                type: Number
            }
        },
        name: {
            type: String
        }
    },
    placeId: {
        type: String,
        required: true
    },
    averageScore: {
        type: Number,
        min: 0,
        max: 5
    },
    averageCleanScore: {
        type: Number,
        min: 0,
        max: 5
    },
<<<<<<< HEAD
    _rating: [{
        type: Schema.Types.ObjectId,
        ref: 'Rating'
    }]
}, {
    timestamps: true
});

var Toilet = mongoose.model('Toilet', ToiletSchema);

module.exports = Toilet;
=======
    averageStyleScore: {
        type: Number,
        min: 0,
        max: 5
    },
    reviews: [ReviewSchema]
})
>>>>>>> ca1da99760e6c32d702a375d4a47337b437d4072
