
	var serverString='';

    var XmlHttpRequest = new XMLHttpRequest();
    XmlHttpRequest.overrideMimeType("application/json");
    XmlHttpRequest.open('GET', '/socket_config.json', false);
    XmlHttpRequest.onreadystatechange = function ()
    {
        if (XmlHttpRequest.readyState == 4 && XmlHttpRequest.status == "200")
        {
            var serverConfig = JSON.parse(XmlHttpRequest.responseText);
            serverString=serverConfig.prefix_ws+serverConfig.host_ws+':'+serverConfig.port;
          
        }
    }
    XmlHttpRequest.send(null);



function Settings()
{
	this.value6 = serverString;
	this.value5 = ["en","de","es","gr","bg","tr","ru"];
	this.value9 = true;
	this.value10 = 2000;
	this.value11 = false;//seconds
	this.value49 = false; //time
	this.value27 = true;//sound
	this.value28 = true;// spead
	this.value12 = false; // history
	this.value50 = {g:true,h:false};
	this.value51 = {d:true,m:true};// full screen
	this.value13 = true;
	this.value20 = 20;
	this.value23 = sessionStorage._DENOMINATION;
	this.value36 = false;
	this.value37 = false;
	this.value39 = 0;
	this.value14 = 14;
	this.value15 = 4;
	this.value25 = 13;
	this.value32 = 5; 
	this.value33 = 14; 
	this.value73 = 737;
	this.value18 = false;
	this.value19 = false;
	this.value21 = {e:true,s:"",m:sessionStorage._DENOMINATION,ts:null,cs:"."};
	this.value72 = null;
	this.value30 = "..";
	this.value40 = 1.0;
	this.value38 = {w:true,l:true,m:true,i:true,a:false};
	this.value43 = false;
	this.value44 = {d:false,e:false};
	this.value45 = sessionStorage._LOADER*1; // 4 / 0 new or old loader
	this.value46 = 5;
	this.value47 = 10000;
	this.value71 = 1000;
	this.value55 = true;
	this.value57 = "modern";
	this.value62 = true;
	this.value64 = false;
	this.value65 = 0;
	this.value66 = 1000;
	this.value67 = 0;
	this.value68 = "fun";
	this.value69 = true;
	this.value74 = null;
	this.value75 = null;
	this.value76 = null;
	this.value78 = null;
	this.value79 = 0;
	this.value8 = "./menu.html";

	this.bfh = {value2:10};
	this.ges = {value2:10};
	this.bpa = {value2:10};
	this.apx = {value3:10};
	this.dof = {value2:10};
	this.dpe = {value2:10};
	this.vam = {value2:10};
	this.wsh = {value2:10};
	this.dim = {value2:10};
	this.ffr = {value2:10};
	this.ljo = {value2:10};
	this.mow = {value2:10};
	this.bef = {value2:10};
	this.bil = {value2:10};
	this.tbi = {value2:10};
	this.wir = {value3:10};
	this.wom = {value2:10};
	this.can = {value2:10};
	this.csn = {value2:10};
	this.dic = {value2:10};
	this.fic = {value2:10};
	this.hot = {value2:10};
	this.lbe = {value2:10};
	this.lga = {value2:10};
	this.mfr = {value2:10};
	this.run = {value2:10};
	this.dki = {value2:10};
	this.rec = {value2:10};
	this.maf = {value2:10};
	//this.rgj = {value1:"ravala",value2:true};
	this.sct = {value6:{g:[10,20,50,100,200,500],v:100,m:null,r:false,l:false}};
}
var webAudioEngine = null;