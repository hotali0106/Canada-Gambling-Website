



var fs = require('fs');
var serverConfig;

serverConfig = JSON.parse(fs.readFileSync('../public/socket_config1.json', 'utf8'));
	

/*-----------------------------------*/

function DecodeMessage(arrayBuffer) {
  var result = "";
  var i = 0;
  var c = 0;
  var c1 = 0;
  var c2 = 0;

  var data = new Uint8Array(arrayBuffer);

  // If we have a BOM skip it
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
      //throw "UTF-8 Decode failed. Two byte character was truncated.";
      }
      c2 = data[i+1];
      result += String.fromCharCode( ((c&31)<<6) | (c2&63) );
      i += 2;
    } else {
      if (i+2 >= data.length) {
      //  throw "UTF-8 Decode failed. Multi byte character was truncated.";
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
  var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  var bufView = new Uint16Array(buf);
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}


function hexToArrayBuffer (hex) {
  if (typeof hex !== 'string') {
    throw new TypeError('Expected input to be a string')
  }

  if ((hex.length % 2) !== 0) {
    throw new RangeError('Expected string to be an even number of characters')
  }

  var view = new Uint8Array(Math.round(hex.length / 2))

  for (var i = 0; i < hex.length; i += 2) {
    view[i / 2] = parseInt(hex.substring(i, i + 2), 16)
  }

  return view.buffer
}

/*-----------------------------------*/


function SendMessageToPHP(ws,params,ab){
	
 
 /*------------------------*/
var request = require('request');
var gameName='';
var ck=ws.cookie;
var sessionId=ws.sessionId;

gameName=ws.gameName;



var gameURL= serverConfig.prefix+serverConfig.host+'/game/'+gameName+'/server?&sessionId='+sessionId;

console.log(gameURL);
console.log(params);
console.log(ck);

var options = {
  method: 'post',
  body: params, 
  json: true, 
  rejectUnauthorized: false,
  requestCert: false,
  agent: false,
  url: gameURL,
  headers: {
	 
    'Cookie': ck
  }
}

request(options, function (err, res, body) {
  if (err) {
    console.log('Error :', err)
    return
  }
  console.log('answer');
  console.log(body);
  
  
 try{
	 
var sAnswer=JSON.parse(body.split(":::")[1]);
  
  }catch(e){
	
return;	
	  
  }
  
var packet = require('./mod/packet.js');		
var responsePacket=new packet.OutcomingPacket;
responsePacket.writeBuffer(ab);

if(sAnswer.action=="getBalance"){

responsePacket.offset=6;
responsePacket.writeUint32(sAnswer.Credit);

}

if(sAnswer.action=="Act61"){

//responsePacket.offset=28;
//responsePacket.writeString(sAnswer.currency);

}

if(sAnswer.action=="Act41"){

responsePacket.offset=6;
responsePacket.writeUint32(sAnswer.Credit);
responsePacket.offset=29;
responsePacket.writeUint32(sAnswer.nickName);
}

if(sAnswer.action=="Act18"){


responsePacket.offset=35;
responsePacket.writeUint32(sAnswer.nickName);
}



if(sAnswer.action=="Act19"){


var hits= sAnswer.hits.reqDat.hits;
var fishLenOffset=10+(hits.length*8);

responsePacket.offset=8;
responsePacket.writeUint16(fishLenOffset);


var cOffset=14;

for(var fi=0; fi<hits.length; fi++){
	
var cfish=hits[fi];

responsePacket.offset=cOffset;
responsePacket.writeUint32(cfish['fishId']);
cOffset+=4;
responsePacket.offset=cOffset;
responsePacket.writeUint32(cfish['win']);
cOffset+=4;
	
	console.log('FISH');
	console.log(cfish);
}

responsePacket.offset=cOffset;
responsePacket.writeUint32(sAnswer.Credit);

}



ws.send(responsePacket.buffer);	

});
    
    /*-------------------------*/	
	
}



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
	
var msgJson=JSON.parse(msg);	
	
console.log(msgJson);	
	
	
}

///////
var  wsClients=[];
var  wsClientsId=0;

 wss.binaryType='arraybuffer';
