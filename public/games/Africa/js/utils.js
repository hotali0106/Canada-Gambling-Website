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

mainSlotRes.open("POST", "/game/Africa/server?sessionId="+sessionStorage.getItem('sessionId'), true);
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

(function () {
        function GradientText(text, font, color) {
            this.Text_constructor(text, font, color);
        }

        var p = createjs.extend(GradientText, createjs.Text);

        p._drawTextLine = function (ctx, text, y) {
            if (this.gradient) {
                var height = this.getMeasuredLineHeight();
                var my_gradient = ctx.createLinearGradient(0, y, 0, y + height+2);
                my_gradient.addColorStop(0, "#FF9900");
                my_gradient.addColorStop(1, "#FFFF66");

                ctx.fillStyle = my_gradient;
                ctx.fillText(text, 0, y, this.maxWidth || 0xFFFF);
            } else {
                this.Text__drawTextLine(ctx, text, y);
            }
        };

        window.GradientText = createjs.promote(GradientText, "Text");
    }());


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
	
if(adw1<=slotStateData.totalWin  && !isFastCollect){
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


mainSlotRes.open("POST", "/game/Africa/server?sessionId="+sessionStorage.getItem('sessionId'), true);
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

	
slotStateData.lines	
	
	
}
	
autoMode=false;	
autoMode=false;
dispatchEvent(new Event(SLOT_EVENT_UPDATE));
dispatchEvent(new Event(SLOT_EVENT_LINES));	
	
};

function NumFormat(n){

n=parseFloat(n);
if(!numFloat){
n = Number(n).toFixed(2);
n=parseFloat(String(n));
return n;

}
    var a, s = Number(n).toFixed(2);
    while (a = s.match(/\d(\d{3}[^\d])/)) s = s.replace(a[1], " " + a[1]);
    return s;
}

/*ресйз*/

function GameResize(){

var gc=document.getElementById("game");

if(scaleMode=="showAll"){


	

    var rw = CANVAS_W;
	var rh = CANVAS_H;
	var w = window.innerWidth;
	var h = window.innerHeight;
	var mpl = Math.min((h / rh), (w / rw));
	var destW = rw * mpl;
	var destH = rh * mpl;
	
	gc.style.width=destW+"px";
	gc.style.height=destH+"px";
	gc.style['margin-left']=((w / 2) - (destW / 2))+"px";
	
	
	

}else if(scaleMode=="exactFit"){



gc.style.width=window.innerWidth+"px";
gc.style.height=window.innerHeight+"px"
gc.style['margin-left']="0px";;

}


}