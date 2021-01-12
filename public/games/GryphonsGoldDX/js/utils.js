updateInterval=setInterval(function(){

if(slotState==SLOT_STATE_IDLE){
   
   Updater();
   
   }

},3000);

function Updater(){

var mainSlotRes = new XMLHttpRequest();

mainSlotRes.onreadystatechange = function(ev) {

	if (this.readyState == 4 && this.status == 200) {
	var setObj=JSON.parse(String(ev.currentTarget.responseText));

		if(slotState==SLOT_STATE_IDLE){
   
	var balanceNew=setObj.serverResponse;		
		
   if(slotStateData.credit!=balanceNew){
	  slotStateData.credit=balanceNew;
	   console.log(slotStateData.credit,balanceNew,parseFloat(balanceNew));	
	  dispatchEvent(new Event(SLOT_EVENT_UPDATE));  
	   
	      }
   
       }

	}
};

var postData=JSON.stringify({slotEvent:"update"});

mainSlotRes.open("POST", "/game/GryphonsGoldDX/server?sessionId=" + sessionStorage.getItem('sessionId'), true);
mainSlotRes.setRequestHeader('Content-type', 'application/json; charset=utf-8');
mainSlotRes.send(postData);

}

function SetFullscreen(){
  var element = document.documentElement;  
  
 if (!document.fullscreenElement &&  !document.mozFullScreenElement && !document.webkitFullscreenElement) { 
 if(element.requestFullScreen) {
element.requestFullScreen();
} else if(element.mozRequestFullScreen) {
element.mozRequestFullScreen();
} else if(element.webkitRequestFullScreen) {
element.webkitRequestFullScreen();
}

GameResize();

 }
 
};

function TextFormat(textField,limit){

var tx= textField.text.replace(/\s/g, '');
	 tx= tx.replace('.', '');
var tLength=tx.length;	
var limitOver=tLength-limit;


	
if(textField.defaultY==undefined){
   textField.defaultY=textField.y;
   textField.defaultScaleY=textField.scale.y;
   textField.defaultScaleX=textField.scale.x;
	
   }
textField.scale.x=textField.defaultScaleX;	
textField.scale.y=textField.defaultScaleY;		
textField.y=textField.defaultY;	
	
console.log(limitOver);	
if(limitOver>0){
   
	
for(var i=0; i<limitOver; i++){
	
textField.scale.x-=0.05;	
textField.scale.y-=0.05;	
textField.y+=2;	
	
}
	
	
}

	
	
};


function ExitFullscreen() {

  if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }

};

/*градиентный текст*/



/*

функция "слив" выигрыша


*/

function AddWin(){

var adw1=1;
var adw2=0;
var adw3=6;
var numFloat=false;
	

	
	
slotStateData.oldWin=slotStateData.totalWin;
var tm=setInterval(function(){	

adw2++;	
	
if(adw2>adw3){	

adw2=0;

	if(adw3>1){
adw3--;
	}
	if(adw3<=1){
		

adw1+=2;		

	}
	
if(adw1<=slotStateData.totalWin && !isFastCollect){
slotStateData.totalWin=((slotStateData.totalWin*100)-(adw1*100))/100;	
slotStateData.credit=((slotStateData.credit*100)+(adw1*100))/100;	
dispatchEvent(new Event(SLOT_EVENT_ADDWIN));	
}else{
	
isFastCollect=false;	
	
slotStateData.credit=((slotStateData.credit*100)+(slotStateData.totalWin*100))/100;;	
slotStateData.totalWin=0;
slotStateData.credit=slotStateData.credit_new;	
dispatchEvent(new Event(SLOT_EVENT_AFTERADDWIN));	
clearInterval(tm);	
	
}

}
	
},33);

}


function JackAddWin(){

var adw1=1;
var adw2=0;
var adw3=6;
var numFloat=false;
	

	
	

clearInterval(slotStateData.tmj);
createjs.Sound.stop();
slotStateData.isJackShow=false; 

slotStateData.tmj=setInterval(function(){	

adw2++;	
	
if(adw2>adw3){	

adw2=0;

	if(adw3>1){
adw3--;
	}
	if(adw3<=1){
		

adw1+=2;		

	}
	
if(adw1<=slotSettings.Jackpots['jackPay'] && !isFastCollect){
slotSettings.Jackpots['jackPay']=((slotSettings.Jackpots['jackPay']*100)-(adw1*100))/100;	
slotStateData.credit=((slotStateData.credit*100)+(adw1*100))/100;	
dispatchEvent(new Event(SLOT_EVENT_JACKPOTADD));	
}else{
	
createjs.Sound.stop();
slotStateData.isJackShow=false;  
		
slotStateData.credit=((slotStateData.credit*100)+(slotSettings.Jackpots['jackPay']*100))/100;	
slotSettings.Jackpots['jackPay']=0;
dispatchEvent(new Event(SLOT_EVENT_JACKPOTADD));
dispatchEvent(new Event(SLOT_EVENT_JACKPOTHIDE));
clearInterval(slotStateData.tmj);

if(isFastCollect){	
	
gameMessages.HideJackWnd();		
dispatchEvent(new Event(SLOT_EVENT_AFTERSPIN));		

}

isFastCollect=false;	
	
}
	
	

}
	
},33);

}


