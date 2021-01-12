

/////////////UI class////////////////////

function GameGamble(viewContainer,setObj){

this._view=new PIXI.Container();

var self=this;	
var prevCards=new Array("Back2","Back2","Back2","Back2","Back2");	
var objArr=new Array();	
var libArr=new Array();	
var placeArr=new Array();	
var slideInter=0;


	
this.gambleState="";	
	
for(objId in setObj){	

var cObj=setObj[objId];	


	
if(cObj.type=="bitmap_lib"){	


	
libArr[objId]=PIXI.Texture.fromFrame(cObj.res[0]);


	
}else if(cObj.type=="place"){	
	
placeArr[objId]={x:cObj.x,y:cObj.y};	

	
}else if(cObj.type=="button"){	
	
objArr[objId]=new ButtonUI(this._view,objId,cObj.res);	

objArr[objId]._view.x=cObj.x;	
objArr[objId]._view.y=cObj.y;	
objArr[objId].Enable();
}else if(cObj.type=="bitmap"){	


	
objArr[objId]=new PIXI.Sprite(PIXI.Texture.fromFrame(cObj.res[0]));

this._view.addChild(objArr[objId]);	
	
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
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 6,
    dropShadowAngle: 0,
    dropShadowDistance: 1,
    wordWrap: false,
    wordWrapWidth: 440
});	
	
	
	
objArr[objId]=new PIXI.Text(cObj.defaultText, style);	





if(cObj.alignText=="center"){
objArr[objId].anchor.set(0.5, 0);	
}else if(cObj.alignText=="left"){
objArr[objId].anchor.set(0, 0);	
}else if(cObj.alignText=="right"){
objArr[objId].anchor.set(1, 0.1);	
}






this._view.addChild(objArr[objId]);	
	
objArr[objId].x=cObj.x;
objArr[objId].y=cObj.y;


}
	
	

	
	
	
}
	

	
	
	


	
	
	
	
viewContainer.addChild(this._view);	
	
/*показать новую карту, сместить уже показанные карты*/
	
	

this.ShowPrevCards=function(nCard){

objArr['mCard0']=new PIXI.Sprite(libArr['gambleCardsM'+nCard]);	
this._view.addChild(objArr['mCard0']);

objArr['mCard0'].x=placeArr['gambleCardMPlace0'].x;
objArr['mCard0'].y=placeArr['gambleCardMPlace0'].y;
	
	
for(var i=4; i>0;i--){
prevCards[i]=prevCards[i-1];	
}

prevCards[0]=nCard;	
	
};	
	
/*обновление  карт*/	
	
this.UpdatePrevCards=function(){

for(var i=0;i<=4;i++){
	
self._view.removeChild(objArr['mCard'+i]);	
	
if(i==0){
continue;	
}
	
objArr['mCard'+i]=new PIXI.Sprite(libArr['gambleCardsM'+prevCards[i-1]]);	
self._view.addChild(objArr['mCard'+i]);		
objArr['mCard'+i].x=placeArr['gambleCardMPlace'+i].x;	
objArr['mCard'+i].y=placeArr['gambleCardMPlace'+i].y;	
	
}
	
};
	
	
this.SelectRed=function(){

clearInterval(slideInter);		
	
objArr['gambleSelectRed'].visible=true;	
objArr['gambleSelectBlack'].visible=false;		
objArr['gambleBlackLabel'].alpha=0.6;	
objArr['gambleRedLabel'].alpha=0.6;		
};
	
	
this.SelectBlack=function(){

clearInterval(slideInter);	
	
objArr['gambleSelectRed'].visible=false;	
objArr['gambleSelectBlack'].visible=true;		

objArr['gambleBlackLabel'].alpha=0.6;	
objArr['gambleRedLabel'].alpha=0.6;	
	
};	
	
/*старт удвоения*/	
	
this.StartGamble=function(){

objArr['gambleBetLabel'].text=slotLanguage['gambleBet'];	
objArr['gambleWinLabel'].text=slotLanguage['gambleWin'];	
objArr['gamblePrev'].text=slotLanguage['gamblePrev'];	
objArr['gambleFooter'].text=slotLanguage['gambleFooter'];	
objArr['gambleBlackLabel'].text=slotLanguage['gambleBlackLabel'];	
objArr['gambleRedLabel'].text=slotLanguage['gambleRedLabel'];	
	
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
	
objArr['gambleSelectRed'].Enable();	
objArr['gambleSelectBlack'].Enable();		

slideInter=setInterval(self.SlideCards,150);	
dispatchEvent(new Event(SLOT_EVENT_GAMBLESLIDE));		
objArr['gambleBlackLabel'].alpha=1;	
objArr['gambleRedLabel'].alpha=1;	
	
};
	
	
this.SlideCards=function(){

	

	
if(objArr['gambleCardsBack1'].visible){

objArr['gambleCardsBack1'].visible=false;	
objArr['gambleCardsBack2'].visible=true;	
	
}else{
	
objArr['gambleCardsBack2'].visible=false;	
objArr['gambleCardsBack1'].visible=true;	
	
}
	
};
	
this.LoseGamble=function(){

slotStateData.gambleEnd=true;	
	slotState=SLOT_STATE_IDLE;	
dispatchEvent(new Event(SLOT_EVENT_AFTERADDWIN));	
	
dispatchEvent(new Event(SLOT_EVENT_GAMBLEEND));	

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

dispatchEvent(new Event(SLOT_EVENT_GAMBLELOSE));	
setTimeout(self.LoseGamble,1500);	
//dispatchEvent(new Event(SLOT_EVENT_GAMBLERESET));
	
}else{
	
	
}
	
	
	
};
	
	
this.Open=function(){

self.gambleState="Open";	
this._view.visible=true;		
this._view.alpha=0;		
createjs.Tween.get(this._view).to({alpha:1}, 150);	
	
};
	
this.Close=function(){

self.gambleState="Close";	
	
createjs.Tween.get(this._view).to({alpha:0,visible:false}, 150);
	
}
	

	

this._view.visible=false;	
	
	
addEventListener(SLOT_EVENT_AFTERADDWIN,function(){

	if(self.gambleState=="Open"){
	self.Close();	
	}

});
	
	
addEventListener(SLOT_EVENT_GAMBLESTART,function(){
	
	
	
	self.StartGamble(); 
										  
											  
												  });	
addEventListener(SLOT_EVENT_GAMBLERED,function(){
	
	self.SelectRed();
	objArr['gambleSelectRed'].Disable();	
    objArr['gambleSelectBlack'].Disable();													
												});	
addEventListener(SLOT_EVENT_GAMBLEBLACK,function(){
	
	self.SelectBlack();
objArr['gambleSelectRed'].Disable();	
    objArr['gambleSelectBlack'].Disable();	

});	
addEventListener(SLOT_EVENT_GAMBLERESULT,function(){self.GambleResult();});	
	
addEventListener(SLOT_EVENT_STARTADDWIN,function(){

objArr['gambleSelectRed'].Disable();	
objArr['gambleSelectBlack'].Disable();

	clearInterval(slideInter);

});	
	
	
return this;	
	
}