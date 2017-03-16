var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
// const querystring = require('querystring');

var config = require('./config');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');

var app = express();
var port = process.env.PORT || 8887;
var corsOptions = {
	origin: 'http://localhost:' + port
};

app.use(express.static('public'));
app.use(session({
    secret: config.sessionSecret
}));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));

app.post('/api/login', cors(), userCtrl.login);
app.get('/api/login', cors(), userCtrl.getSessionUser);
app.get('/api/profile/:name', cors(), profileCtrl.getProfile);
app.get('/api/profiles', cors(), profileCtrl.getProfiles);
app.get('/api/friends', cors(), profileCtrl.getFriendsProfiles);

app.listen(port, function() {
  console.log('app', 'Listening on port', port, 'for aliens');
  console.log('app', __dirname);
})
