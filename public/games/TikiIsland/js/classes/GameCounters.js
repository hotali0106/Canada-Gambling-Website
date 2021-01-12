

/////////////UI class////////////////////

function GameCounters(viewContainer,imgSource,setObj){

/*класс отображение счётчиков*/	
	
this._view=new createjs.Container();
var self=this;	
var objArr=new Array();	
var objArr=new Array();	

for(objId in setObj){	

var cObj=setObj[objId];	


	
if(cObj.type=="text_g"){	

objArr[objId]=new GradientText(cObj.defaultText, cObj.fontText, cObj.colorText)	

objArr[objId].textAlign=cObj.alignText;

this._view.addChild(objArr[objId]);	
	
objArr[objId].set({x:cObj.x,y:cObj.y,gradient:true});	
objArr[objId].shadow=new createjs.Shadow("#000000", 1, 1, 2);

}else if(cObj.type=="text_c"){	

objArr[objId]=new GradientText(cObj.defaultText, cObj.fontText, cObj.colorText)	

objArr[objId].textAlign=cObj.alignText;

this._view.addChild(objArr[objId]);	
	
objArr[objId].set({x:cObj.x,y:cObj.y,skewX:7});	


}else if(cObj.type=="text"){	

objArr[objId]=new GradientText(cObj.defaultText, cObj.fontText, cObj.colorText)	

objArr[objId].textAlign=cObj.alignText;

this._view.addChild(objArr[objId]);	
	
objArr[objId].set({x:cObj.x,y:cObj.y});	


}
	
	
	
	

	
	
	
}

objArr['counterInfo1'].text=slotLanguage['counterInfo1GameOver'];
	
objArr['counterCredit'].text=slotLanguage['counterCredit'];
objArr['counterLines'].text=slotLanguage['counterLines'];
objArr['counterBetLine'].text=slotLanguage['counterBetLine'];
objArr['counterBet'].text=slotLanguage['counterBet'];
objArr['counterCurText'].text=slotLanguage['counterCurText'];	
objArr['counterAuto'].text=slotLanguage['counterAuto'];	
viewContainer.addChild(this._view);	
	
/*обновление счётчиков*/	

this.UpdateCounters=function(){
	
if(bonusMode){
return;	
}	
	
objArr['counterInfo3'].text="";	
	
objArr['counterCreditCnt'].text=NumFormat(slotStateData.credit);	
objArr['counterBetCnt'].text=NumFormat(slotStateData.bet);	
objArr['counterBetLineCnt'].text=NumFormat(slotStateData.betline);	
objArr['counterLinesCnt'].text=slotStateData.lines;
objArr['counterCurCnt'].text='1 '+slotSettings.slotCurrency;



objArr['counterJackpot1'].text=""+slotSettings.Jackpots['jack1'];
objArr['counterJackpot2'].text=""+slotSettings.Jackpots['jack2'];
objArr['counterJackpot3'].text=""+slotSettings.Jackpots['jack3'];		
	
}


/*вызывается по событию, при отображении выигрыша по скеттерам */


this.ShowWinScatters=function(ev){
	
objArr['counterWinCnt'].text=NumFormat(slotStateData.totalWin);	
objArr['counterWinText'].text=slotLanguage['counterWin'];	
objArr['counterPays'].text=slotLanguage['counterFooterScatPay']+ev.detail.cnt;	
objArr['counterInfo3'].text="";	objArr['counterInfo3'].text="";		
objArr['counterInfo2'].text=NumFormat(slotSpinResult.bonusInfo.scattersWin)+slotLanguage['counterInfo2Won'];	
	
	
};

/*вызывается по событию, при отображении выигрышной линии */

this.ShowWinLineWait=function(ev){
	

objArr['counterPays'].text=slotLanguage['counterFooterLinePay']+(ev.detail.line+1);	
	

	
	
};	

this.ShowWinLine=function(ev){
objArr['counterInfo3'].text="";		
objArr['counterWinCnt'].text=NumFormat(ev.detail.stepwin);	
objArr['counterWinText'].text=slotLanguage['counterWin'];	
objArr['counterPays'].text=slotLanguage['counterFooterLinePay']+(ev.detail.line+1);	
	
objArr['counterInfo2'].text=NumFormat(ev.detail.win)+slotLanguage['counterInfo2Won'];	
	
	
};


/*вызывается по событию, при "сливе" выигрыша */


this.ShowAddWin=function(ev){
	objArr['counterInfo3'].text="";	
objArr['counterWinCnt'].text=NumFormat(slotStateData.totalWin);	
objArr['counterWinText'].text=slotLanguage['counterWin'];	
objArr['counterPays'].text="";	
objArr['counterInfo1'].text=" ";	
objArr['counterInfo2'].text="";	
objArr['counterCreditCnt'].text=NumFormat(slotStateData.credit);	
	
}

/*вызывается по событию, после "слива" выигрыша*/



this.ShowAfterAddWin=function(ev){

if(bonusMode){
return;	
}	
objArr['counterInfo3'].text="";		
objArr['counterWinCnt'].text=NumFormat(slotStateData.oldWin);	
objArr['counterWinText'].text=slotLanguage['counterWinPaid'];	
objArr['counterPays'].text="";	
objArr['counterCreditCnt'].text=NumFormat(slotStateData.credit_new);	
objArr['counterInfo2'].text="";	
objArr['counterInfo1'].text=slotLanguage['counterInfo1GambleCompleted'];		
	
}

/*вызывается по событию, после отображения выигрышей*/

this.ShowWinPaid=function(ev){

if(bonusMode){
return;	
}
objArr['counterInfo3'].text="";		
objArr['counterWinCnt'].text=NumFormat(slotStateData.totalWin);	
objArr['counterWinText'].text=slotLanguage['counterWin'];	
objArr['counterPays'].text=" ";	
	
objArr['counterInfo2'].text=" ";	
objArr['counterInfo1'].text=slotLanguage['counterInfo1TakeWin'];	
	
	
}

/*подписываемся на необходимые события*/

addEventListener(SLOT_EVENT_START,function(){self.UpdateCounters();objArr['counterAuto'].visible=false;});
addEventListener(SLOT_EVENT_UPDATE,function(){self.UpdateCounters();});
addEventListener(SLOT_EVENT_BET,function(){self.UpdateCounters();});
addEventListener(SLOT_EVENT_LINES,function(){self.UpdateCounters();});
addEventListener(SLOT_EVENT_RESULTSPIN,function(){self.UpdateCounters();});
addEventListener(SLOT_EVENT_STARTSPIN,function(){
	
	self.UpdateCounters();
	objArr['counterInfo2'].text="";	
objArr['counterInfo1'].text="";	
	
objArr['counterWinCnt'].text="";	
objArr['counterWinText'].text="";
	objArr['counterInfo1'].text="";
	
	if(bonusMode){
	objArr['counterPays'].text="";	
	objArr['counterInfo1'].text="";
objArr['counterInfo2'].text=slotLanguage['counterInfo2Free']+(slotSpinResult.currentFreeGames+1)+" OF "+ slotSpinResult.totalFreeGames;	
	}
	

});
	
	
		
	
addEventListener(SLOT_EVENT_WINSCATTERS,function(ev){self.ShowWinScatters(ev);});
	
addEventListener(SLOT_EVENT_WINLINE,function(ev){self.ShowWinLine(ev);});
addEventListener(SLOT_EVENT_WINLINE_WAIT,function(ev){self.ShowWinLineWait(ev);});
addEventListener(SLOT_EVENT_ENDWINLINE,function(ev){self.ShowWinPaid(ev);});
	
addEventListener(SLOT_EVENT_ADDWIN,function(ev){self.ShowAddWin();});
addEventListener(SLOT_EVENT_AFTERADDWIN,function(ev){self.ShowAfterAddWin();});

	
addEventListener(SLOT_EVENT_EMPTYSPIN,function(ev){objArr['counterInfo1'].text=slotLanguage['counterInfo1GameOver'];	});
	
addEventListener(SLOT_EVENT_STARTBONUS,function(ev){objArr['counterInfo1'].text="";	objArr['counterInfo2'].text=slotLanguage['counterInfo2StartBonus'];});
	

addEventListener(SLOT_EVENT_AUTOSTOP,function(ev){objArr['counterAuto'].visible=false;});
addEventListener(SLOT_EVENT_AUTOSTART,function(ev){objArr['counterAuto'].visible=true;});

	
addEventListener(SLOT_EVENT_JACKPOTADD,function(ev){objArr['counterCreditCnt'].text=NumFormat(slotStateData.credit);	});	
addEventListener(SLOT_EVENT_GAMBLERESET,function(ev){objArr['counterInfo1'].text="";objArr['counterWinCnt'].text=NumFormat(slotStateData.totalWin); objArr['counterInfo3'].text=slotLanguage['gambleChoose'];	});	
addEventListener(SLOT_EVENT_GAMBLESTART,function(ev){objArr['counterInfo1'].text="";objArr['counterInfo3'].text=slotLanguage['gambleChoose'];	});	
addEventListener(SLOT_EVENT_GAMBLELOSE,function(ev){
	

objArr['counterInfo3'].text="";	
objArr['counterWinCnt'].text="";	
objArr['counterWinText'].text="";		
objArr['counterInfo1'].text=slotLanguage['counterInfo1GameOver'];
});	
	
	
	
return this;	
	
}