

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


	
	
	
function AnimSymbol(viewContainer,animData,sSprite,afterAnim){

this._view=new createjs.Container();	

var self=this;	
	
this.StartAnim=function(aSet){



	

self.newSprite = sSprite.clone();	

self.newSprite.on('animationend',function(){	
	

if(afterAnim=="stop"){

self.newSprite.stop();	
	
}
	
});
	
self.newSprite.gotoAndPlay("anim");	
	
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

function GameView(viewContainer,imgSource,setObj){

this._view=new createjs.Container();
var self=this;		
var animData=slotSpriteSource.viewGame.config;
animData.images=[slotSpriteSource.viewGame.sprite];	
var spriteSheet = new createjs.SpriteSheet(animData);
var mainSprite = new createjs.Sprite(spriteSheet, "");		

mainSprite.gotoAndStop(0);


var objArr=new Array();
var libArr=new Array();	
objArr['gameScreen']=mainSprite.clone();
objArr['gameScreen'].gotoAndStop(setObj['gameScreen'].res[0]);	
this._view.addChild(objArr['gameScreen']);	
	
if(slotResource.viewGame.bonusFooter!=undefined){	
objArr['bonusFooter']=mainSprite.clone();
objArr['bonusFooter'].gotoAndStop(slotResource.viewGame.bonusFooter.res[0]);
objArr['bonusFooter'].set({x:setObj['bonusFooter'].x,y:setObj['bonusFooter'].y});			
this._view.addChild(objArr['bonusFooter']);		
	
objArr['bonusFooter'].visible=false;		
	
}
	
if(slotResource.viewGame.bonusHeader!=undefined){	
objArr['bonusHeader']=mainSprite.clone();
objArr['bonusHeader'].gotoAndStop(slotResource.viewGame.bonusHeader.res[0]);
objArr['bonusHeader'].set({x:setObj['bonusHeader'].x,y:setObj['bonusHeader'].y});			
this._view.addChild(objArr['bonusHeader']);		
	
objArr['bonusHeader'].visible=false;	
	
}	
	

	

objArr['gameScreen'].set({x:setObj['gameScreen'].x,y:setObj['gameScreen'].y});		


	
	
viewContainer.addChild(this._view);	
	
this.gamePosition={x:setObj['gameScreen'].x,y:setObj['gameScreen'].y,width:animData.frames[objArr['gameScreen'].currentAnimationFrame][2],height:animData.frames[objArr['gameScreen'].currentAnimationFrame][3]};

for(objId in setObj){	

var cObj=setObj[objId];	


	
if(cObj.type=="symbol_sprite_lib"){	


libArr[objId]=new AnimSpriteSymbol(cObj.config,cObj);

	
	

	
}
	
	

	
	
	
}


this.GetGamePosition=function(){
	
return this.gamePosition;	
};

	

addEventListener(SLOT_EVENT_STARTBONUS,function(){

if(objArr['bonusHeader']!=undefined){
objArr['bonusHeader'].visible=true;			
}

objArr['headerGameAnim'].GetSprite().visible=false;	
	
	if(libArr['headerBonusAnim']!=undefined){
	
objArr['headerBonusAnim'].GetSprite().visible=true;	
	}

if(objArr['bonusFooter']!=undefined){
objArr['bonusFooter'].visible=true;		
}	
	

});	
	
addEventListener('loadAnimSprite',function(ev){

var sett=ev.detail.setObj;

if(sett.place=="toScene"){

var cprop=libArr[sett.id];	
objArr[sett.id]=new AnimSymbol(self._view,cprop.GetAnimData(),cprop.GetSprite(),"repeat");	
objArr[sett.id].StartAnim(cprop.GetSetData());	

}else if(sett.place=="toLib"){

var cprop=libArr[sett.id];	
objArr[sett.id]=new AnimSymbol(self._view,cprop.GetAnimData(),cprop.GetSprite(),"repeat");	
objArr[sett.id].StartAnim(cprop.GetSetData());	
objArr[sett.id].GetSprite().visible=false;
}
	
});	
	
		
addEventListener(SLOT_EVENT_ENDBONUS,function(){

objArr['headerGameAnim'].GetSprite().visible=true;
if(objArr['bonusHeader']!=undefined){
objArr['bonusHeader'].visible=false;			
}
	
if(libArr['headerBonusAnim']!=undefined){

objArr['headerBonusAnim'].GetSprite().visible=false;	
}	
	
if(objArr['bonusFooter']!=undefined){
objArr['bonusFooter'].visible=false;		
}


});		

	
addEventListener(SLOT_EVENT_GAMBLESTART,function(){
	
objArr['headerGameAnim'].GetSprite().visible=true;	
if(objArr['bonusHeader']!=undefined){
objArr['bonusHeader'].visible=false;			
}
if(libArr['headerBonusAnim']!=undefined){

objArr['headerBonusAnim'].GetSprite().visible=false;	
}	
if(objArr['bonusFooter']!=undefined){
objArr['bonusFooter'].visible=false;		
}


});	

	
return this;	
	
}