wss.on('connection', function connection(ws) {
	
ws.msgId=0;
	
	
  ws.on('message', function incoming(message) {
	  

var messageView8= new Int8Array(message);

if(ws.msgId==0){
	
var msgString=DecodeMessage(message);	
var msgJson=JSON.parse(msgString.split(":::")[1]);	
	

	
ws.cookie=msgJson.cookie;	
ws.sessionId=msgJson.sessionId;	
ws.gameName=msgJson.gameName;	


	
ws.send(hexToArrayBuffer('010010000000eb297b05000000001ed90000813001000100000019000000a0860100204e00000a000000204e0000840a00005d0000003c0000000f00000000000000010000000100000001000000010000001027000077943febd0974dbcae489bf1f311b770ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff32be050005004d61727932010000006a1fd7dd00000000'));	

//ws.send(hexToArrayBuffer('9d000000df3200263e2a23227b16c9d4b8be4e7476bb087dd0a0c2527f9984586643a4da4c5115ba8d89577e8257e2350fcede8e9c54ac397da88143b1cd9191d42703d482b7d7419220091f82b7d7419220091fd79dc24df7503701fbb8e20d73af43ccd1a8d0a17982aa3a2876313c32bac2802876313c32bac2802876313c32bac28028a77fe1f051d5e592b9e8a8a21fba4f5653094832fe8c9add00000000'));	
	
//bb7e7178bcceaf040c375d6aa83819a9f6eb3a3cb351a01bfd60a0a431a6bc295307d0dd4f50544548534e0647135d2d427d798a5223d16c037db03a84565b27cb122f579c6ff3ffcb122f579c6ff3ff5fd74ccf5e207222f2f176cf5625ec549920179d98271707fa3207bea0de3cc9fa3207bea0de3cc9fa3207bea0de3cc902ee0967214cbb3cfff2dc3b92058ad115a6a3c8de21e8efdd00000000	
	
	
}else if(ws.msgId==1){
	
var ab=hexToArrayBuffer('010014000000840a00000000000000000000e3c82a5c00000000');	
var params={};
params.msgId=ws.msgId;
params.action='Init1';
SendMessageToPHP(ws,params,ab);




//ws.send(hexToArrayBuffer('1a000000baf4f75b9e6ab0da668738616c9b9a32942408a20f1c56d20000'));	
	
//	
	
	
}else if(ws.msgId==2){
	
var ab=hexToArrayBuffer('01003a0000004803000003005553440100000001000000605e9f0500000000');	
var params={};
params.msgId=ws.msgId;
params.action='Init2';
SendMessageToPHP(ws,params,ab);
//ws.send(hexToArrayBuffer('1f000000478616d56ed874666d6384da29a0df033b97f3656f024cc65e9f0500000000'));	
	
//	
	
	
}else if(ws.msgId==3){
	
	
	

var ab=hexToArrayBuffer('010029000000000000000000000032be05000000000014f4c4fd00000000');

var params={};
params.msgId=ws.msgId;
params.action='getBalance';
SendMessageToPHP(ws,params,ab);


//ws.send(hexToArrayBuffer('1e0000001e46dc3360cadbf97d360e41d96383457b39ef9ea522dc5cc4fd00000000'));	
	
//	
	
	
}else if(ws.msgId==4){
	
var ab=hexToArrayBuffer('01003d00000064000000840a000000000000000000004803000003005553440100000001000000651404db00000000');	

var params={};
params.msgId=ws.msgId;
params.action='Act61';
SendMessageToPHP(ws,params,ab);

//ws.send(hexToArrayBuffer('2f0000004b46593ce5e0fb1493c17fdfa6785949040c93ebe58e96516d6384da29a0df03a54c01777e78a8221404db00000000'));	
	
//	
	
	
}else{
	
if(messageView8[6]==54){	
	
	
var ab=hexToArrayBuffer('01003600000002a40e0000000000008813000000000000071800000000000010270000000000008b2a000000000000204e000000000000bb5d00000000000050c30000000000000f004a41434b504f5420252e326c662020019cbbb21700000000');	
var params={};
params.msgId=ws.msgId;
params.action='Ping';
SendMessageToPHP(ws,params,ab);
//ws.send(hexToArrayBuffer('610000001f1c1aa13f8bbb33718008a836c804703c694ed05d5307cd5dd7b89af5b6b1e4b1b7a443a7ad486629890fabd11ce31b5874c55d4d79cd775e00bcb30d2da138916d1bf423775615197c93af085426693ddfd1e92c22dadb502537ecb161647f00'));	
	
//	
	
	
}else if(messageView8[6]==58){	
	
	
	
var ab=hexToArrayBuffer('01003a0000004803000003005553440100000001000000605e9f0500000000');	
var params={};
params.msgId=ws.msgId;
params.action='Act58';
SendMessageToPHP(ws,params,ab);
//ws.send(hexToArrayBuffer('1f000000478616d56ed874666d6384da29a0df033b97f3656f024cc65e9f0500000000'));	

//
	
}


/*start game  mess*/

 if(messageView8[6]==41){	
	
var ab=hexToArrayBuffer('010029000000840a00000000000032be05000000000014f4c4fd00000000');	

var params={};
params.msgId=ws.msgId;
params.action='Act41';
SendMessageToPHP(ws,params,ab);

//ws.send(hexToArrayBuffer('1e0000001e46dc3360cadbf97d360e41d96383457b39ef9ea522dc5cc4fd00000000'));	
	
//	
	
	
}

 if(messageView8[6]==18){	
	
if(messageView8.length>=64){

var ab=hexToArrayBuffer('0100120000000f001200e542bb8b3206000002000000740a0000740a000000000000ffffffff9fec605b00000000');	


var msgString=DecodeMessage(message);	

console. log('FISH DAMAGE REQ STRINGG:  ');
console. log(msgString);

var msgJson=JSON.parse(msgString.split("::")[1].split("###")[0]);	

console. log('FISH DAMAGE REQ: ');
console. log(msgJson);

var params={};
params.msgId=ws.msgId;
params.action='Act18';

params.reqDat=msgJson;
SendMessageToPHP(ws,params,ab);

//ws.send(hexToArrayBuffer('2e000000b894691aea98b1eac68fd0e5661b1c63615abedc3702bbe3854db76a9b476eb4c59f0c0b662334a476ec00000000'));	

//


}else{	
	
var ab=hexToArrayBuffer('0100120000000f000800f88eb03d5d01740a000000000000ffffffff261765bf00000000');	

var params={};
params.msgId=ws.msgId;
params.action='Act18';
SendMessageToPHP(ws,params,ab);
//ws.send(hexToArrayBuffer('240000003441f33d9aeaf43296ff17907959f378ebc51d295fa85a38e51ac9ea3afe8f8e00000000'));	
	
//	
	
	
}
	
}










	
}

ws.msgId++;

    
  });


});


