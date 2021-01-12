

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

var newSprite;	
	
	
this.ChangeState=function(st,act){
	
if(act=="stop"){

newSprite.gotoAndStop(st);	
	
}else{

newSprite.gotoAndPlay(st);		
	
}
	
	
};

	
this.StartAnim=function(aSet){



	

newSprite = sSprite.clone();	

newSprite.on('animationend',function(){	
	

if(afterAnim=="stop"){

newSprite.stop();	
	
}
	
});
	
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
/////////////UI class////////////////////

function GameBonus(viewContainer,imgSource,setObj){

this._view=new createjs.Container();

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
	
}else if(cObj.type=="symbol_sprite_lib"){	


libArr[objId]=new AnimSpriteSymbol(cObj.config,cObj);

	
}else if(cObj.type=="bitmap"){	
	
objArr[objId]=mainSprite.clone();	
objArr[objId].gotoAndStop(cObj.res[0]);	
objArr[objId].set({x:cObj.x,y:cObj.y});		
this._view.addChild(objArr[objId]);	
	
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

objArr['bonusWin'].text=slotLanguage['counterBonusHeaderWin']+NumFormat(slotStateData.totalWin);	
	
objArr['bonusWndEnd'].visible=false;	
objArr['bonusWnd'].visible=true;	

this._view.removeChild(objArr['bonusWndEnd']);	
this._view.removeChild(objArr['bonusWnd']);	
this._view.removeChild(objArr['bonusWndText']);	
this._view.removeChild(objArr['bonusWndTextEnd']);	
	

this._view.addChild(objArr['bonusWndEnd']);	
this._view.addChild(objArr['bonusWnd']);	
this._view.addChild(objArr['bonusWndText']);		
this._view.addChild(objArr['bonusWndTextEnd']);		
	
objArr['bonusWndText'].visible=true;
	
objArr['bonusWndText'].text=slotSpinResult.totalFreeGames;	
	
	

	
	
	
};
	
this.ShowWheels=function(){

if(objArr['bonusWheelBack']!=undefined){
objArr['bonusWheelBack'].visible=true;	
self._view.removeChild(objArr['bonusWheelBack']);
self._view.addChild(objArr['bonusWheelBack']);
gameCounters._view.visible=false;	
}	
	
this._view.visible=true;
objArr['bonusWndEnd'].visible=false;	
objArr['bonusWnd'].visible=false;
	
var cprop=libArr['wheelAnim'];	
objArr['wheelAnim']=new AnimSymbol(self._view,cprop.GetAnimData(),cprop.GetSprite(),"repeate");	
objArr['wheelAnim'].StartAnim(cprop.GetSetData());	
objArr['wheelAnim'].ChangeState(0,"stop");	
	
	
var cprop=libArr['wheelAnimCenter'];	
objArr['wheelAnimCenter']=new AnimSymbol(self._view,cprop.GetAnimData(),cprop.GetSprite(),"repeate");	
objArr['wheelAnimCenter'].StartAnim(cprop.GetSetData());		
objArr['wheelAnimCenter'].ChangeState("anim","play");	
	
	
var cprop=libArr['ARROW'];	
objArr['ARROW']=new AnimSymbol(self._view,cprop.GetAnimData(),cprop.GetSprite(),"repeate");	
objArr['ARROW'].StartAnim(cprop.GetSetData());		
objArr['ARROW'].ChangeState(0,"stop");	
	
	
};
	

this.HideWheels=function(){
gameCounters._view.visible=true;
objArr['bonusWheelBack'].visible=false;		

objArr['wheelAnim'].StopAnim();	

	

objArr['wheelAnimCenter'].StopAnim();
	

objArr['ARROW'].StopAnim();
	
};	
	
this.StartBonusWheel=function(){

self.wc=0;	
self.dl=10;
	
	
setTimeout(self.StepBonusWheel,self.dl);



	


	
	
};
	
	
this.StepBonusWheel=function(){




if(slotSettings.slotFreeCount[self.wc-1]==slotSpinResult.totalFreeGames && self.dl>=120){	

setTimeout(function(){	
	
self.ShowBonus();	
	
slotState=SLOT_STATE_WAITBONUS2;	

dispatchEvent(new Event(SLOT_EVENT_AFTERSPINBONUSWHEEL));	
	
},500);
	
}else{

objArr['wheelAnim'].ChangeState(self.wc,"stop");	
	
self.wc++;
self.dl++;	
if(self.wc>15){self.wc=0;}		
	
setTimeout(self.StepBonusWheel,self.dl);
	
	
}
	
	
	
	
};
	
this.HideBonus=function(){

this._view.visible=false;		
	
};	
	
this.EndBonus=function(){
bonusMode=false;
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
	

addEventListener(SLOT_EVENT_STARTBONUS,function(){self.ShowWheels();objArr['bonusWndTextEnd'].visible=false;});	
addEventListener(SLOT_EVENT_SPINBONUS,function(){objArr['bonusWnd'].visible=false;objArr['bonusWndEnd'].visible=false;objArr['bonusWndText'].visible=false;});	
addEventListener(SLOT_EVENT_GAMBLESTART,function(){objArr['bonusWnd'].visible=false;objArr['bonusWndEnd'].visible=false;objArr['bonusWndTextEnd'].visible=false;self.HideBonus();});	
addEventListener(SLOT_EVENT_ENDBONUS,function(){self.EndBonus();});	

addEventListener(SLOT_EVENT_FIRSTSPINBONUS,function(){self.HideWheels();});	
	
addEventListener(SLOT_EVENT_SPINBONUSWHEEL,function(ev){self.StartBonusWheel();});
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