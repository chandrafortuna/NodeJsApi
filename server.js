// var cool = require('cool-ascii-faces');
var restify = require('restify')
    , fs = require('fs')
    
var server = restify.createServer();
 
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
    
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/backoffice');
// mongoose.connect('mongodb://heroku_lw9kqwr0:8jtj13d9jadrl1ijj64dfn0k3v@ds019638.mlab.com:19638/heroku_lw9kqwr0');
require('./models/Product');
require('./models/ProductCategory');
require('./models/ProductDetail');

// server.get('/cool', function(request, response) {
//   response.send(cool());
// });
 
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