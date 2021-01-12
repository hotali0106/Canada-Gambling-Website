

function LoadSounds(){

for(i=0; i<slotSettings.slotSounds.length; i++){



var sId=slotSettings.slotSounds[i].split(".")[0];	
	
createjs.Sound.registerSound("/games/Africa/source/SOUND/"+slotSettings.slotSounds[i], sId);	
	

	
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
	
	if(bonusMode && currentSound['FS']!=undefined){
	
	currentSound['FS'].volume=0;	
		
	}
	
	if(ev.detail.count==4){
	
	currentSound['RING_SHORT']=PlaySound("RING_SHORT");	
	tm=currentSound['RING_SHORT'].duration;	
		
	}else if(ev.detail.count==5){
		
	currentSound['RING_LONG']=PlaySound("RING_LONG");		
	tm=currentSound['RING_LONG'].duration;	
		
	}
	
	
	setTimeout(function(){ev.detail.win=ev.detail.win/slotStateData.betline;
	
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
						  
	
	
				var winSoundEvent=new CustomEvent(SLOT_EVENT_WINLINENEXT ,{detail:{delay:Math.round(delayTime)}});		
dispatchEvent(winSoundEvent);		 
						  
						 },tm);
	
	


});

addEventListener(SLOT_EVENT_ADDWIN,function(){currentSound['COLLECT']=PlaySound("COLLECT");});



addEventListener(SLOT_EVENT_WINSCATTERS,function(){

if(bonusMode && currentSound['FS']!=undefined){
	
	currentSound['FS'].volume=0;	
		
	}	
	
	currentSound['SCAT']=PlaySound("SCAT");

});

addEventListener(SLOT_EVENT_ENDWINLINE,function(){if(bonusMode){return;}createjs.Sound.stop();currentSound['WAIT_USER_CHOICE']=PlaySound("WAIT_USER_CHOICE", {loop:-1});});



addEventListener(SLOT_EVENT_AUTOSTOP,function(){createjs.Sound.stop();currentSound['UI_AUTO_STOP']=PlaySound("UI_AUTO_STOP");});
addEventListener(SLOT_EVENT_AUTOSTART,function(){createjs.Sound.stop();currentSound['UI_AUTO_START']=PlaySound("UI_AUTO_START");});

addEventListener(SLOT_EVENT_GAMBLESTART,function(){createjs.Sound.stop();currentSound['GAMBLE_START']=PlaySound("GAMBLE_START");});
addEventListener(SLOT_EVENT_GAMBLESLIDE,function(){currentSound['GAMBLE_CARD_BLINK']=PlaySound("GAMBLE_CARD_BLINK");});
addEventListener(SLOT_EVENT_GAMBLEWIN,function(){currentSound['GAMBLE_WIN']=PlaySound("GAMBLE_WIN");});

addEventListener(SLOT_EVENT_OPENINFO,function(){currentSound['UI_INFO']=PlaySound("UI_INFO");});
addEventListener(SLOT_EVENT_PAGEINFO,function(){currentSound['UI_INFO']=PlaySound("UI_INFO");});
addEventListener(SLOT_EVENT_CLOSEINFO,function(){currentSound['UI_INFO']=PlaySound("UI_INFO");});

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

	}else if(bonusMode && currentSound['FS']!=undefined && soundMode){
	
	currentSound['FS'].volume=1;	
		
	}	
		
		
});

addEventListener(SLOT_EVENT_STARTADDWIN,function(){createjs.Sound.stop();});



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

addEventListener(SLOT_EVENT_FIRSTSPINBONUS,function(){
	

		
	currentSound['FS']=PlaySound("FS", {loop:-1});
	

	
	});




addEventListener("reelStopSnd",function(ev){


	
	if(ev.detail.teaser ){
	
	if((ev.detail.reel>3 && scattersSounds<1)){	
		
	currentSound['REELSET_STOP']=PlaySound("REELSET_STOP");	
		
	}else{	
		
	scattersSounds++;	
		
	currentSound["TEASER_"+scattersSounds]=PlaySound("TEASER_"+scattersSounds);
		
	}
		
		
	}else{
	
	currentSound['REELSET_STOP']=PlaySound("REELSET_STOP");	
		
	}
	
	if(ev.detail.reel==5){
		if(currentSound['REELSET_START']!=undefined){

	currentSound['REELSET_START'].paused=true;

   }	
	}
	

});	