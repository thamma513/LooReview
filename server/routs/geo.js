var request = require('request');
var key = require('../../keys');

module.exports = function(app){
    app.get('/search/location', (req, res) => {
        const { query } = req;
        const { 
            lat,
            lon,
            input,
            range
        } = query;

        let queryString = 'http://maps.googleapis.com/maps/api/geocode/json?key=' + key.GOOGLE;

        if(input){
            queryString += "&"
        }

        queryString += 

        request.get()

        
    })
}