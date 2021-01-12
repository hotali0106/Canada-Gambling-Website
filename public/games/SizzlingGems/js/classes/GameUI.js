

/////////////UI class////////////////////

function GameUI(viewContainer,setObj){

/*

игровой интерфейс.

*/	

var keyPressed=false;	
var keyPressedTimeout;	
	
this._view=new PIXI.Container();
	

var self=this;	
	
var objArr=new Array();	

for(objId in setObj){	

var cObj=setObj[objId];	


	
if(cObj.type=="bitmap"){	
	
	
	
objArr[objId]=new PIXI.Sprite(PIXI.Texture.fromFrame(cObj.res[0]));

this._view.addChild(objArr[objId]);	
	
objArr[objId].x=cObj.x;	
objArr[objId].y=cObj.y;	
	
}else if(cObj.type=="button_text"){	
	
if(cObj.res2!=undefined){
objArr[objId]=new ButtonText(this._view,objId,cObj.res,cObj.res2);	
}else{
objArr[objId]=new ButtonText(this._view,objId,cObj.res);	
}


	
	

objArr[objId]._view.x=cObj.x;	
objArr[objId]._view.y=cObj.y;	
objArr[objId].Enable();
}else if(cObj.type=="button"){	
	
objArr[objId]=new ButtonUI(this._view,objId,cObj.res);	

objArr[objId]._view.x=cObj.x;	
objArr[objId]._view.y=cObj.y;	
objArr[objId].Enable();
}
	
	

	
	
	
}
objArr['uiBackground3_h'].visible=false;
objArr['uiButtonRed']._view.visible=false;
	objArr['uiButtonBlack']._view.visible=false;	
	objArr['uiButtonNext']._view.visible=false;	
	objArr['uiButtonSkip']._view.visible=false;	
	
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


	
if(slotSettings.keyController[ev.keyCode]==undefined){
	return;
}

	var keyBtnId=slotSettings.keyController[ev.keyCode].split(",");	
for(var i=0; i<keyBtnId.length; i++){	
	if(objArr[keyBtnId[i]]!=undefined){
	
	if(objArr[keyBtnId[i]].buttonState=="enabled"){
	
	var btnEvent=new CustomEvent("ui_btn",{detail:{bname:keyBtnId[i]}});		
		
	dispatchEvent(btnEvent);	
	break;	
	}
		
	}
		
		
}
	
	
};
	


