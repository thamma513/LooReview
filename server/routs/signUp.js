// requiring all models under model object
var model = require('../model');

// var testUser = new model.User


console.log(model);

module.exports = app => {
    // signup post request
    app.post('/account/signup', (req, res) => {
        // grabbing request information into the object body
        const { body } = req;
        // 
        const {
            username,
            password,
            gender
        } = body;
        let {
            email
        } = body;
        
        if(!username){
            return res.send({
                success: false,
                message:'Error: Username cannot be blank.'
            });
        }
        if(!email){
            return res.send({
                success: false,
                message: 'Error: Email cannot be blank.'
            });
        }
        if(!password || password.length <= 6){
             return res.send({
                success: false,
                message: 'Error: Password must be more than 6 characters'
            });
        }
        if(!gender){
             return res.send({
                success: false,
                message: 'Error: Gender cannot be blank.'
            });
        }

        email = email.toLowerCase();

        model.User.find({email: email}, (err, data) => {
            
            if(err){
                // catch server error
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }else if(data.length > 0){
                // check if email exists
                return res.send({
                    success: false,
                    message: 'Error: Account useing that email already exists.'
                });
            }

            // Create new user
            const newUser = new model.User();
            console.log(newUser)

            newUser.username = username;
            newUser.email = email;
            newUser.password = newUser.generateHash(password);
            newUser.gender = gender;
            
            console.log(newUser);

            newUser.save((e, user) => {
                if(e){
                    res.end({
                        success: false,
                        message: 'Error: Server error'
                    });
                }else{
                    res.end({
                        success: true,
                        message: 'Signed up.'
                    })
                }
            })

        })

    });
}