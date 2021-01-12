

/*
загрузка файла с настройками, и загрузка изображений


*/

var gamePreloader=new Object(null);
var currentResCnt2=0;

function UpdateLoadProgress(evType){
	


if(totalSource<=currentSource){
	

}
	
}


function GroupSourceLoad(gName,gSource){

resourceImages[gName]=new Array();

for(prop in gSource){

	if(gSource[prop].spriteSheet==undefined){

resourceImages[gName][prop]=new Array();
for(rs in gSource[prop].res){

totalSource++;

var tmpImg=new Image();
tmpImg.src='source/'+gSource[prop].res[rs];
tmpImg.onload=function(){currentSource++;UpdateLoadProgress("done");};
tmpImg.onerror=function(){currentSource++;UpdateLoadProgress("error");};

resourceImages[gName][prop][rs]=tmpImg;


}



}

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

slotResource=resObj;

for(prop in resObj){


	
	if(resObj[prop].spriteSheet!=undefined){	
	
 SpriteSourceLoad(prop,resObj[prop].spriteSheet);

	}
}


/*preloader*/	
gamePreloader.cc=new createjs.Container();
gamePreloader.ptext= new createjs.Text("0%", "40px ArialBold", "#FFFFFF");
gamePreloader.ptext.set({x:61,y:28,textAlign:"center"});
gamePreloader.cc.set({x:920,y:495});	
gamePreloader.cc.addChild(gamePreloader.ptext);	

///////////////////////////

gamePreloader.circle_g=new Array();
gamePreloader.circle_g2=new Array();
gamePreloader.circle_g2cnt=0;
gamePreloader.circle_gcnt=0;

var rad=180;
var rad2=100;
var alph=0.10;


for(var jj=0; jj<24; jj++){

gamePreloader.circle_g[jj]=new createjs.Shape();

gamePreloader.circle_g[jj].graphics.beginLinearGradientFill(["#FFFFFF","#FFFFFF"], [0.1, 0], 0, 40, 0, 200);
gamePreloader.circle_g[jj].graphics.drawRect(0, 0,23, 18);

gamePreloader.circle_g[jj].set({alpha:alph,x:50,y:50,regX:15,regY:rad,rotation:jj*15});
gamePreloader.cc.addChild(gamePreloader.circle_g[jj]);	
	alph+=0.04;
////////////////////

gamePreloader.circle_g2[jj]=new createjs.Shape();

gamePreloader.circle_g2[jj].graphics.beginLinearGradientFill(["#FFFFFF","#FFFFFF"], [0.1, 0], 0, 40, 0, 200);
gamePreloader.circle_g2[jj].graphics.drawRect(0, 0,12, 10);

gamePreloader.circle_g2[jj].set({x:50,y:50,visible:false,regX:15,regY:rad2,rotation:jj*15});
gamePreloader.cc.addChild(gamePreloader.circle_g2[jj]);		
	
	
}

///////////////////////////////

gamePreloader.cc.scaleX=0.8;
gamePreloader.cc.scaleY=0.8;

stage.addChild(gamePreloader.cc);		
	

createjs.Ticker.addEventListener("tick", UpdateLoader);	
	
}

function UpdateLoader(){

if(currentSource>currentResCnt2){
currentResCnt2=currentSource;	
}

var prc=Math.round(currentResCnt2/(totalSource/100));

gamePreloader.ptext.text=prc+"%";	
var wp=gamePreloader.cc.getBounds();

gamePreloader.cc.set({x:CANVAS_W/2-50,y:CANVAS_H/2-50});	

gamePreloader.circle_g[gamePreloader.circle_gcnt].alpha=1;

gamePreloader.circle_gcnt++;

if(gamePreloader.circle_gcnt>23){
gamePreloader.circle_gcnt=0;	
}



for(var jj=0; jj<24; jj++){

if(jj<Math.round(prc/4)){
gamePreloader.circle_g2[jj].visible=true;	
}

if(gamePreloader.circle_g[jj].alpha>0){
gamePreloader.circle_g[jj].alpha-=0.041;
}
////////////////////
}


if(prc>=100){
createjs.Ticker.setFPS(CANVAS_FPS);
createjs.Ticker.removeEventListener("tick", UpdateLoader);	

CreateGame();	
	
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
mainSlotSet.open("GET", "/games/Africa/config/engine.json", true);
mainSlotSet.send();




}