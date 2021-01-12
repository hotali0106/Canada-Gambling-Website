

/////////////UI class////////////////////

function GameUI(viewContainer,imgSource,setObj){

/*

игровой интерфейс.

*/	

var keyPressed=false;	
var keyPressedTimeout;	
	
this._view=new createjs.Container();
	
var animData=slotSpriteSource.uiGame.config;
animData.images=[slotSpriteSource.uiGame.sprite];	
var spriteSheet = new createjs.SpriteSheet(animData);
var mainSprite = new createjs.Sprite(spriteSheet, "");	
	
var self=this;	
	
var objArr=new Array();	

for(objId in setObj){	

var cObj=setObj[objId];	


	
if(cObj.type=="bitmap"){	
	
	
	
objArr[objId]=mainSprite.clone();	
this._view.addChild(objArr[objId]);	
	
}else if(cObj.type=="button"){	
	
objArr[objId]=new ButtonUI(this._view,objId,mainSprite,cObj.res);	

objArr[objId]._view.set({x:cObj.x,y:cObj.y});	
objArr[objId].Enable();
}
	
	

	
	
	
}
	
	
viewContainer.addChild(this._view);	
	

this.ResetKey=function(ev){

clearTimeout(keyPressedTimeout);
	
keyPressed=false;	
	
};

this.KeyDown=function(ev){


	
if(keyPressed){
	
return;	
}	
	
keyPressed=true;	
	
clearTimeout(keyPressedTimeout);	
keyPressedTimeout=setTimeout(self.ResetKey,500);


	
	

	var keyBtnId=slotSettings.keyController[ev.keyCode];	
	
	if(objArr[keyBtnId]!=undefined){
	
	if(objArr[keyBtnId].buttonState=="enabled"){
	
	var btnEvent=new CustomEvent("ui_btn",{detail:{bname:keyBtnId}});		
		
	dispatchEvent(btnEvent);	
		
	}
		
	}
		
		

	
	
};
	


this.DisableButtons=function(){
	
for(b in objArr){
		
objArr[b].Disable();
	
	}	
	
	if(autoMode){
			
		
	objArr['uiButtonAuto'].Enable();	
	}
	
self.UpdateAdvancedButtons();
	
};
	
/*

активация кнопок в зависимости от

*/

this.UpdateButtons=function(){

for (var vl of slotSettings.hideButtons) {
   

	
	
	objArr[vl].isBlock=true;
	objArr[vl].Disable();	
		
	
		
    
	
}	
	
	
for (var vl of slotSettings.gameLine) {
   

	
	if(slotSettings.Line.indexOf(""+vl)==-1){
	  
	
		
	if(objArr['uiButtonLine'+vl]!=undefined){	
	objArr['uiButtonLine'+vl].isBlock=true;
	objArr['uiButtonLine'+vl].Disable();	
		
	}
		
    }
	
}
	
for (var i=1; i<=10;i++) {
   

	
	if(slotSettings.gameLine.indexOf(""+i)==-1){
	  
	
		
	if(objArr['uiButtonLine'+i]!=undefined){	
		
	objArr['uiButtonLine'+i].isBlock=true;
	objArr['uiButtonLine'+i].Disable();	
		
	}
		
    }
	
}

	
	
	if(bonusMode){
		
	self.DisableButtons();
	return;	
	}	
	
	
switch(slotState){

	case SLOT_STATE_IDLE :
	
	for(b in objArr){
		
objArr[b].Disable();
	
	}	
	
		
	objArr['uiButtonInfo'].Enable();
	objArr['uiButtonExit'].Enable();
	objArr['uiButtonCollect'].Enable();
	objArr['uiButtonLine1'].Enable();
	objArr['uiButtonLine3'].Enable();
	objArr['uiButtonLine5'].Enable();
	objArr['uiButtonLine7'].Enable();
	objArr['uiButtonLine9'].Enable();
	objArr['uiButtonBet'].Enable();
	objArr['uiButtonBetMax'].Enable();
	objArr['uiButtonAuto'].Enable();
	objArr['uiButtonSpin'].Enable();
		
	break;
	
	case SLOT_STATE_SPIN :
	
	for(b in objArr){
		
objArr[b].Disable();
	
	}	
	
	if(slotSettings.slotFastStop==1){	
		
	objArr['uiButtonSpin'].Enable();
	}
		
	break;	
		
		
	
		
		
	case SLOT_STATE_AFTERWIN :
	
	for(b in objArr){
		
objArr[b].Disable();
	
	}	
	
	
	
	objArr['uiButtonSpin'].Enable();	
	
	if(slotSettings.slotGamble){
		
	objArr['uiButtonBet'].Enable();
	objArr['uiButtonBetMax'].Enable();
		
	}
		
	break;		
		
		case SLOT_STATE_GAMBLE :
	
	for(b in objArr){
		
objArr[b].Disable();
	
	}	
	
	
	
	objArr['uiButtonSpin'].Enable();	
	objArr['uiButtonBet'].Enable();
	objArr['uiButtonBetMax'].Enable();
		
	break;		
		
}
	
	
	if(autoMode){
		
	for(b in objArr){
		
objArr[b].Disable();
	
	}		
		
	objArr['uiButtonAuto'].Enable();	
	}
	
	
self.UpdateAdvancedButtons();	
	
	
};

	this.GetObject=function(){
		
	return objArr;	
		
	};
	
this.UpdateAdvancedButtons=function(){
	
/*дополнительные кнопки*/
	objArr['uiButtonExit2'].Enable();
	if(!soundMode){
		
	objArr['uiButtonSoundOff']._view.visible=true;	
	objArr['uiButtonSoundOff'].Enable();	
		
	objArr['uiButtonSoundOn']._view.visible=false;	
	objArr['uiButtonSoundOn'].Disable();	
		
	}else{
	objArr['uiButtonSoundOff']._view.visible=false;	
	objArr['uiButtonSoundOff'].Disable();	
	objArr['uiButtonSoundOn']._view.visible=true;	
	objArr['uiButtonSoundOn'].Enable();	
	}
	
	if(fullscreenMode){
		
	objArr['uiButtonFullOff']._view.visible=true;	
	objArr['uiButtonFullOff'].Enable();	
		
	objArr['uiButtonFullOn']._view.visible=false;	
	objArr['uiButtonFullOn'].Disable();	
		
	}else{
	objArr['uiButtonFullOff']._view.visible=false;	
	objArr['uiButtonFullOff'].Disable();	
	objArr['uiButtonFullOn']._view.visible=true;	
	objArr['uiButtonFullOn'].Enable();		
		
	}	
	
};

	
	/*подписываемся на необходимые события*/
	
addEventListener(SLOT_EVENT_FASTSTOP,function(){self.DisableButtons();});
addEventListener(SLOT_EVENT_LONGSTOP,function(){self.DisableButtons();});
addEventListener(SLOT_EVENT_AFTERSPIN,function(){self.DisableButtons();});
	
addEventListener(SLOT_EVENT_GAMBLERED,function(){self.DisableButtons();});
addEventListener(SLOT_EVENT_AUTOSTOP,function(){self.DisableButtons();});
addEventListener(SLOT_EVENT_GAMBLEBLACK,function(){self.DisableButtons();});
addEventListener(SLOT_EVENT_GAMBLECHOICE,function(){self.DisableButtons();});
	
addEventListener(SLOT_EVENT_GAMBLEDEALER,function(){
	
	self.DisableButtons();
	objArr['uiButtonLine3'].Enable();
	objArr['uiButtonLine5'].Enable();
	objArr['uiButtonLine7'].Enable();
	objArr['uiButtonLine9'].Enable();
	objArr['uiButtonSpin'].Enable();
	
});
	
	
addEventListener(SLOT_EVENT_UPDATEADVBUTTON,function(){self.UpdateAdvancedButtons();});
	
addEventListener(SLOT_EVENT_START,function(){self.UpdateButtons();});
addEventListener(SLOT_EVENT_GAMBLERESET,function(){self.UpdateButtons();});
addEventListener(SLOT_EVENT_BET,function(){self.UpdateButtons();});
addEventListener(SLOT_EVENT_LINES,function(){self.UpdateButtons();});
addEventListener(SLOT_EVENT_STARTSPIN,function(){self.UpdateButtons();});	
addEventListener(SLOT_EVENT_ENDWINLINE,function(ev){self.UpdateButtons();});	

	
addEventListener(SLOT_EVENT_JACKPOTSHOW	,function(ev){
self.DisableButtons();	
isCollect=true;
objArr['uiButtonSpin'].Enable();		
	
});
	
addEventListener(SLOT_EVENT_JACKPOTHIDE	,function(ev){

isCollect=false;	
objArr['uiButtonSpin'].Disable();	
	
});		
	
	
addEventListener('COLLECT_SKIP',function(ev){
isCollect=false;	

objArr['uiButtonSpin'].Disable();	


});		
	
addEventListener(SLOT_EVENT_AFTERADDWIN,function(ev){
slotState=SLOT_STATE_IDLE ;
self.UpdateButtons();
isCollect=false;
});	
	
	
addEventListener(SLOT_EVENT_STARTADDWIN,function(ev){


for(b in objArr){
		
objArr[b].Disable();
	
	}

objArr['uiButtonSpin'].Enable();	
isCollect=true;	

});	
	
	
	

addEventListener(SLOT_EVENT_STARTBONUS,function(ev){
autoMode=false;	
slotState=SLOT_STATE_WAITBONUS ;
objArr['uiButtonSpin'].Enable();
objArr['uiButtonAuto'].Disable();

});	

	
	/*события нажатия клавиш*/
	 window.addEventListener("keydown",self.KeyDown);
 window.addEventListener("keyup",self.ResetKey);
	
	
return this;	
	
}