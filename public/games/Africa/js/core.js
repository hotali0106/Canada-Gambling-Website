
var canvas;
var stage;
/*
ширина высота используется для маштабирования

*/
var CANVAS_W=750;// ширина - Novomatic 
var CANVAS_H=630;//высота

var CANVAS_FPS=35;//частота кадров

var scaleMode="showAll";// режим маштабирования showAll - с сохранением пропорций, exactFit - без сохранения пропорций
var numFloat=false;// отображать .00 или нет

var isFastCollect=false;
var isCollect=false;

var slotResource=new Object(null);
var resourceImages=new Array();

var totalSource=0;
var currentSource=0;
var slotSpriteSource=new Object(null);
var isLongRoll=false;
var scattersCount=0;
var totalRollStop=0;
/*

"Константы" состояния  слота

*/

var SLOT_STATE_IDLE="IDLE";
var SLOT_STATE_LOAD="LOAD";
var SLOT_STATE_SPIN="SPIN";
var SLOT_STATE_RESULTSPIN="SPINRESULT";
var SLOT_STATE_WINNING="WINNING";
var SLOT_STATE_AFTERWIN="AFTERWIN";
var SLOT_STATE_GAMBLE="GAMBLE";
var SLOT_STATE_INFO="INFO";
var SLOT_STATE_WAITBONUS="WAITBONUS";



/*

"Константы" события генерируемые для разных состояний слота

*/

var SLOT_EVENT_START="START_SLOT";
var SLOT_EVENT_UPDATE="UPDATE_SLOT";
var SLOT_EVENT_BET="BET";
var SLOT_EVENT_LINES="LINES";
var SLOT_EVENT_OPENINFO="INFO_OPEN";
var SLOT_EVENT_CLOSEINFO="CLOSE_INFO";
var SLOT_EVENT_PAGEINFO="PAGE_INFO";
var SLOT_EVENT_STARTSPIN="START_SPIN";
var SLOT_EVENT_RESULTSPIN="RESULT_SPIN";
var SLOT_EVENT_AFTERSPIN="AFTER_SPIN";
var SLOT_EVENT_WINLINENEXT="WINLINENEXT";
var SLOT_EVENT_WINLINE="WINLINE";
var SLOT_EVENT_WINLINE_WAIT="WINLINE_WAIT";
var SLOT_EVENT_WINSCATTERS="WINSCATTERS";
var SLOT_EVENT_ENDWINLINE="ENDWINLINE";
var SLOT_EVENT_EMPTYSPIN="EMPTYSPIN";

var SLOT_EVENT_STARTADDWIN="STARTADDWIN";
var SLOT_EVENT_ADDWIN="ADDWIN";
var SLOT_EVENT_AFTERADDWIN="AFTERADDWIN";


var SLOT_EVENT_GAMBLESTART="GAMBLESTART";
var SLOT_EVENT_GAMBLERED="GAMBLERED";
var SLOT_EVENT_GAMBLESLIDE="GAMBLESLIDE";
var SLOT_EVENT_GAMBLEBLACK="GAMBLEBLACK";
var SLOT_EVENT_GAMBLERESULT="GAMBLERESULT";
var SLOT_EVENT_GAMBLERESET="GAMBLERESET";
var SLOT_EVENT_GAMBLELOSE="GAMBLELOSE";
var SLOT_EVENT_GAMBLECHOICE="GAMBLECHOICE";
var SLOT_EVENT_GAMBLEDEALER="GAMBLEDEALER";
var SLOT_EVENT_GAMBLEWIN="SLOT_EVENT_FIRSTSPINBONUS";

var SLOT_EVENT_STARTBONUS="STARTBONUS";
var SLOT_EVENT_SPINBONUS="SPINBONUS";

var SLOT_EVENT_ADVANCEDSPINBONUS="ADVANCEDSPINBONUS";
var SLOT_EVENT_STARTADVANCEDSPINBONUS="STARTADVANCEDSPINBONUS";
var SLOT_EVENT_STOPADVANCEDSPINBONUS="STOPADVANCEDSPINBONUS";

