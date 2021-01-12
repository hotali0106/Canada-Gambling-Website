

/////////////UI class////////////////////

function GameRules(viewContainer,setObj){

this._view=new PIXI.Container();

var self=this;	


	
var curPage=0;
var objArr=new Array();	
var cPage=0;
	
var payTable=slotSettings.SymbolGame;	
var payTableD=slotSettings.Paytable;	
var settingsObjects=new Array();	

	
for(objId in setObj){	

var cObj=setObj[objId];	
settingsObjects[objId]=setObj[objId];	


	
if(cObj.type=="container"){	
	
objArr[objId]=new PIXI.Container();

this._view.addChild(objArr[objId]);	
	
objArr[objId].x=cObj.x;	
objArr[objId].y=cObj.y;	
	
}else if(cObj.type=="bitmap"){	
	
objArr[objId]=new PIXI.Sprite(PIXI.Texture.fromFrame(cObj.res[0]));

if(cObj.parentC!=undefined){	
	
objArr[cObj.parentC].addChild(objArr[objId]);	
	
}else{

this._view.addChild(objArr[objId]);		
	
}
	
	
objArr[objId].x=cObj.x;	
objArr[objId].y=cObj.y;	
	
}else if(cObj.type=="richText"){	

	
var style = new PIXI.TextStyle({
    fontFamily: cObj.fontText.split("px")[1],
    fontSize: parseInt(cObj.fontText.split("px")[0]),
    fontWeight: cObj.fontWeight,
    fill: [cObj.colorText], 
    stroke: cObj.stroke,
    strokeThickness: cObj.strokeThickness,
	align: cObj.alignText,	
    dropShadow: cObj.dropShadow,
    dropShadowColor: cObj.dropShadowColor,
    dropShadowBlur: cObj.dropShadowBlur,
    dropShadowAngle: cObj.dropShadowAngle,
    dropShadowDistance: cObj.dropShadowDistance,
    wordWrap: cObj.wordWrap,
    wordWrapWidth: cObj.wordWrapWidth
});	
	
	
	
objArr[objId]=new PIXI.Text(cObj.defaultText, style);	



if(cObj.alignText=="center"){
objArr[objId].anchor.set(0.5, 0);	
}else if(cObj.alignText=="left"){
objArr[objId].anchor.set(0, 0);	
}else if(cObj.alignText=="right"){
objArr[objId].anchor.set(1, 0.1);	
}



if(cObj.parentC!=undefined){	
	
objArr[cObj.parentC].addChild(objArr[objId]);	
	
}else{

this._view.addChild(objArr[objId]);		
	
}
	
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



if(cObj.parentC!=undefined){	
	
objArr[cObj.parentC].addChild(objArr[objId]);	
	
}else{

this._view.addChild(objArr[objId]);		
	
}
	
objArr[objId].x=cObj.x;
objArr[objId].y=cObj.y;




}else if(cObj.type=="text_p"){	

	
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
    dropShadowAngle: 100,
    dropShadowDistance: 2,
    wordWrap: true,
    wordWrapWidth: 940
});	
	
	
	
objArr[objId]=new PIXI.Text(cObj.defaultText, style);	



if(cObj.alignText=="center"){
objArr[objId].anchor.set(0.5, 0);	
}else if(cObj.alignText=="left"){
objArr[objId].anchor.set(0, 0);	
}else if(cObj.alignText=="right"){
objArr[objId].anchor.set(1, 0.1);	
}




if(cObj.parentC!=undefined){	
	
objArr[cObj.parentC].addChild(objArr[objId]);	
	
}else{

this._view.addChild(objArr[objId]);		
	
}
	
objArr[objId].x=cObj.x;
objArr[objId].y=cObj.y;




}else if(cObj.type=="text_h"){	

	
var style = new PIXI.TextStyle({
    fontFamily: cObj.fontText.split("px")[1],
    fontSize: parseInt(cObj.fontText.split("px")[0]),
    fontWeight: 'bold',
    fill: [cObj.colorText], // gradient
    stroke: '#FFFF66',
    strokeThickness: 2,
	align: cObj.alignText,	
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 3,
    dropShadowAngle: 70,
    dropShadowDistance: 4,
    wordWrap: true,
    wordWrapWidth: 940
});	
	
	
	
objArr[objId]=new PIXI.Text(cObj.defaultText, style);	



if(cObj.alignText=="center"){
objArr[objId].anchor.set(0.5, 0);	
}else if(cObj.alignText=="left"){
objArr[objId].anchor.set(0, 0);	
}else if(cObj.alignText=="right"){
objArr[objId].anchor.set(1, 0.1);	
}




if(cObj.parentC!=undefined){	
	
objArr[cObj.parentC].addChild(objArr[objId]);	
	
}else{

this._view.addChild(objArr[objId]);		
	
}
	
objArr[objId].x=cObj.x;
objArr[objId].y=cObj.y;




}
	
	
	
	

	
	
	
}
	
	
this.GetObjects=function(){
 return objArr; 
}
	
	
for(var j=1; j<=5; j++){
	

	
	
for(var i=0; i<=10; i++){

	
if(objArr['rulesContainerPage'+i]!=undefined){

var graphics = new PIXI.Graphics();
graphics.beginFill(0xFF700B, 1);
graphics.drawRect(settingsObjects['rulesGamePage1'].x, settingsObjects['rulesGamePage1'].y, settingsObjects['rulesGamePage1'].x+objArr['rulesGamePage1']._texture.orig.width ,settingsObjects['rulesGamePage1'].y+objArr['rulesGamePage1']._texture.orig.height);
objArr['rulesContainerPage'+i].mask=graphics;	

	
	
}
	
	if(objArr['rulesPage'+j+'Text'+i]!=undefined){
objArr['rulesPage'+j+'Text'+i].text=slotLanguage['rulesPage'+j+'Text'+i];	
	}
	
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

TextFormat(objArr['payText'+payTable[i]+'_'+j+'_def'],6);

	
}
		
if(typeof objArr['payText'+payTable[i]+'_'+j+'_wild'] !=="undefined"){	
	
objArr['payText'+payTable[i]+'_'+j+'_wild'].text=NumFormat(payTableD[payTable[i]][j]*slotStateData.betline*2);

TextFormat(objArr['payText'+payTable[i]+'_'+j+'_wild'],6);
	
}
	
	
}
	
	
}

};

	
this.ViewPage=function(){

cPage++;
	
	if(cPage>3){
		cPage=1;
		
	}
	
	
	

objArr['rulesContainerPage1'].visible=true;		
objArr['rulesContainerPage2'].visible=true;		
objArr['rulesContainerPage3'].visible=true;	
	
var pg=cPage;	
	
if(pg==1){

objArr['rulesContainerPage1'].y=-1000;	
objArr['rulesContainerPage1'].visible=true;		
this._view.removeChild(objArr['rulesContainerPage1']);	
this._view.addChild(objArr['rulesContainerPage1']);	
	

	
createjs.Tween.get(objArr['rulesContainerPage1']).to({y:settingsObjects['rulesContainerPage1'].y}, 200);	
	
}else if(pg==2){
	
objArr['rulesContainerPage2'].y=-1000;		
objArr['rulesContainerPage2'].visible=true;			
this._view.removeChild(objArr['rulesContainerPage2']);	
this._view.addChild(objArr['rulesContainerPage2']);	
	

	
createjs.Tween.get(objArr['rulesContainerPage2']).to({y:settingsObjects['rulesContainerPage2'].y}, 200);	
	
	
}else if(pg==3){

objArr['rulesContainerPage3'].y=-1000;	
objArr['rulesContainerPage3'].visible=true;			
this._view.removeChild(objArr['rulesContainerPage3']);	
this._view.addChild(objArr['rulesContainerPage3']);		

	
	
createjs.Tween.get(objArr['rulesContainerPage3']).to({y:settingsObjects['rulesContainerPage3'].y}, 200);		
	
}

this._view.removeChild(objArr['rulesContainerTop']);	
this._view.addChild(objArr['rulesContainerTop']);	
	
};

	
this.Open=function(){
cPage=1;


objArr['rulesContainerPage1'].visible=true;		
objArr['rulesContainerPage2'].visible=false;		
objArr['rulesContainerPage3'].visible=false;		
this._view.alpha=0;	
this._view.visible=true;	
createjs.Tween.get(this._view).to({alpha:1.0}, 150);	
	
};
	
this.Close=function(){
slotState=SLOT_STATE_IDLE;
createjs.Tween.get(this._view).to({alpha:0,visible:false}, 150);	
	
}
	

this.ViewPage();
this.UpdateRules();

this._view.alpha=0;	
this._view.visible=false;
	
	
addEventListener(SLOT_EVENT_START,function(){self.UpdateRules();});
addEventListener(SLOT_EVENT_BET,function(){self.UpdateRules();});
addEventListener(SLOT_EVENT_LINES,function(){self.UpdateRules();});	
	
addEventListener(SLOT_EVENT_OPENINFO,function(){self.Open();});	
addEventListener(SLOT_EVENT_CLOSEINFO,function(){self.Close();});	
addEventListener(SLOT_EVENT_PAGEINFO,function(){self.ViewPage();});	
	
	
	
return this;	
	
}