/*взаимодействие с сервером*/

var responseTimeout;
var responseTimeoutTime=10000;

function ServerConnect(pObj){

responseTimeout=setTimeout(function(){

ServerConnect(pObj)


},responseTimeoutTime);	
	
	
var mainSlotRes = new XMLHttpRequest();

mainSlotRes.onreadystatechange = function(ev) {




	if (this.readyState == 4 && this.status == 200) {
	var setObj=JSON.parse(String(ev.currentTarget.responseText));

if(setObj.responseEvent!=undefined){
 clearTimeout(responseTimeout);  
   
   }
		


   ResponseController(setObj);
	}
	
	
};

var postData=JSON.stringify(pObj);


mainSlotRes.open("POST", "/game/GryphonsGoldDX/server?sessionId=" + sessionStorage.getItem('sessionId'), true);
mainSlotRes.setRequestHeader('Content-type', 'application/json; charset=utf-8');
mainSlotRes.send(postData);

}


function GetCookie(cookieName) {
    var re = new RegExp('[; ]'+cookieName+'=([^\\s;]*)');
    var sMatch = (' '+document.cookie).match(re);
    if (cookieName && sMatch) return unescape(sMatch[1]);
}

function RandomInt(min, max)
{

  return Math.floor(Math.random() * (max - min + 1)) + min;

};

/*выравнивание ставки при недостаточном балансе*/

function ReBet(){
	
/*проход по ставкам*/
	

	
for(var i=slotSettings.BetCnt; i>0; i--){

slotSettings.BetCnt--;	
	
slotStateData.betline=slotSettings.Bet[slotSettings.BetCnt];	
slotStateData.bet=slotStateData.betline*slotStateData.lines;

	if(slotStateData.bet<=slotStateData.credit){
	break;	
	}
	
}

/*проход по линим*/	
	
if(slotStateData.credit<slotStateData.bet){

for (var i=10; i>0;i--) {
   

	
	if(slotSettings.gameLine.indexOf(""+i)!=-1 && slotSettings.Line.indexOf(""+i)!=-1){
	  
	slotStateData.lines=i;
	slotStateData.bet=slotStateData.betline*slotStateData.lines;

	if(slotStateData.bet<=slotStateData.credit){
	break;	
	}	
		
    }
	
}

	

	
	
}
	
autoMode=false;		
dispatchEvent(new Event(SLOT_EVENT_UPDATE));		
dispatchEvent(new Event(SLOT_EVENT_LINES));	
dispatchEvent(new Event(SLOT_EVENT_EMPTYSPIN));	
gameUI.GetObject()['uiButtonAuto'].ChangeLabel('uiButtonAuto');		
};

function NumFormat(n){

n=parseFloat(n);
if(!numFloat){
n = Number(n).toFixed(2);
n=parseFloat(String(n));
return n+' '+slotSettings.slotCurrency;

}
    var a, s = Number(n).toFixed(2);
    while (a = s.match(/\d(\d{3}[^\d])/)) s = s.replace(a[1], " " + a[1]);
    return s+' '+slotSettings.slotCurrency;

}

/*ресйз*/

window.onscroll = function() {

	GameResize();

};
var offs=1;
function GameResize(){
window.scroll(0, 0);
var gc=document.getElementById("game");
scaleMode="showAll";
if(scaleMode=="showAll"){


	

    var rw = CANVAS_W;
	var rh = CANVAS_H;
	var w = window.innerWidth;
	var h = window.innerHeight;
	
	var mpl = h / rh;
	var mpl2 =  window.innerWidth/app.view.style.width.split("px")[0];
	app.view.style['position']='absolute';	
	
	
	

		
	
		
	for(var i=0; i<=1000; i++){
		
	
		
		
		
	var destW = rw * mpl*offs;
	var destH = rh * mpl*offs;
	
	app.view.style.width=destW+"px";
	app.view.style.height=destH+"px";
	
	
	app.view.style['left']=((window.innerWidth / 2) - (app.view.style.width.split("px")[0] / 2))+"px";
	app.view.style['top']=((h / 2) - (destH / 2))+"px";	
	
		
		
	mpl2 =  window.innerWidth/app.view.style.width.split("px")[0];
		
	if(mpl2>=0.7401){
	break;	
	}	
		
	mpl-=0.001;
	
	}
		


}else if(scaleMode=="exactFit"){

app.view.style['margin-left']="0px";
app.view.style['margin-top']="0px";

app.view.style.width=window.innerWidth+"px";
app.view.style.height=window.innerHeight+"px";

}


}
