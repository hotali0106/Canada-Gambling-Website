
////////////////buttons class///////////////////
function ButtonUI(viewContainer,bName,bSource,stateList){

var btnEvent=new CustomEvent("ui_btn",{detail:{bname:bName}});	
this.isBlock=false;	
this._view=new createjs.Container();	
var self=this;	
var objArr=new Array();
	
this.buttonState="enabled";	
	

this._view=bSource.clone();	
	


viewContainer.addChild(this._view);	

/*-------------*/	
	

	
	
/*------------*/	
	
this.Enable=function(){


	
if(self.isBlock){

self._view.gotoAndStop(stateList[3]);

self.buttonState="disabled";	
	
}else{
	
self._view.gotoAndStop(stateList[0]);
	
self.buttonState="enabled";		
}
	
	
};

this.Disable=function(){
self.buttonState="disabled";
self._view.gotoAndStop(stateList[3]);
	
};	
	
var Over=function(){

if(self._view.currentAnimation==stateList[0]){
	
self._view.gotoAndStop(stateList[1]);
	
}
	
};	
	
var Out=function(){

if(self._view.currentAnimation==stateList[1]){	
	
self._view.gotoAndStop(stateList[0]);
	
}
	
};		
	
	
var Press=function(){

if(self._view.currentAnimation==stateList[1] || self._view.currentAnimation==stateList[0]){	
	
self._view.gotoAndStop(stateList[2]);	
	
}
	
};		
	
var Pressup=function(){

if(self._view.currentAnimation==stateList[2]){	
	
self._view.gotoAndStop(stateList[0]);

dispatchEvent(btnEvent);	

}
	
};			
	
	
/*-------------*/	
	
this._view.addEventListener("mouseover",Over);	
this._view.addEventListener("mouseout",Out);	
this._view.addEventListener("mousedown",Press);	
this._view.addEventListener("pressup",Pressup);	
	
	
/*------------*/	
	
	
	
}