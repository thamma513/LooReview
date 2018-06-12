var express = require('express');
var app = express();

app.use(static('./client/public'));

var port = process.env.PORT || 6969;

app.listen(port, (e) => {
    if(e) throw e;
    console.log('server listening on port:' + port);
});