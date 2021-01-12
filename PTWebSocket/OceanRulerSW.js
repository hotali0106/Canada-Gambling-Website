



var fhc = require('./mod/FishHunter.js');

var fs = require('fs');
var serverConfig;

serverConfig = JSON.parse(fs.readFileSync('../public/socket_config_OceanRulerSW.json', 'utf8'));
	
var templSpawnReq=null;


/*-----------------------------------*/



if(serverConfig.ssl){
	
var privateKey = fs.readFileSync('ssl/goldsvet.com.key', 'utf8');
var certificate = fs.readFileSync('ssl/goldsvet.com.crt', 'utf8');

var credentials = { key: privateKey, cert: certificate };
var https = require('https');


var httpsServer = https.createServer(credentials);
httpsServer.listen(serverConfig.port);

var WebSocket = require('ws').Server;
var wss = new WebSocket({
    server: httpsServer
});

}else{

var WebSocket = require('ws');
var wss = new WebSocket.Server({port: serverConfig.port });


}




///////
var  wsClients=[];
var  wsClientsId=0;


wss.on('connection', function connection(ws) {
	
/*ws.id=wsClientsId;
ws.fhController= new fhc.FishHunterController();
wsClients[wsClientsId]={ ws_:ws, msgId:0,state:'idle'};
	
wsClientsId++;	



	
  ws.on('close', function () {
	console.log('close');
clearInterval(ws.fishSpawnInterval);
	
  });*/
  
  ws.on('message', function incoming(message) {

var incomingPar=JSON.parse(message);

var response ='';

if(incomingPar.gameData=='2probe'){
	
response='3probe';	
ws.send(response);
	
}else if(incomingPar.gameData=='2'){
	
response='3';	
ws.send(response);
	
}else if(incomingPar.gameData=='5'){

return;
response='';	
	
}else{


/*---------------------*/

var request = require('request');
var gameURL= serverConfig.prefix+serverConfig.host+'/game/'+incomingPar.gameName+'/server?&sessionId='+incomingPar.sessionId;
var paramStr=JSON.stringify(incomingPar.gameData);
var options = {
  method: 'post',
  body: incomingPar.gameData, 
  json: true, 
  rejectUnauthorized: false,
  requestCert: false,
  agent: false,
  url: gameURL,
  headers: {
	'Connection': 'keep-alive',
	"Content-Type": "application/json",
	'Content-Length': paramStr.length,
    'Cookie': incomingPar.cookie
  }
}

request(options, function (err, res, body) {
  if (err) {
    console.log('Error :', err)
    return
  }
  
  console.log('msg :', body)
  
  ws.send(body);
  
  });


/*---------------------*/





	
}	


	
	
	




	
  });


});


