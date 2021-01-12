

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


this.CardClick=function(ev){
	

if(ev.currentTarget.name=="cc1"){
objArr['bonusArrow'].rotation=-54;	
objArr['bonusArrow'].x=128;	
objArr['bonusArrow'].y=191;	
slotStateData.currentFreeMode=1;	
}else if(ev.currentTarget.name=="cc2"){
objArr['bonusArrow'].rotation=-42;	
objArr['bonusArrow'].x=260;	
objArr['bonusArrow'].y=149;	
slotStateData.currentFreeMode=2;	
}else if(ev.currentTarget.name=="cc3"){
objArr['bonusArrow'].rotation=-30;	
objArr['bonusArrow'].x=396;	
objArr['bonusArrow'].y=140;	
slotStateData.currentFreeMode=3;	
}else if(ev.currentTarget.name=="cc4"){
objArr['bonusArrow'].rotation=-10;	
objArr['bonusArrow'].x=538;	
objArr['bonusArrow'].y=164;	
slotStateData.currentFreeMode=4;	
}
	
	
	
};	
	


for(var i=1; i<=4; i++){
objArr['cardSelect'+i] = new createjs.Shape();

objArr['cardSelect'+i].graphics.beginFill("#ff0000").drawRect(0, 0, 114, 180);	
objArr['cardSelect'+i].name="cc"+i;	
objArr['cardSelect'+i].alpha=0.01;	
objArr['cardSelect'+i].addEventListener("click",self.CardClick);	
	
this._view.addChild(objArr['cardSelect'+i]);		
	}
	
	
slotStateData.currentFreeMode=1;	
	
objArr['bonusArrow'].rotation=-54;	
objArr['bonusArrow'].x=128;	
objArr['bonusArrow'].y=191;	
	
	
	
objArr['cardSelect1'].y=215;	
objArr['cardSelect1'].x=110;	
objArr['cardSelect1'].rotation=-28;	

objArr['cardSelect2'].y=168;	
objArr['cardSelect2'].x=234;	
objArr['cardSelect2'].rotation=-13;
	
objArr['cardSelect3'].y=152;	
objArr['cardSelect3'].x=372;	
objArr['cardSelect3'].rotation=1;		
	
	
objArr['cardSelect4'].y=170;	
objArr['cardSelect4'].x=512;	
objArr['cardSelect4'].rotation=19;		
	
this.ShowWinScatters=function(ev){
	
objArr['bonusWin'].text=slotLanguage['counterBonusHeaderWin']+NumFormat(slotStateData.totalWin);	
	
	
};	
	
	
	
	
this.ShowWinLine=function(ev){
	


objArr['bonusWin'].text=slotLanguage['counterBonusHeaderWin']+NumFormat(ev.detail.stepwin);	
	
};
	
this.ShowBonus=function(){
	
	
	
objArr['bonusArrow'].visible=true;

for(var i=1; i<=4; i++){	

objArr['cardSelect'+i].visible=true;	
	
}	
	
this._view.visible=true;

objArr['bonusWin'].text=slotLanguage['counterBonusHeaderWin']+NumFormat(slotStateData.totalWin);	
	
objArr['bonusWndEnd'].visible=false;	
objArr['bonusWnd'].visible=true;	

objArr['bonusWndText'].visible=true;
	
objArr['bonusWndText'].text=slotLanguage['counterBonusFreeStart'];	
	
};
	

	
this.HideBonus=function(){

this._view.visible=false;		
	
};	
	
this.EndBonus=function(){
bonusMode=false;
	
objArr['bonusArrow'].visible=false;

for(var i=1; i<=4; i++){	

objArr['cardSelect'+i].visible=false;	
	
}		
	
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
addEventListener(SLOT_EVENT_SPINBONUS,function(){
	
	objArr['bonusWnd'].visible=false;
	objArr['bonusWndEnd'].visible=false;
	objArr['bonusWndText'].visible=false;
objArr['bonusArrow'].visible=false;

for(var i=1; i<=4; i++){	

objArr['cardSelect'+i].visible=false;	
	
}	

});	
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