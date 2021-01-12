

/////////////UI class////////////////////

function GameMessages(viewContainer,setObj){

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


}else if(cObj.type=="text"){


var style = new PIXI.TextStyle({
    fontFamily: cObj.fontText.split("px")[1],
    fontSize: parseInt(cObj.fontText.split("px")[0]),
    fontWeight: 'bold',
    fill: [cObj.colorText], // gradient
    stroke: '#000000',
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