var SLOT_EVENT_FIRSTSPINBONUS="FIRSTSPINBONUS";
var SLOT_EVENT_ENDBONUS="ENDBONUS";

var SLOT_EVENT_JACKPOTSHOW="JACKPOTSHOW";
var SLOT_EVENT_JACKPOTHIDE="JACKPOTHIDE";
var SLOT_EVENT_JACKPOTADD="JACKPOTADD";

var SLOT_EVENT_AUTOSTOP="AUTOSTOP";
var SLOT_EVENT_AUTOSTART="AUTOSTART";

var SLOT_EVENT_FASTSTOP="FASTSTOP";
var SLOT_EVENT_LONGSTOP="LONGSTOP";
var SLOT_EVENT_LONGREEL="LONGREEL";

var SLOT_EVENT_UPDATEADVBUTTON="UPDATEADVBUTTON";


/*

Игровые переменные

*/

var gameUI;
var gameMessages;
var gameGamble;
var gameBonus;
var gameBack;
var gameView;
var gameLines;
var gameReels;
var gameContainer;
var slotSpinResult= new Object(null);
var slotSettings= new Object(null);
var slotLanguage= new Object(null);
var slotStateData= new Object(null);
var slotState= new Object(null);

var symHeight;
var symWidth;

var bonusMode=false;
var autoMode=false;
var soundMode=true;
var fullscreenMode=false;

/**/