this.DisableButtons=function(){
	
for(b in objArr){
	
	if(objArr[b].Disable!=undefined){	
    objArr[b].Disable();
		
	if(objArr[b].Blink!=undefined){	
    objArr[b].Blink(false);
	}
		
	}
		
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
	
	if(objArr[b].Disable!=undefined){	
    objArr[b].Disable();
		
	if(objArr[b].Blink!=undefined){	
    objArr[b].Blink(false);
	}
		
	}
		
	}	
	
		
	objArr['uiButtonExit2'].Enable();	
		
	objArr['uiButtonRed']._view.visible=false;
	objArr['uiButtonBlack']._view.visible=false;
		
	objArr['uiButtonAuto'].Enable();
	objArr['uiButtonNext'].Enable();
	objArr['uiButtonLinesPlus'].Enable();
	objArr['uiButtonLinesMinus'].Enable();	
	objArr['uiButtonBetPlus'].Enable();
	objArr['uiButtonBetMinus'].Enable();
	objArr['uiButtonInfo'].Enable();
	objArr['uiButtonSpin'].Enable();
	objArr['uiButtonSpin'].Blink(true);
	
	objArr['uiButtonSpin'].ChangeLabel('uiButtonSpin');
		
	if(slotSettings.BetCnt==0){
	objArr['uiButtonBetMinus'].Disable();	
	}
	if(slotSettings.BetCnt==slotSettings.Bet.length-1){
	objArr['uiButtonBetPlus'].Disable();	
	}	
	
		
	if(slotStateData.lines==slotSettings.gameLine[0]){
	objArr['uiButtonLinesMinus'].Disable();	
	}
	if(slotSettings.LineCnt>=slotSettings.gameLine.length-1){
	objArr['uiButtonLinesPlus'].Disable();	
	}		
		
	break;
		
	case 'INFO' :
	
	for(b in objArr){
	
	if(objArr[b].Disable!=undefined){	
    objArr[b].Disable();
		
	if(objArr[b].Blink!=undefined){	
    objArr[b].Blink(false);
	}
		
	}
		
	}	
	
		
	objArr['uiButtonExit2'].Enable();	
		
	objArr['uiButtonRed']._view.visible=false;
	objArr['uiButtonBlack']._view.visible=false;
		
	objArr['uiButtonAuto'].Enable();
	objArr['uiButtonNext'].Enable();
	objArr['uiButtonLinesPlus'].Enable();
	objArr['uiButtonLinesMinus'].Enable();	
	objArr['uiButtonBetPlus'].Enable();
	objArr['uiButtonBetMinus'].Enable();
	objArr['uiButtonInfo'].Enable();
	objArr['uiButtonSpin'].Enable();
	objArr['uiButtonSpin'].Blink(true);
	
	objArr['uiButtonSpin'].ChangeLabel('uiButtonSpin');
		
	if(slotSettings.BetCnt==0){
	objArr['uiButtonBetMinus'].Disable();	
	}
	if(slotSettings.BetCnt==slotSettings.Bet.length-1){
	objArr['uiButtonBetPlus'].Disable();	
	}	
	
		
	if(slotStateData.lines==slotSettings.gameLine[0]){
	objArr['uiButtonLinesMinus'].Disable();	
	}
	if(slotSettings.LineCnt>=slotSettings.gameLine.length-1){
	objArr['uiButtonLinesPlus'].Disable();	
	}
		
	break;	
	
	case SLOT_STATE_SPIN :
	
	for(b in objArr){
	
	if(objArr[b].Disable!=undefined){	
    objArr[b].Disable();
		
	if(objArr[b].Blink!=undefined){	
    objArr[b].Blink(false);
	}
		
	}
		
	}	
	objArr['uiButtonExit2'].Disable();
	if(slotSettings.slotFastStop==1){	
		
	objArr['uiButtonSkip'].Enable();
	objArr['uiButtonSkip']._view.visible=true;
	}
		
	break;	
		
		
	
		
	case SLOT_STATE_WINNING :
	
	for(b in objArr){
	
	if(objArr[b].Disable!=undefined){	
    objArr[b].Disable();
		
	if(objArr[b].Blink!=undefined){	
    objArr[b].Blink(false);
	}
		
	}
		
	}	
	
	
	
	
	
	objArr['uiButtonSkip'].ChangeLabel('uiButtonSpin');
	objArr['uiButtonSkip'].Enable();
	objArr['uiButtonSkip']._view.visible=true;
	


	
	
		
	break;			
		
	case SLOT_STATE_AFTERWIN :
	
	for(b in objArr){
	
	if(objArr[b].Disable!=undefined){	
    objArr[b].Disable();
		
	if(objArr[b].Blink!=undefined){	
    objArr[b].Blink(false);
	}
		
	}
		
	}	
	
	
	
	
	objArr['uiButtonSkip']._view.visible=false;
	
	objArr['uiButtonSpin'].ChangeLabel('uiButtonCollect');
	objArr['uiButtonSpin'].Enable();
	if(slotSettings.slotGamble){	
	objArr['uiButtonGamble'].Enable();
	objArr['uiButtonGamble'].Blink(true);	
	}
	objArr['uiButtonSpin'].Blink(true);	


	
	
		
	break;		
		
		case SLOT_STATE_GAMBLE :
	
	for(b in objArr){
	
	if(objArr[b].Disable!=undefined){	
    objArr[b].Disable();
		
	if(objArr[b].Blink!=undefined){	
    objArr[b].Blink(false);
	}
		
	}
		
	}	
	



	
	objArr['uiButtonSpin'].Enable();	
	objArr['uiButtonSpin'].Blink(true);	
	objArr['uiButtonRed'].Enable();	
	objArr['uiButtonRed'].Enable();
	objArr['uiButtonBlack'].Blink(true);
	objArr['uiButtonRed'].Blink(true);
	
		
	break;		
		
}
	
	
	if(autoMode){

	for(b in objArr){

	if(objArr[b].Disable!=undefined){
    objArr[b].Disable();

	if(objArr[b].Blink!=undefined){
    objArr[b].Blink(false);
	}

	}

	}
		
	if(slotState==SLOT_STATE_SPIN){
	 

	objArr['uiButtonSkip'].Enable();
	objArr['uiButtonSkip']._view.visible=true;
	   
	   }
		
	if(slotState==SLOT_STATE_WINNING){
	 

	objArr['uiButtonSkip'].ChangeLabel('uiButtonSpin');
	objArr['uiButtonSkip'].Enable();
	objArr['uiButtonSkip']._view.visible=true; 
	   
	   }

	objArr['uiButtonAuto'].Enable();
	}
	
	
