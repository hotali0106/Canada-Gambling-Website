

function GameBack(viewContainer,imgSource,setObj){
	
this._view=new createjs.Container();
	
var objArr=new Array();	

var animData=slotSpriteSource.uiGame.config;
animData.images=[slotSpriteSource.uiGame.sprite];	
var spriteSheet = new createjs.SpriteSheet(animData);
var mainSprite = new createjs.Sprite(spriteSheet, "");		

	mainSprite.gotoAndStop(setObj['uiBackground'].res[0]);
objArr['uiBackground']=mainSprite;	
	
this._view.addChild(objArr['uiBackground']);	
	
viewContainer.addChild(this._view);	
	


	
return this;
	
}




