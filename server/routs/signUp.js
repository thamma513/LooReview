// requiring all models under model object
var Model = require('../model');

// var testUser = new model.User



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
            res.json({
                success: false,
                message:'Error: Username cannot be blank.'
            });
            return
        }
        if(!email){
            res.json({
                success: false,
                message: 'Error: Email cannot be blank.'
            });
            return
        }
        if(!password || password.length <= 6){
             res.json({
                success: false,
                message: 'Error: Password must be more than 6 characters'
            });
            return
        }
        if(!gender){
             res.json({
                success: false,
                message: 'Error: Gender cannot be blank.'
            });
            return
        }

        email = email.toLowerCase();

        Model.User.find({email: email}, (err, data) => {
            if(err){
                // catch server error
                res.json({
                    success: false,
                    message: 'Error: Server error'
                });
                return
            }else if(data.length > 0){
                // check if email exists
                res.json({
                    success: false,
                    message: 'Error: Account useing that email already exists.'
                });
                return
            }

            // Create new user
            const newUser = new Model.User();


            console.log(typeof(username));
            newUser.username = username;
            newUser.email = email;
            newUser.password = newUser.generateHash(password);
            newUser.gender = gender;
            
            console.log(newUser);

            console.log('before save \n')

            newUser.save((e, user) => {
                console.log(user);
                if(e){
                    console.log('in save error')
                    res.json({
                        success: false,
                        message: 'Error: Server error'
                    });
                    return
                }else{
                    console.log('in save success')
                    res.status(200).json({
                        success: true,
                        message: 'Signed up.'
                    })
                }
            })

        })

    });
}