self.UpdateAdvancedButtons();	
	
	
};

	
	
this.UpdateAdvancedButtons=function(){
	
/*дополнительные кнопки*/
	
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

this.GetObject=function(){
	
return objArr;	
};
	
	/*подписываемся на необходимые события*/
	
addEventListener(SLOT_EVENT_FASTSTOP,function(){self.DisableButtons();});
addEventListener(SLOT_EVENT_LONGSTOP,function(){self.DisableButtons();});
addEventListener(SLOT_EVENT_AFTERSPIN,function(){self.DisableButtons();objArr['uiButtonSkip']._view.visible=false;});
	
addEventListener(SLOT_EVENT_OPENINFO,function(){objArr['uiButtonNext']._view.visible=true;objArr['uiButtonNext'].Enable();});
addEventListener(SLOT_EVENT_CLOSEINFO,function(){objArr['uiButtonNext']._view.visible=false;});
	
addEventListener(SLOT_EVENT_GAMBLERED,function(){self.DisableButtons();});
addEventListener(SLOT_EVENT_AUTOSTOP,function(){self.DisableButtons();objArr['uiButtonAuto'].ChangeLabel('uiButtonAuto');});
addEventListener(SLOT_EVENT_AUTOSTART,function(){self.DisableButtons();objArr['uiButtonAuto'].ChangeLabel('uiButtonAutoStop');});
addEventListener(SLOT_EVENT_GAMBLEBLACK,function(){self.DisableButtons();});
addEventListener(SLOT_EVENT_GAMBLECHOICE,function(){self.DisableButtons();});
	
addEventListener(SLOT_EVENT_GAMBLEDEALER,function(){
	
	self.DisableButtons();
	
	
});
	
	
addEventListener(SLOT_EVENT_UPDATEADVBUTTON,function(){self.UpdateAdvancedButtons();});
	
addEventListener(SLOT_EVENT_FIRSTSPINBONUS,function(){objArr['uiBackground3_h'].visible=true;});	
	
addEventListener(SLOT_EVENT_START,function(){self.UpdateButtons();});
addEventListener(SLOT_EVENT_GAMBLESTART,function(){
	
	self.UpdateButtons();
	objArr['uiBackground3_h'].visible=false;
	objArr['uiButtonSpin'].Enable();	
	objArr['uiButtonSpin'].Blink(true);	
	objArr['uiButtonGamble'].Disable();
	objArr['uiButtonGamble'].Blink(false);	
	
	objArr['uiButtonRed'].Enable();	
	objArr['uiButtonRed'].Blink(true);
	objArr['uiButtonRed']._view.visible=true;
	
	
	objArr['uiButtonBlack'].Enable();	
	objArr['uiButtonBlack'].Blink(true);	
	objArr['uiButtonBlack']._view.visible=true;
												  });	
addEventListener(SLOT_EVENT_GAMBLERESET,function(){
	
	self.UpdateButtons();
	
	objArr['uiButtonSpin'].Enable();	
	objArr['uiButtonSpin'].Blink(true);	
	objArr['uiButtonGamble'].Disable();
	objArr['uiButtonGamble'].Blink(false);	
	
	objArr['uiButtonRed'].Enable();	
	objArr['uiButtonRed'].Blink(true);
	objArr['uiButtonRed']._view.visible=true;
	
	
	objArr['uiButtonBlack'].Enable();	
	objArr['uiButtonBlack'].Blink(true);	
	objArr['uiButtonBlack']._view.visible=true;
												  });
addEventListener(SLOT_EVENT_BET,function(){self.UpdateButtons();});
addEventListener(SLOT_EVENT_LINES,function(){self.UpdateButtons();});
addEventListener(SLOT_EVENT_STARTSPIN,function(){self.UpdateButtons();});	
	

addEventListener(SLOT_EVENT_ENDWINLINE,function(ev){
skipCollect=false;	
self.UpdateButtons();

});
	

addEventListener(SLOT_EVENT_WINSCATTERS	,function(ev){
	
self.DisableButtons();

});		


addEventListener(SLOT_EVENT_JACKPOTSHOW	,function(ev){
	autoMode=false;	
	dispatchEvent(new Event(SLOT_EVENT_AUTOSTOP));		
self.DisableButtons();	
skipCollect=true;
objArr['uiButtonSkip']._view.visible=true;
objArr['uiButtonSkip'].Enable();	
objArr['uiButtonSkip'].ChangeLabel('uiButtonCollect');		
	
});
	
addEventListener(SLOT_EVENT_JACKPOTHIDE	,function(ev){
objArr['uiButtonSpin']._view.visible=true;
objArr['uiButtonSpin'].Enable();	

skipCollect=false;	
objArr['uiButtonSkip']._view.visible=false;
objArr['uiButtonSkip'].Enable();	
objArr['uiButtonSkip'].ChangeLabel('uiButtonSkip');	
	
});		
	
	
addEventListener('COLLECT_SKIP',function(ev){
skipCollect=false;	
objArr['uiButtonSkip']._view.visible=false;
objArr['uiButtonSkip'].Enable();	
objArr['uiButtonSkip'].ChangeLabel('uiButtonSkip');		

});	
	
addEventListener(SLOT_EVENT_AFTERADDWIN,function(ev){
slotState=SLOT_STATE_IDLE ;
self.UpdateButtons();
skipCollect=false;	
objArr['uiButtonSkip']._view.visible=false;
objArr['uiButtonSkip'].Enable();	
objArr['uiButtonSkip'].ChangeLabel('uiButtonSkip');		


});	
	
	
addEventListener(SLOT_EVENT_STARTADDWIN,function(ev){
objArr['uiBackground3_h'].visible=false;	

for(b in objArr){
	
	if(objArr[b].Disable!=undefined){	
    objArr[b].Disable();
		
	if(objArr[b].Blink!=undefined){	
            objArr[b].Blink(false);
	}

	}

	}
skipCollect=true;
objArr['uiButtonSkip']._view.visible=true;
objArr['uiButtonSkip'].Enable();	
objArr['uiButtonSkip'].ChangeLabel('uiButtonCollect');	
	

});
	
	
	

	
	
addEventListener(SLOT_EVENT_STARTBONUS,function(ev){
autoMode=false;	
	

	
gameUI.GetObject()['uiButtonAuto'].ChangeLabel('uiButtonAuto');	
slotState=SLOT_STATE_WAITBONUS ;
self.DisableButtons();	
objArr['uiButtonSkip']._view.visible=false;
objArr['uiButtonSpin'].Enable();
objArr['uiButtonSpin'].Blink(true);
objArr['uiButtonSpin'].ChangeLabel('uiButtonSpin');	



});	

	
	/*события нажатия клавиш*/
window.addEventListener("keydown",self.KeyDown);
 window.addEventListener("keyup",self.ResetKey);
	
	
return this;	
	
}