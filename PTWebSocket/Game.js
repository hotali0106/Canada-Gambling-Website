



var fs = require('fs');
var serverConfig;

serverConfig = JSON.parse(fs.readFileSync('../public/socket_config.json', 'utf8'));
	



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

 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
	  

    
    /*------------------------*/
    
  
    
  
var request = require('request');

var gameName='';

if(message.split(":::")[1]!=undefined){
try{	
var param=JSON.parse(message.split(":::")[1]);
}catch(e){
return;
}



var ck=param.cookie;
var sessionId=param.sessionId;
param.cookie='';

gameName=param.gameName;
}else{
var param={};	
var ck='';	
}

var gameURL= serverConfig.prefix+serverConfig.host+'/game/'+gameName+'/server?&sessionId='+sessionId;
console.log(gameURL);

if(gameName==undefined){
	console.log(param);
	return;
}


var paramStr=JSON.stringify(param);

var options = {
  method: 'post',
  body: param, 
  json: true, 
  rejectUnauthorized: false,
  requestCert: false,
  agent: false,
  url: gameURL,
  headers: {
	'Connection': 'keep-alive',
	"Content-Type": "application/json",
	'Content-Length': paramStr.length,
    'Cookie': ck
  }
}

request(options, function (err, res, body) {
  if (err) {
    console.log('Error :', err)
    return
  }
  
  if(body!=undefined){
	  
	try{  
	  
  var allReq=body.split("------");
  
}catch(e){
	
   console.log('Error :', e)
return;	
}
  console.log('-------  message  ----------');
  
  
  console.log(message);
  
  console.log('-------  send  ----------');
  for(var i=0;i<allReq.length;i++){
	  
	 console.log(allReq[i]); 
	  
	ws.send(allReq[i]);  
	  
  }
  
}

});
    
    /*-------------------------*/
   
    
  });

  ws.send('1::');
});


