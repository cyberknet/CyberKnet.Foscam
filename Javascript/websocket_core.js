var wsCore = new websocketCore();

var cruiseMapList = "";
var presetPointList = "";
var appendStr = "";
var rtmpPort = 0;
var stopLiveClicked = false;
var recordPath = 65535;
var recordState = 0;
var param = new Array(4);
param[0] = new StreamParamInfo();
param[1] = new StreamParamInfo();
param[2] = new StreamParamInfo();
param[3] = new StreamParamInfo();
var livePort = 0;
var videoWidth;
var videoHeight;
var interval = 0;
function StreamParamInfo(){
	this.resolution=0;
	this.bitRate=0;
	this.frameRate=0;
	this.GOP=0;
	this.isVBR=0;
	this.lbrRatio = 0;
}
function websocketCore () {
	this.socket = null;
	
	this.log = function (msg) {
		try {
			console.log(msg);
		} catch (e) {}
	}
	this.rand = function () {
		var aDate = (new Date()).getTime()+"";
		return aDate.substring(aDate.length-9, aDate.length)*1;
	}
	this.connect = function (port) {
		var url = 'ws://127.0.0.1:' + port; 
		this.socket = new WebSocket(url);
		this.socket.binaryType = "arraybuffer";
		this.socket.onopen = this.onOpen;
		this.socket.onmessage = this.onMessage;
		this.socket.onclose = this.onClose;
		this.socket.onerror = this.onError;
		this.socket.me = this;
		//this.log(this.socket);
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
			if (json == null){
				return;
			}
			var msgid = json.msgid * 1;
			//this.me.log("msgid = " + msgid);

			switch (msgid) {
				case RESPONSE_REQUSET_LOGIN:{ //50001
					break;
				}
				case RESPONSE_REQUEST_AUDIO:{ //50004
					//this.me.message508(json);
					break;
				}
				case RESPONSE_REQUEST_TALK:{ // 50005
					this.me.message206(json);
					break;
				}
				case RESPONSE_REQUEST_CGI:{ // 50006
					this.me.cgiCallBack(json);
					break;
				}
				case RESPONSE_REQUEST_SNAP:{//50007
					this.me.openSnapPicture(json);
					break;
				}
				case RESPONSE_REQUEST_LOGIN_PRODUCT_INFO:{ // 50008
					this.me.message502(json);
					break;
				}
				case RESPONSE_REQUEST_LOGIN_MSG_INIT_INFO:{ // 50009
					this.me.message100(json);
					break;
				}
				case RESPONSE_REQUEST_OPEN_VIDEO:{ //50010
					this.me.openVedio();
					break;
				}
				case RESPONSE_REQUEST_CLOSE_VIDEO:{ //50011
					this.me.message214(json);
					break;
				}
				case RESPONSE_REQUEST_OPEN_VIDEO_SUCCESS:{//50012
					this.me.message500(json);
					break;
				}
				case RESPONSE_REQUEST_SELECT_FILE:{ //50013
					this.me.filePath(json);
					break;
				}
				case RESPONSE_REQUEST_GET_FILE_SIZE:{ // 50014
					this.me.filePathSize(json);
					break;
				}
				case RESPONSE_REQUEST_FIRMWARE_UPGRADE_FAKE_CGI_RESULT:{ // 50016
					PluginCallBackCGI(json.response,json.response.length);
					break;
				}
				case RESPONSE_REQUEST_FIRMWARE_UPGRADE_MSG:{ //50017
					this.me.message604(json);
					break;
				}
				case RESPONSE_REQUEST_SEARCH_DEV_IP_AND_PORT:{ //50018
					this.me.message208(json);
					break;
				}
				case RESPONSE_REQUEST_IMPORT_CONFIG_FILE:{ //50019
					this.me.message605(json,0);
					break;
				}
				case RESPONSE_REQUEST_SAVE_RECORD_PATH:{ //50020
					this.me.saveRecordPathResponse(json);
					break;
				}
				case RESPONSE_REQUEST_GET_RECORD_PATH:{ // 50021
					this.me.getRecordPath(json);
					break;
				}
				case RESPONSE_REQUEST_RECORD:{ //50023
					this.me.localRecordState(json);
					break;
				}
				case RESPONSE_REQUEST_SELECT_RECORD_PATH:{ //50024
					this.me.selectRecordPath(json);
					break;
				}
				case RESPONSE_REQUEST_LOGIN_AGAIN:{ // 50026
					this.me.loginAgain(json);
					break;
				}
				case EVENT_CONNECT_ERR:{ //60000
					this.me.connectError();
					break;
				}
				case EVENT_IMAGE_CHANGE:{ // 60003
					this.me.message110(json);
					break;
				}
				case EVENT_CRUISE_CHANGE:{ //60004
					this.me.message107(json);
					break;
				}
				case EVENT_PRESET_CHANGE:{ //60005
					this.me.message106(json);
					break;
				}
				case EVENT_MIRROR_FLIP_CHANGE:{ // 60006;
					this.me.message108(json);
					break;
				}
				case EVENT_IRCUT_CHANGE:{ // 60007
					this.me.message105(json);
					break;
				}
				case EVENT_STREAM_PARAM_CHANGE:{ //60008
					if(gVar.nStreamType == 0){
						this.me.message109(json);
					}
					break;
				}
				case EVENT_STREAM_TYPE_CHANGE:{ //60009
					this.me.message113(json);
					break;
				}
				case EVENT_VIDEO_EPT_STATE_CHANGE:{ // 60010
					this.me.message506(json);
					break;
				}
				case EVENT_PWRFREQ_CHANGE:{ // 60011
					this.me.message112(json);
					break;
				}
				case EVENT_ALARM_CHANGE:{ //60012
					this.me.message111(json);
					break;
				}
				case EVENT_SUB_STREAM_TYPE_CHANGE:{ //60013
					this.me.message119(json);
					break;
				}
				case EVENT_SUB_STREAM_PARAM_CHANGE:{ // 60014
					if(gVar.nStreamType == 1){		
						this.me.message120(json);
					}
					break;
				}
				case EVENT_GET_ALL_PRODUCT_INFO:{ //60015
					appendStr = "<ambarellaFlag>" + json.ambarellaFlag + "</ambarellaFlag>" + "</CGI_Result>";
					break;
				}
				case EVENT_WDR_CHANGE:{ //60017
					this.me.message505(json);
					break;
				}
				case EVENT_NAA_CHANGE:{ //60018
					this.me.message121(json);
					break;
				}
				case EVENT_GUARD_POSITION_CHANGE:{ // 60019
					this.me.message303(json);
					break;
				}
				case EVENT_RECORD_STATE:{ // 60021
					this.me.alarmRecordStateToSDCardOrFTP(json);
					break;
				}
				case EVENT_IMPORT_CONFIG:{ //60022
					this.me.message605(json,1);
					break;
				}
				case EVENT_FTP_STATE:{ // 60023
					this.me.message159(json);
					break;
				}
				case EVENT_RECONNECT:{ //60024
					this.me.reconnect(json);
					break;
				}
				case EVENT_AUDIO_VOLUME_CHANGE:{ //60025
					this.me.message157(json);
					break;
				}
				case HELLO_CMD:{ // 1000000
					data.msgId = HELLO_RESPONSE;
					var obj = new TimeOut();
					obj.timeout = 5000;
					data.cmdObject = obj;
					transData = JSON.stringify(data);
					if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
						wsCore.socket.send(transData);
					}
					break;
				}
				case FLASH_CONNECT_RTMP_AGAIN:{ //1000005
					gDvr.VideoPlay(0, gVar.ip, 4);
					setTimeout(function() {
						gDvr.VideoPlay(0, gVar.ip, 3);
					}, 300);
					break;
				}
				default:
					break;
			}
			
		} catch (e) {
			console.log("FosIPCCore onMessage Error :"+e);
		}
	}
	//触发插件心跳保持
	this.onOpen = function () {
		data.msgId = 99999;
		var str = new TimeOut();
		data.cmdObject = str;
		transData = JSON.stringify(data);
		if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
			wsCore.socket.send(transData);
		}
		if(isClosed){
			try{
				data.msgId = WS_REQUEST_LOGIN_AGIN;
				var login = new loginCmd();
				login.ip = gVar.ip;
				login.ddns = "";
				login.uid = "";
				login.usr = gVar.user;
				login.pwd = gVar.passwd;
				login.webPort = gVar.webPort;
				login.mediaPort = gVar.mediaport;
				login.ddnsMedia = gVar.webPort;
				login.mac = "";
				login.ipcType = FOSIPC_H264;
				login.connectType = FOSCNTYPE_IP;
				login.streamType = gVar.nStreamType;
				login.timeout = 5000;
				login.serviceType = httpFlvService;
				data.cmdObject = login;
				transData = JSON.stringify(data);
				if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
					wsCore.socket.send(transData);
				}
			}catch(e){
				console.log("LoginAgain Error : "+ e);
			}
		}
	}
	this.onClose = function (e) {
		this.me.log("FosIPCCore closed");
		gVar.bLogin = false;
		isClosed = 1;
		wsServiceManager.requestPort();
	}
	this.onError = function (e) {
		this.me.log("FosIPCCore Error");
	}
	//this.log("jsonStr ==== " + JSON.stringify(json));
	this.message100 = function (json) {
		rtmpPort = json.rtmpPort;
		recordState = json.recordState;
		flashEnableBuffer = json.flashEnableBuffer;
		//this.log("rtmpPort : " + rtmpPort);
		livePort = json.livePort;
		//this.log("livePort : " + livePort);
		var arg = new Array();
		arg[0] = 100;
		arg[1] = json.result;
		arg[2] = 0;//recordState
		arg[3] = json.isMute;
		arg[4] = json.volume;
		arg[5] = json.ledState;
		arg[6] = json.presetPointCnt;
		for (var i = 1; i < 18; i++) {
			arg[i+6] = presetPointList[i-1];
		};
		arg[24] = json.cruiseMapCnt;
		for (var i = 0; i < 8; i++) {
			arg[i+25] = cruiseMapList[i];
		};
		arg[33] = json.cruCruiseMap;
		arg[34] = json.mainStreamType;
		arg[35] = json.subStreamType;
		for (var i = 0; i < 4; i++) {
			arg[i*5 + 36] = param[i].resolution;
			arg[i*5 + 37] = param[i].bitRate;
			arg[i*5 + 38] = param[i].frameRate;
			arg[i*5 + 39] = param[i].GOP;
			arg[i*5 + 40] = param[i].isVBR;
		};
		arg[56] = json.brightness;
		arg[57] = json.contrast;
		arg[58] = json.hue;
		arg[59] = json.saturation;
		arg[60] = json.sharpness;
		arg[61] = json.isMirror;
		arg[62] = json.isFlip;
		arg[63] = json.isAlarming;
		arg[64] = json.alarmType;
		arg[65] = json.pwrFreq;
		arg[66] = json.infraLedMode;
		arg[67] = json.infraLedState;
		arg[68] = json.usrPrivilege;
		arg[69] = 1;
		arg[70] = gVar.ip;
		arg[71] = gVar.port;
		arg[72] = gVar.port;
		arg[73] = gVar.user;
		arg[74] = gVar.passwd;
		arg[75] = gVar_first.modelName;
		arg[76] = 0;
		PluginCallBack(arg[0],arg[1],arg[2],arg[3],arg[4],arg[5],arg[6],arg[7],arg[8],arg[9],arg[10],
			arg[11],arg[12],arg[13],arg[14],arg[15],arg[16],arg[17],arg[18],arg[19],arg[20],
			arg[21],arg[22],arg[23],arg[24],arg[25],arg[26],arg[27],arg[28],arg[29],arg[30],
			arg[31],arg[32],arg[33],arg[34],arg[35],arg[36],arg[37],arg[38],arg[39],arg[40],
			arg[41],arg[42],arg[43],arg[44],arg[45],arg[46],arg[47],arg[48],arg[49],arg[50],
			arg[51],arg[52],arg[53],arg[54],arg[55],arg[56],arg[57],arg[58],arg[59],arg[60],
			arg[61],arg[62],arg[63],arg[64],arg[65],arg[66],arg[67],arg[68],arg[69],arg[70],
			arg[71],arg[72],arg[73],arg[74],arg[75],arg[76]
		);
	}
	this.message103 = function(json){
		PluginCallBack(103,json.isMute,json.volume);
	}
	this.message105 = function(json){
		PluginCallBack(105,json.state,json.mode);
	}
	this.message106 = function(json){
		presetPointList = json.pointList.split(",");
		presetPointList[16] = json.curPoint;
		PluginCallBack(106,json.count,presetPointList[0],presetPointList[1],presetPointList[2],
			presetPointList[3],presetPointList[4],presetPointList[5],presetPointList[6],
			presetPointList[7],presetPointList[8],presetPointList[9],presetPointList[10],
			presetPointList[11],presetPointList[12],presetPointList[13],presetPointList[14],
			presetPointList[15],presetPointList[16]
		);
	}
	this.message107 = function(json){
		cruiseMapList = json.maplist.split(",");
		PluginCallBack(107,json.count,cruiseMapList[0],cruiseMapList[1],cruiseMapList[2],
			cruiseMapList[3],cruiseMapList[4],cruiseMapList[5],cruiseMapList[6],
			cruiseMapList[7],cruiseMapList[8],cruiseMapList[9],cruiseMapList[10]
		);
	}
	this.message108 = function(json){
		PluginCallBack(108,json.flip,json.mirror);
	}
	this.message109 = function(json){
		param[0].resolution = json.param0.resolution;
		param[0].bitRate = json.param0.bitRate;
		param[0].frameRate = json.param0.frameRate;
		param[0].GOP = json.param0.gop;
		param[0].isVBR = json.param0.isVBR;
		param[1].resolution = json.param1.resolution;
		param[1].bitRate = json.param1.bitRate;
		param[1].frameRate = json.param1.frameRate;
		param[1].GOP = json.param1.gop;
		param[1].isVBR = json.param1.isVBR;
		param[2].resolution = json.param2.resolution;
		param[2].bitRate = json.param2.bitRate;
		param[2].frameRate = json.param2.frameRate;
		param[2].GOP = json.param2.gop;
		param[2].isVBR = json.param2.isVBR;
		param[3].resolution = json.param3.resolution;
		param[3].bitRate = json.param3.bitRate;
		param[3].frameRate = json.param3.frameRate;
		param[3].GOP = json.param3.gop;
		param[3].isVBR = json.param3.isVBR;
		PluginCallBack(109,json.mainStreamType,json.subStreamType,
			param[0].resolution,param[0].bitRate,param[0].frameRate,param[0].GOP,param[0].isVBR,
			param[1].resolution,param[1].bitRate,param[1].frameRate,param[1].GOP,param[1].isVBR,
			param[2].resolution,param[2].bitRate,param[2].frameRate,param[2].GOP,param[2].isVBR,
			param[3].resolution,param[3].bitRate,param[3].frameRate,param[3].GOP,param[3].isVBR
		);
	}
	this.message110 = function(json){
		PluginCallBack(110,json.brightness,json.contrast,json.hue,json.saturation,json.sharpness);
	}
	this.message111 = function(json){
		PluginCallBack(111,1,0,json.isEnableLocalAlarmRecod,json.localAlarmRecordSecs,json.isAlarming,json.alarmType);
	}
	this.message112 = function(json){
		PluginCallBack(112,json.pwrfreq);
	}
	this.message113 = function(json){
		PluginCallBack(113,json.streamType);
		//console.log("livesplClicked = " + livesplClicked);
		if(livesplClicked){
			if(IsEdge()){
				if(H5Live_Edge){
					flv_destroy();
					setTimeout( function () {
						Flv_load_video();
						Flv_load_audio();
					}, 300);
				}
			}else{
				if(H5Live){
					flv_destroy();
					setTimeout( function () {
						Flv_load_video();
						Flv_load_audio();
					}, 300);
				}
			}
		}
	}
	this.message119 = function(json){
		PluginCallBack(119,json.streamType);
		if(livesplClicked){
			if(IsEdge()){
				if(H5Live_Edge){
					flv_destroy();
					setTimeout( function () {
						Flv_load_video();
						Flv_load_audio();
					}, 300);
				}
			}else{
				if(H5Live){
					flv_destroy();
					setTimeout( function () {
						Flv_load_video();
						Flv_load_audio();
					}, 300);
				}
			}
		}
	}
	this.message120 = function(json){
		param[0].resolution = json.param0.resolution;
		param[0].bitRate = json.param0.bitRate;
		param[0].frameRate = json.param0.frameRate;
		param[0].GOP = json.param0.gop;
		param[0].isVBR = json.param0.isVBR;
		param[1].resolution = json.param1.resolution;
		param[1].bitRate = json.param1.bitRate;
		param[1].frameRate = json.param1.frameRate;
		param[1].GOP = json.param1.gop;
		param[1].isVBR = json.param1.isVBR;
		param[2].resolution = json.param2.resolution;
		param[2].bitRate = json.param2.bitRate;
		param[2].frameRate = json.param2.frameRate;
		param[2].GOP = json.param2.gop;
		param[2].isVBR = json.param2.isVBR;
		param[3].resolution = json.param3.resolution;
		param[3].bitRate = json.param3.bitRate;
		param[3].frameRate = json.param3.frameRate;
		param[3].GOP = json.param3.gop;
		param[3].isVBR = json.param3.isVBR;
		PluginCallBack(120,json.mainStreamType,json.subStreamType,
			param[0].resolution,param[0].bitRate,param[0].frameRate,param[0].GOP,param[0].isVBR,
			param[1].resolution,param[1].bitRate,param[1].frameRate,param[1].GOP,param[1].isVBR,
			param[2].resolution,param[2].bitRate,param[2].frameRate,param[2].GOP,param[2].isVBR,
			param[3].resolution,param[3].bitRate,param[3].frameRate,param[3].GOP,param[3].isVBR
		);
	}
	this.message121 = function(json){
		PluginCallBack(121,json.autoAdjust);
	}
	this.message157 = function(json){
		PluginCallBack(157,json.isMute,json.volume);
	}
	this.message159 = function(json){
		PluginCallBack(159,json.result);
	}
	this.message206 = function(json){
		PluginCallBack(206,json.result);
	}
	this.message208 = function(json){
		gDvr.closeWebSocketProcess();
		PluginCallBack(208,json.ip,json.port);
	}
	this.message214 = function(json){
		if(H5Live){
			clearInterval(interval);
		}
		if(IsEdge()){
			if(H5Live_Edge){
				clearInterval(interval);
			}
		}
		PluginCallBack(214,json.result);
		if(stopLiveClicked == false){
			gDvr.ScordLiveStop(0);
			stopLiveClicked = true;
		}
		gDvr.displayRedCircle(0);
		gDvr.TalkCMD(0,1);
	}
	this.message303 = function(json){
		PluginCallBack(303,json.name);
	}
	this.message500 = function(json){
		json.productAllInfo = this.XmlParseAmbarellaFlag(json.productAllInfo) + appendStr;
		PluginCallBack(500,json.channel,json.devName,json.privilege,json.enableTalk,
		json.enableAudio,json.modelName,json.ip,json.webPort,json.usr,json.pwd,json.productAllInfo);
	}
	this.message502 = function (json) {
		json.response = this.XmlParseAmbarellaFlag(json.response) + appendStr;
		PluginCallBack(502, json.response);
	}
	this.message505 = function(json){
		PluginCallBack(505,json.state);
	}
	this.message506 = function(json){
		PluginCallBack(506,json.eptState);
	}
	this.message508 = function(json){
		//PluginCallBack(508);
	}
	this.message604 = function(json){
		PluginCallBack(604,json.result);
	}
	this.message605 = function(json,callFromEvent){
		if(callFromEvent == 1){
			PluginCallBack(605,json.result);	
		} else {
			if(json.result != 0 )
			PluginCallBack(605,json.result);
		}
	}
	this.XmlParseAmbarellaFlag = function(src){
		return src.substring(0,src.indexOf("</CGI_Result>") * 1);
	}
	this.cgiCallBack = function (json){
		if(json.result == 0){	
			if(json.response.length != 0 ){
				PluginCallBackCGI(json.response);
			}
		}else{
			ShowPaop(lg.get("IDS_TIPS"), lg.get("IDS_LEFT_OVERT"));
			MasklayerHide();
		}
	}
	this.openVedio = function(){
		if(H5Live){
			interval = setInterval(function (){
				flv_destroy();
				Flv_load_video();
				Flv_load_audio();
			},14400000); // 14400000 每隔4小时重启一下视频
		}
		if(IsEdge()){
			if(H5Live_Edge){
				interval = setInterval(function (){
					flv_destroy();
					Flv_load_video();
					Flv_load_audio();
				},14400000); // 14400000 每隔4小时重启一下视频
			}
		}
		try{
			if(stopLiveClicked){
				gDvr.ScordLiveControler(gVar.httpver + "://" + "127.0.0.1", rtmpPort, "flashOpenLiveView", 'usr=' + user + '&pwd=' + pwd + '&liveViewType=' + flashStreamType + '&groupId=' + gVar.nDate, 'live', 0);
				stopLiveClicked = false;
			}
			if(recordState == 1){
				setTimeout(function() {
					gDvr.displayRedCircle(1);
				}, 2000);
			}
		}catch(e){}
	}
	this.filePath = function(json){
		UpdateFirmFilePathCallBack(decodeURIComponent(json.path));
	}
	this.filePathSize = function(json){
		GetFileSizeByPathCallBack(json.fileSize);
	}
	this.getRecordPath = function(json){
		GetRecordPathCallBack(decodeURIComponent(json.path));
	}
	this.selectRecordPath = function(json){
		SelectRecordPathCallBack(decodeURIComponent(json.path));
	}
	this.localRecordState = function(json){
		//videoWidth = json.videoWidth;
		//videoHeight = json.videoHeight;
		if(json.operation == 1){
			PluginCallBack(213,json.result);
			gDvr.displayGreenCircle(1);
		}else if(json.operation == 0){
			PluginCallBack(214,json.result);
			gDvr.displayGreenCircle(0);
		}
	}
	this.alarmRecordStateToSDCardOrFTP = function(json){
		//videoWidth = json.videoWidth;
		//videoHeight = json.videoHeight;
		if(json.state == 1){
			gDvr.displayRedCircle(1);
			recordState = 1;
		}else if(json.state == 0){
			gDvr.displayRedCircle(0);
			recordState = 0;
		}
	}
	this.openSnapPicture = function(json){
		if(json.result == 0){
			SetSnapPicture(json.img);
		}
	}
	this.connectError = function(){
		gDvr.VideoPlay(0, gVar.ip, 4);
		gDvr.displayRedCircle(0);
		gDvr.displayGreenCircle(0);
		$("#LVRc").click();
		gDvr.ScordLiveStop(0);
		gDvr.ConnectingPrompt(1);
	    /*isOpenV[IFs] = false;
	    if ((isappallDev == true && gVar.talkFlag == 0 && gVar.audioFlag == 0) || (isappallDev == false && IsInArray(notTalkAudioDev, gVar.selChDev))) {
	        $(".liveBtnBt4").css("display", "none");
	        $(".liveBtnBt3").css("display", "none");
	        $(".liveBtnBt9").css("display", "none");
	        $(".liveBtnBt109").css("display", "none");
	    }
	    else {
	        $(".liveBtnBt4").css("display", "none");
	        $(".liveBtnBt3").css("display", "");
	        $(".liveBtnBt109").attr("name", "active");
		    $(".liveBtnBt9").css("display", "");
	        $(".liveBtnBt109").css("display", "none");
			
	    }*/
	}
	this.reconnect = function(json){
		if(json.state == 2){
			if(gVar.sPage == 1){
				gDvr.ScordLiveControler(gVar.httpver + "://" + "127.0.0.1", rtmpPort, "flashOpenLiveView", 'usr=' + user + '&pwd=' + pwd + '&liveViewType=' + flashStreamType + '&groupId=' + gVar.nDate, '', 0);
				gDvr.VideoPlay(0, gVar.ip, 3);
			}
			gDvr.ConnectingPrompt(0);
		}
	}
	this.saveRecordPathResponse = function(json){
		if(json.result != 0){
			ShowPaop(lg.get("IDS_TIPS"),lg.get("IDS_SAVE_RECORD_PATH_RESPONSE"));
		}
	}
	this.loginAgain = function(json){
		isClosed = 0;
		gDvr.VideoPlay(0, gVar.ip, 3);
		gDvr.ScordLiveControler(gVar.httpver + "://" + "127.0.0.1", rtmpPort, "flashOpenLiveView", 'usr=' + user + '&pwd=' + pwd + '&liveViewType=' + flashStreamType + '&groupId=' + gVar.nDate, '', 0);
	}
}
function flashCallback_bufferFull(){
	data.msgId = FLASH_BUFFER_FULL;
	var obj = new TimeOut();
	obj.timeout = 5000;
	data.cmdObject = obj;
	transData = JSON.stringify(data);
	if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
		wsCore.socket.send(transData);
	}
}
function flashCallback_bufferEmpty(){
	data.msgId = FLASH_BUFFER_EMPTY;
	var obj = new TimeOut();
	obj.timeout = 5000;
	data.cmdObject = obj;
	transData = JSON.stringify(data);
	if(wsCore.socket.readyState == WEBSOCKET_STATE_ONLINE){
		wsCore.socket.send(transData);
	}
}
//this.log(" ==== " + JSON.stringify(json));