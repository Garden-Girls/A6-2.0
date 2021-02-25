
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

// all pages HERE! no slash - naming
var index = require('./routes/index');
var myPlantsPage = require('./routes/myPlantsPage');
var calendar = require('./routes/calendar');
var bert = require('./routes/bert');
var dayEntry = require('./routes/dayEntry');
var stripes = require('./routes/stripes');
var froggy = require('./routes/froggy');
var emily =  require('./routes/emily');
var search = require('./routes/search');
var addPage = require('./routes/addPage');
var filtered = require('./routes/filtered');
var editPlantPage=require('./routes/filtered');
var orchidInfoPage = require('./routes/orchidInfoPage');
var lavenderInfoPage =require('./routes/lavenderInfoPage');
var loginPage = require('./routes/loginPage');



// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/myPlantsPage', myPlantsPage.view);
app.get('/calendar', calendar.view);
app.get('/bert', bert.view);
app.get('/dayEntry', dayEntry.view);
app.get('/froggy', froggy.view);
app.get('/stripes',stripes.view);
app.get('/emily',emily.view);
app.get('/search', search.view);
app.get('/addPage', addPage.view);
app.get('/filtered',filtered.view);
app.get('/editPlantPage',editPlantPage.view);
app.get('/orchidInfoPage',orchidInfoPage.view);
app.get('/lavenderInfoPage',lavenderInfoPage.view);
app.get('/loginPage', loginPage.view);

// Example route
// app.get('/users', user.list);

//testing diff entries
app.get('/dayEntry/:plantName/:monthNum/:dayNum/:yearNum', dayEntry.view);
//end testing

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
