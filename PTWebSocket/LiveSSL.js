var fs  = require( "fs");
var serverConfig;

serverConfig = JSON.parse(fs.readFileSync('../public/socket_live_config.json', 'utf8'));

var https = require('https').createServer({
    "key" : fs.readFileSync( "ssl/goldsvet.com.key" ),
    "cert": fs.readFileSync( "ssl/goldsvet.com.crt" )
});

var io = require('socket.io')(https);
var Redis = require('ioredis');
var redis = new Redis();

redis.subscribe('Lives', function(err, count) {
    console.log('subscribe on Lives');
});

redis.on('message', function(channel, message) {

    message = JSON.parse(message);

    console.log(message);

    io.emit(channel + ':' + message.event, message.data);
});

https.listen(serverConfig.port, function() {
    console.log('Listening on Port '+serverConfig.port);
});