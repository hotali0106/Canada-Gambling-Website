
var CANVAS_W=1920;//ширина 
var CANVAS_H=1080;//высота

var canvas;
var stage;
var app = new PIXI.Application(CANVAS_W,CANVAS_H,{antialias:true});
document.body.appendChild(app.view);




var updateScreen;

var CANVAS_FPS=25;//частота кадров

var scaleMode="showAll";// режим маштабирования showAll - с сохранением пропорций, exactFit - без сохранения пропорций
var numFloat=false;// отображать .00 или нет

var isFastCollect=false;
var skipCollect=false;

var slotResource=new Object(null);
var resourceImages=new Array();

var totalSource=0;
var currentSource=0;
var slotSpriteSource=new Object(null);
var isLongRoll=false;
var scattersCount=0;
var totalRollStop=0;

var animationsArr=new Array();
var animationsRate=new Array();

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
var SLOT_EVENT_SHOWWIN="SLOT_EVENT_SHOWWIN";
var SLOT_EVENT_HIDEWIN="SLOT_EVENT_HIDEWIN";
var SLOT_EVENT_WINLINE="WINLINE";
var SLOT_EVENT_WINLINE_WAIT="WINLINE_WAIT";
var SLOT_EVENT_WINSCATTERS="WINSCATTERS";
var SLOT_EVENT_ENDWINLINE="ENDWINLINE";
var SLOT_EVENT_EMPTYSPIN="EMPTYSPIN";

var SLOT_EVENT_STARTADDWIN="STARTADDWIN";
var SLOT_EVENT_ADDWIN="ADDWIN";
var SLOT_EVENT_AFTERADDWIN="AFTERADDWIN";


var SLOT_EVENT_GAMBLEEND="SLOT_EVENT_GAMBLEEND";
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

var SLOT_EVENT_SKIPWIN="SLOT_EVENT_SKIPWIN";


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

var uiCache;
var countersCache;

var symHeight;
var symWidth;

var bonusMode=false;
var autoMode=false;
var soundMode=true;
var fullscreenMode=false;

/**/

function CreatePreoader(){
	

var alph=0;	
/*create loader circle*/

Preloader.innerCircle= new PIXI.Container();	
Preloader.outerCircleArr= [];	
Preloader.innerCircleArr= [];	
Preloader.main=new PIXI.Container();	

Preloader.main.x=app.view.width/2;
Preloader.main.y=app.view.height/2;		

Preloader.outerCircle=PIXI.Sprite.fromImage('/games/JustJewelsDX/source/LOADER/loading.png');
Preloader.outerCircle.transform.pivot.x=230;	
Preloader.outerCircle.transform.pivot.y=230;	
Preloader.outerCircle.rotation=0.28;	

Preloader.main.addChild(Preloader.outerCircle);
    

	
/*inner circle*/
var radius = 130;
var speed = 150; 	
var f = -2.90;
	
for(var i=0; i<24; i++){	
	


Preloader.innerCircleArr[i]=PIXI.Sprite.fromImage('/games/JustJewelsDX/source/LOADER/progress'+i+'.png');

	

	
Preloader.innerCircle.addChild(Preloader.innerCircleArr[i]);	


	
Preloader.innerCircleArr[i].visible=false;
	var s = 15 * Math.PI / 180; //Вычислим угол

		f -= s; // приращение аргумента
		  Preloader.innerCircleArr[i].x =  0 + radius * Math.sin(f) ; 
		  Preloader.innerCircleArr[i].y =   0 + radius * Math.cos(f) ;	
		  Preloader.innerCircleArr[i].anchor.set(0.5,0.5);
	
	}

Preloader.main.addChild(Preloader.innerCircle);

var style = new PIXI.TextStyle({
    fontFamily: 'Arial Bold',
    fontSize: 75,
    fontWeight: 'bold',
    fill: ['#FFFFFF'], // gradient
    stroke: '#FFFFFF',
    strokeThickness: 2,
	align: 'center',	
    dropShadow: false,
    dropShadowColor: '#000000',
    dropShadowBlur: 2,
    dropShadowAngle: 0,
    dropShadowDistance: 1,
    whiteSpace: "normal",
    letterSpacing: 2,
    wordWrapWidth: 440
});	
	
	
	
	
	
Preloader.prc=new PIXI.Text("0%", style);	
Preloader.prc.anchor.set(0.5,0.5);




Preloader.main.addChild(Preloader.prc);
app.stage.addChild(Preloader.main);	
app.ticker.add(UpdateLoader);
/**/	
		
	
	
};


