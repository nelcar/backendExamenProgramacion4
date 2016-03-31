var offersController = require('./controllers/offersController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, offers')}}},
	{method: 'GET', path: '/v1/offers', config: offersController.getoffers},
  {method: 'POST', path: '/v1/offer', config: offersController.createoffer},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout}
];
