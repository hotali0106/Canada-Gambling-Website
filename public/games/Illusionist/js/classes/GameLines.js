
function WinSpriteSymbol(jsonData,setObj){


var self=this;

this.animData="";	
this.setData=setObj;	
this._view;
	

this.GetAnimData=function(){
	
return this.animData;
};
this.GetSprite=function(){
	

return self.newSprite;		
};	
this.GetSetData=function(){
	
return this.setData;	
};
	
	
var mainSlotSet = new XMLHttpRequest();

mainSlotSet.onreadystatechange = function(ev) {




	if (this.readyState == 4 && this.status == 200) {
	self.animData=JSON.parse(String(ev.currentTarget.responseText));
var tFrames=self.animData.frames.length;
var frm=((CANVAS_FPS/100)/(CANVAS_FPS/self.animData.framerate))*2;

self.animData.animations={anim:[0,tFrames-1,"anim",frm]};	
var spriteSheet = new createjs.SpriteSheet(self.animData);
self.newSprite = new createjs.Sprite(spriteSheet, "");	

		
		
	}
	
};
mainSlotSet.open("GET", jsonData, true);
mainSlotSet.send();	

	

return this;


}


	
	
	
function WinSymbol(viewContainer,animData,sName,sSprite){

this._view=new createjs.Container();	

var self=this;	
	
this.StartAnim=function(aSet){



;	

var newSprite = sSprite.clone();	

	
	
newSprite.gotoAndPlay("anim");	
	
self._view.addChild(newSprite);
viewContainer.addChild(self._view);
self._view.x=aSet.x;	
self._view.y=aSet.y;	
		
	
};
	
/*
	
	отключить анимацию, и убрать из отображения
	
	*/		
	
this.StopAnim=function(){
	
	
	
viewContainer.removeChild(self._view);

	
};	
	
	
/*
	
	поднимаем символ наверх, что бы был поверх рамки линии, при отображении выигрышной линии
	
	*/		
	
this.ResetAnim=function(){
	
	
	
viewContainer.removeChild(self._view);
viewContainer.addChild(self._view);
	
	
};	
	
	return this;
	
	
}

	
function WinSymbol2(viewContainer,animData,sName,advAnim){

this._view=new createjs.Container();	
var aIntr;
var self=this;	
	
this.StartAnim=function(aSet,tFrames){


var frm=((CANVAS_FPS/100)/(CANVAS_FPS/animData.framerate))*2;

animData.animations={anim:[0,tFrames,"anim",frm]};	

	
var spriteSheet = new createjs.SpriteSheet(animData);
var newSprite = new createjs.Sprite(spriteSheet, "");	

	
	
newSprite.gotoAndPlay("anim");	
	
self._view.addChild(newSprite);
viewContainer.addChild(self._view);
self._view.x=aSet.x;	
self._view.y=aSet.y;	
		
	
};
	
	
this.StartAnimDelay=function(aSet,tFrames,sFrame,ic){


var frm=((CANVAS_FPS/100)/(CANVAS_FPS/animData.framerate))*2;

animData.animations={anim2:[tFrames,tFrames,"anim2",frm],anim:[sFrame,tFrames,"anim2",frm]};	

	
var spriteSheet = new createjs.SpriteSheet(animData);
var newSprite = new createjs.Sprite(spriteSheet, "");	

newSprite.on('animationend',function(){
	
	self.StopAnim();

if(ic>=15){
dispatchEvent(new Event("stopBonusSym"));	
}
	
	
});	
	
newSprite.gotoAndPlay("anim");	
	
	
	
self._view.removeChild(newSprite);
self._view.addChild(newSprite);
viewContainer.addChild(self._view);
self._view.x=aSet.x;	
self._view.y=aSet.y;	
	
//setTimeout(self.StopAnim,endDelay);	
	
};	
	
/*
	
	отключить анимацию, и убрать из отображения
	
	*/		
	
this.StopAnim=function(){
	
	
	
viewContainer.removeChild(self._view);

	
};	
	
	
/*
	
	поднимаем символ наверх, что бы был поверх рамки линии, при отображении выигрышной линии
	
	*/		
	
this.ResetAnim=function(){
	
	
	
viewContainer.removeChild(self._view);
viewContainer.addChild(self._view);
	
	
};	
	
	return this;
	
	
}

/////////////Lines class////////////////////

