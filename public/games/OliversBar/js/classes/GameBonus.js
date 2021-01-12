
function AnimSpriteSymbol(jsonData,setObj){


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


	
	
	
function AnimSymbol(viewContainer,animData,sSprite,afterAnim){

this._view=new createjs.Container();	

var self=this;	
	
this.StartAnim=function(aSet){



	
if(sSprite!=undefined){
var newSprite = sSprite.clone();	

newSprite.on('animationend',function(){	
	

if(afterAnim=="stop"){

dispatchEvent(new Event('BonusWndShow'));	
newSprite.stop();	
	
}
	
});
	
newSprite.gotoAndPlay("anim");	
	
self._view.addChild(newSprite);
}
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
/////////////UI class////////////////////

function GameBonus(viewContainer,imgSource,setObj){

this._view=new createjs.Container();
var bonusState="";	
var self=this;	

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
	
}else if(cObj.type=="bitmap"){	
	
objArr[objId]=mainSprite.clone();	
objArr[objId].gotoAndStop(cObj.res[0]);	
objArr[objId].set({x:cObj.x,y:cObj.y});		
this._view.addChild(objArr[objId]);	
	
}else if(cObj.type=="symbol_sprite_lib"){	


libArr[objId]=new AnimSpriteSymbol(cObj.config,cObj);

	
	

	
}else if(cObj.type=="text"){	

objArr[objId]=new createjs.Text(cObj.defaultText, cObj.fontText, cObj.colorText)	

objArr[objId].textAlign=cObj.alignText;

objArr[objId].shadow=new createjs.Shadow("#000000", 1, 1, 2);	
	
this._view.addChild(objArr[objId]);	
	
objArr[objId].set({x:cObj.x,y:cObj.y});	


}
	
	

	
	
	
}

	
this.ShowWinScatters=function(ev){
	
if(slotStateData.totalWin>0){
	
objArr['bonusWin'].text=slotLanguage['counterBonusHeaderWin']+NumFormat(slotStateData.totalWin);	

}	
	
};	
	
this.ShowWinLine=function(ev){
	


objArr['bonusWin'].text=slotLanguage['counterBonusHeaderWin']+NumFormat(ev.detail.stepwin);	
	
};
	
this.ShowBonus=function(){
	
this._view.visible=true;
bonusState="start";
objArr['bonusWin'].text=slotLanguage['counterBonusHeaderWin']+NumFormat(slotStateData.totalWin);	
	


var cprop=libArr['bonusWnd'];	
objArr['bonusWnd']=new AnimSymbol(this._view,cprop.GetAnimData(),cprop.GetSprite(),"stop");	
objArr['bonusWnd'].StartAnim(cprop.GetSetData());
	
objArr['bonusWndText'].visible=true;
this._view.removeChild(objArr['bonusWndText']);	
	
objArr['bonusWndText'].text=slotLanguage['counterBonusFreeStart'];	
objArr['bonusWndTextEnd'].visible=false;		
};
	

	
this.HideBonus=function(){

this._view.visible=false;		
if(objArr['bonusWndEnd']!=undefined){	
objArr['bonusWndEnd'].StopAnim();	
}
};	

this.EndBonus=function(){
bonusMode=false;
bonusState="end";
var cprop=libArr['bonusWndEnd'];	
objArr['bonusWndEnd']=new AnimSymbol(this._view,cprop.GetAnimData(),cprop.GetSprite(),"stop");	
objArr['bonusWndEnd'].StartAnim(cprop.GetSetData());	
	
	
objArr['bonusWndTextEnd'].visible=true;	

objArr['bonusWin'].text="";		
this._view.removeChild(objArr['bonusWndTextEnd']);		
objArr['bonusWndTextEnd'].text=slotLanguage['counterBonusFreeEnd']+ NumFormat(slotStateData.totalWin);	
	
slotState=SLOT_STATE_AFTERWIN;	
//dispatchEvent(new Event(SLOT_EVENT_ENDWINLINE));		
	
	
};
	
this.HideBonus();	
	
viewContainer.addChild(this._view);	
	

addEventListener('BonusWndShow',function(){

if(bonusState=="end"){
self._view.addChild(objArr['bonusWndTextEnd']);		
}else{
self._view.addChild(objArr['bonusWndText']);		
	
}

});	
	
	
addEventListener(SLOT_EVENT_STARTBONUS,function(){self.ShowBonus();objArr['bonusWndTextEnd'].visible=false;});	
addEventListener(SLOT_EVENT_SPINBONUS,function(){objArr['bonusWnd'].StopAnim();objArr['bonusWndText'].visible=false;});	
addEventListener(SLOT_EVENT_GAMBLESTART,function(){objArr['bonusWndEnd'].StopAnim();objArr['bonusWndTextEnd'].visible=false;self.HideBonus();});	
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
