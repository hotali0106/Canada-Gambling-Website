function GameView(viewContainer,imgSource,setObj){

this._view=new createjs.Container();
	
var animData=slotSpriteSource.viewGame.config;
animData.images=[slotSpriteSource.viewGame.sprite];	
var spriteSheet = new createjs.SpriteSheet(animData);
var mainSprite = new createjs.Sprite(spriteSheet, "");		

mainSprite.gotoAndStop(0);


var objArr=new Array();	
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



this.GetGamePosition=function(){
	
return this.gamePosition;	
};

	

addEventListener(SLOT_EVENT_STARTBONUS,function(){

if(objArr['bonusHeader']!=undefined){
objArr['bonusHeader'].visible=true;			
}
if(objArr['bonusFooter']!=undefined){
objArr['bonusFooter'].visible=true;		
}	
	

});	
	
addEventListener(SLOT_EVENT_ENDBONUS,function(){


if(objArr['bonusHeader']!=undefined){
objArr['bonusHeader'].visible=false;			
}
if(objArr['bonusFooter']!=undefined){
objArr['bonusFooter'].visible=false;		
}


});		

	
addEventListener(SLOT_EVENT_GAMBLESTART,function(){
	
if(objArr['bonusHeader']!=undefined){
objArr['bonusHeader'].visible=false;			
}
if(objArr['bonusFooter']!=undefined){
objArr['bonusFooter'].visible=false;		
}


});	

	
return this;	
	
}