function InitializeGame(){
	

	

	/*
	Настройки canvas
	
	*/
	


app.ticker.stop();	
	
updateScreen=setInterval(function(){
	

	
	app.ticker.update();



},1000/20);
	
	
/*




*/	
	
CreatePreoader();	
	
	/*получение настроек*/
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

if(slotState=="SLOT_STATE_AFTERJACK" && !skipCollect){

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
		
	case 'uiButtonGamble':
	
	
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
		
	case 'gambleSelectRed':
	
	
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
		
	case 'gambleSelectBlack':
	
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
	
	case 'uiButtonRed':
	
	if(slotState==SLOT_STATE_GAMBLE){		
	
	dispatchEvent(new Event(SLOT_EVENT_GAMBLEBLACK));		
	ServerConnect({slotEvent:"slotGamble",gambleChoice:"red"});
		
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
	
	case 'uiButtonBlack':
	
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
		
	case 'uiButtonBetPlus':
	
	slotSettings.BetCnt++;
	if(slotSettings.BetCnt>slotSettings.Bet.length-1){	
	slotSettings.BetCnt=slotSettings.Bet.length-1;	
	}
	slotStateData.betline=slotSettings.Bet[slotSettings.BetCnt];	
	slotStateData.bet=slotStateData.betline*slotStateData.lines;
	
	dispatchEvent(new Event(SLOT_EVENT_BET));	
		
	
		
	break;		
		
	case 'uiButtonBetMinus':
	
	
	if(slotSettings.BetCnt>0){	
	slotSettings.BetCnt--;
	}
	slotStateData.betline=slotSettings.Bet[slotSettings.BetCnt];	
	slotStateData.bet=slotStateData.betline*slotStateData.lines;
	
	dispatchEvent(new Event(SLOT_EVENT_BET));	
		
	
		
	break;	
		
	case 'uiButtonLinesPlus':
	
	
	slotSettings.LineCnt++;	
  	if(slotSettings.LineCnt>slotSettings.gameLine.length-1){
	slotSettings.LineCnt=slotSettings.gameLine.length-1;	
	}
	slotStateData.lines=slotSettings.gameLine[slotSettings.LineCnt];	
	slotStateData.bet=slotStateData.betline*slotStateData.lines;
	
	dispatchEvent(new Event(SLOT_EVENT_LINES));	
		
	break;
		
		case 'uiButtonLinesMinus':
	
		slotSettings.LineCnt--;	
  	if(slotSettings.LineCnt<0){
	slotSettings.LineCnt=0;	
	}
	slotStateData.lines=slotSettings.gameLine[slotSettings.LineCnt];
	slotStateData.bet=slotStateData.betline*slotStateData.lines;
	
	dispatchEvent(new Event(SLOT_EVENT_LINES));	
		
	break;	
		
	
		
	case 'uiButtonInfo':
	
	GameResize();
		
	if(slotSettings.splitScreen){
	
		
	
		
	localStorage.setItem('gameCommand', 'PageInfo_'+slotStateData.betline+'_'+slotStateData.lines+'_'+slotStateData.bet+'_'+RandomInt(0,999999));
	
	dispatchEvent(new Event(SLOT_EVENT_PAGEINFO));
		
	   
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
	
	case 'uiButtonNext':
	
	
			
	dispatchEvent(new Event(SLOT_EVENT_PAGEINFO));		
	
	
	
		
	break;	
		
	case 'uiButtonAuto':
	
	if(autoMode){
	
	autoMode=false;	
	dispatchEvent(new Event(SLOT_EVENT_AUTOSTOP));	
		
	}else{
	
	if(slotStateData.credit<=0 || slotStateData.credit<slotStateData.bet){
	return;	
	}
		
	autoMode=true;	
	dispatchEvent(new Event(SLOT_EVENT_AUTOSTART));		
	var btnEvent=new CustomEvent("ui_btn",{detail:{bname:'uiButtonSpin'}});	
	dispatchEvent(btnEvent);	
		
		
		
	
	}
	
	
		
	break;	
		
		
	case 'uiButtonSpin':
	
		

		
		
	if(slotState==SLOT_STATE_SPIN){
	
	
		slotState=SLOT_STATE_RESULTSPIN;
	dispatchEvent(new Event(SLOT_EVENT_FASTSTOP));
		
    
		
	}else if(slotState== SLOT_STATE_WAITBONUS){
	
	bonusMode=true;	
	slotStateData.scatShow=false;
		dispatchEvent(new Event(SLOT_EVENT_FIRSTSPINBONUS));
		dispatchEvent(new Event(SLOT_EVENT_SPINBONUS));
		
	}else if(slotState==SLOT_STATE_INFO){
		
	slotState=SLOT_STATE_IDLE;	
	dispatchEvent(new Event(SLOT_EVENT_CLOSEINFO));
	gameUI.DisableButtons();
	setTimeout(function(){
			
	if(slotStateData.credit>=slotStateData.bet){
		
	slotStateData.credit=((slotStateData.credit*100)-(slotStateData.bet*100))/100;	
	slotState=SLOT_STATE_SPIN;	
	dispatchEvent(new Event(SLOT_EVENT_STARTSPIN));		
	ServerConnect({slotEvent:"bet",slotBet:slotStateData.betline,slotLines:slotStateData.lines});	
	}else{
	ReBet();	
	}
			
	},500);
		
		
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
	
		
	case 'uiButtonSkip':
	
	
if(skipCollect){
   skipCollect=false;
	

isFastCollect=true;		
if(slotStateData.isJackShow){

 clearTimeout(slotStateData.jt);
 clearTimeout(slotStateData.jth);
	JackAddWin();
	gameMessages.HideJack();
	
   }

dispatchEvent(new Event('COLLECT_SKIP'));	
	return;
   }
	
		

		
		
	if(slotState==SLOT_STATE_SPIN){
	
	
	slotState=SLOT_STATE_RESULTSPIN;
	dispatchEvent(new Event(SLOT_EVENT_FASTSTOP));
		
    
		
	}else if(slotState==SLOT_STATE_WINNING){
	gameUI.DisableButtons();
	slotStateData.totalWin=slotSpinResult.totalWin;	
	dispatchEvent(new Event(SLOT_EVENT_SKIPWIN));
		
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
	
	soundMode=true;	
	dispatchEvent(new Event(SLOT_EVENT_UPDATEADVBUTTON));	
		
	break;	
		
	case 'uiButtonSoundOn':
	
	createjs.Sound.stop();	
		
	soundMode=false;
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
slotSettings.LineCnt=slotSettings.gameLine.length-1;
slotSettings.BetCnt=0;

/*---------*/
		
var tmp_slotSpinResult=JSON.stringify(slotSpinResult);	

localStorage.setItem('slotSpinResult', tmp_slotSpinResult);
	
var tmp_slotSettings=JSON.stringify(slotSettings);	

localStorage.setItem('slotSettings', tmp_slotSettings);	
		
var tmp_slotLanguage=JSON.stringify(slotLanguage);	

localStorage.setItem('slotLanguage', tmp_slotLanguage);			
		
localStorage.setItem('currentGame_name', slotSettings.slotId);
localStorage.setItem('lobbyCommand', 'gameStart_'+slotStateData.betline+'_'+slotStateData.lines+'_'+slotStateData.bet+'_'+RandomInt(0,999999));

/*---------*/		
		
		
numFloat=slotSettings.numFloat;
scaleMode=slotSettings.scaleMode;

LoadSlotSettings();
LoadSounds();

window.onresize=function(ev){

GameResize();

}
GameResize();


		
break;
		
		
	case 'error':		


alert(rObj.serverResponse);	
break;			
		
		
case 'spin':		

slotSpinResult=rObj.serverResponse;
slotStateData.slotSpinResult=rObj.serverResponse;

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

slotSpinResult.winLines=slotStateData.slotSpinResult.winLines;		
slotSpinResult.bonusInfo=slotStateData.slotSpinResult.bonusInfo;		
		
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

	
gameContainer=new PIXI.Container();

gameView=new GameView(gameContainer,slotResource.viewGame);//фон игры
gameReels=new GameReels(gameContainer,slotResource.reelsGame);//барабаны

gameLines=new GameLines(gameContainer,slotResource.linesGame);//линии

/*если включен бонус в конфиге*/		
if(slotSettings.slotBonus){	
	
gameBonus=new GameBonus(gameContainer,slotResource.bonusGame);//бонус	
	
}	
if(slotSettings.slotGamble){
	
if(slotSettings.GambleType==1){
gameGamble=new GameGamble(gameContainer,slotResource.gambleGame);// удвоение
}else{
//gameGamble=new GameGamble5(gameContainer,resourceImages['gambleGame5'],slotResource.gambleGame5);// удвоение
}
	
}	
gameBack=new GameBack(app.stage,slotResource.backGame);//задний фон(menu)
gameRules=new GameRules(gameContainer,slotResource.rulesGame);// инфо	
gameUI=new GameUI(gameContainer,slotResource.uiGame);//интерфейс, кнопки
gameCounters=new GameCounters(gameContainer,slotResource.countersGame);//счётчики

	
gameMessages=new GameMessages(gameContainer,slotResource.messagesGame);// инфо

/*если включено удвоение в конфиге*/	

	
	
	



	
app.stage.addChild(gameContainer);		
	
if(slotSettings.slotViewState=="HideUI"){
	
gameUI._view.visible=false;	
gameBack._view.visible=false;	
var gPos=gameView.GetGamePosition();	


app.view.height=gPos.height;	
app.view.width=gPos.width;	
	

		

CANVAS_W=gPos.width;	
CANVAS_H=gPos.height+2;	
	
	
gameContainer.position.x=-(gPos.x);
gameContainer.position.y+=112;
gameReels.ResetMask();
	
GameResize();	
}
	



	
	
GameResize();		
	
	
slotStateData.credit=slotSettings.Balance;	
slotStateData.lines=slotSettings.gameLine[slotSettings.gameLine.length-1];	

slotStateData.oldWin=0;
slotStateData.betline=slotSettings.Bet[slotSettings.BetCnt];	
slotStateData.bet=slotStateData.betline*slotStateData.lines;	
	
slotState=SLOT_STATE_IDLE;
dispatchEvent(new Event(SLOT_EVENT_START));	


localStorage.setItem('gameCommand', 'OpenInfo_'+slotStateData.betline+'_'+slotStateData.lines+'_'+slotStateData.bet+'_'+RandomInt(0,999999));	

	

	
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


	
	
	if(slotSpinResult.winLines.length>0 || slotSpinResult.bonusInfo.scattersType=="bonus" || slotSpinResult.bonusInfo.scattersType=="win"){
	gameLines.ShowAllWinSym();
	slotState=SLOT_STATE_WINNING;	
		
	if(!bonusMode){	
	gameUI.UpdateButtons();	
	}
		
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

	
addEventListener(SLOT_EVENT_SPINBONUS,function(){
	
if(slotStateData.scatShow){

slotStateData.scatShow=false;	
setTimeout(function(){dispatchEvent(new Event(SLOT_EVENT_STARTBONUS))},500);
}else{
	
BonusSpin();	
}
	

});
	
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
	


resourceImages=null;	
slotResource=null;	
		
window.parent.postMessage({
    'func': 'parentFunc',
    'message': 'focus'
}, "*");	
	
}



function UpdateInfoScreen(){

var tmp_slotSpinResult=JSON.stringify(slotSpinResult);	

localStorage.setItem('slotSpinResult', tmp_slotSpinResult);
	
var tmp_slotSettings=JSON.stringify(slotSettings);	

localStorage.setItem('slotSettings', tmp_slotSettings);	
	
localStorage.setItem('gameCommand', 'ChangeBet_'+slotStateData.betline+'_'+slotStateData.lines+'_'+slotStateData.bet+'_'+RandomInt(0,999999));
	
}

window.onunload=function(){
	
localStorage.setItem('closed', 'true_'+RandomInt(0,999999) );		
	
};

if(window.SLOT_EVENT_EXTRABET !== void 0){
localStorage.setItem('extraBet', extraBet);		
addEventListener(SLOT_EVENT_EXTRABET,UpdateInfoScreen);
}

addEventListener(SLOT_EVENT_RESULTSPIN,UpdateInfoScreen);
addEventListener(SLOT_EVENT_LINES,UpdateInfoScreen);
addEventListener(SLOT_EVENT_BET,UpdateInfoScreen);