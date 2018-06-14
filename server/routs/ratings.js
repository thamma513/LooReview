var Model = require('../model');


module.exports = app => {
    app.get("/", (req, res) => {

        Model.Rating.find({}).then(data=>{
            res.json(data);
        });

        // res.send("test");
    });
    app.post("/api/rating", (req, res) => {
        console.log (req.body); 
        Model.Rating.create(req.body).then(data => {
            console.log(data);
            return Model.Review
            res.json("success");   
        }); 
       
    });

    app.post("/api/review", (req, res) =>{
        console.log(req.body);
        Model.Review.create(req.body).then(data => {
            console.log(data);
            res.json(data);

        });
    });
 }
