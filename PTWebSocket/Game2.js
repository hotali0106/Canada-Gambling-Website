



var fs = require('fs');
var serverConfig;

serverConfig = JSON.parse(fs.readFileSync('../public/socket_config.json', 'utf8'));
	



if(serverConfig.ssl){
	
var privateKey = fs.readFileSync('ssl/goldsvet.com.key', 'utf8');
var certificate = fs.readFileSync('ssl/goldsvet.com.crt', 'utf8');

var credentials = { key: privateKey, cert: certificate };
var https = require('https');
var http = require('http');


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




   /*------------------------*/
    /*------------------------*/
	
	var postData = JSON.stringify(param);

var options = {
  hostname: serverConfig.host,
  port: 80,
  path: '/game/'+gameName+'/server?&sessionId='+sessionId,
  method: 'POST',
  headers: {
	  'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
	 'Cookie': ck
  }
};

var http = require('http');
var rslt='';
var  req = http.request(options, (res) => {
console.log(res);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
   rslt+=chunk;
  });
  res.on('end', () => {

 if(rslt!=''){
	  
	try{  
	  
  var allReq=rslt.split("------");
  
}catch(e){
	
   console.log('Error :', e)
return;	
}

  for(var i=0;i<allReq.length;i++){
	  
	 console.log(allReq[i]); 
	  
	ws.send(allReq[i]);  
	  
  }

 }


  });
});

req.on('error', (e) => {

});


req.write(postData);
req.end();
	

   
    
  });

  ws.send('1::');
});


