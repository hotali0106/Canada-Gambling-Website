

/////////////UI class////////////////////

function GameBonus(viewContainer,setObj){

this._view=new PIXI.Container();

var self=this;	

var objArr=new Array();	



	
for(objId in setObj){	

var cObj=setObj[objId];	


	
if(cObj.type=="bitmap_lib"){	
	
objArr[objId]=PIXI.Texture.fromFrame(cObj.res[0]);
	
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
	
	


}
	
	

	
	
	
}

	
this.ShowWinScatters=function(ev){
	
objArr['bonusWin'].text=slotLanguage['counterBonusHeaderWin']+NumFormat(slotStateData.totalWin);	
	
	
};	
	
this.ShowWinLine=function(ev){
	


objArr['bonusWin'].text=slotLanguage['counterBonusHeaderWin']+NumFormat(ev.detail.stepwin);	
	
};
	
this.ShowBonus=function(){
	
this._view.visible=true;
objArr['bonusWin'].visible=false;
objArr['bonusWin'].text=slotLanguage['counterBonusHeaderWin']+NumFormat(slotStateData.totalWin);	
	
objArr['bonusWndTextEnd'].visible=false;		
	
objArr['bonusWnd'].visible=true;	

objArr['bonusWndText'].visible=true;

	if(slotSpinResult.currentFreeGames>0){
objArr['bonusWndText'].text=slotLanguage['counterBonusFreeMore'];	
	}else{
	objArr['bonusWndText'].text=slotLanguage['counterBonusFreeStart'];		
	}
};
	

	
this.HideBonus=function(){

this._view.visible=false;		
	
};	
	
this.EndBonus=function(){
bonusMode=false;

objArr['bonusWin'].visible=false;	
	

objArr['bonusWndTextEnd'].visible=true;	
objArr['bonusWnd'].visible=true;
	
objArr['bonusWndTextEnd'].text=slotLanguage['counterBonusFreeEnd']+ NumFormat(slotStateData.totalWin)+'\n'+slotSpinResult.totalFreeGames+slotLanguage['counterBonusFreeEndPlayed'];	
	
slotState=SLOT_STATE_AFTERWIN;	
	
	
	
};
	
this.HideBonus();	
	
viewContainer.addChild(this._view);	
	

addEventListener(SLOT_EVENT_STARTBONUS,function(){self.ShowBonus();});	
addEventListener(SLOT_EVENT_SPINBONUS,function(){objArr['bonusWnd'].visible=false;objArr['bonusWndText'].visible=false;objArr['bonusWndTextEnd'].visible=false;	});	
addEventListener(SLOT_EVENT_GAMBLESTART,function(){objArr['bonusWnd'].visible=false;self.HideBonus();});	
addEventListener(SLOT_EVENT_ENDBONUS,function(){self.EndBonus();});	
	
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