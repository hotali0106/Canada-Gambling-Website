
////////////////buttons class///////////////////
function ButtonText(viewContainer,bName,stateList,stateList2){

var btnEvent=new CustomEvent("ui_btn",{detail:{bname:bName}});	
this.isBlock=false;	
this._view=new PIXI.Container();	
this.isBlinked=false;	
var self=this;	
var objArr=new Array();

var style = new PIXI.TextStyle({
    fontFamily: 'Verdana Regular',
    fontSize: 26,
    fontWeight: 'bold',
    fill: ["#000000","#000000"], // gradient
    stroke: '#FFFFFF',
    strokeThickness: 0,
	align: 'center',	
    dropShadow:true,
    dropShadowColor: '#FFFFFF',
    dropShadowBlur: 5,
    dropShadowAngle: 0,
    dropShadowDistance: 0,
    wordWrap: false,
    wordWrapWidth: 440
});	
	
	
	
objArr['text']=new PIXI.Text(slotLanguage[bName], style);	



objArr['text'].anchor.set(0.5, 0.5);	

	
	
this.buttonState="enabled";	
	

var texturesButton=[];

	
for(var i=0; i<=3; i++){

texturesButton[i]=PIXI.Texture.fromFrame(stateList[i]);	
}

var buttonSprite=new PIXI.Sprite(texturesButton[0]);	


objArr['text'].x=texturesButton[0].orig.width/2;	
objArr['text'].y=texturesButton[0].orig.height/2;	


	

this._view.addChild(buttonSprite);	
	
	

if(stateList2!=undefined){

var animsId=["A","B","C","D","E","F","G","H","I","G","K","L","M","N","O","P"];	
var animData=[];	
var animData2=[];	
	
for(var i=0;i<animsId.length; i++){

animData.push(PIXI.Texture.fromFrame(stateList2.blinkE[0]+animsId[i]));	
animData2.push(PIXI.Texture.fromFrame(stateList2.blinkO[0]+animsId[i]));	
	
}
animsId.reverse();	
for(var i=0;i<animsId.length; i++){

animData.push(PIXI.Texture.fromFrame(stateList2.blinkE[0]+animsId[i]));	
animData2.push(PIXI.Texture.fromFrame(stateList2.blinkO[0]+animsId[i]));	
	
}	
	
objArr['blinkE']= new PIXI.extras.AnimatedSprite(animData);	
objArr['blinkE'].animationSpeed=(stateList2.framerate/(CANVAS_FPS/100))/100;
objArr['blinkE'].stop();	
objArr['blinkE'].visible=false;	
this._view.addChild(objArr['blinkE']);	
objArr['blinkO']= new PIXI.extras.AnimatedSprite(animData2);	
objArr['blinkO'].animationSpeed=(stateList2.framerate/(CANVAS_FPS/100))/100;
objArr['blinkO'].stop();	
objArr['blinkO'].visible=false;	
this._view.addChild(objArr['blinkO']);	
	
this.Blink=function(bMod){

if(bMod){

objArr['blinkE'].play();	
objArr['blinkE'].visible=true;		

self.isBlinked=true;	
	
}else{
	
self.isBlinked=false;	
objArr['blinkE'].stop();	
objArr['blinkO'].stop();	
objArr['blinkE'].visible=false;		
objArr['blinkO'].visible=false;		
	
}
	
	
};	
	
	
}	
	
	
this._view.addChild(objArr['text']);	
viewContainer.addChild(this._view);	

/*-------------*/	
	


	
/*------------*/	
this.Enable=function(){


	
if(self.isBlock){

buttonSprite.texture=texturesButton[3];

self.buttonState="disabled";	


	
}else{

	
	
buttonSprite.texture=texturesButton[0];
	
if(self.isBlinked){
objArr['blinkE'].play();	
objArr['blinkO'].stop();	
objArr['blinkE'].visible=true;		
objArr['blinkO'].visible=false;			
}	
	
self.buttonState="enabled";		
}

		

	
	
};
	
this.ChangeLabel=function(lb){

bName=lb;	
objArr['text'].text=slotLanguage[bName];	
	
};

this.Disable=function(){
self.buttonState="disabled";
buttonSprite.texture=texturesButton[3];

if(self.isBlinked){
objArr['blinkE'].stop();	
objArr['blinkO'].stop();	
objArr['blinkE'].visible=false;		
objArr['blinkO'].visible=false;			
}	
	
};	
	
var Over=function(){

if(buttonSprite.texture==texturesButton[0]){
	
buttonSprite.texture=texturesButton[1];

if(self.isBlinked){
objArr['blinkE'].stop();	
objArr['blinkO'].play();	
objArr['blinkE'].visible=false;		
objArr['blinkO'].visible=true;			
}
	
}
	
};	
	
var Out=function(){

if(buttonSprite.texture==texturesButton[1]){	
	
buttonSprite.texture=texturesButton[0];
	
if(self.isBlinked){
objArr['blinkE'].play();	
objArr['blinkO'].stop();	
objArr['blinkE'].visible=true;		
objArr['blinkO'].visible=false;			
}	
	
}
	
};		
	
	
var Press=function(){

if(buttonSprite.texture==texturesButton[1] || buttonSprite.texture==texturesButton[0]){	
	
buttonSprite.texture=texturesButton[2];	

if(self.isBlinked){
objArr['blinkE'].stop();	
objArr['blinkO'].stop();	
objArr['blinkE'].visible=false;		
objArr['blinkO'].visible=false;			
}	
	
}
	
};		
	
var Pressup=function(){

if(buttonSprite.texture==texturesButton[2]){	
	
buttonSprite.texture=texturesButton[0];

dispatchEvent(btnEvent);	
	
}
	
};			
	
	
/*-------------*/	
this._view.on('pointerdown', Press)
        .on('pointerup', Pressup)
        .on('pointerupoutside', Out)
        .on('pointerover', Over)
        .on('pointerout', Out);	

this._view.interactive = true;	
	
/*------------*/	
	
	
	
	
}
////////////////buttons class///////////////////
function ButtonUI(viewContainer,bName,stateList){

var btnEvent=new CustomEvent("ui_btn",{detail:{bname:bName}});	
this.isBlock=false;	
this._view=new PIXI.Container();	
var self=this;	
var objArr=new Array();
	
this.buttonState="enabled";	
	

var texturesButton=[];

	
for(var i=0; i<=3; i++){

texturesButton[i]=PIXI.Texture.fromFrame(stateList[i]);	
}

var buttonSprite=new PIXI.Sprite(texturesButton[0]);	
	


this._view.addChild(buttonSprite);	
viewContainer.addChild(this._view);	

/*-------------*/	
	

	
	
/*------------*/	
this.Enable=function(){


	
if(self.isBlock){

buttonSprite.texture=texturesButton[3];

self.buttonState="disabled";	


	
}else{

	
	
buttonSprite.texture=texturesButton[0];
	
self.buttonState="enabled";		
}

		

	
	
};

this.Disable=function(){
self.buttonState="disabled";
buttonSprite.texture=texturesButton[3];

	
	
};	
	
var Over=function(){

if(buttonSprite.texture==texturesButton[0]){
	
buttonSprite.texture=texturesButton[1];
	
}
	
};	
	
var Out=function(){

if(buttonSprite.texture==texturesButton[1]){	
	
buttonSprite.texture=texturesButton[0];
			
}
	
};		
	
	
var Press=function(){

if(buttonSprite.texture==texturesButton[1] || buttonSprite.texture==texturesButton[0]){	
	
buttonSprite.texture=texturesButton[2];	
	
}
	
};		
	
var Pressup=function(){

if(buttonSprite.texture==texturesButton[2]){	
	
buttonSprite.texture=texturesButton[0];

dispatchEvent(btnEvent);	
	
}
	
};			
	
	
/*-------------*/	
this._view.on('pointerdown', Press)
        .on('pointerup', Pressup)
        .on('pointerupoutside', Out)
        .on('pointerover', Over)
        .on('pointerout', Out);	

this._view.interactive = true;	
	
/*------------*/	
	
	
	
	
}