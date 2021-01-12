
	
function AnimSpriteSymbol(viewContainer,animData){

this._view=new PIXI.Container();	

var self=this;	
	
this.StartAnim=function(aSet,frate){





self.newSprite = new PIXI.extras.AnimatedSprite(animData);	

self.newSprite.animationSpeed=(frate/(CANVAS_FPS/100))/100;
	
self.newSprite.play();	
	
self._view.addChild(self.newSprite);
viewContainer.addChild(self._view);
self._view.x=aSet.x;	
self._view.y=aSet.y;	
		
	
};
	
/*
	
	отключить анимацию, и убрать из отображения
	
	*/		
	
this.StopAnim=function(){
	

self.newSprite.stop();	
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
	

/////////////UI class////////////////////

function GameBonus(viewContainer,setObj){

this._view=new PIXI.Container();

var self=this;	
var bookContainer=new PIXI.Container();
var objArr=new Array();	
var libArr=new Array();	
var setObjects=new Array();	



	
for(objId in setObj){	

var cObj=setObj[objId];	
setObjects[objId]=setObj[objId];


if(cObj.type=="bitmap_lib"){	
	
objArr[objId]=PIXI.Texture.fromFrame(cObj.res[0]);
	
}else if(cObj.type=="sprite_anim_lib"){	


libArr[objId]=new Array();

for(var a=0;a<cObj.res.length; a++){
	
libArr[objId].push(PIXI.Texture.fromFrame(cObj.res[a]));	
	
}
	

	
}else if(cObj.type=="sprite_anim"){	


libArr[objId]=new Array();

for(var a=0;a<cObj.res.length; a++){
	
libArr[objId].push(PIXI.Texture.fromFrame(cObj.res[a]));	
	
}

if(objId=="bonusBookSym" || objId=="bonusBookHeader"  || objId=="bonusBookPay5" ){

objArr[objId]=new AnimSpriteSymbol(bookContainer,libArr[objId]);
objArr[objId].StartAnim(setObjects[objId],setObjects[objId].framerate);	
}else{

objArr[objId]=new AnimSpriteSymbol(self._view,libArr[objId]);
objArr[objId].StartAnim(setObjects[objId],setObjects[objId].framerate);	
}	
	



}else if(cObj.type=="bitmap"){	
	
objArr[objId]=new PIXI.Sprite(PIXI.Texture.fromFrame(cObj.res[0]));

if(objId=="bonusBookSym" || objId=="bonusBookHeader"  || objId=="bonusBookPay5" ){
bookContainer.addChild(objArr[objId]);	
}else{
this._view.addChild(objArr[objId]);		
}
	
objArr[objId].x=cObj.x;	
objArr[objId].y=cObj.y;	
	
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




objArr[objId].anchor.set(0, 0);	





if(objId=="bonusBookPay5" || objId=="bonusBookPay4" || objId=="bonusBookPay3" || objId=="bonusBookPay2" ){
bookContainer.addChild(objArr[objId]);	
}else{
this._view.addChild(objArr[objId]);		
}
	
objArr[objId].x=cObj.x;
objArr[objId].y=cObj.y;
	
	


}
	
	

	
	
	
}

this._view.addChild(bookContainer);		

	
	
this.BookToHeader=function(){

dispatchEvent(new Event(SLOT_EVENT_BOOKTOHEADER));
	
createjs.Tween.get(objArr['bonusLogoHeader']).to({alpha:0}, 800);		
createjs.Tween.get(bookContainer).to({y:-384}, 1200);		
	
setTimeout(function(){

dispatchEvent(new Event(SLOT_EVENT_FIRSTSPINBONUS));
dispatchEvent(new Event(SLOT_EVENT_SPINBONUS));


},2500);	
	
};
	
	
this.SlideBookSymbols=function(){
	

bookContainer.visible=true;	
objArr['bonusBook'].newSprite.visible=false;
objArr['bonusBook'].newSprite.gotoAndStop(0);	
	
objArr['bonusBookSym'].newSprite.visible=true;
objArr['bonusBookSym'].newSprite.gotoAndStop(0);	

var sId=["10","J","Q","K","A","P_4","P_3","P_2","P_1"];

	
	
var sCnt=0;
var sCnt2=0;
var sCntLimit=8;


var sInterval=setInterval(function(){

objArr['bonusBookSym'].newSprite.gotoAndStop(sCnt2);	

dispatchEvent(new Event(SLOT_EVENT_BOOKSYM));	
	
if(sCnt>=10 && slotSpinResult.expSymbol==sId[sCnt2]){
clearInterval(sInterval);	

	
objArr['bonusBookPay5'].text="5  -  "+slotSettings.Paytable[slotSpinResult.expSymbol][5];	
objArr['bonusBookPay4'].text="4  -  "+slotSettings.Paytable[slotSpinResult.expSymbol][4];		
objArr['bonusBookPay3'].text="3  -  "+slotSettings.Paytable[slotSpinResult.expSymbol][3];	
if(slotSettings.Paytable[slotSpinResult.expSymbol][2]>0){	
objArr['bonusBookPay2'].text="2  -  "+slotSettings.Paytable[slotSpinResult.expSymbol][2];		
}
dispatchEvent(new Event(SLOT_EVENT_BOOKSYMADD));	
setTimeout(self.BookToHeader,500);	
}	
	
sCnt2++;
sCnt++;
	
	

	
if(sCnt2>sCntLimit){
sCnt2=0;
}
	

},300);	
	
	
	
	
	
};
	
this.BlinkExpPay=function(){

slotStateData.blinkExpPay=setInterval(function(){
	
objArr['bonusBookPay'+slotStateData.expCount].visible=!objArr['bonusBookPay'+slotStateData.expCount].visible;
	
},200);
	
};	
	
this.NormalExpPay=function(){

clearInterval(slotStateData.blinkExpPay);
	
objArr['bonusBookPay'+slotStateData.expCount].visible=true;
	

	
};		
	
this.ShowWinScatters=function(ev){
	

	
	
};	
	
this.ShowWinLine=function(ev){
	



	
};

this.dbg=function(){
	
return objArr;	
	
};
this.dbg2=function(){
	
return bookContainer;	
	
};	
this.ShowBonus=function(){
	
this._view.visible=true;

//objArr['bonusLogoHeader'].alpha=1;	
bookContainer.y=0;	
bookContainer.visible=false;	
objArr['bonusBookPay5'].text="";	
objArr['bonusBookPay4'].text="";	
objArr['bonusBookPay3'].text="";	
objArr['bonusBookPay2'].text="";	
	
	
objArr['bonusBook'].newSprite.visible=true;
objArr['bonusBook'].newSprite.gotoAndStop(0);		
	

	
objArr['bonusWndEnd'].visible=false;	
objArr['bonusWnd'].visible=true;	

objArr['bonusWndText'].visible=true;
	
objArr['bonusWndText'].text=slotLanguage['counterBonusFreeStart'];	
	
};
	

	
this.HideBonus=function(){

this._view.visible=false;		
	
};	
	
this.EndBonus=function(){
bonusMode=false;
bookContainer.visible=false;	
objArr['bonusWndEnd'].visible=true;	
objArr['bonusWndTextEnd'].visible=true;	
objArr['bonusWnd'].visible=false;
	
objArr['bonusWndTextEnd'].text=slotLanguage['counterBonusFreeEnd']+ NumFormat(slotStateData.totalWin)+'\n'+slotSpinResult.totalFreeGames+slotLanguage['counterBonusFreeEndPlayed'];
	
slotState=SLOT_STATE_AFTERWIN;	
	
	
	
};
	
this.HideBonus();	
	
viewContainer.addChild(this._view);	



addEventListener(SLOT_EVENT_OPENBOOK,function(){

objArr['bonusBook'].newSprite.loop=false;	
objArr['bonusBook'].newSprite.gotoAndPlay(0);
objArr['bonusBook'].newSprite.onComplete=function(){
	bookContainer.visible=true;
	self.SlideBookSymbols();

}

});	
	
addEventListener(SLOT_EVENT_STARTBONUS,function(){self.ShowBonus();objArr['bonusWndTextEnd'].visible=false;});	
addEventListener(SLOT_EVENT_SPINBONUS,function(){objArr['bonusWnd'].visible=false;objArr['bonusWndEnd'].visible=false;objArr['bonusWndText'].visible=false;});	
addEventListener(SLOT_EVENT_GAMBLESTART,function(){objArr['bonusWnd'].visible=false;objArr['bonusWndEnd'].visible=false;objArr['bonusWndTextEnd'].visible=false;self.HideBonus();});	
addEventListener(SLOT_EVENT_ENDBONUS,function(){self.EndBonus();});	
	
addEventListener(SLOT_EVENT_WINLINE,function(ev){self.ShowWinLine(ev);});
addEventListener(SLOT_EVENT_WINSCATTERS,function(ev){self.ShowWinScatters();});	
	
	
addEventListener(SLOT_EVENT_STARTADDWIN,function(ev){self.HideBonus();});	

addEventListener(SLOT_EVENT_ENDWINLINE,function(ev){

setTimeout(function(){	
	
	if(bonusMode){
		
	if(slotSpinResult.currentFreeGames>=slotSpinResult.totalFreeGames){
	
	setTimeout(function(){dispatchEvent(new Event(SLOT_EVENT_ENDBONUS));},200);	
		
	}else{	
		
	setTimeout(function(){dispatchEvent(new Event(SLOT_EVENT_SPINBONUS));},200);	
		
	}
		
	}

},300);

})	
	
	
return this;	
	
}