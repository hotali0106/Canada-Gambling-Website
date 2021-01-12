



var fhc = require('./mod/FishHunter.js');

var fs = require('fs');
var serverConfig;

serverConfig = JSON.parse(fs.readFileSync('../public/socket_config0.json', 'utf8'));
	
var templSpawnReq=null;


/*-----------------------------------*/

function DecimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}

function HexToDecimal(hex){ 

return parseInt(hex,16); 

}




function DecodeMessage(arrayBuffer) {
  var result = "";
  var i = 0;
  var c = 0;
  var c1 = 0;
  var c2 = 0;

  var data = new Uint8Array(arrayBuffer);

  // BOM
  if (data.length >= 3 && data[0] === 0xef && data[1] === 0xbb && data[2] === 0xbf) {
    i = 3;
  }

  while (i < data.length) {
    c = data[i];

    if (c < 128) {
      result += String.fromCharCode(c);
      i++;
    } else if (c > 191 && c < 224) {
      if( i+1 >= data.length ) {
        throw "UTF-8 Decode failed. Two byte character was truncated.";
      }
      c2 = data[i+1];
      result += String.fromCharCode( ((c&31)<<6) | (c2&63) );
      i += 2;
    } else {
      if (i+2 >= data.length) {
        throw "UTF-8 Decode failed. Multi byte character was truncated.";
      }
      c2 = data[i+1];
      c3 = data[i+2];
      result += String.fromCharCode( ((c&15)<<12) | ((c2&63)<<6) | (c3&63) );
      i += 3;
    }
  }
  return result;
}