function GameLines(viewContainer,imgSource,setObj){

/*
	
	класс отвечает за линии и анимацию выигрышей.
	
	*/		
	
	
this._view=new createjs.Container();

var currentWinLine=0;	
var isMainShow=true;	
var isMainScatters=true;	
var self=this;	

var doubleSym;	
	
var timeoutShow;	
	
var objArr=new Array();	
var libArr=new Array();	
var winArr=new Array();	
var borderArr=new Array();	

var animData=slotSpriteSource.linesGame.config;
animData.images=[slotSpriteSource.linesGame.sprite];	
var spriteSheet = new createjs.SpriteSheet(animData);
var mainSprite = new createjs.Sprite(spriteSheet, "");		
	
	
winArr=new Array([],[],[],[],[],[]);	
	
for(objId in setObj){	

var cObj=setObj[objId];	


	
if(cObj.type=="bitmap"){	
	
objArr[objId]=mainSprite.clone();
	objArr[objId].gotoAndStop(""+cObj.res[0]);
this._view.addChild(objArr[objId]);	
	
objArr[objId].set({x:cObj.x,y:cObj.y});	
	
}else if(cObj.type=="symbol_sprite_lib"){	


libArr[objId]=new WinSpriteSymbol(cObj.config,cObj);

	
	

	
}else if(cObj.type=="symbol_anim_lib"){	


libArr[objId]=[this._view,imgSource,cObj,objId];

	
	

	
}else if(cObj.type=="bitmap_lib"){	
	
	

	
	
libArr[objId]=mainSprite.clone();
	libArr[objId].gotoAndStop(""+cObj.res[0]);	
	
	
	
}else if(cObj.type=="text"){	

objArr[objId]=new createjs.Text(cObj.defaultText, cObj.fontText, cObj.colorText)	

objArr[objId].textAlign=cObj.alignText;

this._view.addChild(objArr[objId]);	
	
objArr[objId].set({x:cObj.x+17,y:cObj.y+9});	

}else if(cObj.type=="text_g"){	

objArr[objId]=new createjs.Text(cObj.defaultText, cObj.fontText, "#FF0000");

objArr[objId].textAlign=cObj.alignText;

this._view.addChild(objArr[objId]);	
	
objArr[objId].set({x:cObj.x,y:cObj.y,gradient:true});	
objArr[objId].shadow=new createjs.Shadow("#FFFF00", 0, 0, 4);

}
	
	

	
	
	
}
	
	
viewContainer.addChild(this._view);	



	
/*показать анимацию всех выигрышных символов*/	
	
	
	
this.ChangeScatterByReel=function(r,sym){

	
if(slotSettings.slotMultiScatter && sym=="SCAT"){

if(r==1){
	
sym="SCAT_1";

	if(bonusMode){
	sym="SCAT_1_1";	
	}
	
}else if(r==3){
	
sym="SCAT_2";

	if(bonusMode){
	sym="SCAT_2_2";	
	}
	
}else if(r==5){
	
sym="SCAT_3";

	if(bonusMode){
	sym="SCAT_3_3";	
	}
	
}
	
}	

return sym;	
	
};	
	
	
this.ShowAllWinSym=function(){

if(slotSettings.Jackpots['jackType']!=undefined && slotSettings.Jackpots['jackType']!='standartType'){	
gameLines.HideJackSym();
slotSettings.Jackpots['jackType']=undefined;
}
	
isMainScatters=true;
isMainShow=true;	
	
var rPos=gameReels.GetPositions();	
	
winArr=new Array([],[],[],[],[],[]);	
	
currentWinLine=0;	
	
for(var i=0; i<slotSpinResult.winLines.length;i++){

for(var j=1;j<=5;j++){

	
	
var cSym=slotSpinResult.winLines[i]['winReel'+j][1];	
var cPos=parseInt(slotSpinResult.winLines[i]['winReel'+j][0]);	

	
	
	if(cSym=="none"){
	continue;	
	}
	
	if(winArr[j][cPos]==undefined ){
	
	cSym=self.ChangeScatterByReel(j,cSym);	
		
	var cprop=libArr['lnWinSym_'+cSym];	
	console.log(cprop,cSym);
	winArr[j][cPos]=new WinSymbol(this._view,cprop.GetAnimData(),cSym,cprop.GetSprite());
		
	winArr[j][cPos].StartAnim({x:rPos[j-1].x,y:rPos[j-1].y+(symHeight*cPos)});	

	}
		
	
}
	
}

clearTimeout(timeoutShow);	



	
if(slotSpinResult.bonusInfo.scattersType=="bonus" || slotSpinResult.bonusInfo.scattersType=="win"){

	self.ShowScattersAnim();
	
}else{
	
timeoutShow=setTimeout(self.ShowCurrentWinLine,200);	
	
}
	
	
	
};	
	
/*показать анимацию всех выигрышных символов*/	
	
this.ShowAdvancedRoll=function(){
winArr=new Array([],[],[],[],[],[]);
	
var rCount=0;	
var rPos=gameReels.GetPositions();	
	
	
	
for(var i=0; i<3;i++){

for(var j=1;j<=5;j++){

var cSym="FS";	
var cPos=i;	

	
	
	
	
		
	var cprop=libArr['lnWinSym_'+cSym];	
		
	winArr[j][cPos]=new WinSymbol2(this._view,cprop.GetAnimData(),cSym);
	
	winArr[j][cPos].StartAnim({x:rPos[j-1].x,y:rPos[j-1].y+(symHeight*cPos)},cprop.GetSetData().advanced_set[0][cprop.GetSetData().advanced_set[0].length-1]);	

	
		
	
}
	
}


	
};
	
this.ShowAdvancedRollOpen=function(){

var rollIntr;	
	
var jc=1;
var ic=-1;	
	

var totalSym=0;	
var rCount=0;	
var rPos=gameReels.GetPositions();		
	
rollIntr=setInterval(function(){	

	
	
ic++;

var cSym="FS";	
var cPos=ic;		
var cprop=libArr['lnWinSym_'+cSym];		
winArr[jc][cPos].StopAnim();	
winArr[jc][cPos]=new WinSymbol2(self._view,cprop.GetAnimData(),cSym);
	
var sFrame=cprop.GetSetData().advanced_set[1][0];	
var tFrame=cprop.GetSetData().advanced_set[1][1];	
totalSym++;	
winArr[jc][ic].StartAnimDelay({x:rPos[jc-1].x,y:rPos[jc-1].y+(symHeight*cPos)},tFrame,sFrame,totalSym);		
	
if(ic>=2){
		
	
ic=-1;
jc++;	
	

	
}
	
if(jc>=6){
clearInterval(rollIntr);	
	
}
	
},200);		
	
};
	
this.StopBonusSymAnim=function(){
	
self.StopWinLine();	
dispatchEvent(new Event(SLOT_EVENT_AFTERSPIN));		
	
};

/*----------отображение бонусных символов-------------*/
	
this.ShowScattersAnim=function(){

var rPos=gameReels.GetPositions();		
	
for(var j=1;j<=5;j++){

if(slotSpinResult.bonusInfo['winReel'+j]==undefined){
continue;	
}
	
var cSym=slotSpinResult.bonusInfo['winReel'+j][1];
var cPos=parseInt(slotSpinResult.bonusInfo['winReel'+j][0]);	

cSym=self.ChangeScatterByReel(j,cSym);		
	
	
var cprop=libArr['lnWinSym_'+cSym];	

if(winArr[j][cPos]==undefined){	
	
if(slotSettings.slotBonusReelsFixed.countFixedReels>0){

if(winArr[j][0]==undefined){		
	
winArr[j][0]=new WinSymbol(this._view,cprop.GetAnimData(),cSym,cprop.GetSprite());
winArr[j][0].StartAnim({x:rPos[j-1].x,y:rPos[j-1].y+(symHeight*0)});		
	
}	

if(winArr[j][1]==undefined){		
	
winArr[j][1]=new WinSymbol(this._view,cprop.GetAnimData(),cSym,cprop.GetSprite());
winArr[j][1].StartAnim({x:rPos[j-1].x,y:rPos[j-1].y+(symHeight*1)});

}	

if(winArr[j][2]==undefined){		
	
winArr[j][2]=new WinSymbol(this._view,cprop.GetAnimData(),cSym,cprop.GetSprite());
winArr[j][2].StartAnim({x:rPos[j-1].x,y:rPos[j-1].y+(symHeight*2)});	
	
}	
	
}else{
	
	
	winArr[j][cPos]=new WinSymbol(this._view,cprop.GetAnimData(),cSym,cprop.GetSprite());
		
	winArr[j][cPos].StartAnim({x:rPos[j-1].x,y:rPos[j-1].y+(symHeight*cPos)});		
	
}
	
}
	
}
	
if(slotSpinResult.winLines.length<=0){

isMainShow=false;
this.ShowScattersWin();	


	
}else{
	
	
timeoutShow=setTimeout(self.ShowCurrentWinLine,200);	

}

}
/*----------отображение выигрыша по бонусным символам-------------*/
	
this.ShowScattersWin=function(){

var rPos=gameReels.GetPositions();		
	
self.HideLines();
	
for(var i=0;i<=5;i++){
	
if(borderArr[i]!=undefined){	
self._view.removeChild(borderArr[i]);
	
}
	
}
borderArr=new Array();		
	
var scCount=0;	
	
for(var j=1;j<=5;j++){

if(slotSpinResult.bonusInfo['winReel'+j]==undefined){
continue;	
}

scCount++;	
	
var cSym=slotSpinResult.bonusInfo['winReel'+j][1];
var cPos=parseInt(slotSpinResult.bonusInfo['winReel'+j][0]);	

borderArr[j]=libArr['lnBorder'+8].clone();
	winArr[j][cPos].ResetAnim();	
	//self._view.addChild(borderArr[j]);
		
	borderArr[j].set({x:winArr[j][cPos]._view.x,y:winArr[j][cPos]._view.y,scaleX:1.01,scaleY:1.004});	
		
	
}	

if(isMainScatters){	
	
var winEvent=new CustomEvent(SLOT_EVENT_WINSCATTERS,{detail:{cnt:scCount}});		
dispatchEvent(winEvent);	

}
	
isMainScatters=false;	

clearTimeout(timeoutShow);	
	
timeoutShow=setTimeout(function(){

if(slotSpinResult.bonusInfo.scattersType=="bonus" && slotSettings.slotBonus){

self.StopWinLine();	
	
dispatchEvent(new Event(SLOT_EVENT_STARTBONUS));	
	
}else{

if(slotSpinResult.freeMultiplier!=undefined){

self.ShowMultiplier();	
return;	
}else{	
	
	
if(slotSpinResult.winLines.length>0){	
slotState=SLOT_STATE_AFTERWIN;	
dispatchEvent(new Event(SLOT_EVENT_ENDWINLINE));	
timeoutShow=setTimeout(self.ShowCurrentWinLine,1000);	
}else{

slotState=SLOT_STATE_AFTERWIN;	
dispatchEvent(new Event(SLOT_EVENT_ENDWINLINE));	
	
}
	
	
}	
	
	
}

},2000);		
	
};
	
this.ShowMultiplier=function(){

clearTimeout(timeoutShow);	
		
var rPos=gameReels.GetPositions();		
	
var delay=0;	
	
self.StopWinLine();
self.HideLines();
	
winArr=new Array([],[],[],[],[],[]);	
	
objArr['counterMpl'].text=slotSpinResult.freeMultiplier[2];		
	
if(slotSpinResult.freeMultiplier[1]>=0){
	
dispatchEvent(new Event(SLOT_EVENT_SHOWINMPLANIM));	
	
var xSym=slotSpinResult.freeMultiplier[0];
	
	
var randAnim=new Array(slotSpinResult.freeMultiplier[0]+"_1",slotSpinResult.freeMultiplier[0]+"_2",slotSpinResult.freeMultiplier[0]+"_3",slotSpinResult.freeMultiplier[0]+"_4",slotSpinResult.freeMultiplier[0]+"_5");	

var cprop=libArr['lnWinSym_'+randAnim[RandomInt(0,randAnim.length-1)]];	


	
	winArr[3][slotSpinResult.freeMultiplier[1]]=new WinSymbol(this._view,cprop.GetAnimData(),slotSpinResult.freeMultiplier[1],cprop.GetSprite());
		
	winArr[3][slotSpinResult.freeMultiplier[1]].StartAnim({x:rPos[3-1].x,y:rPos[3-1].y+(symHeight*slotSpinResult.freeMultiplier[1])});			
	
delay=3000;	

objArr['counterMpl'].set({x:rPos[3-1].x+(symHeight/2),y:rPos[3-1].y+(symHeight*slotSpinResult.freeMultiplier[1])+50});
	
self._view.removeChild(objArr['counterMpl']);	
self._view.addChild(objArr['counterMpl']);			
	
objArr['counterMpl'].visible=true;
objArr['counterMpl'].alpha=0;
createjs.Tween.get(objArr['counterMpl']).to({scaleX:1.4,scaleY:1.4,alpha:1.0}, 800).wait(1200).to({scaleX:1.0,scaleY:1.0,alpha:0.0}, 800);		
	
	
}else{
	


objArr['counterMpl'].x=420;	
objArr['counterMpl'].y=30;	
	

	
}
	

	
	
setTimeout(function(){	
	
	


	

	

if(slotSpinResult.freeMultiplier[1]<0){
objArr['counterMpl'].visible=true;		
objArr['counterMpl'].alpha=1;			
createjs.Tween.get(objArr['counterMpl']).to({x:350,y:480,visible:false}, 1000);	
}
	
	
	
/*-----------------*/	
	
setTimeout(function(){

slotStateData.totalWin=slotSpinResult.freeMultiplier[3];	
	
var winEvent=new CustomEvent(SLOT_EVENT_SHOWINMPL,{detail:{stepwin:slotSpinResult.freeMultiplier[3]}});		
dispatchEvent(winEvent);	
	

},1000);
	
setTimeout(function(){

slotState=SLOT_STATE_AFTERWIN;	
dispatchEvent(new Event(SLOT_EVENT_ENDWINLINE));
	

},1500);
	
	
/*----------------------------*/	
	
	
	
	
	
},delay);
	


	
};
		
this.ShowMultiplierSym=function(){


		
var rPos=gameReels.GetPositions();		
	
var delay=0;	
	

	
winArr=new Array([],[],[],[],[],[]);	
	
	
	
var cprop=libArr['lnWinSym_'+slotSpinResult.freeMultiplierStatic[0]];	

	
	doubleSym=new WinSymbol(this._view,cprop.GetAnimData(),slotSpinResult.freeMultiplierStatic[1],cprop.GetSprite());
		
	doubleSym.StartAnim({x:rPos[3-1].x,y:rPos[3-1].y+(symHeight*slotSpinResult.freeMultiplierStatic[1])});			
	


	
};
	
this.RemoveMultiplierSym=function(){



	if(doubleSym!=undefined){
	

		
	doubleSym.StopAnim();			
	
	}

	
};	
			
	
/*----------отображение выигрышных линий-------------*/	
this.ShowCurrentWinLine=function(){

self.HideLines();	

if(currentWinLine>slotSpinResult.winLines.length-1){

if(isMainShow){
isMainShow=false;
	
if(slotSpinResult.bonusInfo.scattersType!="bonus" && slotSpinResult.bonusInfo.scattersType!="win"){		
	
	
if(slotSpinResult.freeMultiplier!=undefined){

self.ShowMultiplier();	
return;	
}else{
	
slotState=SLOT_STATE_AFTERWIN;	
dispatchEvent(new Event(SLOT_EVENT_ENDWINLINE));	
	
}
	
}
	
}
currentWinLine=0;	
	
}	
	
var cLine=parseInt(slotSpinResult.winLines[currentWinLine].Line)+1;	
	
	
self._view.addChild(objArr['lnLine'+cLine]);	
	
for(var i=0;i<=5;i++){
	
if(borderArr[i]!=undefined){	
self._view.removeChild(borderArr[i]);
	
}
	
}
borderArr=new Array();	
	
for(var j=1;j<=5;j++){



	
	var cPos=slotSpinResult.winLines[currentWinLine]['winReel'+j][0];	

	if(cPos!="none"){
	
	
		
	
		
		
	borderArr[j]=libArr['lnBorder'+cLine].clone();
	winArr[j][cPos].ResetAnim();	
	self._view.addChild(borderArr[j]);
		
	borderArr[j].set({x:winArr[j][cPos]._view.x,y:winArr[j][cPos]._view.y,scaleX:1.01,scaleY:1.004});	


	
	}
		
	
}
	
	
if(isMainShow){
	
var winEvent=new CustomEvent(SLOT_EVENT_WINLINE,{detail:{stepwin:slotSpinResult.winLines[currentWinLine].stepWin,win:slotSpinResult.winLines[currentWinLine].Win,line:slotSpinResult.winLines[currentWinLine].Line,count:slotSpinResult.winLines[currentWinLine].Count}});		
dispatchEvent(winEvent);	

	
}else{

var winEvent=new CustomEvent(SLOT_EVENT_WINLINE_WAIT,{detail:{stepwin:slotSpinResult.winLines[currentWinLine].stepWin,win:slotSpinResult.winLines[currentWinLine].Win,line:slotSpinResult.winLines[currentWinLine].Line}});		
dispatchEvent(winEvent);	
	
}
	
currentWinLine++;	
	
	
	
	

	
clearTimeout(timeoutShow);	
	
if(isMainShow){
	

	
	
}else{

/////////	
if(slotSpinResult.bonusInfo.scattersType=="bonus" || slotSpinResult.bonusInfo.scattersType=="win"){	

self.ShowScattersWin();	
	
}else{
	
	timeoutShow=setTimeout(self.ShowCurrentWinLine,1000);	
}
//////////	
	
	
}
	
};		
	
	
/*

убираем выигрышную анимация и линии

*/	
	
this.StopWinLine=function(){

if(currentSound['FS']!=undefined && bonusMode && soundMode){
	currentSound['FS'].volume=1;	
	}			
	
self.HideLines();	
clearTimeout(timeoutShow);

for(var i=0;i<=5;i++){
	
if(borderArr[i]!=undefined){	
self._view.removeChild(borderArr[i]);
	
}
	
}
borderArr=new Array();	
	
for(var j=1;j<=5;j++){


for(var i=0;i<=2;i++){
	
	var cPos=i;	

	if(winArr[j]!=undefined){
	
	if(winArr[j][i]!=undefined){
	
	
	winArr[j][i].StopAnim();	
	
	
	}
		
	}
}	
	
}
	
	
winArr=new Array([],[],[],[],[],[]);
	
clearTimeout(timeoutShow);	

	
};			
	
/*убрать все линии*/	
	
	
this.HideLines=function(){
clearTimeout(timeoutShow);
for(var i=1; i<=9; i++){
self._view.removeChild(objArr['lnLine'+i]);	
}
	
};
	
	
/*установка линий*/
	
this.SetLines=function(){

for(var i=1; i<=9; i++){
this._view.removeChild(objArr['lnLine'+i]);	
	
this._view.removeChild(objArr['lnBox'+i+'_0']);	
this._view.removeChild(objArr['lnBox'+i+'_1']);	
	
this._view.removeChild(objArr['lnBoxText'+i+'_0']);	
this._view.removeChild(objArr['lnBoxText'+i+'_1']);	
	

}
	
for(var i=1; i<=slotStateData.lines; i++){
	
	
this._view.addChild(objArr['lnBox'+i+'_0']);	
this._view.addChild(objArr['lnBox'+i+'_1']);		
	
this._view.addChild(objArr['lnLine'+i]);
	
	
this._view.addChild(objArr['lnBoxText'+i+'_0']);	
this._view.addChild(objArr['lnBoxText'+i+'_1']);		
	
objArr['lnBoxText'+i+'_0'].text=NumFormat(slotStateData.betline);
objArr['lnBoxText'+i+'_1'].text=NumFormat(slotStateData.betline);
	
}	
clearTimeout(timeoutShow);	
timeoutShow=setTimeout(this.HideLines,1000);	
};	

this.HideLines();	
	

/*подписываемся на события*/	
	
addEventListener("stopBonusSym",function(){self.StopBonusSymAnim();});
	
addEventListener(SLOT_EVENT_START,function(){self.SetLines();});
addEventListener(SLOT_EVENT_BET,function(){self.SetLines();});
addEventListener(SLOT_EVENT_LINES,function(){self.SetLines();});	
addEventListener(SLOT_EVENT_STARTSPIN,function(){self.HideLines();});	
addEventListener(SLOT_EVENT_RESULTSPIN,function(){
	
	if(slotSettings.slotBonusType==1 && bonusMode){
	
	self.ShowAdvancedRollOpen();
	}
		
});	
addEventListener(SLOT_EVENT_STARTADDWIN,function(){
	self.StopWinLine();

});	
addEventListener(SLOT_EVENT_WINLINENEXT,function(ev){timeoutShow=setTimeout(self.ShowCurrentWinLine,ev.detail.delay);});		
addEventListener(SLOT_EVENT_GAMBLESTART,function(){self.StopWinLine();});	
addEventListener(SLOT_EVENT_SPINBONUS,function(){self.StopWinLine();self.HideLines();});	
addEventListener(SLOT_EVENT_ADVANCEDSPINBONUS,function(){
	

	
	self.ShowAdvancedRoll();});	
addEventListener(SLOT_EVENT_ENDBONUS,function(){self.StopWinLine();self.HideLines();});	
	

	
return this;	
	
}