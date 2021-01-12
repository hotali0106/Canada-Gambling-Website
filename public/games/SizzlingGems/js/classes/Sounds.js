

function LoadSounds(){

for(i=0; i<slotSettings.slotSounds.length; i++){



var sId=slotSettings.slotSounds[i].split(".")[0];	
	
createjs.Sound.registerSound("/games/SizzlingGems/source/SOUND/"+slotSettings.slotSounds[i], sId);	
	

	
}
	
}

var scattersSounds=0;
var currentSound=new Array();

//2,5,   10,20   25,50,   75,100   125,250   400,750

function PlaySound(sid,setObj){
	

	
var rtn = createjs.Sound.play(sid,setObj);
	
if(!soundMode){
rtn.volume=0;	
}else {
rtn.volume=1;	
}

return rtn;	
	
}

addEventListener(SLOT_EVENT_WINLINE,function(ev){
	
tm=0;

	if(currentSound['FS']!=undefined && bonusMode){
currentSound['FS'].volume=0;	
	}
	
	
	
	
	clearInterval(slotStateData.winlineInter);
	slotStateData.winlineInter=setTimeout(function(){ev.detail.win=ev.detail.win/slotStateData.betline;
	
						  
	
						  
	var wildCnt=0;
	var otherSymCnt=0;					  
	var cSym="";					  
						  
	for(var i=1;i<=5; i++){
	
	if(ev.detail.winSym['winReel'+i][1]!='none'){
	
	if(ev.detail.winSym['winReel'+i][1]=="P_1"){
	wildCnt++;	
	}
	otherSymCnt++;	
	
	if(ev.detail.winSym['winReel'+i][1]!="P_1" && ev.detail.winSym['winReel'+i][1]!="P_1_WILD"){	
	cSym=ev.detail.winSym['winReel'+i][1];	
	}
		
	}
		
		
	}
						  
	if(wildCnt==otherSymCnt){
	cSym="P_1";
	}
						  
						  
	var delayTime=1000;					  
	
	if(!slotStateData.isCountWin){				
						  
	if((cSym=="P_1" && ev.detail.count>=2) || (cSym=="P_2" && ev.detail.count>=3) || (cSym=="P_3" && ev.detail.count>=3) || (cSym=="P_4" && ev.detail.count>=3) || (cSym=="P_5" && ev.detail.count>=3) || (cSym=="P_6" && ev.detail.count>=3)){
	

						  	
	switch(cSym){
	
		case 'P_1':
			
		if(ev.detail.count>3){
		
		currentSound['P_1_LONG']=PlaySound("P_1_LONG");	
		delayTime=currentSound['P_1_LONG'].duration;		
			
		}else{
			
		currentSound['P_1']=PlaySound("P_1");	
		delayTime=currentSound['P_1'].duration;	
			
		}
		
		break;
		
			
		case 'P_2':
			
		if(ev.detail.count>3){
		
		currentSound['P_2_LONG']=PlaySound("P_2_LONG");	
		delayTime=currentSound['P_2_LONG'].duration;		
			
		}else{
			
		currentSound['P_2']=PlaySound("P_2");	
		delayTime=currentSound['P_2'].duration;	
			
		}
		
		break;	
			
			
		case 'P_3':
			
		if(ev.detail.count>3){
		
		currentSound['P_3_LONG']=PlaySound("P_3_LONG");	
		delayTime=currentSound['P_3_LONG'].duration;		
			
		}else{
			
		currentSound['P_3']=PlaySound("P_3");	
		delayTime=currentSound['P_3'].duration;	
			
		}
		
		break;		
		
		case 'P_4':
			
		
		
		currentSound['P_4']=PlaySound("P_4");	
		delayTime=currentSound['P_4'].duration;		
		
		
	
		break;	
			
		case 'P_5':
			
		
		currentSound['P_5']=PlaySound("P_5");	
		delayTime=currentSound['P_5'].duration;		
			
		
		
		break;	
			
		case 'P_6':
			
		
		currentSound['P_6']=PlaySound("P_6");	
		delayTime=currentSound['P_6'].duration;		
			
		
		
		break;		
			
	}
	
		
		
	}else{
		
	
	var delayTime=1000;					  
						  
	if(ev.detail.win<=5){
	
	currentSound['WIN_5']=PlaySound("WIN_5");	
		
	delayTime=currentSound['WIN_5'].duration;	
		
	}else if(ev.detail.win<=20){
	
	currentSound['WIN_20']=PlaySound("WIN_20");	
	delayTime=currentSound['WIN_20'].duration;		
	}else if(ev.detail.win<=50){
	
	currentSound['WIN_50']=PlaySound("WIN_50");	
	delayTime=currentSound['WIN_50'].duration;		
		
	}else if(ev.detail.win<=100){
	
	currentSound['WIN_100']=PlaySound("WIN_100");	
	delayTime=currentSound['WIN_100'].duration;		
	}else if(ev.detail.win<=250){
	
	currentSound['WIN_250']=PlaySound("WIN_250");	
	delayTime=currentSound['WIN_250'].duration;		
	}else if(ev.detail.win<=750){
	
	currentSound['WIN_750']=PlaySound("WIN_750");	
	delayTime=currentSound['WIN_750'].duration;		
	}else if(ev.detail.win>750){
	
	currentSound['WIN_MAX']=PlaySound("WIN_MAX");	
	delayTime=currentSound['WIN_MAX'].duration;		
	}
		
	}
		
	}else{
	
	delayTime=200;	
		
	}
	
     var winSoundEvent=new CustomEvent(SLOT_EVENT_WINLINENEXT ,{detail:{delay:Math.round(delayTime)}});		
     dispatchEvent(winSoundEvent);		 
						  
						 },tm);
	
	


});

