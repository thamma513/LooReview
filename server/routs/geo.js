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


        console.log(key);
        let queryString = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + key.GOOGLE;

        if(input){
            queryString += "&address=" + input;
        }


        request.get(queryString, (e, response, body) => {
            if(e) throw e;

            if(response.statusCode == 200){
                const { 
                    geometry,
                    formatted_address
                } = JSON.parse(body).results[0];
                const { location } = geometry;

                console.log(location);
                console.log(formatted_address);
                queryString = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=' + key.GOOGLE + '&input=' + location + '&rankby=distance&type=restaurant';

                request.get(queryString, ())
                
            } 
        });

        
    })
}