function InitializeGame(){
	

	
window.onresize=function(ev){

GameResize();	
	
}
GameResize();	
	
	/*
	Настройки canvas
	
	*/
	canvas = document.getElementById("game");
	stage = new createjs.Stage(canvas);
	
	createjs.Touch.enable(stage);
	createjs.Ticker.setFPS(CANVAS_FPS);//частота кадров
	createjs.Ticker.addEventListener("tick", UpdateGame);	
	
	stage.enableMouseOver(15);//частота кадров при обработке событий наведения мыши
	/*----------------*/
	
	
	
ServerConnect({slotEvent:"getSettings"});

}
function ExitGame(){

var qStr=document.location.href.toString().split('?')[1];	

if(qStr==undefined){
   qStr='';
   }
	
var allQPar=qStr.split('&');

var outQPar=[];
	
for(var qp in allQPar){
	
var tmpQ=allQPar[qp].split("=");	
	
outQPar[tmpQ[0]]=tmpQ[1];	
	
}
	
window.parent.postMessage('CloseGame',"*");

if(outQPar['lobby_url']!=undefined){

if(outQPar['lobby_url']=='frame'){

window.parent.postMessage({
    'func': 'parentFunc',
    'message': 'close'
}, "*");

   }else{

	 document.location.href=outQPar['lobby_url'];
   }

}else{

	 document.location.href=slotSettings.slotExitUrl;
}
 
}
/*обработчик действий кнопок*/
function ButtonsController(ev){

if(slotState=="SLOT_STATE_AFTERJACK" && !isCollect){

gameMessages.HideJackWnd();
gameUI.DisableButtons();
dispatchEvent(new Event(SLOT_EVENT_AFTERSPIN));

return;

}
	
switch(ev.detail.bname){

		
	case 'uiButtonExit':
		
		ExitGame();
		
	break;
	
	case 'uiButtonExit2':
		
		ExitGame();
		
	break;		
		
	case 'uiButtonBet':
	
	
	if(slotState==SLOT_STATE_GAMBLE){		
	
	dispatchEvent(new Event(SLOT_EVENT_GAMBLERED));	
		
	ServerConnect({slotEvent:"slotGamble",gambleChoice:"red"});	
		
	}else if(slotState==SLOT_STATE_AFTERWIN){	
	
	dispatchEvent(new Event(SLOT_EVENT_GAMBLESTART));	
	
	slotState=SLOT_STATE_GAMBLE;	
		
	}else{	
		
    slotSettings.BetCnt++;	
	
	if(slotSettings.BetCnt>slotSettings.Bet.length-1){
	slotSettings.BetCnt=0;
		
	}
		
	slotStateData.betline=slotSettings.Bet[slotSettings.BetCnt];	
	slotStateData.bet=slotStateData.betline*slotStateData.lines;
	
	dispatchEvent(new Event(SLOT_EVENT_BET));	
		
		
	}	
		
	break;
		
	case 'uiButtonBetMax':
	
	if(slotState==SLOT_STATE_GAMBLE){		
	
	dispatchEvent(new Event(SLOT_EVENT_GAMBLEBLACK));		
	ServerConnect({slotEvent:"slotGamble",gambleChoice:"black"});
		
	}else if(slotState==SLOT_STATE_AFTERWIN){	
	
	dispatchEvent(new Event(SLOT_EVENT_GAMBLESTART));	
	slotState=SLOT_STATE_GAMBLE;
		
	}else{
	slotSettings.BetCnt=slotSettings.Bet.length-1;	
	slotStateData.betline=slotSettings.Bet[slotSettings.BetCnt];	
	slotStateData.bet=slotStateData.betline*slotStateData.lines;
	
	dispatchEvent(new Event(SLOT_EVENT_BET));	
		
	}	
		
	break;	
		
		
	case 'uiButtonLine1':
	
	slotStateData.lines=1;
  	
	slotStateData.bet=slotStateData.betline*slotStateData.lines;
	
	dispatchEvent(new Event(SLOT_EVENT_LINES));	
		
	break;
		
	case 'uiButtonLine3':
	
		
	if(slotState==SLOT_STATE_GAMBLE){	
		
	var choiceEvent=new CustomEvent(SLOT_EVENT_GAMBLECHOICE,{detail:{choice:2}});	
	
	dispatchEvent(choiceEvent);		
	
		
	}else{	
	slotStateData.lines=3;
  	
	slotStateData.bet=slotStateData.betline*slotStateData.lines;
	
	dispatchEvent(new Event(SLOT_EVENT_LINES));	
	}
		
	break;	
		
	case 'uiButtonLine5':
	
	if(slotState==SLOT_STATE_GAMBLE){	
		
	var choiceEvent=new CustomEvent(SLOT_EVENT_GAMBLECHOICE,{detail:{choice:3}});	
	
	dispatchEvent(choiceEvent);		
	
		
	}else{		
	slotStateData.lines=5;
  	
	slotStateData.bet=slotStateData.betline*slotStateData.lines;
	
	dispatchEvent(new Event(SLOT_EVENT_LINES));	
	}
		
		
	break;	
		
	case 'uiButtonLine7':
	
	if(slotState==SLOT_STATE_GAMBLE){	
		
	var choiceEvent=new CustomEvent(SLOT_EVENT_GAMBLECHOICE,{detail:{choice:4}});	
	
	dispatchEvent(choiceEvent);		
	
		
	}else{		
	slotStateData.lines=7;
  	
	slotStateData.bet=slotStateData.betline*slotStateData.lines;
	
	dispatchEvent(new Event(SLOT_EVENT_LINES));	
	}
		
		
	break;	
		
	case 'uiButtonLine9':
	
	if(slotState==SLOT_STATE_GAMBLE){	
		
	var choiceEvent=new CustomEvent(SLOT_EVENT_GAMBLECHOICE,{detail:{choice:5}});	
	
	dispatchEvent(choiceEvent);		
	
		
	}else{		
		
	slotStateData.lines=9;
  	
	slotStateData.bet=slotStateData.betline*slotStateData.lines;
	
	dispatchEvent(new Event(SLOT_EVENT_LINES));	
	}
		
		
	break;	
		
	case 'uiButtonInfo':
		
	if(slotSettings.splitScreen){
	
		
	if(slotState!=SLOT_STATE_INFO){
		
		
	slotState=SLOT_STATE_INFO;	
	
		
	localStorage.setItem('gameCommand', 'PageInfo_'+slotStateData.betline+'_'+slotStateData.lines+'_'+slotStateData.bet+'_'+RandomInt(0,999999));
	
		
		
	}else{
		
	localStorage.setItem('gameCommand', 'PageInfo_'+slotStateData.betline+'_'+slotStateData.lines+'_'+slotStateData.bet+'_'+RandomInt(0,999999));
		
			
	slotState=SLOT_STATE_IDLE;	
		
		

	}	
		
	   
	return;	
	   }
		
	if(slotState!=SLOT_STATE_INFO){
	slotState=SLOT_STATE_INFO;	
	dispatchEvent(new Event(SLOT_EVENT_OPENINFO));		
	}else{
			
	slotState=SLOT_STATE_IDLE;	
	dispatchEvent(new Event(SLOT_EVENT_CLOSEINFO));	
	}
	
	
		
	break;
		
	case 'uiButtonAuto':

	if(slotState==SLOT_STATE_INFO){

	slotState=SLOT_STATE_IDLE;
	dispatchEvent(new Event(SLOT_EVENT_CLOSEINFO));

	}else{

	if(autoMode){

	autoMode=false;
	dispatchEvent(new Event(SLOT_EVENT_AUTOSTOP));

	}else{

	autoMode=true;
	dispatchEvent(new Event(SLOT_EVENT_AUTOSTART));
	var btnEvent=new CustomEvent("ui_btn",{detail:{bname:'uiButtonSpin'}});
	dispatchEvent(btnEvent);
	}
}
	
	
		
	break;	
		
		
	case 'uiButtonSpin':
	
		
if(isCollect){
  
isCollect=false;	
	
isFastCollect=true;	
	
if(slotStateData.isJackShow){

 clearTimeout(slotStateData.jt);
 clearTimeout(slotStateData.jth);
	JackAddWin();
	gameMessages.HideJack();
	
   }

dispatchEvent(new Event('COLLECT_SKIP'));	
	return;
	
   return;
   }
	
		

		
		
	if(slotState==SLOT_STATE_SPIN){
	
	
		slotState=SLOT_STATE_RESULTSPIN;
	dispatchEvent(new Event(SLOT_EVENT_FASTSTOP));
		
    
		
	}else if(slotState== SLOT_STATE_WAITBONUS){
	
	bonusMode=true;	
	
		dispatchEvent(new Event(SLOT_EVENT_FIRSTSPINBONUS));
		dispatchEvent(new Event(SLOT_EVENT_SPINBONUS));
		
	}else if(slotState==SLOT_STATE_INFO){
		
	slotState=SLOT_STATE_IDLE;	
	dispatchEvent(new Event(SLOT_EVENT_CLOSEINFO));
		
	}else if(slotState==SLOT_STATE_IDLE){
	
	if(slotStateData.credit>=slotStateData.bet){
		
	slotStateData.credit=((slotStateData.credit*100)-(slotStateData.bet*100))/100;	
	slotState=SLOT_STATE_SPIN;	
	dispatchEvent(new Event(SLOT_EVENT_STARTSPIN));		
	ServerConnect({slotEvent:"bet",slotBet:slotStateData.betline,slotLines:slotStateData.lines});	
		
	}else{
	ReBet();	
	}
		
			
			
	}else if(slotState==SLOT_STATE_AFTERWIN || slotState==SLOT_STATE_GAMBLE){
	
    dispatchEvent(new Event(SLOT_EVENT_STARTADDWIN));
	AddWin();	
			
			
	}
	
	
		
	break;			
		
	/*дополнительные кнопки	*/
		
	case 'uiButtonFullOn':
	
	fullscreenMode=true;
		
	dispatchEvent(new Event(SLOT_EVENT_UPDATEADVBUTTON));
	
	SetFullscreen();	
		
	break;	
		
	case 'uiButtonFullOff':
	
	fullscreenMode=false;	
	dispatchEvent(new Event(SLOT_EVENT_UPDATEADVBUTTON));	
	
	ExitFullscreen();	
		
	break;
	
	case 'uiButtonSoundOff':
	createjs.Sound.stop();
		
	soundMode=true;	
		
	if(bonusMode && currentSound['FS']!=undefined){
	currentSound['FS']=PlaySound("FS", {loop:-1});	
	}	
		
	dispatchEvent(new Event(SLOT_EVENT_UPDATEADVBUTTON));	
		
	break;	
		
	case 'uiButtonSoundOn':
	
	createjs.Sound.stop();	
	
	soundMode=false;
		
	if(bonusMode && currentSound['FS']!=undefined){
	currentSound['FS']=PlaySound("FS", {loop:-1});	
	}	
		
	dispatchEvent(new Event(SLOT_EVENT_UPDATEADVBUTTON));	
		
	break;
		
		
}
	
}

