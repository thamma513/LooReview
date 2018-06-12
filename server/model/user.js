var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    userame: {
        type: String,
        required: 'Username is required',
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    password: {
        type: String,
        required: 'Password is required',
        validate: [
            (input) => {
                return input.length >= 6;
            },
            'Password is must be greater than 6 characters'
        ]
    },
    gender: {
        type: String,
        required: 'Gender is required'
    },
    reviews: {
        
    }
})

module.export = UserScema