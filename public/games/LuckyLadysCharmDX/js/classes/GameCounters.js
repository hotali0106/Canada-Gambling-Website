

/////////////UI class////////////////////

function GameCounters(viewContainer,setObj){

/*класс отображение счётчиков*/	
	
this._view=new PIXI.Container();
var self=this;	
var objArr=new Array();	


for(objId in setObj){	

var cObj=setObj[objId];	


	
if(cObj.type=="text_g"){	

	
var style = new PIXI.TextStyle({
    fontFamily: cObj.fontText.split("px")[1],
    fontSize: parseInt(cObj.fontText.split("px")[0]),
    fontWeight: 'bold',
    fill: ["#FF9C07","#F1E430"], // gradient
    stroke: '#FFFFFF',
    strokeThickness: 0,
	align: cObj.alignText,	
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 3,
    dropShadowAngle: 110,
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
objArr[objId].anchor.set(1, 0);	
}




this._view.addChild(objArr[objId]);	
	
objArr[objId].x=cObj.x;
objArr[objId].y=cObj.y;
	
objArr[objId].scale.x=0.5;
objArr[objId].scale.y=0.5;



}else if(cObj.type=="text_c"){	



if(objId=="counterLinesCnt"){


objArr[objId] = new PIXI.extras.BitmapText('1111', { font: "liq_blue", align: 'right' });	
this._view.addChild(objArr[objId]);	
objArr[objId].anchor.set(1, 0);		
objArr[objId].x=cObj.x;
objArr[objId].y=cObj.y;
objArr[objId].skew.x=-0.2;	
	
objArr[objId].scale.x=0.5;
objArr[objId].scale.y=0.5;	
	
}else{


objArr[objId] = new PIXI.extras.BitmapText('1111', { font: cObj.fontText, align: 'right' });	
this._view.addChild(objArr[objId]);	
objArr[objId].anchor.set(1, 0);		
objArr[objId].x=cObj.x;
objArr[objId].y=cObj.y;
objArr[objId].skew.x=-0.2;

}

}else if(cObj.type=="text"){	

	
var style = new PIXI.TextStyle({
    fontFamily: cObj.fontText.split("px")[1],
    fontSize: parseInt(cObj.fontText.split("px")[0]),
    fontWeight: 'bold',
    fill: [cObj.colorText], // gradient
    stroke: '#FFFFFF',
    strokeThickness: 0,
	align: cObj.alignText,	
    dropShadow: false,
    dropShadowColor: '#000000',
    dropShadowBlur: 2,
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

objArr[objId].scale.x=0.5;
objArr[objId].scale.y=0.5;


}
	
	
	
	

	
	
	
}

objArr['counterExit'].text=slotLanguage['uiButtonExit'];
objArr['counterInfo1'].text=slotLanguage['counterInfo1GameOver'];
objArr['counterCredit'].text=slotLanguage['counterCredit'];
objArr['counterLastWin'].text=slotLanguage['counterLastWin'];
objArr['counterLines'].text=slotLanguage['counterLines'];
objArr['counterBetLine'].text=slotLanguage['counterBetLine'];
objArr['counterBet'].text=slotLanguage['counterBet'];

viewContainer.addChild(this._view);	
	
/*обновление счётчиков*/	

this.UpdateCounters=function(){
	
if(bonusMode){
return;	
}	
	

	
objArr['counterCreditCnt'].text=NumFormat(slotStateData.credit);	
objArr['counterBetCnt'].text=NumFormat(slotStateData.bet);	
objArr['counterBetLineCnt'].text=NumFormat(slotStateData.betline);	
objArr['counterLinesCnt'].text=slotStateData.lines;	

TextFormat(objArr['counterCreditCnt'],10);
TextFormat(objArr['counterBetCnt'],4);
TextFormat(objArr['counterBetLineCnt'],4);

/*
objArr['counterJackpot1'].text=""+slotSettings.Jackpots['jack1'];
objArr['counterJackpot2'].text=""+slotSettings.Jackpots['jack2'];
objArr['counterJackpot3'].text=""+slotSettings.Jackpots['jack3'];
*/
}


/*вызывается по событию, при отображении выигрыша по скеттерам */



this.ShowWinScatters=function(ev){
	
if(slotStateData.totalWin>0){	

}
	

	
if(slotSpinResult.bonusInfo.scattersWin>0){	
	
	
	
}else{

}
	
};

/*вызывается по событию, при отображении выигрышной линии */

this.ShowWinLineWait=function(ev){
	


	

	
	
};	

this.ShowWinLine=function(ev){

objArr['counterInfo1'].text=slotLanguage['counterInfo2Won']+" "+NumFormat(ev.detail.stepwin);
	
};


/*вызывается по событию, при "сливе" выигрыша */


this.ShowAddWin=function(ev){

objArr['counterInfo1'].text=" ";	
objArr['counterInfo1'].text=slotLanguage['counterInfo2Won']+" "+NumFormat(slotStateData.totalWin);
objArr['counterCreditCnt'].text=NumFormat(slotStateData.credit);	
	
}

/*вызывается по событию, после "слива" выигрыша*/

this.ShowSkipWin=function(ev){


	
objArr['counterCreditCnt'].text=NumFormat(slotStateData.credit);	
	

objArr['counterInfo1'].text=slotLanguage['counterInfo2Won']+" "+NumFormat(slotStateData.totalWin);	
	
}

this.ShowAfterAddWin=function(ev){

if(bonusMode){
return;	
}	

	
	
objArr['counterCreditCnt'].text=NumFormat(slotStateData.credit);	
objArr['counterLastWinCnt'].text=NumFormat(slotStateData.oldWin);	

objArr['counterInfo1'].text=slotLanguage['counterInfo1GameOver'];		
	
}

/*вызывается по событию, после отображения выигрышей*/

this.ShowWinPaid=function(ev){

if(bonusMode){
return;	
}


objArr['counterInfo1'].text=slotLanguage['counterInfo2Won']+" "+NumFormat(slotStateData.totalWin);		
	
	
}

/*подписываемся на необходимые события*/

addEventListener(SLOT_EVENT_START,function(){self.UpdateCounters();objArr['counterLastWinCnt'].text=NumFormat(0);	});
addEventListener(SLOT_EVENT_UPDATE,function(){self.UpdateCounters();});
addEventListener(SLOT_EVENT_BET,function(){self.UpdateCounters();});
addEventListener(SLOT_EVENT_LINES,function(){self.UpdateCounters();});
addEventListener(SLOT_EVENT_RESULTSPIN,function(){self.UpdateCounters();});
addEventListener(SLOT_EVENT_STARTSPIN,function(){
	
	self.UpdateCounters();

	objArr['counterInfo1'].text=slotLanguage['counterInfo1Spin'];
	
	if(bonusMode){
	
	objArr['counterInfo1'].text="";
objArr['counterInfo1'].text=slotLanguage['counterInfo2Free']+(slotSpinResult.currentFreeGames+1)+" of "+ slotSpinResult.totalFreeGames;	
	}
	

});
	
	
		
	
addEventListener(SLOT_EVENT_WINSCATTERS,function(ev){self.ShowWinScatters(ev);});
addEventListener(SLOT_EVENT_SKIPWIN,function(ev){self.ShowSkipWin(ev);});
	
addEventListener(SLOT_EVENT_WINLINE,function(ev){self.ShowWinLine(ev);});
addEventListener(SLOT_EVENT_WINLINE_WAIT,function(ev){self.ShowWinLineWait(ev);});
addEventListener(SLOT_EVENT_ENDWINLINE,function(ev){self.ShowWinPaid(ev);});
	
addEventListener(SLOT_EVENT_ADDWIN,function(ev){self.ShowAddWin();});
addEventListener(SLOT_EVENT_AFTERADDWIN,function(ev){self.ShowAfterAddWin();});

	
addEventListener(SLOT_EVENT_EMPTYSPIN,function(ev){objArr['counterInfo1'].text=slotLanguage['counterInfo1GameOver'];	});
	
addEventListener(SLOT_EVENT_STARTBONUS,function(ev){objArr['counterInfo1'].text=slotLanguage['counterInfo2StartBonus'];});
	

addEventListener(SLOT_EVENT_AUTOSTOP,function(ev){});
addEventListener(SLOT_EVENT_AUTOSTART,function(ev){});

	
addEventListener(SLOT_EVENT_JACKPOTADD,function(ev){objArr['counterCreditCnt'].text=NumFormat(slotStateData.credit);	});	
addEventListener(SLOT_EVENT_GAMBLERESET,function(ev){objArr['counterInfo1'].text=slotLanguage['counterInfo2Won']+" "+NumFormat(slotStateData.totalWin);});	
addEventListener(SLOT_EVENT_GAMBLESTART,function(ev){objArr['counterInfo1'].text=slotLanguage['counterInfo2Won']+" "+NumFormat(slotStateData.totalWin);	});	
addEventListener(SLOT_EVENT_GAMBLELOSE,function(ev){
	
	
objArr['counterInfo1'].text=slotLanguage['counterInfo1GameOver'];
});	
	
	
	
return this;	
	
}