addEventListener(SLOT_EVENT_STARTADDWIN,function(){
createjs.Sound.stop();	
currentSound['COLLECT']=PlaySound("COLLECT");
currentSound['COLLECT_GO']=PlaySound("COLLECT_GO");

											 
});

addEventListener(SLOT_EVENT_AFTERADDWIN,function(){
	
if(slotStateData.gambleEnd){
slotStateData.gambleEnd=false;	
}else{
	
currentSound['COLLECT_GO'].paused=true;
currentSound['COLLECT_END']=PlaySound("COLLECT_END");

}
											 
});


//addEventListener(SLOT_EVENT_WINSCATTERS,function(){PlaySound("SCAT");});

addEventListener(SLOT_EVENT_ENDWINLINE,function(){slotStateData.isCountWin=false;if(bonusMode){return;}createjs.Sound.stop();currentSound['WAIT_USER_CHOICE']=PlaySound("WAIT_USER_CHOICE", {loop:-1});});



addEventListener(SLOT_EVENT_AUTOSTOP,function(){createjs.Sound.stop();currentSound['UI_AUTO_STOP']=PlaySound("UI_AUTO_STOP");});
addEventListener(SLOT_EVENT_AUTOSTART,function(){createjs.Sound.stop();currentSound['UI_AUTO_START']=PlaySound("UI_AUTO_START");});

addEventListener(SLOT_EVENT_GAMBLESTART,function(){createjs.Sound.stop();currentSound['GAMBLE_START']=PlaySound("GAMBLE_START");});
addEventListener(SLOT_EVENT_GAMBLESLIDE,function(){currentSound['GAMBLE_CARD_BLINK']=PlaySound("GAMBLE_CARD_BLINK", {loop:-1});});
addEventListener(SLOT_EVENT_GAMBLEWIN,function(){currentSound['GAMBLE_WIN']=PlaySound("GAMBLE_WIN");});
addEventListener(SLOT_EVENT_GAMBLELOSE,function(){currentSound['GAMBLE_LOSS']=PlaySound("GAMBLE_LOSS");});

addEventListener(SLOT_EVENT_GAMBLEEND,function(){currentSound['GAMBLE_END']=PlaySound("GAMBLE_END");});

addEventListener(SLOT_EVENT_GAMBLERED,function(){currentSound['GAMBLE_CARD_BLINK'].paused=true;});
addEventListener(SLOT_EVENT_GAMBLEBLACK,function(){currentSound['GAMBLE_CARD_BLINK'].paused=true;});

addEventListener(SLOT_EVENT_OPENINFO,function(){currentSound['UI_INFO']=PlaySound("UI_INFO");});
addEventListener(SLOT_EVENT_PAGEINFO,function(){currentSound['UI_INFO_MORE']=PlaySound("UI_INFO_MORE");});
addEventListener(SLOT_EVENT_CLOSEINFO,function(){currentSound['UI_INFO_END']=PlaySound("UI_INFO_END");});

addEventListener(SLOT_EVENT_BET,function(){currentSound['UI_CHANGEBET']=PlaySound("UI_CHANGEBET");});
addEventListener(SLOT_EVENT_LINES,function(){currentSound['UI_CHANGEBET']=PlaySound("UI_CHANGEBET");});

addEventListener(SLOT_EVENT_LONGREEL,function(){currentSound['LONG_STOP']=PlaySound("LONG_STOP");});

addEventListener("ui_btn",function(ev){

if(ev.detail.bname!="uiButtonInfo"){	
	
	currentSound['UI_CLICK']=PlaySound("UI_CLICK");
}

});

addEventListener(SLOT_EVENT_STARTSPIN,function(){
	
	scattersSounds=0;
	
	if(!bonusMode){
	
	currentSound['REELSET_START']=PlaySound("REELSET_START");
	currentSound['REELSET_START_GO']=PlaySound("REELSET_START_GO");

	}else if(bonusMode && currentSound['FS']!=undefined && soundMode){
	
	currentSound['FS'].volume=1;	
		
	}	
		
		
});





addEventListener(SLOT_EVENT_STARTBONUS,function(){createjs.Sound.stop();currentSound['FS_START']=PlaySound("FS_START");});
addEventListener(SLOT_EVENT_ENDBONUS,function(){

	
bonusMode=true;	
createjs.Sound.stop();
currentSound['FS_END']=PlaySound("FS_END");	
	
setTimeout(function(){	
	
bonusMode=false;	
dispatchEvent(new Event(SLOT_EVENT_ENDWINLINE));

},currentSound['FS_END'].duration);
	
});

addEventListener(SLOT_EVENT_FIRSTSPINBONUS,function(){currentSound['FS']=PlaySound("FS", {loop:-1});});




addEventListener("reelStopSnd",function(ev){


	
	if(ev.detail.teaser ){
	
	
		
	currentSound['REELSET_STOP']=PlaySound("REELSET_STOP");	
		
	
		
	scattersSounds++;	
		
	
		
		
	}else{
	
	currentSound['REELSET_STOP']=PlaySound("REELSET_STOP");	
		
	}
	
	if(ev.detail.reel==5){
	currentSound['REELSET_START'].paused=true;	
	currentSound['REELSET_START_GO'].paused=true;	
	}
	

});	