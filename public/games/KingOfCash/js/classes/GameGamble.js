

/////////////UI class////////////////////

function GameGamble(viewContainer,imgSource,setObj){

this._view=new createjs.Container();

var self=this;	
var prevCards=new Array("C","H","H","S","D");	
var objArr=new Array();	
var libArr=new Array();	
var placeArr=new Array();	
var slideInter=0;

var animData=slotSpriteSource.gambleGame.config;
animData.images=[slotSpriteSource.gambleGame.sprite];	
var spriteSheet = new createjs.SpriteSheet(animData);
var mainSprite = new createjs.Sprite(spriteSheet, "");		
	
	
var animDataGame=slotSpriteSource.viewGame.config;
animDataGame.images=[slotSpriteSource.viewGame.sprite];	
var spriteSheetGame = new createjs.SpriteSheet(animDataGame);
var mainSpriteGame = new createjs.Sprite(spriteSheetGame, "");	
console.log(animDataGame);	
this.gambleState="";	
	
for(objId in setObj){	

var cObj=setObj[objId];	


	
if(cObj.type=="bitmap_lib"){	


	
libArr[objId]=mainSprite.clone();
	libArr[objId].gotoAndStop(cObj.res[0]);	


	
}else if(cObj.type=="place"){	
	
placeArr[objId]={x:cObj.x,y:cObj.y};	

	
}else if(cObj.type=="bitmap"){	

console.log(objId);	
	
if(objId=="gambleBack"){

objArr[objId]=mainSpriteGame.clone();
objArr[objId].gotoAndStop(cObj.res[0]);		
objArr[objId].set({x:cObj.x,y:cObj.y});		
this._view.addChild(objArr[objId]);		
	
}else{	
	
objArr[objId]=mainSprite.clone();	
objArr[objId].gotoAndStop(cObj.res[0]);		
objArr[objId].set({x:cObj.x,y:cObj.y});		
this._view.addChild(objArr[objId]);	
}
	
}else if(cObj.type=="text"){	

objArr[objId]=new createjs.Text(cObj.defaultText, cObj.fontText, cObj.colorText)	

objArr[objId].textAlign=cObj.alignText;

objArr[objId].shadow=new createjs.Shadow("#000000", 1, 1, 2);	
	
this._view.addChild(objArr[objId]);	
	
objArr[objId].set({x:cObj.x,y:cObj.y});	


}
	
	

	
	
	
}
	

	
	
	


	
	
	
	
viewContainer.addChild(this._view);	
	
/*показать новую карту, сместить уже показанные карты*/
	
this.ShowPrevCards=function(nCard){

objArr['mCard0']=libArr['gambleCardsM'+nCard].clone();	
this._view.addChild(objArr['mCard0']);

objArr['mCard0'].set({x:placeArr['gambleCardMPlace0'].x,y:placeArr['gambleCardMPlace0'].y});	
	
for(var i=4; i>0;i--){
prevCards[i]=prevCards[i-1];	
}

prevCards[0]=nCard;	
	
};	
	
/*обновление  карт*/	
	
this.UpdatePrevCards=function(){

for(var i=0;i<=5;i++){
	
self._view.removeChild(objArr['mCard'+i]);	
	
if(i==0){
continue;	
}
	
objArr['mCard'+i]=libArr['gambleCardsM'+prevCards[i-1]].clone();	
self._view.addChild(objArr['mCard'+i]);		
objArr['mCard'+i].set({x:placeArr['gambleCardMPlace'+i].x,y:placeArr['gambleCardMPlace'+i].y});	
	
}
	
};
	
	
this.SelectRed=function(){

clearInterval(slideInter);		
	
objArr['gambleSelectRed'].visible=true;	
objArr['gambleSelectBlack'].visible=false;		
	
};
	
	
this.SelectBlack=function(){

clearInterval(slideInter);	
	
objArr['gambleSelectRed'].visible=false;	
objArr['gambleSelectBlack'].visible=true;		
	
};	
	
/*старт удвоения*/	
	
this.StartGamble=function(){

self.UpdatePrevCards();
self.ResetGambleState();
self.Open();
	
	
	
	
};
	
/*новый шаг удвоения*/	
	
this.ResetGambleState=function(){

objArr['gambleBet'].text=NumFormat(slotStateData.totalWin);	
objArr['gambleWin'].text=NumFormat(slotStateData.totalWin*2);		

objArr['gambleCardsC'].visible=false;	
objArr['gambleCardsD'].visible=false;	
objArr['gambleCardsS'].visible=false;	
objArr['gambleCardsH'].visible=false;	
	
objArr['gambleSelectRed'].visible=false;	
objArr['gambleSelectBlack'].visible=false;	

slideInter=setInterval(self.SlideCards,150);	
	

	
};
	
	
this.SlideCards=function(){

	
dispatchEvent(new Event(SLOT_EVENT_GAMBLESLIDE));	
	
if(objArr['gambleCardsBack1'].visible){

objArr['gambleCardsBack1'].visible=false;	
objArr['gambleCardsBack2'].visible=true;	
	
}else{
	
objArr['gambleCardsBack2'].visible=false;	
objArr['gambleCardsBack1'].visible=true;	
	
}
	
};
	
this.LoseGamble=function(){
slotState=SLOT_STATE_IDLE;	
dispatchEvent(new Event(SLOT_EVENT_AFTERADDWIN));	
dispatchEvent(new Event(SLOT_EVENT_GAMBLELOSE));	
}
	
	
this.GambleResult=function(){
	
objArr['gambleCardsC'].visible=false;	
objArr['gambleCardsD'].visible=false;	
objArr['gambleCardsS'].visible=false;	
objArr['gambleCardsH'].visible=false;	
	
	
objArr['gambleCards'+slotSpinResult.dealerCard].visible=true;
	
self.ShowPrevCards(slotSpinResult.dealerCard);	
	
setTimeout(self.UpdatePrevCards,1500);	
	
if(slotSpinResult.gambleState=="win"){

dispatchEvent(new Event(SLOT_EVENT_GAMBLEWIN));	
	
setTimeout(self.ResetGambleState,1500);

objArr['gambleBet'].text=NumFormat(slotStateData.totalWin);	
objArr['gambleWin'].text=NumFormat(slotStateData.totalWin*2);		
	
setTimeout(function(){dispatchEvent(new Event(SLOT_EVENT_GAMBLERESET))},1500);	
	
}else if(slotSpinResult.gambleState=="lose"){

setTimeout(self.LoseGamble,1500);	
//dispatchEvent(new Event(SLOT_EVENT_GAMBLERESET));
	
}else{
	
	
}
	
	
	
};
	
	
this.Open=function(){

self.gambleState="Open";	
this._view.visible=true;		
createjs.Tween.get(this._view).to({y:0}, 300);		
	
};
	
this.Close=function(){

self.gambleState="Close";	
	
createjs.Tween.get(this._view).to({y:-800,visible:false}, 300);	
	
}
	

	
this._view.y=-800;	
this._view.visible=false;	
	
	
addEventListener(SLOT_EVENT_AFTERADDWIN,function(){

	if(self.gambleState=="Open"){
	self.Close();	
	}

});
	
	
addEventListener(SLOT_EVENT_GAMBLESTART,function(){self.StartGamble();});	
addEventListener(SLOT_EVENT_GAMBLERED,function(){self.SelectRed();});	
addEventListener(SLOT_EVENT_GAMBLEBLACK,function(){self.SelectBlack();});	
addEventListener(SLOT_EVENT_GAMBLERESULT,function(){self.GambleResult();});	
	
addEventListener(SLOT_EVENT_STARTADDWIN,function(){



	clearInterval(slideInter);

});	
	
	
return this;	
	
}