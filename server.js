var mongoose = require( 'mongoose');
var express = require( 'express' );
var path = require( 'path' );
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var app = express();


app.use(bodyParser.json());
app.use( express.static( path.join( __dirname, './client' )));
app.use( express.static( path.join( __dirname, './bower_components' )));

//-----LOAD-FIRST--------------------------
require('./server/config/mongoose.js' );
//-----------------------------------------

require('./server/config/routes.js')(app);

app.listen( 8000, function() {
  console.log('server running on port 8000');
});
