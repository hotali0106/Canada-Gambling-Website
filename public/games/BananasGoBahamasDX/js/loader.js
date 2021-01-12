

/*
загрузка файла с настройками, и загрузка изображений


*/
var loader;
var Preloader=new Object(null);
var loadPrc=0;
var loadPrc2=0;
var gamePreloader=new Object(null);
var currentResCnt2=0;
var isSplitStarted=true;

function UpdateLoadProgress(evType){
	


if(totalSource<=currentSource){
	

}
	
}



function SpriteSourceLoad(spriteName,gSource){



if(gSource.config==""){
return;	
}


totalSource+=2;

var tmpImg=new Image();
tmpImg.src=gSource.file;
tmpImg.onload=function(){currentSource++;UpdateLoadProgress("done");};
tmpImg.onerror=function(){currentSource++;UpdateLoadProgress("error");};

slotSpriteSource[spriteName] =new Object();	
slotSpriteSource[spriteName].sprite=tmpImg;

var mainSlotSet = new XMLHttpRequest();

mainSlotSet.onreadystatechange = function(ev) {
	
if (this.readyState == 4 && this.status == 200) {	
	

currentSource++;

var setObj=JSON.parse(String(ev.currentTarget.responseText));	
slotSpriteSource[spriteName].config=setObj;
	
}
	
};
	

	

mainSlotSet.open("GET", gSource.config, true);
mainSlotSet.send();



}









function LoadSlot(resObj){
	

	
	
loader=new PIXI.loaders.Loader();
slotResource=resObj;

for(prop in resObj){


	
	if(resObj[prop].spriteSheet!=undefined){	
	

	loader.add(prop,resObj[prop].spriteSheet.config);
    
	if(prop=="linesGame"){
	
	for(var i=0;i<slotSettings.SymbolGame.length;i++){
	loader.add('lnWinSym_'+slotSettings.SymbolGame[i],resObj[prop]['lnWinSym_'+slotSettings.SymbolGame[i]].config);	
	animationsRate['lnWinSym_'+slotSettings.SymbolGame[i]]=	resObj[prop]['lnWinSym_'+slotSettings.SymbolGame[i]].framerate;
	}
		
	}
		
	}
	

}
	

	
	

	



    
	

	



loader.on('progress',function (loader,res) {	

	
loadPrc=Math.round(loader.progress);	

	
});		
	
	
loader.load(function(ev,resources){
	
for(var i=0;i<slotSettings.SymbolGame.length;i++){	
animationsArr['lnWinSym_'+slotSettings.SymbolGame[i]]=resources['lnWinSym_'+slotSettings.SymbolGame[i]].data.frames;
	
}
	



});	


	
	




	
}

function UpdateLoader(){


	

Preloader.outerCircle.transform.rotation+=0.2617;	
	
if(!isFontLoaded){
	return;
}	

	if(loadPrc2<loadPrc){
	loadPrc2++;	
	}
	
Preloader.prc.text=loadPrc2+"%";

if(loadPrc2==96 && isSplitStarted){
   isSplitStarted=false;
  localStorage.setItem('gameLoaded', 'true_'+RandomInt(0,999999) );	 
}

var blockPrc=Math.round(loadPrc2/4);	

for(var i=0; i<blockPrc-1; i++){		

Preloader.innerCircleArr[i].visible=true	;
}

if(loadPrc2>=100){	
	

	app.ticker.remove(UpdateLoader);
		
	
	
app.ticker.stop();	
clearInterval(updateScreen);	
updateScreen=setInterval(function(){
	

	
	app.ticker.update();



},1000/CANVAS_FPS);
	
	
	
setTimeout(function(){	
CreateGame();
app.stage.removeChild(Preloader.main);	
delete Preloader.main;		
	
	
},500);
	
}
	
	
}





function LoadSlotSettings(){


var mainSlotSet = new XMLHttpRequest();

mainSlotSet.onreadystatechange = function(ev) {




	if (this.readyState == 4 && this.status == 200) {
	var setObj=JSON.parse(String(ev.currentTarget.responseText));

	
		
	LoadSlot(setObj);
		
	}

};
mainSlotSet.open("GET", "/games/BananasGoBahamasDX/config/desktop_view.json", true);
mainSlotSet.send();




}