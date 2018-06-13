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

        let queryString = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + key.GOOGLE;

        if(input){
            queryString += "&address=" + input;
        }


        request.get(queryString).on('response', (res) => {
            console.log(res);
        });

        
    })
}