function EncodeMessage(str) {
  var buf = new ArrayBuffer(str.length ); // 2 bytes for each char
  var bufView = new Int8Array(buf);
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

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


//
function ResponseHandler(msg){
var cMsg='';	
var wf=msg.indexOf('{"');
if(wf!==-1){
cMsg = msg.substring(wf, msg.length);
	
}	
var msgJson=JSON.parse(cMsg);	
return msgJson;
	
}



function FormatAndSendMsg(ws,msgStr,msgId,messageView){
	
	
var jsnMsg=ResponseHandler(msgStr); 
	
ws.sessionId=jsnMsg.sessionId;	
ws.cookie=jsnMsg.cookie;	
	
var pAnswer='';	
	
/*---------------*/	
	
var request = require('request');
var gameURL= serverConfig.prefix+serverConfig.host+'/game/FishHunterKA/server?&sessionId='+jsnMsg.sessionId;





var options = {
  method: 'post',
  body: jsnMsg, 
  json: true, 
  rejectUnauthorized: false,
  requestCert: false,
  agent: false,
  url: gameURL,
  headers: {
   'Cookie': jsnMsg.cookie
  }
}



if(jsnMsg['action']=='fishHunter.areaHandler.onFire'){
	

pAnswer = ws.fhController.OnFire(jsnMsg);	
if(ws.fhController.fhcBalance<ws.fhController.fhcBet ){	
	
return;	

}	
	




for(var ac=0; ac<pAnswer.length; ac++){



var pAnswerT=JSON.parse(pAnswer[ac]);

var par0=pAnswerT['answerType'];
var par1=pAnswer[ac];
var response=EncodeMessage('......'+par0+par1);	
var responseView = new Int8Array(response);
var allDataMsg=('..'+par0+par1);
var allDataMsgStr=DecimalToHex(allDataMsg.length, 4);
responseView[0]=4;
responseView[1]=0;
responseView[2]=HexToDecimal(allDataMsgStr[0]+allDataMsgStr[1]);
responseView[3]=HexToDecimal(allDataMsgStr[2]+allDataMsgStr[3]);
responseView[4]=pAnswerT['responseView'][4];
responseView[5]=pAnswerT['responseView'][5];	


ws.send(response);



}



return;
	
}






request(options, function (err, res, body) {
  if (err) {
    console.log('Error :', err)
   
  }

//////////////////////////




//////////////////////////
try{
pAnswer=body.split(":::")[1].split("---");
}catch(e){
return;	
}


for(var ac=0; ac<pAnswer.length; ac++){



var pAnswerT=JSON.parse(pAnswer[ac]);
/*-----------*/	

if(pAnswerT['answerType']=='game.colliderResult'){



ws.fhController.fhcBalance=pAnswerT['Balance'];		


	
	
}	
	

if(jsnMsg['action']=='areaFishControl.fishHandler.fetchFishInfo'){
	

	
var par0=pAnswerT['answerType'];
var par1=pAnswer[ac];




var adv_char='..';
 if(messageView[6]!=41){
var response=EncodeMessage('.......'+par1);	
var adv_char='...';	
}else{
var response=EncodeMessage('......'+par1);	
}
var responseView = new Int8Array(response);
var allDataMsg=(adv_char+par1);
var allDataMsgStr=DecimalToHex(allDataMsg.length, 4);
responseView[0]=4;
responseView[1]=0;
responseView[2]=HexToDecimal(allDataMsgStr[0]+allDataMsgStr[1]);
responseView[3]=HexToDecimal(allDataMsgStr[2]+allDataMsgStr[3]);
responseView[4]=4;
responseView[5]=messageView[5];	
if(messageView[6]!=41){
responseView[6]=messageView[6];	
}


		
	
}else{
	
var par0=pAnswerT['answerType'];
var par1=pAnswer[ac];
var response=EncodeMessage('......'+par0+par1);	
var responseView = new Int8Array(response);
var allDataMsg=('..'+par0+par1);
var allDataMsgStr=DecimalToHex(allDataMsg.length, 4);
responseView[0]=4;
responseView[1]=0;
responseView[2]=HexToDecimal(allDataMsgStr[0]+allDataMsgStr[1]);
responseView[3]=HexToDecimal(allDataMsgStr[2]+allDataMsgStr[3]);
responseView[4]=pAnswerT['responseView'][4];
responseView[5]=pAnswerT['responseView'][5];	


if(pAnswerT['answerType']=='game.start'  || pAnswerT['answerType']=='game.updateCannon'  ){
	
ws.fhController.fhcBalance=pAnswerT['Balance'];	
ws.fhController.fhcBet=pAnswerT['curBet'];	
	
}



	
}




ws.send(response);



if(jsnMsg['action']=='playerControl.tableHandler.leaveTable'){
	

var response=EncodeMessage('......{"code":200}');	
var responseView = new Int8Array(response);
responseView[0]=4;
responseView[1]=0;
responseView[2]=0;
responseView[3]=14;
responseView[4]=4;
responseView[5]=messageView[5];	



ws.send(response);

}

}

//////////////////////////
//////////////////////////


});	
	
	
	
}



///////
var  wsClients=[];
var  wsClientsId=0;

wss.binaryType='arraybuffer';
wss.on('connection', function connection(ws) {
	
ws.id=wsClientsId;
ws.fhController= new fhc.FishHunterController();
wsClients[wsClientsId]={ ws_:ws, msgId:0,state:'idle'};
	
wsClientsId++;	



	
  ws.on('close', function () {
	console.log('close');
clearInterval(ws.fishSpawnInterval);
	
  });
  
  ws.on('message', function incoming(message) {

var msgStr=DecodeMessage(message);
var messageView = new Int8Array(message);	

if(msgStr.length==4 &&  messageView[1]==0 && messageView[2]==0 && messageView[3]==0){
	
  var response = new ArrayBuffer(4);
  var bufView = new Int8Array(response);	
  
  
	bufView[0]=3;
	bufView[1]=0;
	bufView[2]=0;
	bufView[3]=0;
	ws.send(response);
}else{
	

    
/////////////	init0
if(wsClients[ws.id].msgId==0){
	
var jsnMsg=ResponseHandler(msgStr); 
	
var response=EncodeMessage('...#{"code":200,"sys":{"heartbeat":30}}');	
var responseView = new Int8Array(response);
responseView[0]=1;
responseView[1]=0;
responseView[2]=0;
ws.send(response);



}else if(wsClients[ws.id].msgId==1){

/////////////	init1
FormatAndSendMsg(ws,msgStr,wsClients[ws.id].msgId,messageView);

}else if(wsClients[ws.id].msgId==2){

/////////////	init1
	
FormatAndSendMsg(ws,msgStr,wsClients[ws.id].msgId,messageView);

}else{
	
if(msgStr.indexOf("onPingBalance")!==-1 && templSpawnReq==null){

msgStr=msgStr.replace('"action":"connector.accountHandler.onPingBalance"', '"action":"connector.accountHandler.onPingBalance_2"');

templSpawnReq={msgStr:msgStr,messageView:messageView};	

ws.fishSpawnInterval=setInterval(function(){
	

FormatAndSendMsg(ws,templSpawnReq.msgStr,wsClients[ws.id].msgId,templSpawnReq.messageView);		

	
},10000);

	
}else if(ws.fishSpawnInterval== undefined){
	
	
ws.fishSpawnInterval=setInterval(function(){
	

FormatAndSendMsg(ws,templSpawnReq.msgStr,wsClients[ws.id].msgId,templSpawnReq.messageView);		

	
},10000);	
	
}	
	
	
FormatAndSendMsg(ws,msgStr,wsClients[ws.id].msgId,messageView);	
	
}		


wsClients[ws.id].msgId++;	


}
	

	
  });


});


