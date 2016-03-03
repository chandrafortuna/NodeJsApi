var restify = require('restify')
    , fs = require('fs')
    
var server = restify.createServer();
 
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
    
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/backoffice');
require('./models/Product');
require('./models/ProductCategory');
require('./models/ProductDetail');


 
if (process.env.environment == 'production')
    process.on('uncaughtException', function (err) {
        console.error(JSON.parse(JSON.stringify(err, ['stack', 'message', 'inner'], 2)))
    })
    
var port = process.env.PORT || 3010;
server.listen(port, function (err) {
    if (err)
        console.error(err)
    else
        console.log('App is ready at : ' + port)
})
    
require("./routes")(server)