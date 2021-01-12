

/////////////UI class////////////////////

function GameMessages(viewContainer,imgSource,setObj){

this._view=new createjs.Container();

var self=this;	

	
var animData=slotSpriteSource.uiGame.config;
animData.images=[slotSpriteSource.uiGame.sprite];	
var spriteSheet = new createjs.SpriteSheet(animData);
var mainSprite = new createjs.Sprite(spriteSheet, "");	
	
var objArr=new Array();	



	
for(objId in setObj){	

var cObj=setObj[objId];	


	
if(cObj.type=="bitmap_lib"){	
	
libArr[objId]=new createjs.Bitmap(imgSource[objId][0]);	

	
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

objArr['messagesJackWnd'].alpha=0;	
objArr['messagesJackWin'].alpha=0;	

this.HideJack=function(){
	

slotState="SLOT_STATE_AFTERJACK";	
	



	
};	
	
this.HideJackWnd=function(){
	
slotStateData.isJackShow=false;
createjs.Tween.get(objArr['messagesJackWnd']).to({alpha:0}, 100);	
createjs.Tween.get(objArr['messagesJackWin']).to({alpha:0}, 100);	
	


	
};		
	

	
this.ShowJack=function(){

slotStateData.isJackShow=true;	
objArr['messagesJackWin'].text=NumFormat(slotSettings.Jackpots['jackPay']);	
	
createjs.Sound.stop();currentSound['JP']=PlaySound("JP");	
createjs.Tween.get(objArr['messagesJackWnd']).to({alpha:1}, 500);	
createjs.Tween.get(objArr['messagesJackWin']).to({alpha:1}, 500);	

slotStateData.jth=setTimeout(self.HideJack,currentSound['JP'].duration);
slotStateData.jt=setTimeout(JackAddWin,currentSound['JP'].duration);
	
};
	
	
viewContainer.addChild(this._view);
	

addEventListener(SLOT_EVENT_JACKPOTADD,function(){objArr['messagesJackWin'].text=NumFormat(slotSettings.Jackpots['jackPay']);	});	
addEventListener(SLOT_EVENT_JACKPOTHIDE,function(){objArr['messagesJackWin'].text="JACKPOT PAID";gameUI.GetObject()['uiButtonSpin'].Enable();	});	
	
	
return this;	
	
}