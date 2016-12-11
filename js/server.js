var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: '.',            // required, the root of the server file tree 
  port: 8080,               // optional, defaults to a random port 
});
 
server.start(function () {
  console.log('Server listening to', server.port);
});