/*обработчик ответов сервера*/

function ResponseController(rObj){

switch(rObj.responseEvent){	

case 'getSettings':		

slotSettings=rObj.serverResponse;
slotLanguage=rObj.slotLanguage;		
slotSettings.LineCnt=0;
slotSettings.BetCnt=0;


numFloat=slotSettings.numFloat;
scaleMode=slotSettings.scaleMode;

GameResize();

LoadSlotSettings();
LoadSounds();
	
/*---------*//*
var paths=GetGamePaths(slotSettings.slotId);
	
localStorage.setItem('currentGame_name', slotSettings.slotId);
localStorage.setItem('currentGame', paths['url']);
localStorage.setItem('currentGame_loc', paths['loc']);
localStorage.setItem('currentGame_serv', paths['serv']);
localStorage.setItem('lobbyCommand', 'gameStart_'+slotStateData.betline+'_'+slotStateData.lines+'_'+slotStateData.bet+'_'+RandomInt(0,999999));*/
/*---------*/

if(slotSettings.lastEvent!='NULL'){
slotSettings.lastEvent=JSON.parse(slotSettings.lastEvent);

}				
	
		
		
break;	
		
		
	case 'error':		


alert(rObj.serverResponse);	
break;			
		
		
case 'spin':		

slotSpinResult=rObj.serverResponse;

slotStateData.totalWin=slotSpinResult.totalWin;	
	
if(slotSpinResult.responseType!="freespin"){		
slotStateData.credit=slotSpinResult.Balance;	
}
	
slotSettings.Jackpots=slotSpinResult.Jackpots;		
		
slotStateData.credit_new=slotSpinResult.afterBalance;	
		
dispatchEvent(new Event(SLOT_EVENT_RESULTSPIN));		
		
break;				
	
		
		
case 'gambleResult':		

slotSpinResult=rObj.serverResponse;

slotStateData.totalWin=slotSpinResult.totalWin;	
	
slotStateData.credit_new=slotSpinResult.afterBalance;	
		
dispatchEvent(new Event(SLOT_EVENT_GAMBLERESULT));		
break;	
		
		
case 'gamble5DealerCard':		

slotSpinResult=rObj.serverResponse;


		
dispatchEvent(new Event(SLOT_EVENT_GAMBLEDEALER));		
break;				
		
		
}
		
}


