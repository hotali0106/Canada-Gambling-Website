

/////////////UI class////////////////////

function GameBonus(viewContainer,imgSource,setObj){

this._view=new createjs.Container();

var self=this;	

var objArr=new Array();	

var animData=slotSpriteSource.viewGame.config;
animData.images=[slotSpriteSource.viewGame.sprite];	
var spriteSheet = new createjs.SpriteSheet(animData);
var mainSprite = new createjs.Sprite(spriteSheet, "");		
	
	mainSprite.gotoAndStop(0);

	
for(objId in setObj){	

var cObj=setObj[objId];	


	
if(cObj.type=="bitmap_lib"){	
	
libArr[objId]=mainSprite.clone();	
libArr[objId].gotoAndStop(cObj.type.res[0]);
	
}else if(cObj.type=="bitmap"){	
	
objArr[objId]=mainSprite.clone();	
objArr[objId].gotoAndStop(cObj.res[0]);	
objArr[objId].set({x:cObj.x,y:cObj.y});		
this._view.addChild(objArr[objId]);	
	
}else if(cObj.type=="text"){	

objArr[objId]=new createjs.Text(cObj.defaultText, cObj.fontText, cObj.colorText)	

objArr[objId].textAlign=cObj.alignText;

objArr[objId].shadow=new createjs.Shadow("#000000", 1, 1, 2);	
	
this._view.addChild(objArr[objId]);	
	
objArr[objId].set({x:cObj.x,y:cObj.y});	


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

objArr['bonusWin'].text=slotLanguage['counterBonusHeaderWin']+NumFormat(slotStateData.totalWin);	
	
objArr['bonusWndEnd'].visible=false;	
objArr['bonusWnd'].visible=true;	
objArr['bonusWnd'].gotoAndStop("BONUS_"+slotSettings.slotScatterFreeCount[slotStateData.scCount]+"_WND");
objArr['bonusWndText'].visible=true;
	
objArr['bonusWndText'].text=slotLanguage['counterBonusFreeStart'];	
	
};
	

	
this.HideBonus=function(){

this._view.visible=false;		
	
};	
	
this.EndBonus=function(){
bonusMode=false;
objArr['bonusWndEnd'].visible=true;	
objArr['bonusWndTextEnd'].visible=true;	
objArr['bonusWnd'].visible=false;
objArr['bonusWin'].text="";		
objArr['bonusWndTextEnd'].text=slotLanguage['counterBonusFreeEnd']+ NumFormat(slotStateData.totalWin);	
	
slotState=SLOT_STATE_AFTERWIN;	
//dispatchEvent(new Event(SLOT_EVENT_ENDWINLINE));		
	
	
};
	
this.HideBonus();	
	
viewContainer.addChild(this._view);	
	

addEventListener(SLOT_EVENT_STARTBONUS,function(){self.ShowBonus();objArr['bonusWndTextEnd'].visible=false;});	
addEventListener(SLOT_EVENT_SPINBONUS,function(){objArr['bonusWnd'].visible=false;objArr['bonusWndEnd'].visible=false;objArr['bonusWndText'].visible=false;});	
addEventListener(SLOT_EVENT_GAMBLESTART,function(){objArr['bonusWnd'].visible=false;objArr['bonusWndEnd'].visible=false;objArr['bonusWndTextEnd'].visible=false;self.HideBonus();});	
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