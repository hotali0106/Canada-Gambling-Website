

/////////////UI class////////////////////

function GameRules(viewContainer,imgSource,setObj){

this._view=new createjs.Container();

var self=this;	

var animData=slotSpriteSource.viewGame.config;
animData.images=[slotSpriteSource.viewGame.sprite];	
var spriteSheet = new createjs.SpriteSheet(animData);
var mainSprite = new createjs.Sprite(spriteSheet, "");		
	
	mainSprite.gotoAndStop(0);	
	
var curPage=0;
var objArr=new Array();	
var cPage=0;
	
var payTable=slotSettings.SymbolGame;	
var payTableD=slotSettings.Paytable;	
	

	
for(objId in setObj){	

var cObj=setObj[objId];	


	
if(cObj.type=="bitmap"){	
	
objArr[objId]=mainSprite.clone();
objArr[objId].gotoAndStop(cObj.res[0]);
	
objArr[objId].set({x:cObj.x,y:cObj.y});		
this._view.addChild(objArr[objId]);	
	
}else if(cObj.type=="text"){	

objArr[objId]=new GradientText(cObj.defaultText, cObj.fontText, cObj.colorText)	

objArr[objId].textAlign=cObj.alignText;

this._view.addChild(objArr[objId]);	
	
objArr[objId].set({x:cObj.x,y:cObj.y});	


}
	
	

	
	
	
}
	
	

	
	

	
	
	
viewContainer.addChild(this._view);	
	
this.UpdateRules=function(){

for(var i=0; i<payTable.length; i++){	
	
for(var j=1; j<=5; j++){		
	

	
if(typeof objArr['payText'+payTable[i]+'_'+j+'_def'] !=="undefined"){	
	
objArr['payText'+payTable[i]+'_'+j+'_def'].text=NumFormat(payTableD[payTable[i]][j]*slotStateData.betline);
	
if(payTable[i]=="SCAT"){
objArr['payText'+payTable[i]+'_'+j+'_def'].text=NumFormat(payTableD[payTable[i]][j]*slotStateData.betline*slotStateData.lines);
}



	
}
		
if(typeof objArr['payText'+payTable[i]+'_'+j+'_wild'] !=="undefined"){	
	
objArr['payText'+payTable[i]+'_'+j+'_wild'].text=NumFormat(payTableD[payTable[i]][j]*slotStateData.betline*2);


	
}
	
	
}
	
	
}

};

this.ViewPage=function(){

cPage++;
	
	if(cPage>2){
		cPage=0;
		this.Close();
	}
	
var pg=cPage;	
	
if(pg==1){

objArr['rulesGamePage1'].visible=true;	
objArr['rulesGamePage2'].visible=false;	
objArr['rulesGamePage3'].visible=false;	
	
}else if(pg==2){

objArr['rulesGamePage1'].visible=false;		
objArr['rulesGamePage2'].visible=true;	
objArr['rulesGamePage3'].visible=false;	
	
}else if(pg==3){

objArr['rulesGamePage1'].visible=false;		
objArr['rulesGamePage2'].visible=false;		
objArr['rulesGamePage3'].visible=true;	
	
}

	
	
};

	
this.Open=function(){
cPage=0;
self.ViewPage();	
createjs.Tween.get(this._view).to({y:0}, 300).call(function(){dispatchEvent(new Event("opened_rules"));});		
	
};
	
this.Close=function(){
slotState=SLOT_STATE_IDLE;
createjs.Tween.get(this._view).to({y:-700}, 300).call(function(){dispatchEvent(new Event("closed_rules"));});	
	
}
	

this.ViewPage();
this.UpdateRules();

this._view.y=-700;	
	
	
addEventListener(SLOT_EVENT_START,function(){self.UpdateRules();});
addEventListener(SLOT_EVENT_BET,function(){self.UpdateRules();});
addEventListener(SLOT_EVENT_LINES,function(){self.UpdateRules();});	
	
addEventListener(SLOT_EVENT_OPENINFO,function(){self.Open();});	
addEventListener(SLOT_EVENT_CLOSEINFO,function(){self.Close();});	
addEventListener(SLOT_EVENT_PAGEINFO,function(){self.ViewPage();});	
	
	
	
return this;	
	
}