function BonusSpin(){

    bonusMode=true;	
	slotState=SLOT_STATE_SPIN;	
	dispatchEvent(new Event(SLOT_EVENT_STARTSPIN));		
	ServerConnect({slotEvent:"freespin",slotBet:slotStateData.betline,slotLines:slotStateData.lines});	
	
}

/*создание игровых объектов*/

function CreateGame(){

	
gameContainer=new createjs.Container();	//контейнер игры
gameBack=new GameBack(stage,resourceImages['backGame'],slotResource.backGame);//задний фон(menu)
gameUI=new GameUI(stage,resourceImages['uiGame'],slotResource.uiGame);//интерфейс, кнопки
gameView=new GameView(gameContainer,resourceImages['viewGame'],slotResource.viewGame);//фон игры
	

	
gameReels=new GameReels(gameContainer,resourceImages['reelsGame'],slotResource.reelsGame);//барабаны

gameLines=new GameLines(gameContainer,resourceImages['linesGame'],slotResource.linesGame);//линии

/*если включен бонус в конфиге*/		
if(slotSettings.slotBonus){	
	
gameBonus=new GameBonus(gameContainer,resourceImages['bonusGame'],slotResource.bonusGame);//бонус	
	
}		
	
gameCounters=new GameCounters(gameContainer,resourceImages['countersGame'],slotResource.countersGame);//счётчики
gameRules=new GameRules(gameContainer,resourceImages['rulesGame'],slotResource.rulesGame);// инфо
	
gameMessages=new GameMessages(gameContainer,resourceImages['messagesGame'],slotResource.messagesGame);// инфо

/*если включено удвоение в конфиге*/	
if(slotSettings.slotGamble){
	
if(slotSettings.GambleType==1){
gameGamble=new GameGamble(gameContainer,resourceImages['gambleGame'],slotResource.gambleGame);// удвоение
}else{
gameGamble=new GameGamble5(gameContainer,resourceImages['gambleGame5'],slotResource.gambleGame5);// удвоение
}
	
}
	
	
if(slotSettings.slotViewState=="HideUI"){
	
gameUI._view.visible=false;	
gameBack._view.visible=false;	
var gPos=gameView.GetGamePosition();	


	

stage.canvas.height=gPos.height;	
stage.canvas.width=gPos.width;	

CANVAS_W=gPos.width;	
CANVAS_H=gPos.height;	
	
	
gameContainer.x=-(gPos.x);
gameContainer.y=-(gPos.y);
	
GameResize();	
}
	
localStorage.setItem('gameCommand', 'OpenInfo_'+slotStateData.betline+'_'+slotStateData.lines+'_'+slotStateData.bet+'_'+RandomInt(0,999999));	
	
	
	
	
slotStateData.credit=slotSettings.Balance;	
slotStateData.lines=slotSettings.Line[slotSettings.LineCnt];	

slotStateData.betline=slotSettings.Bet[slotSettings.BetCnt];	
slotStateData.bet=slotStateData.betline*slotStateData.lines;	
	
slotState=SLOT_STATE_IDLE;
dispatchEvent(new Event(SLOT_EVENT_START));	

	
/*подписываемся на события*/	
	
addEventListener("ui_btn",ButtonsController);	

addEventListener("reelStop",function(ev){

	
	if(ev.detail.reel==slotSettings.slotReelsConfig.length){
	
		
		if(slotSettings.Jackpots['jackPay']!=undefined){
		
		if(autoMode){
		autoMode=false;
		gameUI.GetObject()['uiButtonAuto'].ChangeLabel('uiButtonAuto');	
		gameUI.GetObject()['uiButtonAuto'].Disable();	
		}
			
		gameUI.UpdateButtons();
		gameMessages.ShowJack();
		setTimeout(function(){

		dispatchEvent(new Event(SLOT_EVENT_JACKPOTSHOW));

		},500);		
		}else{
		dispatchEvent(new Event(SLOT_EVENT_AFTERSPIN));		
		}
		
		
		
	}

});	
	
addEventListener(SLOT_EVENT_AFTERSPIN,function(){

	stage.drawRect=null;	
	
	
	if(slotSpinResult.winLines.length>0 || slotSpinResult.bonusInfo.scattersType=="bonus" || slotSpinResult.bonusInfo.scattersType=="win"){
	gameLines.ShowAllWinSym();
	slotState=SLOT_STATE_WINNING;	
	}else{
		
	if(bonusMode){
	
	if(slotSpinResult.currentFreeGames>=slotSpinResult.totalFreeGames){
	
	setTimeout(function(){dispatchEvent(new Event(SLOT_EVENT_ENDBONUS));},200);	
		
	}else{
		
	setTimeout(function(){dispatchEvent(new Event(SLOT_EVENT_SPINBONUS));},200);	
	
	}
		
		
	}else{
		
	dispatchEvent(new Event(SLOT_EVENT_EMPTYSPIN));	
	slotState=SLOT_STATE_IDLE;	
	gameUI.UpdateButtons();
		
	if(autoMode){
		
	setTimeout(function(){	
	var btnEvent=new CustomEvent("ui_btn",{detail:{bname:'uiButtonSpin'}});	
	dispatchEvent(btnEvent);	
	
	},200);
		
	}
		
		
		
	}	
		
	}
	
	});		

	
addEventListener(SLOT_EVENT_SPINBONUS,function(){BonusSpin();});
	
/*autostart events*/	
	
addEventListener(SLOT_EVENT_ENDWINLINE,function(ev){
if(autoMode){	
	setTimeout(function(){	
	var btnEvent=new CustomEvent("ui_btn",{detail:{bname:'uiButtonSpin'}});	
	dispatchEvent(btnEvent);	
	
	},200);		
	}
});
	
addEventListener(SLOT_EVENT_AFTERADDWIN,function(ev){
if(autoMode){	
	setTimeout(function(){	
	var btnEvent=new CustomEvent("ui_btn",{detail:{bname:'uiButtonSpin'}});	
	dispatchEvent(btnEvent);	
	
	},200);		
	}
});	
	
stage.addChild(gameContainer);	

resourceImages=null;
slotResource=null;

/*------restore game state--------------*/

addEventListener('FS_LOADED',function(){

if(slotSettings.lastEvent!='NULL'){
console.log('FS_LOADED');
gameBack._view.visible=true;
gameUI._view.visible=true;
gameContainer.visible=true;
stage.removeChild(gamePreloader.cc);
delete gamePreloader;

slotSpinResult=slotSettings.lastEvent.serverResponse;

slotStateData.totalWin=slotSpinResult.totalWin;
slotSettings.Jackpots=slotSpinResult.Jackpots;

if(slotSpinResult.bonusWin!=undefined){
slotStateData.bonusWin=slotSpinResult.bonusWin;
}

/*-------------------------------------*/

for(var i=0;i<slotSettings.Bet.length;i++){

if(slotSpinResult.slotBet==slotSettings.Bet[i]){
slotSettings.BetCnt=i;
}

}

for(var i=0;i<slotSettings.gameLine.length;i++){

if(slotSpinResult.slotLines==slotSettings.gameLine[i]){
slotSettings.LineCnt=i;
}

}

slotStateData.lines=slotSettings.gameLine[slotSettings.LineCnt];
slotStateData.betline=slotSettings.Bet[slotSettings.BetCnt];
slotStateData.bet=slotStateData.betline*slotStateData.lines;

slotState=SLOT_STATE_IDLE;
dispatchEvent(new Event(SLOT_EVENT_START));

/*-------------------------------------*/

if(slotSpinResult.totalFreeGames>0 && slotSpinResult.currentFreeGames<slotSpinResult.totalFreeGames){

dispatchEvent(new Event(SLOT_EVENT_STARTBONUS));
createjs.Sound.stop();
bonusMode=true;
slotStateData.scatShow=false;
dispatchEvent(new Event(SLOT_EVENT_FIRSTSPINBONUS));
dispatchEvent(new Event(SLOT_EVENT_SPINBONUS));
}

}

});

/*------restore game state--------------*/

if(slotSettings.lastEvent!='NULL'){

gameBack._view.visible=false;
gameUI._view.visible=false;
gameContainer.visible=false;

/*-------------------------------------*/

}else{

stage.removeChild(gamePreloader.cc);
delete gamePreloader;

}

/*--------------------*/
	
window.parent.postMessage({
    'func': 'parentFunc',
    'message': 'focus'
}, "*");		
	
}



function UpdateGame(){
	
stage.update();	
	
}

function UpdateInfoScreen(){

var tmp_slotSpinResult=JSON.stringify(slotSpinResult);	

localStorage.setItem('slotSpinResult', tmp_slotSpinResult);
	
var tmp_slotSettings=JSON.stringify(slotSettings);	

localStorage.setItem('slotSettings', tmp_slotSettings);	
	
localStorage.setItem('gameCommand', 'ChangeBet_'+slotStateData.betline+'_'+slotStateData.lines+'_'+slotStateData.bet+'_'+RandomInt(0,999999));
	
	
}

setInterval(function(){

localStorage.setItem('ping', RandomInt(0,999999) );	


},500);

if(window.SLOT_EVENT_EXTRABET !== void 0){
localStorage.setItem('extraBet', extraBet);		
addEventListener(SLOT_EVENT_EXTRABET,UpdateInfoScreen);
}
	
	

addEventListener(SLOT_EVENT_RESULTSPIN,UpdateInfoScreen);
addEventListener(SLOT_EVENT_LINES,UpdateInfoScreen);
addEventListener(SLOT_EVENT_BET,UpdateInfoScreen);