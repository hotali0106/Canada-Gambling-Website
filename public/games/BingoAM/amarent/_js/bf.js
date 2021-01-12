/*------------------------------------------------*/
function getFromUrl(name) {
	var name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec( window.location.href );
	if( results == null ){
		if ( name == "mode" ) return "real";
			return "";
		}
	else return results[1];
}
/*------------------------------------------------*/
function gamePingInit(p) {
	
}	
/*------------------------------------------------*/
function gamePing() {

}
/*------------------------------------------------*/
function deviceDetect() {
config={};
config['mobile']=false;
config['device']='';
if(navigator.userAgent.indexOf("Android")>0){config['mobile']=true;config['device']='android';}
else if(navigator.userAgent.indexOf("iPhone")>0){config['mobile']=true;config['device']='iphone';}
else if(navigator.userAgent.indexOf("iPad")>0){config['mobile']=true;config['device']='iphone';}

if(navigator.userAgent.indexOf("Opera")>0 || navigator.userAgent.indexOf("OPR")>0){config['userAgent']="Opera";}
else if(navigator.userAgent.indexOf("Chrome")>0){config['userAgent']="Chrome";}
else if(navigator.userAgent.indexOf("Firefox")>0){config['userAgent']="Firefox";}
else if(navigator.userAgent.indexOf("Windows NT")>0){config['userAgent']="Firefox";}
else if(navigator.userAgent.indexOf("Safari")>0 && navigator.userAgent.indexOf("iPhone")>0){config['userAgent']="iPhone Safari";}
else if(navigator.userAgent.indexOf("Mobile Safari")>0){config['userAgent']="Mobile Safari";}
else{
	config['userAgent']="undefined";
}
//console.info("userAgent   "+navigator.userAgent);	
//console.info("mobile :"+config['mobile']+"  || userAgent : "+userAgent)
return config;
}
/*------------------------------------------------*/
function setUserAgent(window,userAgent) {
if(window.navigator.userAgent != userAgent) {
	var userAgentProp = { get: function () { return userAgent; } };
	try {
		Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
	} catch (e) {
		window.navigator = Object.create(navigator, {
			userAgent: userAgentProp
		});
	}
}
}
//setUserAgent(window, 'Mobile Safari');
/*------------------------------------------------*/