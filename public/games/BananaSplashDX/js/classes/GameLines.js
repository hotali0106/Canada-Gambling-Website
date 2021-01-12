
function WinSpriteSymbol(jsonData,resName){


var self=this;
var newSprite;
this.animData=[];	

this._view;
	

this.GetAnimData=function(){
	
return this.animData;
};
	
this.GetSetData=function(){
	
return this.setData;	
};
	

for(var fName in animationsArr[resName]){
	
this.animData.push(PIXI.Texture.fromFrame(fName));

}



return this;


}


	
	
	
function WinSymbol(viewContainer,animData,sName){

this._view=new PIXI.Container();	

var self=this;	

this.newSprite;	
	
this.StartAnim=function(aSet){





this.newSprite = new PIXI.extras.AnimatedSprite(animData);	

this.newSprite.animationSpeed=(animationsRate['lnWinSym_'+sName]/(CANVAS_FPS/100))/100;
	
this.newSprite.gotoAndPlay(0);	
	
self._view.addChild(this.newSprite);
viewContainer.addChild(self._view);
self._view.x=aSet.x;	
self._view.y=aSet.y;	
		
	
};
	
/*
	
	отключить анимацию, и убрать из отображения
	
	*/		
	
this.StopAnim=function(){
	
	
this.newSprite.stop();	
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

function GameLines(viewContainer,setObj){

/*
	
	класс отвечает за линии и анимацию выигрышей.
	
	*/		
	
	
this._view=new PIXI.Container();

var currentWinLine=0;	
var isMainShow=true;	
var isMainScatters=true;	
var self=this;	

var timeoutShow;	
	
var objArr=new Array();	
var libArr=new Array();	
var winArr=new Array();	
var borderArr=new Array();	

		
	
	
winArr=new Array([],[],[],[],[],[]);	
	
for(objId in setObj){	

var cObj=setObj[objId];	


	
if(cObj.type=="bitmap"){	
	
objArr[objId]=new PIXI.Sprite(PIXI.Texture.fromFrame(cObj.res[0]));

this._view.addChild(objArr[objId]);	
	
objArr[objId].x=cObj.x;	
objArr[objId].y=cObj.y;	
	
}else if(cObj.type=="symbol_sprite_lib"){	


libArr[objId]=new WinSpriteSymbol(cObj.config,objId);

	
	

	
}else if(cObj.type=="bitmap_lib"){	
	
	

	
	
libArr[objId]=PIXI.Texture.fromFrame(cObj.res[0]);
	
	
	
}else if(cObj.type=="text"){	


var style = new PIXI.TextStyle({
    fontFamily: cObj.fontText.split("px")[1],
    fontSize: parseInt(cObj.fontText.split("px")[0]),
    fontWeight: 'bold',
    fill: [cObj.colorText], // gradient
    stroke: '#FFFFFF',
    strokeThickness: 0,
	align: cObj.alignText,	
    dropShadow: false,
    dropShadowColor: '#000000',
    dropShadowBlur: 2,
    dropShadowAngle: 0,
    dropShadowDistance: 1,
    wordWrap: false,
    wordWrapWidth: 440
});	
	
	
	
objArr[objId]=new PIXI.Text(cObj.defaultText, style);	




objArr[objId].anchor.set(0.5, 0);	





this._view.addChild(objArr[objId]);	
	
objArr[objId].x=cObj.x;
objArr[objId].y=cObj.y;
	
	

}
	
	

	
	
	
}
	
	
viewContainer.addChild(this._view);	


this.dbg2=function(){
	
return winArr;	
};
	
/*показать анимацию всех выигрышных символов*/	
	
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

var wildCnt=0;
	var otherSymCnt=0;					  
	var cSym2="";					  
						  
	var wildCnt=0;
	var otherSymCnt=0;					  
					  
						  
	for(var ii=1;ii<=5; ii++){
	
	if(slotSpinResult.winLines[i]['winReel'+ii][1]!='none'){
	
	if(slotSpinResult.winLines[i]['winReel'+ii][1]=="P_1"){
	wildCnt++;	
	}
	otherSymCnt++;	
	
	if(slotSpinResult.winLines[i]['winReel'+ii][1]!="P_1" && slotSpinResult.winLines[i]['winReel'+ii][1]!="P_1_WILD"){	
	cSym2=slotSpinResult.winLines[i]['winReel'+ii][1];	
	}
		
	}
		
		
	}
		

						  
	if(wildCnt==otherSymCnt){
	cSym2="P_1";
	}	
	
for(var j=1;j<=5;j++){

var sCount=slotSpinResult.winLines[i].Count;	

var cSym=slotSpinResult.winLines[i]['winReel'+j][1];	
var cSym3=slotSpinResult.winLines[i]['winReel'+j][1];	
var cPos=parseInt(slotSpinResult.winLines[i]['winReel'+j][0]);	


	if(cSym=="none"){
	continue;	
	}
	
	if(winArr[j][cPos]==undefined ){
	
	if(sCount>3 && cSym2=="P_2" && cSym=="P_2"){
    cSym="P_2_LONG";
	}	
	if(sCount>3 && cSym2=="P_3" && cSym=="P_3"){
    cSym="P_3_LONG";
	}		
		
	var cprop=libArr['lnWinSym_'+cSym];	
		
	winArr[j][cPos]=new WinSymbol(this._view,cprop.GetAnimData(),cSym);
		
	winArr[j][cPos].StartAnim({x:rPos[j-1].x,y:rPos[j-1].y+(symHeight*cPos)});	
	   winArr[j][cPos].newSprite.name=j+"|"+cPos;
		
		
	/*----------P_2---------------*/	
	if(sCount>3 && cSym2=="P_2" && cSym3=="P_2"){
	
	
   winArr[j][cPos].newSprite.loop=false;

   winArr[j][cPos].newSprite.onComplete=function(ev){

	
	var cprop2=libArr['lnWinSym_P_2_LONG_LOOP'];	   
	self.SeqWinSym(self._view,cprop2.GetAnimData(),"P_2_LONG_LOOP",parseInt(this.name.split("|")[0]),parseInt(this.name.split("|")[1]),this.parent);   

   }
   
   
	}	
		
	/*----------P_2---------------*/	
		
		
	/*----------P_3---------------*/	
	if(sCount>3 && cSym2=="P_3" && cSym3=="P_3"){
		
   	
   winArr[j][cPos].newSprite.loop=false;

   winArr[j][cPos].newSprite.onComplete=function(ev){

	
	var cprop2=libArr['lnWinSym_P_3_LONG_LOOP'];	   
	self.SeqWinSym(self._view,cprop2.GetAnimData(),"P_3_LONG_LOOP",parseInt(this.name.split("|")[0]),parseInt(this.name.split("|")[1]),this.parent);   

   }
   
   
	}	
		
		
		
	/*----------P_3---------------*/		
		
	/*----------P_4---------------*/	
	if(sCount>3 && cSym2=="P_4" && cSym3=="P_4"){
		
	
   winArr[j][cPos].newSprite.loop=false;

   winArr[j][cPos].newSprite.onComplete=function(ev){

	
	var cprop2=libArr['lnWinSym_P_4_LOOP'];	   
	self.SeqWinSym(self._view,cprop2.GetAnimData(),"P_4_LOOP",parseInt(this.name.split("|")[0]),parseInt(this.name.split("|")[1]),this.parent);   

   }
   
   
	}
		
		
	/*----------P_4---------------*/		
		
	/*----------P_1---------------*/	
	if(sCount<=3 && cSym2=="P_1"){
		
   winArr[j][cPos].newSprite.loop=false;
   winArr[j][cPos].newSprite.onComplete=function(ev){

	
	var cprop2=libArr['lnWinSym_P_1_LOOP'];	   
	self.SeqWinSym(self._view,cprop2.GetAnimData(),"P_1_LOOP",parseInt(this.name.split("|")[0]),parseInt(this.name.split("|")[1]),this.parent);   

   }
   
   
	}	
	/*----------P_1---------------*/		
		
		
	/*----------P_1---------------*/	
	if(sCount>3 && cSym2=="P_1"){
		
   winArr[j][cPos].newSprite.loop=false;
   winArr[j][cPos].newSprite.onComplete=function(ev){

	
	var cprop2=libArr['lnWinSym_P_1_LONG'];	   
	self.SeqWinSym(self._view,cprop2.GetAnimData(),"P_1_LONG",parseInt(this.name.split("|")[0]),parseInt(this.name.split("|")[1]),this.parent);   

   }
   
   
	}	
	/*----------P_1---------------*/			
		
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

this.SeqWinSym=function(p1,p2,p3,jj,jcPos,st){
	
var jrPos=gameReels.GetPositions();		
	
winArr[jj][jcPos].StopAnim();
winArr[jj][jcPos]=new WinSymbol(p1,p2,p3);
winArr[jj][jcPos].StartAnim({x:jrPos[jj-1].x,y:jrPos[jj-1].y+(symHeight*jcPos)});		
	
};
	
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

var cprop=libArr['lnWinSym_'+cSym];	
	
	
	winArr[j][cPos]=new WinSymbol(this._view,cprop.GetAnimData(),cSym);
		
	winArr[j][cPos].StartAnim({x:rPos[j-1].x,y:rPos[j-1].y+(symHeight*cPos)});		
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
	
if(slotSpinResult.bonusInfo.scattersType=="bonus" ){	
slotStateData.scatShow=true;	
	
}
	
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

borderArr[j]=new PIXI.Sprite(libArr['lnBorder'+0]);
	winArr[j][cPos].ResetAnim();	
	self._view.addChild(borderArr[j]);
		
	borderArr[j].x=winArr[j][cPos]._view.x;
	borderArr[j].y=winArr[j][cPos]._view.y;
	
}	

	
if(scCount>=3){
currentSound['SCAT']=PlaySound("SCAT");	
var delay=currentSound['SCAT'].duration;	
}else{
currentSound['SCAT_2']=PlaySound("SCAT_2");	
var delay=currentSound['SCAT_2'].duration;	
}
	
if(isMainScatters){	


	
var winEvent=new CustomEvent(SLOT_EVENT_WINSCATTERS,{detail:{cnt:scCount}});		
dispatchEvent(winEvent);	

}

	
isMainScatters=false;	

clearTimeout(timeoutShow);	
	
timeoutShow=setTimeout(function(){
console.log("sc win slotSpinResult.bonusInfo.scattersType",slotSpinResult.bonusInfo.scattersType);
if(slotSpinResult.bonusInfo.scattersType=="bonus" ){

	
	
self.StopWinLine();	
	
dispatchEvent(new Event(SLOT_EVENT_STARTBONUS));	
	
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
slotStateData.scatShow=false;
},delay);		
	
};
	
/*----------отображение выигрышных линий-------------*/	
this.ShowCurrentWinLine=function(){

self.HideLines();	

if(currentWinLine>slotSpinResult.winLines.length-1){

if(isMainShow){
isMainShow=false;
	
if(slotSpinResult.bonusInfo.scattersType!="bonus" || slotSpinResult.bonusInfo.scattersType!="win"){		

if(slotSpinResult.bonusInfo.scattersType=="bonus"){
autoMode=false;
gameUI.DisableButtons();	
gameUI.GetObject()['uiButtonAuto'].ChangeLabel('uiButtonAuto');	
}else{	
	
slotState=SLOT_STATE_AFTERWIN;	
dispatchEvent(new Event(SLOT_EVENT_ENDWINLINE));	

}
	
	
}
	
	
	
}
currentWinLine=0;	
	
}	
	
var cLine=parseInt(slotSpinResult.winLines[currentWinLine].Line)+1;	
	
	

self._view.addChild(objArr['lnLine'+cLine+'f0']);	
self._view.addChild(objArr['lnLine'+cLine+'p0']);	
self._view.addChild(objArr['lnLine'+cLine+'f1']);	
self._view.addChild(objArr['lnLine'+cLine+'p1']);
self._view.addChild(objArr['lnLine'+cLine+'f2']);	
self._view.addChild(objArr['lnLine'+cLine+'p2']);
self._view.addChild(objArr['lnLine'+cLine+'f3']);	
self._view.addChild(objArr['lnLine'+cLine+'p3']);
self._view.addChild(objArr['lnLine'+cLine+'f4']);	
self._view.addChild(objArr['lnLine'+cLine+'p4']);
self._view.addChild(objArr['lnLine'+cLine+'f5']);	
	
self._view.removeChild(objArr['lnBox'+cLine+'_0']);	
self._view.removeChild(objArr['lnBox'+cLine+'_1']);	
	
self._view.addChild(objArr['lnBox'+cLine+'_0']);	
self._view.addChild(objArr['lnBox'+cLine+'_1']);	
	
for(var i=0;i<=5;i++){
	
if(borderArr[i]!=undefined){	
self._view.removeChild(borderArr[i]);
	
}
	
}
borderArr=new Array();	
	
for(var j=1;j<=5;j++){



	
	var cPos=slotSpinResult.winLines[currentWinLine]['winReel'+j][0];	

	if(cPos!="none"){
	
	
		
	
		
		
	borderArr[j]=new PIXI.Sprite(libArr['lnBorder'+cLine]);
	winArr[j][cPos].ResetAnim();	
	self._view.addChild(borderArr[j]);
		
	borderArr[j].x=winArr[j][cPos]._view.x;	
	borderArr[j].y=winArr[j][cPos]._view.y;	


	
	}
		
	
}
	
	
if(isMainShow){
	
var winEvent=new CustomEvent(SLOT_EVENT_WINLINE,{detail:{winSym:slotSpinResult.winLines[currentWinLine],stepwin:slotSpinResult.winLines[currentWinLine].stepWin,win:slotSpinResult.winLines[currentWinLine].Win,line:slotSpinResult.winLines[currentWinLine].Line,count:slotSpinResult.winLines[currentWinLine].Count}});		
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
if((slotSpinResult.bonusInfo.scattersType=="bonus" || slotSpinResult.bonusInfo.scattersType=="win") && isMainScatters){	


	
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
	
	
winArr=new Array();
	
clearTimeout(timeoutShow);	

	
};			
	
/*убрать все линии*/	
	
	
this.HideLines=function(){
clearTimeout(timeoutShow);
for(var i=1; i<=9; i++){
	
self._view.removeChild(objArr['lnLine'+i+'f0']);	
self._view.removeChild(objArr['lnLine'+i+'p0']);	
self._view.removeChild(objArr['lnLine'+i+'f1']);	
self._view.removeChild(objArr['lnLine'+i+'p1']);
self._view.removeChild(objArr['lnLine'+i+'f2']);	
self._view.removeChild(objArr['lnLine'+i+'p2']);
self._view.removeChild(objArr['lnLine'+i+'f3']);	
self._view.removeChild(objArr['lnLine'+i+'p3']);
self._view.removeChild(objArr['lnLine'+i+'f4']);	
self._view.removeChild(objArr['lnLine'+i+'p4']);
self._view.removeChild(objArr['lnLine'+i+'f5']);	

	
}
	
};
	
	
/*установка линий*/
	
this.SetLines=function(){

for(var i=1; i<=9; i++){
self._view.removeChild(objArr['lnLine'+i+'f0']);	
self._view.removeChild(objArr['lnLine'+i+'p0']);	
self._view.removeChild(objArr['lnLine'+i+'f1']);	
self._view.removeChild(objArr['lnLine'+i+'p1']);
self._view.removeChild(objArr['lnLine'+i+'f2']);	
self._view.removeChild(objArr['lnLine'+i+'p2']);
self._view.removeChild(objArr['lnLine'+i+'f3']);	
self._view.removeChild(objArr['lnLine'+i+'p3']);
self._view.removeChild(objArr['lnLine'+i+'f4']);	
self._view.removeChild(objArr['lnLine'+i+'p4']);
self._view.removeChild(objArr['lnLine'+i+'f5']);	
	
this._view.removeChild(objArr['lnBox'+i+'_0']);	
this._view.removeChild(objArr['lnBox'+i+'_1']);	

	

}
	
for(var i=1; i<=slotStateData.lines; i++){
	
	
		
	
self._view.addChild(objArr['lnLine'+i+'f0']);	
self._view.addChild(objArr['lnLine'+i+'p0']);	
self._view.addChild(objArr['lnLine'+i+'f1']);	
self._view.addChild(objArr['lnLine'+i+'p1']);
self._view.addChild(objArr['lnLine'+i+'f2']);	
self._view.addChild(objArr['lnLine'+i+'p2']);
self._view.addChild(objArr['lnLine'+i+'f3']);	
self._view.addChild(objArr['lnLine'+i+'p3']);
self._view.addChild(objArr['lnLine'+i+'f4']);	
self._view.addChild(objArr['lnLine'+i+'p4']);
self._view.addChild(objArr['lnLine'+i+'f5']);	
	
	
this._view.addChild(objArr['lnBox'+i+'_0']);	
this._view.addChild(objArr['lnBox'+i+'_1']);
	
}	
clearTimeout(timeoutShow);	
//timeoutShow=setTimeout(this.HideLines,1000);	
};	

this.HideLines();	
	

/*подписываемся на события*/	
	
addEventListener("stopBonusSym",function(){self.StopBonusSymAnim();});
	
addEventListener(SLOT_EVENT_START,function(){



for(var i=1; i<=9; i++){

	
self._view.removeChild(objArr['lnBox'+i+'_0']);	
self._view.removeChild(objArr['lnBox'+i+'_1']);	

	

}
	
for(var i=1; i<=slotStateData.lines; i++){
	

	
	
self._view.addChild(objArr['lnBox'+i+'_0']);	
self._view.addChild(objArr['lnBox'+i+'_1']);
	
}	




});
addEventListener(SLOT_EVENT_BET,function(){self.StopWinLine();self.SetLines();});
	
addEventListener(SLOT_EVENT_SKIPWIN,function(){

createjs.Sound.stop();
isMainShow=false;
isMainScatters=false;	


if(slotSpinResult.bonusInfo.scattersType=="bonus"){
clearTimeout(timeoutShow);
	
dispatchEvent(new Event(SLOT_EVENT_STARTBONUS));
}else{
clearTimeout(timeoutShow);
clearInterval(slotStateData.winlineInter);	
slotState=SLOT_STATE_AFTERWIN;	
dispatchEvent(new Event(SLOT_EVENT_ENDWINLINE));		
currentWinLine=slotSpinResult.winLines.length+1;
self.ShowCurrentWinLine();




	
}




});
	
addEventListener(SLOT_EVENT_LINES,function(){self.StopWinLine();self.SetLines();});	
addEventListener(SLOT_EVENT_STARTSPIN,function(){self.StopWinLine();self.HideLines();});	
addEventListener(SLOT_EVENT_RESULTSPIN,function(){
	
	if(slotSettings.slotBonusType==1 && bonusMode){
	
	self.ShowAdvancedRollOpen();
	}
		
});	

addEventListener(SLOT_EVENT_WINLINENEXT,function(ev){timeoutShow=setTimeout(self.ShowCurrentWinLine,ev.detail.delay);});		
addEventListener(SLOT_EVENT_GAMBLESTART,function(){});	
addEventListener(SLOT_EVENT_SPINBONUS,function(){self.StopWinLine();self.HideLines();});	
addEventListener(SLOT_EVENT_ADVANCEDSPINBONUS,function(){
	

	
	self.ShowAdvancedRoll();});	
addEventListener(SLOT_EVENT_ENDBONUS,function(){self.HideLines();});	
	

	
return this;	
	
}