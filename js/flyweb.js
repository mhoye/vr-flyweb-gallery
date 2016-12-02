var mdns = require('mdns');

var advertisement = mdns.createAdvertisement(mdns.tcp('flyweb'), 9090, {
  name: 'Hello, Invisible World'
});

//server.listen(port, function() {
//  console.log('Server listening on port ' + port);
  advertisement.start();
//});
