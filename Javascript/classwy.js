var browserName = navigator.userAgent.toLowerCase();
var data = new wsdata();
data.version = 1;
data.groupId = 0;
data.sequence = 0;
data.datalen = 0;
var transData;

function IsChromeSupportNacl() {
    if ((/chrome/i.test(browserName)) && !(/edge/i.test(browserName)) )
    {
        var googleVersion = (browserName.split("chrome/")[1]).split(".")[0];
        //make version judge, such as 45.xxx
        if (googleVersion >= 45) 
        {
            return true;
        }else{
            return false;
        }
    }else {
        return false;
    }
}
function IsFirefox(){
    if (/firefox/i.test(browserName)){
        /*var FFVersion = (browserName.split("firefox/")[1]).split(".")[0];
        if (FFVersion >= 52) 
        {
            return true;
        }else{
            return false;
        }*/
        return true;
    }else{
    	return false;
    }
}
function IsEdge(){
	if (/edge/i.test(browserName)){
		return true;
	}else{
		return false;
	}
}
function IsIE11(){
	if(/trident/i.test(browserName) && (browserName.indexOf("msie") < 0)){
		return true;
	}else{
		return false;
	}
}
function DvrInfo(){
    this.obj = null; //控件对象
    this.tmp_MotionArea = "";
    var audio = document.getElementById('audioTag');
	if(IsChromeSupportNacl() || IsFirefox()){
		this.Test = function(){}
		this.Login = function(ip, port, webport, user, pass, streamType,n){
			try{
				if(H5Live){
					serviceFlag = 2;
				}
				data.msgId = CMD_REQUEST_LOGIN;
				var login = new loginCmd();
				login.ip = ip;
				login.ddns = "";
				login.uid = "";
				login.usr = user;
				login.pwd = pass;
				login.webPort = port;
				login.mediaPort = port;
				login.ddnsMedia = port;
				login.mac = "";
				login.ipcType = FOSIPC_H264;
				login.connectType = FOSCNTYPE_IP;
				login.streamType = streamType;
				login.timeout = 5000;
				login.serviceType = serviceFlag;
				data.cmdObject = login;
				transData = JSON.stringify(data);
				if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
					wsCore.socket.send(transData);
				}
			}catch(e){
				console.log("loginCmd Error : "+ e);
			}
		}
		this.SetHttpsFlg = function (flag) {}
		this.SendCgiCmd = function (cmd, tmeout, rsv) {
			if (cmd.indexOf("fwUpgrade") != -1){
				data.msgId = WS_REQUEST_FIRMWARE_UPGRADE;
				var updateStr = new pathSet();
				updateStr.timeout = tmeout;
				if(lanPage=="sys_updata"){
					updateStr.path = encodeURIComponent($("#txtSysUpdate").val());
				}
				if(lanPage=="sys_patch"){
					updateStr.path = encodeURIComponent($("#txtSysPatch").val());
				}
				data.cmdObject = updateStr;
			}
            else if (cmd.indexOf("importConfig") != -1){
				data.msgId = WS_REQUEST_IMPORT_CONFIG_FILE;
				var importStr = new pathSet();
				importStr.path = encodeURIComponent($("#txtSysConfig").val());
				importStr.timeout = tmeout;
				data.cmdObject = importStr;
            }
			else{	
				data.msgId = WS_REQUEST_CGI;
				var cgiStr = new CGIStr();
				cgiStr.cgi = cmd;
				cgiStr.timeout = tmeout;
				data.cmdObject = cgiStr;
			}

			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.LeaveMotionSet = function(i){
			$("#mbox").css("display", "none");
			$("#mboxamb").css("display","none");
			this.VideoPlay(0,gVar_first.ip,4);
		}
		this.LeaveAreaSet = function(i){
			$("#box").css("display", "none");
		}
		this.EnterAreaSet = function(i){
			$("#box").css("display", "");
		}
		this.EnterConfigPage = function(i,n){}
		this.EnterMotionSet = function(i, n, url, usr, pwd, w, h){
			this.VideoPlay(0,gVar_first.ip,3,1);
		}
		this.Live = function(i){}
		this.GetMotionArea = function(){}
		this.VideoPlay = function(i,ip, cmd){
			try{
				if(cmd == 3){
					data.msgId = WS_REQUEST_OPEN_VIDEO;
				}else if(cmd == 4){
					data.msgId = WS_REQUEST_CLOSE_VIDEO;
				}
				var vp = new videoPlay();
				vp.streamType = gVar.nStreamType;
				vp.timeout = 5000;
				data.cmdObject = vp;
				transData = JSON.stringify(data);
				if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
					wsCore.socket.send(transData);
				}
			}catch(e){
				console.log("VideoPlay Error: " + e);
			}
		}
		this.UpdateFirmFilePath = function(fun){
			UpdateFirmFilePathCallBack = fun;
			data.msgId = WS_REQUEST_SELECT_FILE;
			var fp = new TimeOut();
			fp.timeout = 5000;
			data.cmdObject = fp;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.GetFileSizeByPath = function(path,fun){
        	GetFileSizeByPathCallBack = fun;
        	data.msgId = WS_REQUEST_GET_FILE_SIZE;
        	var fs = new pathSet();
        	fs.path = encodeURIComponent(path);
			fs.timeout = 5000;
			data.cmdObject = fs;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.GetDevIPandPort = function(t){
			data.msgId = WS_REQUEST_SEARCH_DEV_IP_AND_PORT;
			var devIPandPort = new TimeOut();
			devIPandPort.timeout = t;
			data.cmdObject = devIPandPort;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.SetMotionArea = function(){}
		this.ScordLiveControler = function (url, port, method, parms, type, channel) {
			videoState = 1;
		    if (typeof channel == 'undefined') {
		        channel = 0;
		    }
		    try {
		    	if(H5Live == 0){	
		        	this.obj[0].ScordLiveControler(url, port, method, parms, type);
		        	this.obj[0].FlashState();
		    	}else{
		    		Flv_load_video();
		    		Flv_load_audio();
		    	}
		    } catch (e) { console.log(e) }
		}
		this.ScordLiveStop = function (channel) {
			videoState = 0;
		    if (typeof channel == 'undefined') {
		        channel = 0;
		    }
		    try {
		    	if(H5Live == 0){
		        	this.obj[0].ScordLiveStop();
		    	}else{
		    		
		    		//flv_destroy();
		    	}
		    } catch (e) {console.log(e) }
		}
		this.OpenAudio = function(i){
			try{
				if(H5Live == 0){
					this.obj[0].volume(100);
				}else{
					audio.muted = false;
				}
			}catch(e){}
		}
		this.CloseAudio = function(i){
			try{
				if(H5Live == 0){
					this.obj[0].volume(0);
				}else{
					audio.muted = true;
				}			
			}catch(e){}
		}
		this.TalkCMD = function(i,cmd){
			data.msgId = WS_REQUEST_TALK;
			var talk = new Talk();
			if (cmd == 0){
				talk.operation = 1;
			}else{
				talk.operation = 0;
			}
			talk.timeout = 5000;
			data.cmdObject = talk;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.Record=function(t){
		    window.clearTimeout(hRecord[IFs]);
		    data.msgId = WS_REQUEST_RECORD;
		    var record = new Record();
		    if (t){//open
		    	record.operation = 1;
		    }
		    else{
		    	record.operation = 0;
		    }
		    record.type = 2;
		    record.timeout = 5000;
		    data.cmdObject = record;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.LocalAlarmRecord=function(t, channl){
			data.msgId = WS_REQUEST_RECORD;
		    var record = new Record();
		    if (t){//open
		    	record.operation = 1;
		    }
		    else{
		    	record.operation = 0;
		    }
		    record.type = 1;
		    record.timeout = 5000;
		    data.cmdObject = record;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}    
		}
		this.GetRecordPath = function(fun){
			GetRecordPathCallBack = fun;
	    	data.msgId = WS_REQUEST_GET_RECORD_PATH;
			var getrp = new TimeOut();
			getrp.timeout = 5000;
			data.cmdObject = getrp;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.SetRecordPath = function(path){
			data.msgId = WS_REQUEST_SAVE_RECORD_PATH;
			var setrp = new pathSet();
			setrp.timeout = 5000;
			setrp.path = encodeURIComponent(path);
			data.cmdObject = setrp;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.SelectRecordPath = function(fun){
			SelectRecordPathCallBack = fun;
			data.msgId = WS_REQUEST_SELECT_RECORD_PATH;
			var rp = new TimeOut();
			rp.timeout = 5000;
			data.cmdObject = rp;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.OpenLocalRecordFolder = function(path){
			data.msgId = WS_REQUEST_OPEN_RECORD_PATH;
			var lrp = new pathSet();
			lrp.timeout = 5000;
			lrp.path = encodeURIComponent(path);
			data.cmdObject = lrp;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.SnapPicture = function(){
			data.msgId = WS_REQUSET_SNAP;
			var obj = new TimeOut();
			obj.timeout = 5000;
			data.cmdObject = obj;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.FullScreen = function(){
			flashFullScreen();
		}
		this.displayGreenCircle = function (display) {
	        try {
	        	if(H5Live == 0){
	        		this.obj[0].DisplayGreenCircle(display); 
	        	}else{
        			ShowCircleGreen(display);
					if(gVar.sPage != 1){
	        			ShowCircleGreen(0);
	        		}
	        		//fixVideoSignPos(videoWidth,videoHeight);
	        	}
      		} catch (e) {console.log(e) } 
      	} 
      	this.displayRedCircle = function (display) {
	        try {
	        	if(H5Live == 0){
	        		this.obj[0].DisplayRedCircle(display); 
	        	}else{
	        		ShowCircleRed(display);
					if(gVar.sPage != 1){
	        			ShowCircleRed(0);
	        		}
	        		//fixVideoSignPos(videoWidth,videoHeight);
	        	}
	        } catch (e) {console.log(e) } 
	    }
	    this.closeWebSocketProcess = function(){
	    	data.msgId = WEB_TELL_QUIT;
            var str = new TimeOut();
            str.timeout = 5000;
            data.cmdObject = str;
            transData = JSON.stringify(data);
            if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
                wsCore.socket.send(transData);
            }
	    }
	    this.SDManage = function(ip){
	    	data.msgId = WS_REQUEST_SD_MANAGER;
            var str = new SDManageCmd();
            str.timeout = 5000;
            str.ip = ip;
            data.cmdObject = str;
            transData = JSON.stringify(data);
            if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
                wsCore.socket.send(transData);
            }
	    }
	    this.ConnectingPrompt = function(i){
	    	try{
	    		if(H5Live == 0){
	    			this.obj[0].connectingPrompt(i);
	    		}else{
	    			ShowConnectErrorTip(i);
	    			if(gVar.sPage != 1){
		    			ShowConnectErrorTip(0);
	    			}
	    		}
	    	}catch(e){}
	    }
	    this.ClearAreas = function(){
	    	$(".rect").remove();
	    }
	    this.flashState = function(){
	    	try{
		    	this.obj[0].FlashState();
		    	flashState = 1;
	    	}catch(e){
	    		consoleMsg("flashState : " + e);
	    		flashState = 0;
	    	}
	    }
	    this.stopAudio = function(){
	    	if(H5Live == 0){	
	    		this.obj[0].StopAudio();
	    	}
	    }
	}else if(IsEdge()){
		this.Test = function(){}
		this.Login = function(ip, port, webport, user, pass, streamType,n){
			try{
				if(H5Live_Edge){
					serviceFlag = 2;
				}
				data.msgId = CMD_REQUEST_LOGIN;
				var login = new loginCmd();
				login.ip = ip;
				login.ddns = "";
				login.uid = "";
				login.usr = user;
				login.pwd = pass;
				login.webPort = port;
				login.mediaPort = port;
				login.ddnsMedia = port;
				login.mac = "";
				login.ipcType = FOSIPC_H264;
				login.connectType = FOSCNTYPE_IP;
				login.streamType = streamType;
				login.timeout = 5000;
				login.serviceType = serviceFlag;
				data.cmdObject = login;
				transData = JSON.stringify(data);
				if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
					wsCore.socket.send(transData);
				}
			}catch(e){
				console.log("loginCmd Error : "+ e);
			}
		}
		this.SetHttpsFlg = function (flag) {}
		this.SendCgiCmd = function (cmd, tmeout, rsv) {
			if (cmd.indexOf("fwUpgrade") != -1){
				data.msgId = WS_REQUEST_FIRMWARE_UPGRADE;
				var updateStr = new pathSet();
				updateStr.timeout = tmeout;
				if(lanPage=="sys_updata"){
					updateStr.path = encodeURIComponent($("#txtSysUpdate").val());
				}
				if(lanPage=="sys_patch"){
					updateStr.path = encodeURIComponent($("#txtSysPatch").val());
				}
				data.cmdObject = updateStr;
			}
      else if (cmd.indexOf("importConfig") != -1){
				data.msgId = WS_REQUEST_IMPORT_CONFIG_FILE;
				var importStr = new pathSet();
				importStr.path = encodeURIComponent($("#txtSysConfig").val());
				importStr.timeout = tmeout;
				data.cmdObject = importStr;
      }
			else{	
				data.msgId = WS_REQUEST_CGI;
				var cgiStr = new CGIStr();
				cgiStr.cgi = cmd;
				cgiStr.timeout = tmeout;
				data.cmdObject = cgiStr;
			}

			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.LeaveMotionSet = function(i){
			$("#mbox").css("display", "none");
			$("#mboxamb").css("display","none");
			this.VideoPlay(0,gVar_first.ip,4);
		}
		this.LeaveAreaSet = function(i){
			$("#box").css("display", "none");
		}
		this.EnterAreaSet = function(i){
			$("#box").css("display", "");
		}
		this.EnterConfigPage = function(i,n){}
		this.EnterMotionSet = function(i, n, url, usr, pwd, w, h){
			this.VideoPlay(0,gVar_first.ip,3,1);
		}
		this.Live = function(i){}
		this.GetMotionArea = function(){}
		this.VideoPlay = function(i,ip, cmd){
			try{
				if(cmd == 3){
					data.msgId = WS_REQUEST_OPEN_VIDEO;
				}else if(cmd == 4){
					data.msgId = WS_REQUEST_CLOSE_VIDEO;
				}
				var vp = new videoPlay();
				vp.streamType = gVar.nStreamType;
				vp.timeout = 5000;
				data.cmdObject = vp;
				transData = JSON.stringify(data);
				if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
					wsCore.socket.send(transData);
				}
			}catch(e){
				console.log("VideoPlay Error: " + e);
			}
		}
		this.UpdateFirmFilePath = function(fun){
			UpdateFirmFilePathCallBack = fun;
			data.msgId = WS_REQUEST_SELECT_FILE;
			var fp = new TimeOut();
			fp.timeout = 5000;
			data.cmdObject = fp;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.GetFileSizeByPath = function(path,fun){
        	GetFileSizeByPathCallBack = fun;
        	data.msgId = WS_REQUEST_GET_FILE_SIZE;
        	var fs = new pathSet();
        	fs.path = encodeURIComponent(path);
			fs.timeout = 5000;
			data.cmdObject = fs;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.GetDevIPandPort = function(t){
			data.msgId = WS_REQUEST_SEARCH_DEV_IP_AND_PORT;
			var devIPandPort = new TimeOut();
			devIPandPort.timeout = t;
			data.cmdObject = devIPandPort;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.SetMotionArea = function(){}
		this.ScordLiveControler = function (url, port, method, parms, type, channel) {
		    if (typeof channel == 'undefined') {
		        channel = 0;
		    }
		    try {
		    	if(H5Live_Edge == 0){
		    		this.obj[0].ScordLiveControler(url, port, method, parms, type);
		        	this.obj[0].FlashState();
		    	}else{
		    		Flv_load_video();
		    		Flv_load_audio();
		    	}
		    } catch (e) { console.log(e) }
		}
		this.ScordLiveStop = function (channel) {
		    if (typeof channel == 'undefined') {
		        channel = 0;
		    }
		    try {
		    	if(H5Live_Edge == 0){
		        	this.obj[0].ScordLiveStop();
		    	}else{
		    		//flv_destroy();
		    	}
		    } catch (e) {console.log(e) }
		}
		this.OpenAudio = function(i){
			try{
				if(H5Live_Edge == 0){
					this.obj[0].volume(100);
				}else{
					audio.muted = false;
				}
			}catch(e){}
		}
		this.CloseAudio = function(i){
			try{
				if(H5Live_Edge == 0){
					this.obj[0].volume(0);
				}else{
					audio.muted = true;
				}			
			}catch(e){}
		}
		this.TalkCMD = function(i,cmd){
			data.msgId = WS_REQUEST_TALK;
			var talk = new Talk();
			if (cmd == 0){
				talk.operation = 1;
			}else{
				talk.operation = 0;
			}
			talk.timeout = 5000;
			data.cmdObject = talk;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.Record=function(t){
		    window.clearTimeout(hRecord[IFs]);
		    data.msgId = WS_REQUEST_RECORD;
		    var record = new Record();
		    if (t){//open
		    	record.operation = 1;
		    }
		    else{
		    	record.operation = 0;
		    }
		    record.type = 2;
		    record.timeout = 5000;
		    data.cmdObject = record;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.LocalAlarmRecord=function(t, channl){
			data.msgId = WS_REQUEST_RECORD;
		    var record = new Record();
		    if (t){//open
		    	record.operation = 1;
		    }
		    else{
		    	record.operation = 0;
		    }
		    record.type = 1;
		    record.timeout = 5000;
		    data.cmdObject = record;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.GetRecordPath = function(fun){
			GetRecordPathCallBack = fun;
	    	data.msgId = WS_REQUEST_GET_RECORD_PATH;
			var getrp = new TimeOut();
			getrp.timeout = 5000;
			data.cmdObject = getrp;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.SetRecordPath = function(path){
			data.msgId = WS_REQUEST_SAVE_RECORD_PATH;
			var setrp = new pathSet();
			setrp.timeout = 5000;
			setrp.path = encodeURIComponent(path);
			data.cmdObject = setrp;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.SelectRecordPath = function(fun){
			SelectRecordPathCallBack = fun;
			data.msgId = WS_REQUEST_SELECT_RECORD_PATH;
			var rp = new TimeOut();
			rp.timeout = 5000;
			data.cmdObject = rp;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.OpenLocalRecordFolder = function(path){
			data.msgId = WS_REQUEST_OPEN_RECORD_PATH;
			var lrp = new pathSet();
			lrp.timeout = 5000;
			lrp.path = encodeURIComponent(path);
			data.cmdObject = lrp;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.SnapPicture = function(){
			data.msgId = WS_REQUSET_SNAP;
			var obj = new TimeOut();
			obj.timeout = 5000;
			data.cmdObject = obj;
			transData = JSON.stringify(data);
			if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
				wsCore.socket.send(transData);
			}
		}
		this.FullScreen = function(){
			flashFullScreen();
		}
		this.displayGreenCircle = function (display) { 
      try {
      	if(H5Live_Edge == 0){
      		this.obj[0].DisplayGreenCircle(display); 
      	}else{
      		ShowCircleGreen(display);
			if(gVar.sPage == 2){
      			ShowCircleGreen(0);
      		}
      	}
  		} catch (e) {console.log(e) } 
  	} 
  	this.displayRedCircle = function (display) { 
      try {
      	if(H5Live_Edge == 0){
      		this.obj[0].DisplayRedCircle(display); 
      	}else{
      		ShowCircleRed(display);
      		if(gVar.sPage == 2){
      			ShowCircleRed(0);
      		}
      	}
      } catch (e) {console.log(e) } 
    }
    this.closeWebSocketProcess = function(){
    	data.msgId = WEB_TELL_QUIT;
          var str = new TimeOut();
          str.timeout = 5000;
          data.cmdObject = str;
          transData = JSON.stringify(data);
          if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
              wsCore.socket.send(transData);
          }
    }
	    this.SDManage = function(ip){
	    	data.msgId = WS_REQUEST_SD_MANAGER;
            var str = new SDManageCmd();
            str.timeout = 5000;
            str.ip = ip;
            data.cmdObject = str;
            transData = JSON.stringify(data);
            if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
                wsCore.socket.send(transData);
            }
	    }
	    this.ConnectingPrompt = function(i){
	    	try{
	    		if(H5Live_Edge == 0){
	    			this.obj[0].connectingPrompt(i);
	    		}else{
	    			if(gVar.sPage == 1){
		    			ShowConnectErrorTip(i);		
	    			}
	    		}
	    	}catch(e){}
	    }
	    this.ClearAreas = function(){
	    	$(".rect").remove();
	    }
	    this.flashState = function(){
	    	try{
		    	this.obj[0].FlashState();
		    	flashState = 1;
	    	}catch(e){
	    		consoleMsg("flashState : " + e);
	    		flashState = 0;
	    	}
	    }
	    this.stopAudio = function(){
	    	if(H5Live_Edge == 0){	
	    		this.obj[0].StopAudio();
	    	}
	    }
	}
	else{
		this.GetFileSizeByPath=function(path,fun){
			fun(String(this.obj[0].GetFileSizeByPath(path)));
		}
		this.SetRecordPath = function(path){
	    this.obj[0].RecordPath = path;
		}
		this.GetRecordPath = function(fun){
	    fun(String(this.obj[0].RecordPath));
		}
		this.OpenLocalRecordFolder = function(path){
	    this.obj[0].OpenLocalRecordFolder(path);
		}
		this.SelectRecordPath = function(fun){
			fun(this.obj[0].ManualRecordPath);
		}
		this.Test = function(){return this.obj[0].test();}
		this.SetHttpsFlg = function (flag) {
			try {
				this.obj[0].SetHttpsFlg(flag);   //1 - https; 0 - http
			} catch (e) { }
		}
		this.Login = function(ip, port, webport, user, pass, streamType,n){
			this.obj[0].Login(ip, port, webport, user, pass, streamType,n);
		}
		this.SendCgiCmd = function (cmd, tmeout, rsv) {
			try {
				if (gVar.sPage == 1) {
					this.obj[IFs].SendCgiToPlugin(cmd, tmeout, rsv);
				} else {
					this.obj[0].SendCgiToPlugin(cmd, tmeout, rsv);
				  }
			} catch (e) { }
		}
		
		this.OpenAudio = function(i){
			this.obj[i].OpenAudio();
		}
	
		this.CloseAudio = function(i){
			try{

			this.obj[i].CloseAudio();
			}catch(e){}
		}
		
		this.TalkCMD = function(i,cmd){
			if (cmd == 0){
				return(this.obj[i].OpenTalk())
			}else{
				return(this.obj[i].CloseTalk())
			}
		}
		
		this.Record=function(t){
	        window.clearTimeout(hRecord[IFs]);
			this.obj[IFs].Record(t,"");
	        
		}
		this.LocalAlarmRecord=function(t, channl)
		{
		    this.obj[channl].Record(t, "alarm");
		}
	
		this.VideoPlay = function(i,ip, cmd){
			if(cmd == 3){
				this.obj[i].Open("rtsp://"+ip+"/videoMain");
			}else if(cmd == 4){
				this.obj[i].Close();
			}
		}
		
		this.LeaveMotionSet = function(i){
			this.obj[i].LeaveMotionSet();
		}

		this.LeaveAreaSet = function(i){
			this.obj[i].LeaveAreaSet();
		}

		this.EnterAreaSet = function(i, n, url, usr, pwd, w, h){
			this.obj[i].EnterAreaSet(n, url, usr, pwd, w, h);
		}

		this.EnterConfigPage = function(i, n){
			this.obj[i].EnterConfigPage(n);
		}

		this.EnterMotionSet = function(i, n, url, usr, pwd, w, h){
			this.obj[i].EnterMotionSet(n, url, usr, pwd, w, h);
		}

		this.Live = function(i){
			this.obj[i].Live();
		}
		
		this.MsDel = function(){
			return(this.obj[0].DelRect());
		}
			
		this.SetMotionArea = function(xml){
			return(this.obj[0].MotionAreas = xml)
		}
		
		this.GetMotionArea = function(){
			return(this.obj[0].MotionAreas)
		}
		
		
		this.SetAVArea = function(xml){
			return(this.obj[0].Areas = xml)
		}
		
		this.GetAVArea = function(){
			return(this.obj[0].Areas)
		}
		
		this.FullScreen=function(){
			this.obj[IFs].FullScreen();
		}
		
		this.UpdateFirmFilePath = function (fun) {
		    try {
		        fun(String(this.obj[0].GetUpdataFilePath));
		    } catch (e) { }
		}
		this.GetDevIPandPort = function (t) {
		   
		        this.obj[0].GetDevIPandPort(t);
		}
		
		this.SDManage = function(ip)
		{
				this.obj[0].SDManage(ip);
		}
		this.UpdatePluginWindow = function(i){
			this.obj[i].UpdatePluginWindow();
		}
		this.CloseIETab = function(i){
			this.obj[i].CloseIETab();
		}
	}
		
	this.isHttpsconn = function (httpscon) {
	    try {
	        this.obj[0].isHttpsconn(httpscon);
	    }
	    catch (e) {
	    }
	}
	
	this.SetLauguage=function(n){
		for(var i=0; i<9; i++)
		this.obj[i].SetLauguage(n);
	}
	
	this.RfLive=function(){
		this.obj[IFs].GetLiveCfg();
	}
	
	this.PbVedioPlay = function(ip, dir, file, cmd){
		if(cmd == 3){
			if(typeof file=='undefined') return false;
			this.obj[0].PlaybackOpen(dir+",rtsp://"+ip+"/"+file);
		}else if(cmd == 4){
			this.obj[0].PlaybackClose();
		}else if(cmd == 5){
			this.obj[0].PlaybackPause();
		}else if(cmd == 6){
			this.obj[0].PlaybackResume();
		}
		return true;
	}
	
	this.PBClose = function(){
		this.obj[0].PlaybackClose();
	}
	
	this.PbSeek = function(time){
		this.obj[0].PlaybackSeek(time*1);
	}
	
	this.PbPause = function(){
		this.obj[0].PlaybackPause();
	}
	
	this.PbResume = function(){
		this.obj[0].PlaybackResume();
	}
	
	this.SetCheckedOut = function(n){
		return(this.obj[0].SetCheckedOut(n));
	}

	this.ChangeWndSize = function (t, n,amba) {
	    if (t == -1) {
	        this.LeaveMotionSet(0);
	        return (this.LeaveAreaSet(0));
	    } else if (t == 2) {
	        return (this.EnterAreaSet(0, n, "rtsp://" + gVar.ip + "/videoMain", gVar.user, gVar.passwd, 800, 500));
	    } else if (t == 0) {
	        for (var i = 1; i < 9; i++) {
	            try {
	                this.EnterConfigPage(i, 0);
	            } catch (e) { }
	        }
	        return (this.Live(0))
	    } else if (t == 1) {
	        for (var i = 1; i < 9; i++) {
	            try {
	                this.EnterConfigPage(i, 2);
	            } catch (e) { }
	        }
	        return (this.obj[0].Playback())
	    } else if (t == 3) {
	        if (amba == 1) {
	            return (this.EnterMotionSet(0, n, "rtsp://" + gVar.ip + "/videoMain", gVar.user, gVar.passwd, 700, 480));
	        }
	        else {
	            return (this.EnterMotionSet(0, n, "rtsp://" + gVar.ip + "/videoMain", gVar.user, gVar.passwd, 800, 500));
	        }
	    }
	    else if (t == 4) {
	        for (var i = 0; i < 9; i++) {
	            try {
	                this.EnterConfigPage(i, 1);
	            } catch (e) { }
	        }
	    }
	    
	    
	};
	
	

	this.GetCGIResult = function (i, cmd, isHttps) {
	    var cgiRet = "";
	    try {
	        cgiRet = this.obj[i].GetCGIResult(cmd, isHttps);
	    }
	    catch (e) {
	    }

	    return cgiRet;
	}

	this.ClearAreas = function () {
	    try {
	        if (!isSafari) {
	            this.obj[0].ClearAreas();
            }
	    } catch (e) { }
	}
}