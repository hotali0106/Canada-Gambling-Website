
//Reel class

function GameReel(viewContainer,setObj,reelId,symCnt){
	
/*класс барабана*/
	
this._view=new PIXI.Container();
var reelEvent=new CustomEvent("reelStop",{detail:{reel:reelId}});	
var reelTeaser=false;	
var rollCount=0;	
var rollStepCount=0;
var self=this;	
var servSymbols=new Array();	
var reelStrip=slotSettings['reelStrip'+reelId]
var curPosition=5;

var chSymbols = new Array();	


var objArr=new Array();	
var txArr=new Array();	
var sArr=new Array();	


	
for(var objId in setObj){	

if(objId=="spriteSheet"){continue;}	
	
txArr[setObj[objId].res[0]]=PIXI.Texture.fromFrame(setObj[objId].res[0]);		
	



	
symHeight=txArr[setObj[objId].res[0]]._frame.width;
symWidth=txArr[setObj[objId].res[0]]._frame.height;	
	
}	
	


var symOffset=symHeight/248;	
	
var rX;	
var rY;	
	
var rollSpeed=(symHeight/1.2);		

	

	
	
this.SetPosition=function(sObj){


this._view.x=sObj.x;	
this._view.y=sObj.y;	
	
rX=sObj.x;	
rY=sObj.y;	
};

	
this.ChangeReelCount=function(sObj){


	
if(rollCount>4){
rollCount=4;	
}


	
};	
	
this.LongRoll=function(ic){


if(slotSettings.slotScatterType==1 ){



rollCount=ic*16;	

	
}		
	
};		
	
viewContainer.addChild(this._view);	

	
this.CheckScatters=function(){

	var rtn=0;
	
if(servSymbols[0]=="SCAT"){
rtn=1;	
}	
if(servSymbols[1]=="SCAT"){
rtn=1;		
}
if(servSymbols[2]=="SCAT"){
rtn=1;		
}		

	return rtn;
};
	
/*остановка вращений*/	

	
	
this.StopReel=function(rs,sym){
	
rollCount=rs;	
servSymbols=sym;

if(servSymbols[0]=="SCAT"){
reelTeaser=true;	
}	
if(servSymbols[1]=="SCAT"){
reelTeaser=true;	
}
if(servSymbols[2]=="SCAT"){
reelTeaser=true;	
}	
	



	

	
};
	

/*первоначальное заполнение барабана*/	
this.FillReel=function(){
curPosition=RandomInt(1,reelStrip.length-(symCnt+2));
var rPos=curPosition;	


	
for(var i=0; i<(symCnt+2); i++){


	
var sAnim=setObj[reelStrip[(rPos+i)]].res;	
	
objArr[i]=new PIXI.Sprite(txArr[sAnim[0]]);

	
	self._view.addChild(objArr[i]);
	objArr[i].x=0;
	objArr[i].y=((i-1)*symHeight);

}
	
};
	
/*пзначение от сервера, заполнение барабана*/	
this.FillServerReel=function(sym,ps){
	
servSymbols=sym;
curPosition=ps-1;

if(curPosition<0){
curPosition=reelStrip.length-1;	
}	
	

	
for(var i=0; i<(symCnt+2); i++){


if(i>0 && i<(symCnt+1)){	
var sAnim=setObj[servSymbols[i-1]].res[0];	
	

}else{
	
	
	
var sAnim=setObj[reelStrip[curPosition]].res[0];

	
}
this._view.removeChild(objArr[i]);	
objArr[i]=new PIXI.Sprite(txArr[sAnim]);



	
	this._view.addChild(objArr[i]);
	objArr[i].x=0;
	objArr[i].y=((i-1)*symHeight);
	
}
	
};	

/*маска*/	
	
/*пзначение от сервера, заполнение барабана*/	
this.FillServerReelDark=function(sym,ps){
	
servSymbols=sym;
curPosition=ps-1;

if(curPosition<0){
curPosition=reelStrip.length-1;	
}	
	

	
for(var i=0; i<(symCnt+2); i++){


if(i>0 && i<(symCnt+1)){	
var sAnim=setObj[servSymbols[i-1]].res[0];	
sAnim=sAnim.split("_SYM")[0]+"_BL";	
console.log(sAnim);	
}else{
	
	
	
var sAnim=setObj[reelStrip[curPosition]].res[0];
sAnim=sAnim.split("_SYM")[0]+"_BL";
	
}
this._view.removeChild(objArr[i]);
	
objArr[i]=new PIXI.Sprite(txArr[sAnim]);



	
	this._view.addChild(objArr[i]);
	objArr[i].x=0;
	objArr[i].y=((i-1)*symHeight);
	
}
	
};	

/*маска*/		
	
this.SetMask=function(){	



var graphics = new PIXI.Graphics();
graphics.beginFill(0xFF700B, 1);
graphics.drawRect(rX, rY, rX+symWidth, (symHeight)*symCnt);



    

       this._view.mask=graphics;

          

	
}


this.ResetMask=function(){	



var graphics = new PIXI.Graphics();
graphics.beginFill(0xFF700B, 1);
graphics.drawRect(rX-symWidth, rY+112, rX+symWidth, (symHeight)*symCnt);



    

       this._view.mask=graphics;

          

	
}
	
viewContainer.addChild(this._view);	

	
this.FillReel();	
this.GetRandomSym=function(sym){

var tmpSym=sym;	
var reelStripTmp=RandomInt(0,reelStrip.length-1);	

if( sym == servSymbols[1] || sym == servSymbols[2] ||  sym ==chSymbols[chSymbols.length-1] ||  sym ==chSymbols[chSymbols.length-2] ){

for(var i=0; i<reelStrip.length-1; i++){

sym=reelStrip[reelStripTmp];	
	
reelStripTmp--;
if(reelStripTmp<0){
reelStripTmp=reelStrip.length-1;	
}
	
	
if( sym != servSymbols[1] && sym != servSymbols[2] && sym !=chSymbols[chSymbols.length-1] && sym !=chSymbols[chSymbols.length-2] ){

	
	break;	
}else{
sym=tmpSym;	
}
	
}
	
}	
	
	
chSymbols.push(sym);	
return sym;	
};		
/*вращение барабана*/
this.MoveReel=function(delta){

	
if(rollCount>0 ){	
	
	
rollStepCount++;	
	
for(var i=0; i<(symCnt+2); i++){
	
objArr[i].y+=rollSpeed;
	
if(objArr[i].y>=symHeight*(symCnt+1)){

rollStepCount=0;	
	

	

	
if(rollCount>4 || rollCount<=1){

curPosition--;	
	
if(curPosition<0){
curPosition=reelStrip.length-1;	
}
	
if(rollCount<=7){

var chSym1=self.GetRandomSym(reelStrip[curPosition]);		
	
	
}else if(rollCount<=9){
	
var chSym1=reelStrip[curPosition];	
chSymbols.push(reelStrip[curPosition]);	
	
}else{
	
var chSym1=reelStrip[curPosition];	

}		

var sAnim=setObj[chSym1].res[0];	
	
	objArr[i].texture=txArr[sAnim];
	
	
	
}else{



var sAnim=setObj[servSymbols[rollCount-2]].res[0];	
		

	

	
	objArr[i].texture=txArr[sAnim];
	
	

}


if(rollCount==2 ){

var reelEventSnd=new CustomEvent("reelStopSnd",{detail:{reel:reelId,teaser:reelTeaser}});		
	
dispatchEvent(reelEventSnd);	
	
}	
	
	

	
objArr[i].y-=symHeight*5;	

rollCount--;	
	
	
}
	

}
	
	
}else{

	
if(rollCount==0){
console.log(slotSpinResult.reelsSymbols['reel'+reelId],reelId);	
self.FillServerReel(slotSpinResult.reelsSymbols['reel'+(reelId)],slotSpinResult.reelsSymbols['rp'][(reelId-1)]);		
}
	
for(var i=0; i<(symCnt+2); i++){
	
if(rollCount>-2){

objArr[i].y-=(rollSpeed/8)	;
	
}else if(rollCount>-4){

objArr[i].y+=(rollSpeed/8)	;
	
}else{

	
	
}

	
	
	
}

	
	
	
	
rollCount--;	
	
if(rollCount<=-8){
	
	
for(var i=0; i<(symCnt+1); i++){
	



	
	
}	
	
	
self.StopRoll();	
}
	
	
}
	

};
	
	
this.StartRoll=function(){

reelTeaser=false;	
	
rollCount=9999;	
rollStepCount=0;
totalRollStop=0;	
rollSpeed=(symHeight/1.5);	
 app.ticker.add(this.MoveReel);		
	
for(var i=0; i<(symCnt+1); i++){
	



	
	
}		
	
};
	
this.StopRoll=function(){
	
totalRollStop++;

 app.ticker.remove(this.MoveReel);	
	
if(reelTeaser ){
scattersCount++;	
}	
	
if(isLongRoll && reelId!=5){

dispatchEvent(new Event(SLOT_EVENT_LONGREEL));		
	
}	
	
if(scattersCount==2 && !isLongRoll && slotSettings.slotScatterType==1 && reelId!=5){

isLongRoll=true;	
dispatchEvent(new Event(SLOT_EVENT_LONGSTOP));	



dispatchEvent(new Event(SLOT_EVENT_LONGREEL));		
	

	
return;	
	
}
	
	
var reelEvent_=new CustomEvent("reelStop",{detail:{reel:reelId,teaser:reelTeaser}});		
	
dispatchEvent(reelEvent_);	


	

	
	
};


return this;	
}




