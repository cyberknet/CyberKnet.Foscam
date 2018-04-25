var wsServiceManager = new websocketServiceManager();
var needServiceUpdate = false;
function websocketServiceManager () {
	this.socket = null;
	this.log = function(msg) {
		try {
			console.log(msg);
		} catch (e) {}
	}
	this.rand = function () {
		var aDate = (new Date()).getTime()+"";
		return aDate.substring(aDate.length-9, aDate.length)*1;
	}
	
	this.requestService = function () {
		var str = window.location.href;
		var httpver = str.split("://")[0];
		var url = 'ws://127.0.0.1:' + SERVICE_MANAGER_PORT;  
		if(httpver == "https"){
			return;
		}
		this.socket = new WebSocket(url);
		this.socket.binaryType = "arraybuffer";
		this.socket.onopen = this.onOpen;
		this.socket.onmessage = this.onMessage;
		this.socket.onclose = this.onClose;
		this.socket.onerror = this.onError;
		this.socket.me = this;
		//this.log(this.socket);
	}

	this.onClose = function () {
		this.me.log("onClose");
	}

	this.onError = function () {
		this.me.log("onError");
		isPlugin = false;
		setTimeout(function() {
			DownServer();
		}, 1000);
		//this.me.downPlugins();
	}
	
	this.onOpen = function () {
		// this is this.socket!!!
		if (this.me.socket.readyState == 1) {
			this.me.requestPort();
		}
	}
	
	this.requestPort = function () {
		var data = new wsdata();
		data.version = 1;
		data.msgId = CMD_REQUEST_PORT;
		data.groupId = this.rand();
		data.sequence = 0;
		data.datalen = 0;
		var transData = JSON.stringify(data);
		this.socket.send(transData);
	}
	
	
	this.getJsonFromMessage = function (event) {
		if (event.data instanceof ArrayBuffer) {
			var dataArray = new Int8Array(event.data);
			var jsonStr = this.ab2str(dataArray);
			var jsonObject = JSON.parse(jsonStr);
			return jsonObject;
		}	
		return null;
	}
	this.ab2str = function (buf) {
		return String.fromCharCode.apply(null, new Uint8Array(buf));
	}
	this.onMessage = function (event) {
		try {
			var json = this.me.getJsonFromMessage(event);
			if (json == null)
				return;
			var msgid = json.msgid * 1;
			//this.me.log("manager msgid : " + msgid);
			switch (msgid) {
			case RESPONSE_REQUEST_PORT:{ //50000
				g_DstPort = json.dstPort;
				wsCore.connect(g_DstPort);
				this.me.VersionCheck(json);
				break;
			}
			default:
				break;
			}
			
		} catch (e) {}
	}
	this.downPlugins = function(){
		var obj = document.getElementById("downPlugins");
   		obj.innerHTML = '<a id="down" href="IPCWebComponents.exe">' + lg.get("IDS_LOGIN_KJ") + '</a>';
	}
	this.VersionCheck = function(json){
		//check plugin version
	    vsIf = json.seviceVer;
	    var v1 = vsIf.split(".");   //plugin version
	    var v2 = pVersion.split(".");    //web version
	    
	    for(var m = 0; m < 4; m++){
	        if(v2[m] * 1 > v1[m] * 1){
	            needServiceUpdate = true;
	            break;
	        }else if(v2[m] * 1 == v1[m] * 1){
	            continue;
	        }else{
	            needServiceUpdate = false;
	            break;
	        }
	    };
		if (needServiceUpdate) {
			if(IsFirefox()){
        		var obj = document.getElementById("downPlugins");
        		obj.innerHTML = '<a id="down" href="IPCWebComponents.exe">' + lg.get("IDS_PLUGIN_UPDATE_TIP") + '</a>';
			}
		}
	}
}