
function AnimSpriteSymbol(jsonData,setObj){


var self=this;

this.animData="";	
this.setData=setObj;	
this._view;

var loadEvent=new CustomEvent('loadAnimSprite',{detail:{setObj:setObj}});	

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

	dispatchEvent(loadEvent);	
		
	}
	
};
mainSlotSet.open("GET", jsonData, true);
mainSlotSet.send();	

	

return this;


}


	
	
	
function AnimSymbol(viewContainer,animData,sSprite,afterAnim,cbFunc){

this._view=new createjs.Container();	

var self=this;	
	
this.StartAnim=function(aSet){



	

self.newSprite = sSprite.clone();	


	

	
self._view.addChild(self.newSprite);
viewContainer.addChild(self._view);
self._view.x=aSet.x;	
self._view.y=aSet.y;	
		
	
};

/*
	
	отключить анимацию, и убрать из отображения
	
	*/		
this.GetSprite=function(){
	

return self.newSprite;		
};		
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

/////////////UI class////////////////////

function GameBonus(viewContainer,imgSource,setObj){

this._view=new createjs.Container();

var self=this;	
var bookContainer=new createjs.Container();
var objArr=new Array();	
var libArr=new Array();	

var animData=slotSpriteSource.viewGame.config;
animData.images=[slotSpriteSource.viewGame.sprite];	
var spriteSheet = new createjs.SpriteSheet(animData);
var mainSprite = new createjs.Sprite(spriteSheet, "");		
	
	mainSprite.gotoAndStop(0);

	
for(objId in setObj){	

var cObj=setObj[objId];	


	
if(cObj.type=="bitmap_lib"){	
	
libArr[objId]=mainSprite.clone();	
libArr[objId].gotoAndStop(cObj.type.res[0]);
	
}else if(cObj.type=="symbol_sprite_lib"){	


libArr[objId]=new AnimSpriteSymbol(cObj.config,cObj);


	
}else if(cObj.type=="bitmap"){	
	
objArr[objId]=mainSprite.clone();	
objArr[objId].gotoAndStop(cObj.res[0]);	
objArr[objId].set({x:cObj.x,y:cObj.y});	
	
if(objId=="bonusBookSym" || objId=="bonusBookHeader"  || objId=="bonusBookPay5" ){
bookContainer.addChild(objArr[objId]);	
}else{
this._view.addChild(objArr[objId]);		
}
	

	
}else if(cObj.type=="text"){	

objArr[objId]=new createjs.Text(cObj.defaultText, cObj.fontText, cObj.colorText)	

objArr[objId].textAlign=cObj.alignText;

//objArr[objId].shadow=new createjs.Shadow("#000000", 1, 1, 2);	
	
if(objId=="bonusBookPay5" || objId=="bonusBookPay4" || objId=="bonusBookPay3" || objId=="bonusBookPay2" ){
bookContainer.addChild(objArr[objId]);	
}else{
this._view.addChild(objArr[objId]);		
}
	
objArr[objId].set({x:cObj.x,y:cObj.y});	


}
	
	

	
	
	
}

this._view.addChild(bookContainer);		

	
	
this.BookToHeader=function(){

dispatchEvent(new Event(SLOT_EVENT_BOOKTOHEADER));
	
createjs.Tween.get(objArr['bonusLogoHeader']).to({alpha:0}, 1400);		
createjs.Tween.get(bookContainer).to({y:-234}, 2000);		
	
setTimeout(function(){

dispatchEvent(new Event(SLOT_EVENT_FIRSTSPINBONUS));
dispatchEvent(new Event(SLOT_EVENT_SPINBONUS));


},2500);	
	
};
	
	
this.SlideBookSymbols=function(){
	

bookContainer.visible=true;	
objArr['bonusBook'].GetSprite().visible=false;
objArr['bonusBook'].GetSprite().gotoAndStop(0);	
	
objArr['bonusBookSym'].GetSprite().visible=true;
objArr['bonusBookSym'].GetSprite().gotoAndStop(0);	

var sId=["10","A","J","K","P_1","P_2","P_3","P_4","Q"];

	
	
var sCnt=0;
var sCnt2=0;
var sCntLimit=objArr['bonusBookSym'].GetSprite().spriteSheet._frames.length;


var sInterval=setInterval(function(){

objArr['bonusBookSym'].GetSprite().gotoAndStop(sCnt2);	

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
	
objArr['bonusWin'].text=slotLanguage['counterBonusHeaderWin']+NumFormat(slotStateData.totalWin);	
	
	
};	
	
this.ShowWinLine=function(ev){
	


objArr['bonusWin'].text=slotLanguage['counterBonusHeaderWin']+NumFormat(ev.detail.stepwin);	
	
};
	
this.ShowBonus=function(){
	
this._view.visible=true;

objArr['bonusLogoHeader'].alpha=1;	
bookContainer.y=0;	
bookContainer.visible=false;	
objArr['bonusBookPay5'].text="";	
objArr['bonusBookPay4'].text="";	
objArr['bonusBookPay3'].text="";	
objArr['bonusBookPay2'].text="";	
	
if(objArr['bonusBook']!=undefined){	
objArr['bonusBook'].GetSprite().visible=true;
objArr['bonusBook'].GetSprite().gotoAndStop(0);		
}

objArr['bonusWin'].text=slotLanguage['counterBonusHeaderWin']+NumFormat(slotStateData.totalWin);	
	
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
objArr['bonusWin'].text="";		
objArr['bonusWndTextEnd'].text=slotLanguage['counterBonusFreeEnd']+ NumFormat(slotStateData.totalWin);	
	
slotState=SLOT_STATE_AFTERWIN;	
//dispatchEvent(new Event(SLOT_EVENT_ENDWINLINE));		
	
	
};
	
this.HideBonus();	
	
viewContainer.addChild(this._view);	

/*-----------------------------------*/
	
addEventListener('loadAnimSprite',function(ev){

var sett=ev.detail.setObj;

if(sett.place=="toScene"){

var cprop=libArr[sett.id];	
objArr[sett.id]=new AnimSymbol(self._view,cprop.GetAnimData(),cprop.GetSprite(),"repeat",self.SlideBookSymbols);	
objArr[sett.id].StartAnim(cprop.GetSetData());	

}else if(sett.place=="toLib"){

var cprop=libArr[sett.id];	
	
if(sett.id=="bonusBookSym"){
objArr[sett.id]=new AnimSymbol(bookContainer,cprop.GetAnimData(),cprop.GetSprite(),"repeat");		
}else{
objArr[sett.id]=new AnimSymbol(self._view,cprop.GetAnimData(),cprop.GetSprite(),"repeat");		
}
	

objArr[sett.id].StartAnim(cprop.GetSetData());	
objArr[sett.id].GetSprite().visible=false;
objArr[sett.id].GetSprite().gotoAndStop(0);
}
	
});		
	
/*----------------------------------------------*/	

addEventListener(SLOT_EVENT_OPENBOOK,function(){
	
objArr['bonusBook'].GetSprite().gotoAndPlay("anim");
objArr['bonusBook'].GetSprite().on('animationend',self.SlideBookSymbols);
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