function GameReels(viewContainer,setObj){

/*класс для управления всеми барабанами*/
	
var isFast=false;	
var isResponse=false;	
this._view=new PIXI.Container();	
var objArr=new Array();	
	
var self=this;	
	

	
for(var i=1; i<=slotSettings.slotReelsConfig.length; i++){


objArr[i-1]=new GameReel(this._view,setObj,i,slotSettings.slotReelsConfig[i-1][2]);	
objArr[i-1].SetPosition({x:slotSettings.slotReelsConfig[i-1][0],y:slotSettings.slotReelsConfig[i-1][1]});
objArr[i-1].SetMask();
	
}

viewContainer.addChild(this._view);		

	
this.AdvancedRoll=function(){
	
dispatchEvent(new Event(SLOT_EVENT_ADVANCEDSPINBONUS));
	
};

this.GetPositions=function(){

var arr=new Array();	
	
for(var i=0; i<5; i++){


arr[i]={x:objArr[i]._view.x,y:objArr[i]._view.y};
	
}	
return arr;	
};
	
this.StartRoll=function(){
isLongRoll=false;	
	
scattersCount=0;
if(slotSettings.slotBonusType==1 && bonusMode){

self.AdvancedRoll();	
	
}else{
	
	
for(var i=0; i<5; i++){

objArr[i].StartRoll();
}
	
}

	
};

this.ResetMask=function(){


	
for(var i=0; i<5; i++){



objArr[i].ResetMask();	

	

}
	

	
};		
	
this.StopReels=function(){

isResponse=true;	
var longRoll=0;	
	
for(var i=0; i<5; i++){

if(slotSettings.slotScatterType==1 ){
longRoll+=objArr[i].CheckScatters();
	}	
	

objArr[i].StopReel(5+(i*4),slotSpinResult.reelsSymbols['reel'+(i+1)]);	

	

}
	
if(isFast){

	
self.FastStopReels();	
	
}
	
	
isFast=false;	
	
};	
	
	
this.FastStopReels=function(){

isFast=true;

var longRoll=0;	
	
if(isResponse){

for(var i=0; i<5; i++){

	if(slotSettings.slotScatterType==1 ){
longRoll+=objArr[i].CheckScatters();
	}
	
if(longRoll<2){	
objArr[i].ChangeReelCount();	
}
	

}	
	
}
	
	
};	
	
/*подписываемся на нужные события*/	
addEventListener(SLOT_EVENT_HIDEWIN,function(){

if(slotSpinResult.reelsSymbols==undefined){
return;	
}
objArr[0].FillServerReel(slotSpinResult.reelsSymbols['reel1'],slotSpinResult.reelsSymbols['rp'][0]);	
objArr[1].FillServerReel(slotSpinResult.reelsSymbols['reel2'],slotSpinResult.reelsSymbols['rp'][1]);	
objArr[2].FillServerReel(slotSpinResult.reelsSymbols['reel3'],slotSpinResult.reelsSymbols['rp'][2]);	
objArr[3].FillServerReel(slotSpinResult.reelsSymbols['reel4'],slotSpinResult.reelsSymbols['rp'][3]);		
objArr[4].FillServerReel(slotSpinResult.reelsSymbols['reel5'],slotSpinResult.reelsSymbols['rp'][4]);		

});		
addEventListener(SLOT_EVENT_SHOWWIN,function(){
console.log(SLOT_EVENT_SHOWWIN);
objArr[0].FillServerReelDark(slotSpinResult.reelsSymbols['reel1'],slotSpinResult.reelsSymbols['rp'][0]);	
objArr[1].FillServerReelDark(slotSpinResult.reelsSymbols['reel2'],slotSpinResult.reelsSymbols['rp'][1]);	
objArr[2].FillServerReelDark(slotSpinResult.reelsSymbols['reel3'],slotSpinResult.reelsSymbols['rp'][2]);	
objArr[3].FillServerReelDark(slotSpinResult.reelsSymbols['reel4'],slotSpinResult.reelsSymbols['rp'][3]);		
objArr[4].FillServerReelDark(slotSpinResult.reelsSymbols['reel5'],slotSpinResult.reelsSymbols['rp'][4]);	

});			
addEventListener(SLOT_EVENT_AFTERSPIN,function(){
	isFast=false;
	isResponse=false;
	
objArr[0].FillServerReel(slotSpinResult.reelsSymbols['reel1'],slotSpinResult.reelsSymbols['rp'][0]);	
objArr[1].FillServerReel(slotSpinResult.reelsSymbols['reel2'],slotSpinResult.reelsSymbols['rp'][1]);	
objArr[2].FillServerReel(slotSpinResult.reelsSymbols['reel3'],slotSpinResult.reelsSymbols['rp'][2]);	
objArr[3].FillServerReel(slotSpinResult.reelsSymbols['reel4'],slotSpinResult.reelsSymbols['rp'][3]);		
objArr[4].FillServerReel(slotSpinResult.reelsSymbols['reel5'],slotSpinResult.reelsSymbols['rp'][4]);	

});		
addEventListener(SLOT_EVENT_STARTSPIN,function(){self.StartRoll();});		
addEventListener(SLOT_EVENT_RESULTSPIN,function(){

if(slotSettings.slotBonusType==1 && bonusMode){

objArr[0].FillServerReel(slotSpinResult.reelsSymbols['reel1']);	
objArr[1].FillServerReel(slotSpinResult.reelsSymbols['reel2']);	
objArr[2].FillServerReel(slotSpinResult.reelsSymbols['reel3']);	
objArr[3].FillServerReel(slotSpinResult.reelsSymbols['reel4']);		
objArr[4].FillServerReel(slotSpinResult.reelsSymbols['reel5']);	
	
}else{

self.StopReels();	
	
}

});		
addEventListener(SLOT_EVENT_FASTSTOP,function(){self.FastStopReels();});	
addEventListener(SLOT_EVENT_LONGSTOP,function(){

var ic=1;	
	
for(var i=totalRollStop; i<5; i++){

ic++;
objArr[i].LongRoll((ic-1)*2);	

	

}		

});	
	
return this;	
}
