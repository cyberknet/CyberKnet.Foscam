var lanPage=null;
function sH(id,t){try{document.getElementById(id).innerHTML=lg.get(t)}catch(e){}}
function sOH(id,n,t){try{document.getElementById(id).options[n].innerHTML=lg.get(t)}catch(e){}}
function sT(id,t){try{document.getElementById(id).title=lg.get(t)}catch(e){}}
function sV(id,t){try{document.getElementById(id).value=lg.get(t)}catch(e){}}
function rP(id,p){$("#"+id).prepend(lg.get(p));}

function lan(pageName){
	if(pageName =="left"){
        sH("connectErrorTxt","IDS_SYS_CONNECTION");
    //sH("connectTip","IDS_SYS_CONNECTION");
	sT("live_wd_dbd1","IDS_CONSTRAST");sT("live_wd_ld1","IDS_LIGHT");sT("live_wd_bhd1","IDS_SATURATION");sT("live_wd_sj1","IDS_HUE");sT("live_wd_rd1","IDS_MAIN_RD");
	sH("BsHwdCtSt", "IDS_LEFT_LED"); sH("BsHwdSchedule", "IDS_BS_TIMING"); sH("BsHwdManual", "IDS_BS_MANUAL"); sH("BsHwdAuto", "IDS_BS_AUTO"); sH("leftpat", "IDS_LEFT_PAT"); sH("lefttim", "IDS_LEFT_TIM");
		sOH("leftrepath",0,"IDS_AV_SDCARD");sOH("leftretime",0,"IDS_RECTYPE_03");sOH("leftretime",1,"IDS_LEFT_RETIME1");
		sOH("leftretime",2,"IDS_LEFT_RETIME2");sH("recordtype","IDS_TYPE");sH("leftname","IDS_LEFT_NAME");sH("powerfreq","IDS_LEFT_POWERFREQ");sH("pre_pos","IDS_TIP_PRESET");sH("opLivePf","IDS_LEFT_POWER_OUTDOOR");
        sH("continPlay","IDS_VIDEO_PLAY_CONTINUE");
		sH("cruise_path","IDS_LEFT_CRUPATH");sH("color_default","IDS_DEFAULT");sT("LVRcA","IDS_BTN_REC");sT("LVRc","IDS_LEFT_STR");
		sT("LVCapture", "IDS_ALARM_CAPTIMG"); sH("lab_irOn", "IDS_OTHER_ON"); sH("lab_irOff", "IDS_OTHER_OFF"); sT("live_fw", "IDS_LEFT_FW"); sH("LeftStrType", "IDS_LEFT_STRTYPE");
		sH("lab_live_jx", "IDS_LEFT_MIRROR"); sH("lab_live_fz", "IDS_LEFT_TURN");sH("common_record", "IDS_RC_ALARM");
		sH("all_record", "IDS_RC_ALLRECORD");sH("plan_record", "IDS_RC_PLANRECORD");
		rP("cfgmune_1","IDS_STATUS_PARAM");sH("dev_ses","IDS_SHELTER_PARAM");rP("cfgmune_2","IDS_CHINFO_RECORD");rP("cfgmune_3","IDS_NET_PARAM");rP("cfgmune_4","IDS_ALARM_PARAM");		
		rP("cfgmune_5","IDS_AV_PARAM");rP("cfgmune_6","IDS_RECORD_PARAM");rP("cfgmune_7","IDS_PTZ_SPARAM");rP("cfgmune_8","IDS_PATH_PARAM");rP("cfgmune_9","IDS_FIRWARE");
		rP("cfgmune_10", "IDS_SYSTEM_PARAM"); sH("alarm_mv", "IDS_MOTION_ALARM"); sH("alarm_sud", "IDS_DEV_SOUNDALARM"); sH("alarm_io", "IDS_ALARM_IO"); sH("alarm_temperature", "IDS_ALARM_TEMPERATRUE"); sH("av_base", "IDS_AV_BASE"); sH("av_osd", "IDS_AV_OSD"); sH("av_captur", "IDS_BTN_CAP"); sH("av_irled", "IDS_BTN_IRLED");
		sH("alarm_humidity", "IDS_ALARM_HUMIDITY");sH("alarm_IV", "IDS_HUMAN_DETECTION");
		sH("alarm_onekey", "IDS_ALARM_ONE_KEY");
        sH("av_lens", "IDS_AV_SCENE");
	    rP("cfgmune_11","IDS_LEFT_MUNU_CHILD_MUSIC");sH("child_music","IDS_CHILD_MUSIC_LIST");
        rP("cfgmune_12", "IDS_SET_GUID");sH("set_guid", "IDS_SET_GUID");
		sH("av_mask", "IDS_AV_MASK");
		sH("bs_base", "IDS_BASE_DEVNAME"); sH("bs_email", "IDS_BS_EMAILSET"); sH("bs_time", "IDS_BS_TIME"); sH("usr_base", "IDS_BS_USRBASE"); sH("dev_info", "IDS_DEV_INFO"); sH("bs_multi", "IDS_BS_MULTI");
		sH("bs_led", "IDS_BS_LED");
		sH("bs_voice","IDS_BS_VOICE");
		sH("bs_night", "IDS_BS_NIGHT");
		sH("dev_log","IDS_DEV_LOG");sH("dev_ses","IDS_DEV_SESSION");sH("dev_state","IDS_DISPLAY_PARAM");sH("fw_ip","IDS_FW_IP");sH("net_ddns","IDS_NET_DDNS");
		sH("net_ip","IDS_NET_NETIP");sH("net_pppoe","IDS_NET_PPPOE");sH("net_wifi","IDS_NET_WIFI");sH("net_upnp","IDS_NET_UPNP");sH("net_port","IDS_NET_PORT");sH("net_p2p","IDS_NET_P2P");sH("path_ftp","IDS_PATH_FTP");
        sH("net_softAP", "IDS_NET_SOFTAP");
		sH("net_cloud","IDS_NET_CLOUD");sH("net_push","IDS_NET_PUSH");
		sH("path_gx","IDS_PATH_SHARDIR");sH("ptz_ctrack","IDS_PTZ_CTRACK");sH("ptz_rate","IDS_PTZ_RATE");sH("ptz_initcof","IDS_PTZ_INIT_COF");sH("ptz_485","IDS_PTZ_485_COF");sH("rc_alarm","IDS_RC_ALARM");sH("rc_jh","IDS_RC_PLANV");sH("rc_path","IDS_RC_VPRATH");
		sH("rc_plan","IDS_RC_PLAN");
		sH("sys_dr", "IDS_SYS_DR"); sH("sys_updata", "IDS_SYS_UPDATE");sH("sys_patch", "IDS_SYS_UPDATE_PATHCH"); sH("sys_hf", "IDS_SYS_HF"); sH("sys_cq", "IDS_SYS_CQ"); $("#RcSearch").attr("title", lg.get("IDS_LEFT_SERCH")); $("#RcReload").attr("title", lg.get("IDS_LEFT_RELOAD"));
		sH("cruise_1", "IDS_TIP_CRUISE"); sH("preset_2", "IDS_TIP_PRESET"); sH("LED_3", "IDS_BS_REDLAMP"); sH("colar_4", "IDS_LEFT_COLOR"); sH("serword", "IDS_LEFT_SERWORD"); sH("lab_zoomIn", "IDS_Z_ZOOMIN"); sH("lab_zoomOut", "IDS_Z_ZOOMOUT");
        sH("guard_6", "IDS_TIP_GUARD");
        sH("lab_zoomIn", "IDS_Z_ZOOMIN"); sH("lab_zoomOut", "IDS_Z_ZOOMOUT");
        sH("lab_focusFar", "IDS_PTZ_FOCUS"); sH("lab_focusNear", "IDS_PTZ_FOCUS");
        sH("music_5", "IDS_LEFT_MUNU_CHILD_MUSIC");
        sH("rc_localalarm", "IDS_RC_LOCAL_ALARM"); sH("rc_sdmanage", "IDS_RC_SDCARD_MANAGE");
        sH("music_list_title", "IDS_CHILD_MUSIC_LIST");
        sH("ptz_guard", "IDS_PTZ_INIT_GUARDTITLE");
		sH("alarm_motion", "IDS_DEV_MOTIONDETECACTIVITY");
        $("#divReloadMusic").attr("title", lg.get("IDS_LEFT_RELOAD"));

        //HDR
        sH("liveHDRType", "IDS_LIVE_HDR");
        sOH("live_HDR", 1, "IDS_OTHER_ON");
        sOH("live_HDR", 0, "IDS_OTHER_OFF");
        //WDR
        //sH("wdrType", "IDS_LIVE_HDR");
        document.getElementById("wdrType").innerHTML = "WDR";
        sOH("liveVideo_WDR", 1, "IDS_OTHER_ON");
        sOH("liveVideo_WDR", 0, "IDS_OTHER_OFF");
        if ((gVar_first.ambarellaFlag >> 0 & 0x01) == 1) {
            $("#liveVideoWDR").css("display", "");
        }

        if ((gVar_first.ambarellaFlag >> 1 & 0x01) == 1) {
            $("#liveVideoWDR").css("display", "");
        }
        if ((gVar_first.ambarellaFlag >> 2 & 0x01) == 1 && Struct.ptstate == 1) {
            $("#leftptz").css("display", "");
	    }
        //FI9800XE 去DDNS相关的功能
        if (isNVRIPC()) {
            $("#net_ddns").remove();
        }
         
        //C,E平台去除隐藏遮住
        if (gVar_first.hasPrivacyZone == -1 || gVar_first.model > 1000 && gVar_first.model < 2000 || gVar_first.model > 3000 && gVar_first.model < 4000||isModel_6000To7000() || isModel_7000To8000()) {
            $("#av_mask").remove();
        }
		/*新的chrome 浏览器暂时去除隐私遮挡*/
		if(IsChromeSupportNacl() || IsFirefox() || IsEdge())
		{
		 $("#av_mask").remove();
		}
		
	//sH("labConTitle","IDS_LOGIN_WORD4");
	//此处作判断，是否加载有些左边菜单或者控件
        if (gVar_first.p2pFlag == 0) {
            $("#net_p2p").remove(); 
        }
        if (gVar_first.ptFlag == 0) {
            $("#cruise_1").css("display", "none");
            $("#preset_2").css("display", "none");
            $("#m_1").css("display", "none");
            $("#m_2").css("display", "none");
            $("#leftptz").css("display", "none");
            $("#cfgmune_7").css("display", "none");
        }
        //guard
        if ((gVar_first.reserveFlag2 >> 1 & 0x01) == 0) {
            $("#ptz_guard").remove();
            $("#guard_6").css("display", "none");
            $("#m_6").css("display", "none");
        }
        else {
            $("#guard_6").css("display", "");
            $("#m_6").css("display", "");
        }

        if (gVar_first.rs485Flag == 1) {
            $("#cruise_1").css("display", "");
            if ($("#cruise_1").attr("isdown") == 0) {
                $("#m_1").css("display", "");
            }
            $("#leftptz").css("display", "");
            $("#cfgmune_7").css("display", "");
            $("#ptz_ctrack").remove();
            $("#ptz_initcof").remove();
            $("#ptz_485").css("display", "");
        }

        if (gVar_first.wifiType == 0) {
            $("#net_wifi").remove();
        }

        if (gVar_first.zoomFlag == 0) {
            $("#lab_zoomIn").css("display", "none"); $("#zoomIn").css("display", "none");
            $("#lab_zoomOut").css("display", "none"); $("#zoomOut").css("display", "none");
            $("#lab_focusFar").css("display", "none"); $("#focus_far").css("display", "none");
            $("#lab_focusNear").css("display", "none"); $("#focus_near").css("display", "none");
        }

        if (gVar_first.sdFlag == 0) {
            $("#PlayBackMenu").remove();
            $("#rc_sdmanage").remove();
        }

        if ((gVar_first.reserve1 & (0x01)) == 0) {
            $("#net_cloud").remove();
        }
        
        if ((gVar_first.reserve1 >> 1 & 0x01) == 0) {
           $("#net_push").remove(); 
        }

        if ((gVar_first.reserve2 >> 4 & 0x01) == 0) {
            $("#alarm_mv").css("display", "");
            $("#alarm_motion").css("display", "none");
        }
        else {
            $("#alarm_mv").css("display", "none");
            $("#alarm_motion").css("display", "");
        }
        if ((gVar_first.reserve2 >> 1 & 0x01) == 0) {
            $("#alarm_sud").remove();  //reserve bit 2: sound alarm
        }


        //temperature
		if ((gVar_first.reserve2 >> 2 & 0x01) == 0) {
		    $("#alarm_temperature").css("display", "none");
		}

		if ((gVar_first.reserve2 >> 3 & 0x01) == 0) {
		    $("#alarm_humidity").css("display", "none");
		}
        //humanDetection
        if ((gVar_first.reserve2 >> 5 & 0x01) == 0){
            $("#alarm_IV").css("display", "none");
        }
        

		if (gVar_first.ioAlarmFlag == 0) {
		    $("#alarm_io").remove();
		}

        if((gVar_first.reserve4 & 0x01) == 0){  // Lens Distortion Correction Flag   1-Yes 0-No
            $("#av_lens").remove();
        }
        
        if((gVar_first.reserve4 >>1 & 0x01) == 1){  //part 1080P Dev not suppot record to sd card.  1-not support to sd  0-support
            $("#rc_plan").remove();
        }

        if ((gVar_first.reserve3 >> 4 & 0x01) == 0) {
            $("#net_pppoe").remove();
            if (isSoftAPMode == 1){
                $("#net_ip").remove();
                $("#net_port").remove();
                $("#net_ddns").remove();
                $("#net_upnp").remove();
                $("#bs_email").remove();
                $("#path_ftp").remove();
                $("#net_cloud").remove();
                if(LoadLeftPage != BB){
                    $("#bs_multi").remove();
                }
                if (((gVar_first.reserve1 & (0x01 << 1)) >> 1) != 0) {
                    $("#net_push").remove();
                }
            }
        }
        //led 
        if ((gVar_first.reserve4 >> 4 & 0x01) == 0) {
            $("#bs_led").remove();
        }
         if((gVar_first.reserve4>>9&0x01)==0)
		 {
			 $("#bs_voice").remove();
		 }
        
        if ((gVar_first.reserve4 >> 5 & 0x01) == 0) {
            $("#bs_night").remove();
        }

        if ((gVar_first.reserve4 >> 3 & 0x01) == 0) {
            $("#alarm_onekey").remove();
        }
        //soft Ap
        if ((gVar_first.reserve3 >> 2 & 0x01) == 1 || gVar_first.model == "1111" || gVar_first.model == "1112") {
            $("#net_softAP").css("display","");
        }
        else {
            $("#net_softAP").css("display", "none");
        }

		//irled
        if ((gVar_first.reserve3 >> 5 & 0x01) == 1 ) {
            $("#av_irled").remove();
	    $("#LED_3,#m_3").hide();
        }
        else{
			$("#LED_3,#m_3").show();
		}

        //登录后，右上角显示的内容
        if (cur_Dev == "HD818W" ) {
            sH("labConTitle","IDS_LOGIN_WORD8");
        }else{
             if( gVar_first.outdoorFlag ==0 && gVar_first.ptFlag ==1 && gVar_first.zoomFlag == 1){
                sH("labConTitle","IDS_LOGIN_WORD4");  //室内 ptz机
             }else if (gVar_first.outdoorFlag ==0 && gVar_first.ptFlag ==1 && gVar_first.zoomFlag == 0) {
                sH("labConTitle","IDS_LOGIN_WORD5");  //室内 PT机
             }else if (gVar_first.outdoorFlag ==1) {
                sH("labConTitle","IDS_LOGIN_WORD6"); //室外机 eg.04W
             }else if(gVar_first.outdoorFlag ==0 && gVar_first.ptFlag ==0 && gVar_first.zoomFlag == 0){
                sH("labConTitle","IDS_LOGIN_WORD7");//室内IP摄像机 08P
            }else if (gVar_first.outdoorFlag == 0 && gVar_first.ptFlag == 0 && gVar_first.zoomFlag == 1) {
                sH("labConTitle", "IDS_LOGIN_WORD7"); //室内IP摄像机 08P
            }
        }
		
		//p1 隐藏云台速度设置页面
		if(gVar_first.model==1112||gVar_first.model==1113)
		{
			$("#ptz_rate").css("display","none");
		}
		
		/*不支持Onvif 隐藏onvif页面,否则不隐藏onvif页面*/
		if(gVar_first.onvifFlag==0)
		{
			$("#net_onvif").css("display","none");
		}
		
		/*
		the model is bettween 6000 and 7000 
		1. 去掉dhcp功能，相应的网页需去掉 
        2. 去掉upnp功能，相应的网页需去掉 
        3. 视频配置方面：四种模式都要去掉主帧间隔的显示 
        4. 视频参数配置：只有自定义模式可以修改分辨率、码率和帧率，其他模式不可更改，分辨率、码率和帧率的选项需置灰 
		*/
		/*if(isModel_6000To7000())
		{
			$("#net_ddns,#net_upnp").remove();
		}*/
		
		
		
		
		
		
		
		// 回放页面选择时间
		 sH("rTime_from", "IDS_FROM");
		 sH("rTime_to", "IDS_TO");
		function createTime(el,count)
		{ 
		for(var i=0;i<count;i++)
		 {
			 if(i<10)
			 {
			 var str="<option value=" + i + ">" + "0"+i + "</option>";
			 }
			 else
			 {
				 var str="<option value=" + i + ">" +i + "</option>";
			 }
			 $("#"+el).append(str);
		 }
		}
		 
		 createTime("rTime_SHour",24);
		 createTime("rTime_EHour",24);
		 createTime("rTime_EMinute",60);
		 createTime("rTime_SMinute",60);
		 $("#rTime_SHour").val(0);
		 $("#rTime_SMinute").val(0);
		 $("#rTime_EHour").val(23);
		 $("#rTime_EMinute").val(59);
         sH("NAAType","IDS_NET_NAA");
         sOH("liveVideo_NAA",0,"IDS_OTHER_OFF");
         sOH("liveVideo_NAA",1,"IDS_OTHER_ON");
         /*if(gVar_first.model>1000&&gVar_first.model<2000||gVar_first.model>3000&&gVar_first.model<4000||gVar_first.model>5000&&gVar_first.model<7000)
         {
            if(gVar.nUserRight != 0)
            {
                $("#liveNAA").show();
            }
         }*/
		if(gVar.lg == "FRA" || gVar.lg == "POR"){
            $(".configHead").css('width', '216px');
        }
        if(gVar.lg == "POR"){
            $("#ConfigMenu").css({
                "text-indent": "-2px",
                "padding-left": "20px",
                "width":"159px"
            });
        }
		 

    } else if (pageName == "login") {
    /*if(browserVer.browsers=="Edge")
		{
			$(".pluginTips").css("display","");
			
			$(".pluginTips").css("text-align","left");
			//$(".pluginTips").css("text-indent","50px");
			$(".pluginTips").css("display","inline-block");
			$("#blank100").css("height","50px");
			$(".pluginTips").css("font-size","16px");
			sH("pluginTip1","IDS_PLUGIN_EDGETIP");
			
		}*/
        sH("login_reset", "IDS_LOGIN_RESET"); sH("language", "IDS_LANGUAGE"); sH("usernames", "IDS_LOGIN_NAME"); sH("password", "IDS_SERVERINFO_PSW");
        sH("streamport", "IDS_SYS_MEDIOP"); sH("streamcode", "IDS_LOGIN_BITRATE"); sOH("login_ml", 0, "IDS_CODE_STREAM_01"); sOH("login_ml", 1, "IDS_CODE_STREAM_02");
        sH("rememberPS", "IDS_REM_PASSWORD"); sH("openpiew", "IDS_PREVIEWOPENSTREAM"); sH("login_ok", "IDS_SERVER_LOGIN"); sH("loginword", "IDS_LOGIN_WORD9");
        sH("divUpFWTips", "IDS_LOGIN_UPDATE_FIRMWARE_TIPS1"); sH("aFirmware", "IDS_LOGIN_UPDATE_FIRMWARE_TIPS2");
        sH("down2", "IDS_PLUGINS_EXCEPTION_LINK");        
        if (!(document.getElementById("down") == null || document.getElementById("down") == "undefined")) {
            if (isPlugin) {
                sH("down", "IDS_PLUGIN_UPDATE_TIP");
            } else {
                sH("down", "IDS_LOGIN_KJ");
            }
        }
        sH("CapsLockTips1", "IDS_CAPSLOCK");
    } else if (pageName == "login_user") {
        sH("loginword", "IDS_LOGIN_WORD9");
        sH("loginUser", "IDS_LOGIN_NAME");
        sH("loginNewUser", "IDS_BS_NEW_USERNAME");
        sH("loginNewPwd", "IDS_BS_NEWPWD");
        sH("loginPwdStrenth", "IDS_PWD_TESTLEV");
        sH("loginPwdConfirm", "IDS_BS_NEWPWDAG");
        sH("btnLoginEdit", "IDS_BS_MODIFY");
        sH("CapsLockTips2", "IDS_CAPSLOCK");sH("CapsLockTips3", "IDS_CAPSLOCK");
    } else if (pageName == "set_guid") {
        sH("divSetGuidTitle", "IDS_SET_GUID");
        document.getElementById("divGuidTbTitle").innerHTML = lg.get("IDS_SET_GUID") + " - " + lg.get("IDS_SET_GUID_BEGIN");
        sV("btnPre", "IDS_PREV_STEP"); sV("btnNext", "IDS_NEXT_STEP"); sV("btnFinish", "IDS_FINISH_STEP");
        sH("divWelcomeIPC", "IDS_SET_GUID_IPC"); sH("divWelcomeDetail", "IDS_SET_GUID_IPC_DETAIL");
    } else if (pageName == "dev_info") {
        sV("devinfoRf", "IDS_RE_REFRESH"); sH("DevInfobs", "IDS_DEV_INFO"); sH("DevIfSoftP", "IDS_BASE_SOFTPLUGINVER"); sH("DevIfSoftW", "IDS_BASE_SOFTWEBVER"); sH("DevIfName", "IDS_DEV_NAME");
        sH("DevIfD", "IDS_DEVICE"); sH("DevIfDName", "IDS_BASE_DEVNAME"); sH("DevIfMAX", "IDS_DEV_MAX"); sH("DevIfT", "IDS_DEV_Time"); sH("DevIfRC", "IDS_DEV_RC"); sH("DevIfHV", "IDS_BASE_HARDVER");
    } else if (pageName == "dev_state") {
        sV("devstateRf", "IDS_RE_REFRESH"); sH("DevStatet", "IDS_DISPLAY_PARAM"); sH("IDS_DEV_ALARMSTATE", "IDS_DEV_ALARMSTATE"); sH("IDS_DEV_IOALARMSTATE", "IDS_DEV_IO_ALARMSTATE"); /*sH("IDS_DEV_MOTIONDETECTALARM","IDS_DEV_MOTIONDETECTALARM");sH("IDS_DEV_SOUNDALARM","IDS_DEV_SOUNDALARM");*/
        sH("IDS_DEV_RECORD", "IDS_DEV_RECORD"); sH("IDS_DEV_SDSTATE", "IDS_DEV_SDSTATE"); sH("IDS_DEV_SDFS", "IDS_DEV_SDFS"); sH("IDS_DEV_SDTS", "IDS_DEV_SDTS"); sH("IDS_DEV_NTPSTATE", "IDS_DEV_NTPSTATE");
        sH("IDS_DEV_DDNSSTATE", "IDS_DEV_DDNSSTATE"); sH("IDS_DEV_UPNPSTATE", "IDS_DEV_UPNPSTATE"); sH("dstatewifi", "IDS_DEV_WIFISTATE"); sH("dstateled", "IDS_DEV_LEDSTATE");
        sH("thSoudAlarmStat", "IDS_DEV_SOUND_ALARMSTATE"); sH("thTempAlarmStat", "IDS_DEV_TEMPERATURE_ALARMSTATE");
        sH("thHumidityAlarmStat", "IDS_DEV_HUMIDITY_ALARMSTATE");
        sH("IDS_DEV_EVENTSALARM", "IDS_DEV_EVENTSALARM");
        sH("thHumanAlarmStat", "IDS_DEV_HUMAN_ALARM");
        if (gVar_first.sdFlag == 0) {
            $("#IDS_DEV_SDSTATETR").css("display", "none");
            $("#IDS_DEV_SDFSTR").css("display", "none");
            $("#IDS_DEV_SDTSTR").css("display", "none");
        }
        if (isSoftAPMode == 1) {
            $("#trDevNTP").css("display", "none");
            $("#trDevDDNS").css("display", "none");
            $("#trDevUPNP").css("display", "none");
        }
		/*if(isModel_6000To7000())
		{
			$("#trDevDDNS").css("display", "none");
            $("#trDevUPNP").css("display", "none");
		}*/
		
	}else if(pageName == "dev_ses"){
		sV("devsesRf","IDS_RE_REFRESH");sH("IDS_DEV_IP","IDS_DEV_IP");sH("devSesUSRNAME","IDS_LOGIN_NAME");sH("DevSession","IDS_DEV_SESSION");
	}else if(pageName == "dev_log"){
		sV("devlogRf","IDS_RE_REFRESH");sH("DevLogt","IDS_DEV_LOG");sH("devlogNo.","IDS_DEV_LOGNO");sH("devlogTime","IDS_LEFT_TIM");sH("devlogUser","IDS_DEV_LOGUSER");sH("devloglog","IDS_DEV_LOG");
	}else if(pageName == "fw_ip"){
		sV("fwipRf","IDS_RE_REFRESH");sV("fwIpSave","IDS_CRUISE_SAVE");sH("FWIPt","IDS_FW_IP");sH("FwIPIsEb","IDS_FW_IPISEB");sH("FwIPrule","IDS_FW_IP");sH("FwIPNo","IDS_FW_IPNO");sH("FwIPIs","IDS_FW_IPIS");
		
	}else if(pageName == "alarm"){
        sV("alarmRf", "IDS_RE_REFRESH"); sV("AlarmSave", "IDS_CRUISE_SAVE"); sH("AmTrger", "IDS_ALARM_TRGER"); sH("AmTactics", "IDS_ALARM_TACTICS"); sH("AmMoSX", "IDS_ALARM_MVMOSX"); sH("rcAlarmNotice", "IDS_RCPLAN_TIP4");
        sH("AmRing","IDS_ALARM_RING");
		$("#AmSedEmail").prepend(lg.get("IDS_ALARM_SEDEMAIL"));
		$("#AmCaptImg").prepend(lg.get("IDS_ALARM_CAPTIMG"));
		$("#AmRecord").prepend(lg.get("IDS_ALARM_RECORD"));
		$("#AmIOOutput").prepend(lg.get("IDS_ALARM_IOOUTPUT"));
		sH("AmClearIO","IDS_ALARM_IOOUTPUTCLEAR");
		sH("AmEleLevelT","IDS_ALARM_CD");sH("AmEleLowLevel","IDS_ALARM_DCD");sH("AmEleHighLevel","IDS_ALARM_GCD");
		sH("AmTemperatureT", "IDS_ALARM_TTEMPERATRUE_RANGE"); sH("rcTempTips", "IDS_ALARM_TTEMPERATRUETIPS"); sH("rcTempTips_F", "IDS_ALARM_TTEMPERATRUETIPS_F");
		sH("AmTemperatureRangeTips", "IDS_TEMPERATURE_ALARM_RANGE_TIPS");
		sH("AmHumidityT", "IDS_ALARM_HUMIDITY_CONFORTABLE_RANGE");
		sH("AmHumidityTips", "IDS_ALARM_HUMIDITY_RANGE_TIPS");
		sH("AmSensitivity","IDS_ALARM_SENSIT");sH("AmLowSensit","IDS_ALARM_LOWSENSIT");sH("AmMidSensit","IDS_ALARM_MIDSENSIT");sH("AmHighSensit","IDS_ALARM_HIGHSENSIT");sH("AmZC","IDS_ALARM_ZC");sH("AmCapttime","IDS_ALARM_TIME");
		sH("AmLowerSensit","IDS_ALARM_LOWER_SENSIT");sH("AmLowestSensit","IDS_ALARM_LOWEST_SENSIT");
		sH("Am_OutMove","IDS_ALARM_MOVEOUT");
	    sH("divAlarmPCSound","IDS_RC_SOUNDALARM_AS_PC");
	    sH("divAlarmPCSound_ioalarm","IDS_RC_SOUNDALARM_AS_PC");
	    sH("divAlarmPCSound_sudalarm","IDS_RC_SOUNDALARM_AS_PC");
	    sH("divAlarmPCSound_tmpalarm", "IDS_RC_SOUNDALARM_AS_PC");
	    sH("divAlarmPCSound_humalarm", "IDS_RC_SOUNDALARM_AS_PC");
        sH("divAlarmPCSound_IValarm","IDS_RC_SOUNDALARM_AS_PC");
	    sH("rcTempTips_H", "IDS_ALARM_TTEMPERATRUETIPS_HUM");
	    document.getElementById("rcTempTips_H").innerHTML = lg.get("IDS_ALARM_TTHUM1") + "% ," + lg.get("IDS_ALARM_TTHUM2") + "% ," + lg.get("IDS_ALARM_TTHUM3") + "% .";
        sH("AmToPhone","IDS_ALARM_TOPHONE");
	    //sH("divAlarmSnapTips", "IDS_ALARM_SNAP_TIPS");sH("divAlarmRecordTips", "IDS_ALARM_RECORD_TIPS");
	    document.getElementById("divAlarmSnapTips").innerHTML = lg.get("IDS_ALARM_SNAP_TIPS") + "(" + lg.get("IDS_AV_PARAM") + " -> " + lg.get("IDS_BTN_CAP") + ")";
	    document.getElementById("divAlarmRecordTips").innerHTML = lg.get("IDS_ALARM_RECORD_TIPS") + "(" + lg.get("IDS_RECORD_PARAM") + " -> " + lg.get("IDS_RC_VPRATH") + ")";
	    sH("AmMotionAlarm", "IDS_DEV_MOTIONDETECTALARM"); sH("AmHumanAlarm", "IDS_DEV_HUMANDETECTION");
        sH("AmMotionTrue", "IDS_OTHER_ON"); sH("AmMotionFalse", "IDS_OTHER_OFF");
        sH("AmHumanTrue", "IDS_OTHER_ON"); sH("AmHumanFalse", "IDS_OTHER_OFF");
        sH("PirMotionAlarm", "IDS_DEV_MOTIONDETECTALARM"); 
        if (Qqx == 0) {
            $("#AlarmSave").remove();
        }
        else if (Qqx == 1) {
            $("#AlarmSave").remove();
        }
        else { }

		if (gVar_first.audioFlag ==0){
		    $("#AmRing").remove();
		    $("#AmLink1").remove();
		    document.getElementById("divAlarmPCSound").style.marginLeft = "0px";
		}
		if (gVar_first.sdFlag == 0) {
            //$("#AmRecordTR").css("display", "none");
        }
		if ((gVar_first.reserve2 & 0x01) == 0) 
		{
			$("#Am_OutMove").remove();
			$("#AmOutMove").remove();
		}

        //if (((gVar_first.reserve1 & (0x01<<1))>>1) == 0) {  //if hasn't the function cloud push
            //$("#AmToPhoneTR").css("display", "none");
        //}
        if ((gVar_first.reserve1 >> 1 & 0x01) == 1 || (gVar_first.reserve1 >> 2 & 0x01) == 1) {  //if hasn't the function cloud push
            $("#AmToPhoneTR").css("display", "");
        }
	}else if(pageName == "alarm_IV"){
        sH("AlarmT","IDS_HUMANDETECTION_ALARM");
        sH("AlarmIsEb","IDS_ALARM_ISHUMAN");
        sH("defaultSet", "IDS_DEFAULT_SETTING");
        sH("advancedSet", "IDS_ADVANCEDSET");
        sH("peopleCount", "IDS_PERSON_FLOW");
        sH("peopleCountAllDay", "IDS_PERSON_FLOW"); 
        sH("clear", "IDS_FLOW_ZERO");
        sH("sensitivity", "IDS_SENSITIVITY");
        sH("sensitivityNotes", "IDS_SENSITIVITY_NOTES"); 
        sH("cameraAngle", "IDS_INSTALLATION_ANGLE"); 
        sH("Incline", "IDS_ANGLE_TILT");  
        sH("Horizontal", "IDS_ANGLE_LEVEL");  
        sH("defaultAlarmInterval", "IDS_HUMANALARM_DEFAULT");
        sH("boundingBoxSwitch", "IDS_BOUNDING_BOX"); 
    }else if(pageName == "rc_jh"){
		sH("AlarmT","IDS_RC_PLANV");sH("AlarmIsEb","IDS_RC_ISENV");sH("AmVCBitmap","IDS_RC_VTEDIT");
	}else if(pageName == "alarm_sud"){
		sH("AlarmT","IDS_DEV_SOUNDALARM");sH("AlarmIsEb","IDS_ALARM_ISSUDEB");sH("AmVCBitmap","IDS_ALARM_VCBITMAP");
	}else if(pageName == "alarm_mv"){
		sH("AlarmIsEb","IDS_ALARM_ISMVEB");sH("AlarmT","IDS_DEV_MOTIONDETECTALARM");sH("AmVCBitmap","IDS_ALARM_VCBITMAP");
		sH("AmzcMotionText", "IDS_MOTION_TEXT");
		sH("RegionEnable1", "IDS_ENABLE_TEXT"); sH("RegionEnable2", "IDS_ENABLE_TEXT"); sH("RegionEnable3", "IDS_ENABLE_TEXT");
		sH("RegoinSensit1", "IDS_ALARM_SENSIT"); sH("RegoinSensit2", "IDS_ALARM_SENSIT"); sH("RegoinSensit3", "IDS_ALARM_SENSIT");
		sH("RegionTiggerArea1", "IDS_REGION_TRIGGER"); sH("RegionTiggerArea2", "IDS_REGION_TRIGGER"); sH("RegionTiggerArea3", "IDS_REGION_TRIGGER");
		sOH("selQue1", 0, "IDS_ALARM_LOWEST_SENSIT"); sOH("selQue1", 1, "IDS_ALARM_LOWER_SENSIT"); sOH("selQue1", 2, "IDS_ALARM_LOWSENSIT"); sOH("selQue1", 3, "IDS_ALARM_MIDSENSIT"); sOH("selQue1", 4, "IDS_ALARM_HIGHSENSIT");
		sOH("selQue2", 0, "IDS_ALARM_LOWEST_SENSIT"); sOH("selQue2", 1, "IDS_ALARM_LOWER_SENSIT"); sOH("selQue2", 2, "IDS_ALARM_LOWSENSIT"); sOH("selQue2", 3, "IDS_ALARM_MIDSENSIT"); sOH("selQue2", 4, "IDS_ALARM_HIGHSENSIT");
		sOH("selQue3", 0, "IDS_ALARM_LOWEST_SENSIT"); sOH("selQue3", 1, "IDS_ALARM_LOWER_SENSIT"); sOH("selQue3", 2, "IDS_ALARM_LOWSENSIT"); sOH("selQue3", 3, "IDS_ALARM_MIDSENSIT"); sOH("selQue3", 4, "IDS_ALARM_HIGHSENSIT");
		sH("RegionText1", "IDS_REGION_TEXT1"); sH("RegionText2", "IDS_REGION_TEXT2"); sH("RegionText3", "IDS_REGION_TEXT3");
		sH("btnDelMotionRect", "IDS_BS_DEL");
    }else if(pageName == "alarm_io"){
	    sH("AlarmT","IDS_ALARM_IO");sH("AlarmIsEb","IDS_ALARM_ISEB");sH("AmVCBitmap","IDS_ALARM_VCBITMAP");
	}else if (pageName == "alarm_temperature") {
	    sH("AlarmT", "IDS_ALARM_TEMPERATRUE"); sH("AlarmIsEb", "IDS_ALARM_ISTEMPERATRUEEB"); sH("AmVCBitmap", "IDS_ALARM_VCBITMAP");
	} else if (pageName == "alarm_motion") {
	    sH("AlarmT", "IDS_DEV_MOTIONDETECACTIVITY");
	    sH("AlarmIsEb", "IDS_ALARM_ISMVEBMOTION");
	    sH("RegionEnable1", "IDS_ENABLE_TEXT"); sH("RegionEnable2", "IDS_ENABLE_TEXT"); sH("RegionEnable3", "IDS_ENABLE_TEXT");
	    sH("RegoinSensit1", "IDS_ALARM_SENSIT"); sH("RegoinSensit2", "IDS_ALARM_SENSIT"); sH("RegoinSensit3", "IDS_ALARM_SENSIT");
	    sH("RegionTiggerArea1", "IDS_REGION_TRIGGER"); sH("RegionTiggerArea2", "IDS_REGION_TRIGGER"); sH("RegionTiggerArea3", "IDS_REGION_TRIGGER");
	    sOH("selQue1", 0, "IDS_ALARM_LOWEST_SENSIT"); sOH("selQue1", 1, "IDS_ALARM_LOWER_SENSIT"); sOH("selQue1", 2, "IDS_ALARM_LOWSENSIT"); sOH("selQue1", 3, "IDS_ALARM_MIDSENSIT"); sOH("selQue1", 4, "IDS_ALARM_HIGHSENSIT");
	    sOH("selQue2", 0, "IDS_ALARM_LOWEST_SENSIT"); sOH("selQue2", 1, "IDS_ALARM_LOWER_SENSIT"); sOH("selQue2", 2, "IDS_ALARM_LOWSENSIT"); sOH("selQue2", 3, "IDS_ALARM_MIDSENSIT"); sOH("selQue2", 4, "IDS_ALARM_HIGHSENSIT");
	    sOH("selQue3", 0, "IDS_ALARM_LOWEST_SENSIT"); sOH("selQue3", 1, "IDS_ALARM_LOWER_SENSIT"); sOH("selQue3", 2, "IDS_ALARM_LOWSENSIT"); sOH("selQue3", 3, "IDS_ALARM_MIDSENSIT"); sOH("selQue3", 4, "IDS_ALARM_HIGHSENSIT");
	    sH("RegionText1", "IDS_REGION_TEXT1"); sH("RegionText2", "IDS_REGION_TEXT2"); sH("RegionText3", "IDS_REGION_TEXT3");
	    sH("btnDelMotionRect", "IDS_BS_DEL");
	} else if (pageName == "alarm_humidity") {
	    sH("AlarmT", "IDS_ALARM_HUMIDITY"); sH("AlarmIsEb", "IDS_ALARM_HUMIDITY_ENABLE");
	} else if (pageName == "alarm_onekey") {
	    sH("divOneKeyActivity", "IDS_DEV_MOTIONDETECACTIVITY");
	    sV("alarmonekeyRf", "IDS_RE_REFRESH"); sV("alarmonekeySave", "IDS_CRUISE_SAVE");sH("legAlarmOneKey", "IDS_ALARM_ONE_KEY");
	    sH("divAlarmOneKeyEnb", "IDS_ALARM_ONE_KEY_ENABLE"); sH("divOneKeyType", "IDS_ALARM_ONE_KEY_SEL_TYPE");
        sH("divOneKeyMotion", "IDS_DEV_MOTIONDETECTALARM");sH("divOneKeySound", "IDS_DEV_SOUNDALARM");sH("divOneKeyTempurature", "IDS_ALARM_TEMPERATRUE");sH("divOneKeyHumidity", "IDS_ALARM_HUMIDITY");
    }
    else if (pageName == "av_base") {
        sH("AvBsMainStreamT", "IDS_AV_BASE_MAINSTRAM_CONFIG");
        sV("avbaseRf", "IDS_RE_REFRESH"); sV("avBsSave", "IDS_CRUISE_SAVE"); sH("AvBs", "IDS_AV_BASE"); sH("AvBsStType", "IDS_AV_STTYPE"); sH("AvBsRsltion", "IDS_AV_RSLTION");
        sH("AvBsbRate", "IDS_AV_BRATE"); sH("AvBsfRate", "IDS_AV_FRATE"); sH("AvBsGop", "IDS_AV_GOP");

        sH("AvBsSubStreamT", "IDS_AV_BASE_SUBSTRAM_CONFIG");
        sH("AvBsSubStType", "IDS_AV_STTYPE"); sH("AvBsSubRsltion", "IDS_AV_RSLTION");
        sH("AvBsSubbRate", "IDS_AV_BRATE"); sH("AvBsSubfRate", "IDS_AV_FRATE"); sH("AvBsSubGop", "IDS_AV_GOP");
        sH("thAvBsisVBRT", "IDS_AV_VBR"); sH("optisVBRNo", "IDS_AV_NO"); sH("optisVBRYes", "IDS_AV_IS");
        sH("divAvBaseNight", "IDS_AV_BASE_NIGHT_MODE");
        sH("avBST_0", "IDS_AV_BASE_DISTINCT_MODE");
        sH("avBST_1", "IDS_AV_BASE_BALANCE_MODE");
        sH("avBST_2", "IDS_AV_BASE_SMOOTH_MODE");
        sH("avBST_3", "IDS_AV_BASE_CUSTOM_MODE");
		// 如果是400W 机型 编码设置，显示6m编码  // 分辨率的移除实际上应该使用 sensorType==11进行判断。
        sH("avBSST_0", "IDS_AV_BASE_DISTINCT_MODE");
        sH("avBSST_1", "IDS_AV_BASE_BALANCE_MODE");
        sH("avBSST_2", "IDS_AV_BASE_SMOOTH_MODE");
        sH("avBSST_3", "IDS_AV_BASE_CUSTOM_MODE");
        //LBR
        sH("liveLBRType", "IDS_LIVE_LDR");
        sH("SubLbrRTpye", "IDS_LIVE_LDR");
         if (Qqx == 0)
		{
			$("#avBsSave").remove();
		}else if (Qqx == 1)
		{
			$("#avBsSave").remove();
		}
		else{}
	}else if(pageName == "av_osd"){
		sV("avosdRf","IDS_RE_REFRESH");sV("avOsdSave","IDS_CRUISE_SAVE");/*sH("AvOSD", "IDS_AV_OSD");*/sH("AvOsdIsTS","IDS_AV_IS");sH("AvOsdIsDN","IDS_AV_IS");sH("AvOsdNoTS","IDS_AV_NO");
		sH("AvOsdNoDN","IDS_AV_NO");sH("avOsdIsEnTime","IDS_AV_ISENIIME");sH("avOsdIsEnDName","IDS_AV_ISENDNAME");sH("avOsdDispPos","IDS_AV_DISPPOS");
		sH("avOsdUpLeft","IDS_PTZ_LEFTUP");sH("avOsdBotLeft","IDS_PTZ_LEFTDOWN");sH("avOsdUpRight","IDS_PTZ_RIGHTUP");sH("avOsdBotRight","IDS_PTZ_RIGHTDOWN");
		sH("AvOSDTempAndHum", "IDS_SHOW_TEMPANDHUM");
		sH("AvOSDTemp", "IDS_SHOW_TEMPERATURE");
		sOH("AvOSDTempAndHumName", 0, "IDS_AV_NO");
        sOH("AvOSDTempAndHumName", 1, "IDS_AV_IS");
        sOH("AvOSDTempName", 0, "IDS_AV_NO"); 
        sOH("AvOSDTempName", 1, "IDS_AV_IS");
        if (Qqx == 0) $("#avOsdSave").remove();
		else if (Qqx == 1) $("#avOsdSave").remove();
		else{}
	}else if(pageName == "av_mask"){
        sV("avmaskRf", "IDS_RE_REFRESH"); sV("avmaskSave", "IDS_CRUISE_SAVE"); sH("Avo_Mask", "IDS_AV_MASK"); 
        sH("avSheDel", "IDS_BS_DEL"); sH("avSheback", "IDS_ALARM_MVMOSX"); sH("avShbj", "IDS_AV_SHBJ");
        sH("avOsdIsEnShelt","IDS_AV_ISENSHELT");sH("AvOsdIsMask","IDS_AV_IS");sH("AvOsdNoMask","IDS_AV_NO");
        if (Qqx == 0) $("#avmaskSave").remove();
        else if (Qqx == 1) $("#avmaskSave").remove();
        else { }
    } else if (pageName == "av_captur") {
        sV("avcapturRf", "IDS_RE_REFRESH"); sV("avCaptSave", "IDS_CRUISE_SAVE"); sH("AvCapturt", "IDS_BTN_CAP"); sH("AvCaptImgQua", "IDS_AV_IMGQUA"); sH("AvCaptPath", "IDS_AV_PATH"); sH("AvCaptSDCard", "IDS_AV_SDCARD");
        sH("AvCapNull", "IDS_NET_WIFIPNO");
        sH("AvCapSDAndCloud", "IDS_SD_AND_CLOUD");
        sH("divCapPathTips", "IDS_SNAP_CLOUD_TIPS");
        sH("divCapPathSoftTips", "IDS_SOFTAP_NO_FTP_CLOUD_TIPS");
        $("#divCapPathNoSD").html(lg.get("SDSTATE_TEST").split(",")[0]);
		sOH("avcaqua",0,"IDS_ALARM_LOWSENSIT");sOH("avcaqua",1,"IDS_ALARM_MIDSENSIT");sOH("avcaqua",2,"IDS_ALARM_HIGHSENSIT");
		sH("TAm_Interval","IDS_SNAP_INTERVAL");sH("TAlarmIsEb","IDS_SNAP_ENABLE");
		sH("TAmVCBitmap", "IDS_AV_CAPTIMEEDIT");
		sH("FileNameTitle", "IDS_SET_FILENAME");
		sH("FileNameText", "IDS_FILENAME");
		if (Qqx == 0) { $("#avCaptSave").remove(); }
		else if (Qqx == 1) { $("#avCaptSave").remove(); }
		else { }
	}else if (pageName == "av_irled") {
        sV("avirledRf", "IDS_RE_REFRESH"); sV("avirledSave", "IDS_CRUISE_SAVE"); sH("AvIrSchedule", "IDS_IR_CLOSET"); sH("ASS_Add", "IDS_BS_ADD"); sH("ASS_Sub2", "IDS_BS_DEL"); sH("ASS_Sub3", "IDS_BS_DEL");
        sH("irScheduleT", "IDS_IR_SCHEDULE");
        sH("av_ir_from1", "IDS_FROM"); sH("av_ir_from2", "IDS_FROM"); sH("av_ir_from3", "IDS_FROM"); sH("av_ir_to1", "IDS_TO"); sH("av_ir_to2", "IDS_TO"); sH("av_ir_to3", "IDS_TO");
        sH("AvIrledt", "IDS_BTN_IRLED");
	}else if (pageName == "av_lens") {
        sV("avlensRf", "IDS_RE_REFRESH"); sV("avlensSave", "IDS_CRUISE_SAVE"); sH("thAvLensPara", "IDS_AV_SCENE_LEVEL");
        sH("optLensLow", "IDS_ALARM_LOWSENSIT"); sH("optLensMiddle", "IDS_ALARM_MIDSENSIT"); sH("optLensHigh", "IDS_ALARM_HIGHSENSIT");
        sH("divAvLensTips", "IDS_AV_SCENE_TIPS");
        sH("legAvLens", "IDS_AV_SCENE");
    }
    else if(pageName == "bs_email"){
		sV("bsemailRf","IDS_RE_REFRESH");sH("baemailword","IDS_BS_EMAILWORD");sV("bsElSave","IDS_CRUISE_SAVE");sH("BsEmailIs","IDS_AV_IS");sH("BsEmailNo","IDS_AV_NO");sH("BsEmailSet","IDS_BS_EMAILSET");sH("bsElIsEnUse","IDS_BS_ISENUSE");
		sH("bsElSMTPAd","IDS_BS_SMTPAD");sH("bsSMTPNAME_Tip","IDS_SMTPNAME_TIP");sH("bsElSMTPPort","IDS_BS_SMTPPORT");sH("bsElIsEnLogVer","IDS_BS_ISENLOGVER");sH("bsElSMTPUsrName","IDS_BS_SMTPUSRNAME");sH("bsElSMTPPassword","IDS_BS_SMTPPASSWORD");
		sH("bsElSender","IDS_BS_SENDER");sH("bsElReciever1","IDS_BS_RECIEVER1");sH("bsElReciever2","IDS_BS_RECIEVER2");sH("bsElReciever3","IDS_BS_RECIEVER3");sH("bsElReciever4","IDS_BS_RECIEVER4");sH("bsElTest","IDS_BS_TEST");sH("bsEprot","IDS_BS_PROT");sH("BsEmailNon","IDS_NET_WIFIPNO");sH("bsElword","IDS_BS_WORD");
        sH("bsEmailUsrnameTip","IDS_BS_EMAIL_USRNAME_TIP");sH("bsEmailPwdTip","IDS_BS_EMAIL_PWD_TIP");sH("bsEmailReceiverTip","IDS_BS_EMAIL_RECEIVER_TIP");
        sH("bsSMTPEXAMPLE_tip", "IDS_EMAIL_EXAMPLE"); sH("bsSMTP_username", "IDS_SMTP_USERNAME"); sH("bsSMTP_Receiver", "IDS_SMTP_SOMEONE")
        if (Qqx == 0) {$("#bsElSave").remove();$("#bsElTest").attr("disabled","disabled");}
		else if (Qqx == 1) {$("#bsElSave").remove();$("#bsElTest").attr("disabled","disabled");}
		else{}
	}else if(pageName == "bs_base"){
        sV("bsbaseRf", "IDS_RE_REFRESH"); sV("bsBsSave", "IDS_CRUISE_SAVE"); 
        if(lanPage != "set_guid"){sH("BsBaset", "IDS_BASE_DEVNAME");}
        sH("bsBsDevName", "IDS_BASE_DEVNAME");
        if (gVar_first.N_language !=2) sH("bsBsDevNameTip", "IDS_DEVNAME_TIPS");
        else sH("bsBsDevNameTip", "IDS_DEVNAME_TIPS2");
		if (Qqx == 0) $("#bsBsSave").remove();
		else if (Qqx == 1) $("#bsBsSave").remove();
		else{}
	}else if(pageName == "bs_time"){
		sV("bstimeRf","IDS_RE_REFRESH");sV("bsTSave","IDS_CRUISE_SAVE");
        if(lanPage != "set_guid"){sH("BsTimet","IDS_BS_TIME");}
        sH("BsTimeZone","IDS_BS_TIMEZONE");sH("bsTIsEnNTP","IDS_BS_ISENNTP");sH("bsTNTPAddrS","IDS_BS_NTPADDRS");
		sH("bsTInputNTP","IDS_BS_INPUTNTP");sH("bsTDateS","IDS_BS_DATES");sH("bsTYMD","IDS_BS_YMD");sH("bsTDMY","IDS_BS_DMY");sH("bsTMDY","IDS_BS_MDY");sH("bstimeLoad","IDS_BS_TIMELOAD");
		sH("bsTTimeS", "IDS_BS_TIMES"); sH("bsT12", "IDS_BS_12H"); sH("bsT24", "IDS_BS_24H"); sH("bsTIsEnUseDST", "IDS_BS_ISENUSEDST"); sH("bsTDaylight", "IDS_BS_DAYLIGHT_AHEAD");
		$("#bsTSysTime").prepend(lg.get("IDS_BS_SYSTIME"));
		sH("bsTDstMinute","IDS_MINUTE");sOH("bsTNTPS1",0,"IDS_BS_AUTO");
		
		// TDS new add
		sOH("TDSEWeek",0,"IDS_BS_SUNDAY");
		sOH("TDSEWeek",1,"IDS_BS_MONDAY");
		sOH("TDSEWeek",2,"IDS_BS_TUESDAY");
		sOH("TDSEWeek",3,"IDS_BS_WEDNESDAY");
		sOH("TDSEWeek",4,"IDS_BS_THURSDAY");
		sOH("TDSEWeek",5,"IDS_BS_FRIDAY");
		sOH("TDSEWeek",6,"IDS_BS_SATURDAY");
		
		sOH("TDSSWeek",0,"IDS_BS_SUNDAY");
		sOH("TDSSWeek",1,"IDS_BS_MONDAY");
		sOH("TDSSWeek",2,"IDS_BS_TUESDAY");
		sOH("TDSSWeek",3,"IDS_BS_WEDNESDAY");
		sOH("TDSSWeek",4,"IDS_BS_THURSDAY");
		sOH("TDSSWeek",5,"IDS_BS_FRIDAY");
		sOH("TDSSWeek",6,"IDS_BS_SATURDAY");
		
		sOH("TDSEWhichWeek",0,"IDS_TDS_FIRST");
		sOH("TDSEWhichWeek",1,"IDS_TDS_SECOND");
		sOH("TDSEWhichWeek",2,"IDS_TDS_THRID");
		sOH("TDSEWhichWeek",3,"IDS_TDS_FOURTH");
		sOH("TDSEWhichWeek",4,"IDS_TDS_LAST");
		
		sOH("TDSSWhichWeek",0,"IDS_TDS_FIRST");
		sOH("TDSSWhichWeek",1,"IDS_TDS_SECOND");
		sOH("TDSSWhichWeek",2,"IDS_TDS_THRID");
		sOH("TDSSWhichWeek",3,"IDS_TDS_FOURTH");
		sOH("TDSSWhichWeek",4,"IDS_TDS_LAST");
		sH("TDSStartTime","IDS_FROM");
		sH("TDSEndTime","IDS_TO");
		
		for(var i=1;i<=12;i++)
		{
			sOH("TDSEMouth",(i-1),"IDS_SYS_MONTH"+i);
			sOH("TDSSMouth",(i-1),"IDS_SYS_MONTH"+i);
		}
		var html="";
		for(var i=0;i<=23;i++)
		{
			 html+="<option value="+i+">"+i+"</option>";	
		}
		$("#TDSSHour").html(html);
		$("#TDSEHour").html(html);
		
		
		
		if (gVar_first.N_language == 0) {
		    $("#bsTUseDST").remove();
		    $("#bsTIsEnUseDST").remove();
		    $("#bsTDST").remove();
			if (gVar_first.model == 1111) {
				$("#bsTNTPTable, #tblTimeServer").remove();
				$("#BsTimeZone, #bsTTimeZone, #bsTimeHidden").css("display","none");
			}
		}
		if (Qqx == 0) $("#bsTSave").remove();
		else if (Qqx == 1) $("#bsTSave").remove();
		else{}
	}else if(pageName == "usr_base"){
		sV("usrbaseRf","IDS_RE_REFRESH");sH("usrnom","IDS_URS_NO.");sH("usrusr","IDS_LOGIN_NAME");sH("usrright","IDS_BS_RIGHT");sH("UsrBaset","IDS_BS_USRBASE");sH("usrBsModifyPwd","IDS_BS_MODIFYPWD");sH("usrBsUseName","IDS_LOGIN_NAME");sH("usrBsPassword","IDS_SERVERINFO_PSW");sH("usrBsNPassword","IDS_BS_NEWPWD");sH("usrBsNPasswordAG","IDS_BS_NEWPWDAG");
		sH("chkResultTD", "IDS_PWD_TESTLEV");
		sH("chkResultaddTD","IDS_PWD_TESTLEV");
		sH("UsrBaseRight","IDS_BS_RIGHT");sH("usrBsRight0","IDS_BS_RIGHT0");sH("usrBsRight1","IDS_BS_RIGHT1");sH("usrBsRight2","IDS_BS_RIGHT2");sH("usrBsAdd","IDS_BS_ADD");sH("usrBsXg","IDS_BS_MODIFY");sH("usrBsDel","IDS_BS_DEL");
		sH("usrBsModifyUsername","IDS_CHANGE_USERNAME");sH("usrBsNewUsernameT","IDS_BS_NEW_USERNAME");
		sH("bsBaseUsrNameTip", "IDS_BS_BASE_USRNAME_TIP");
		document.getElementById("bsBasePwdTip").innerHTML = lg.get("IDS_LOGIN_PWDANDUSR_PASSWORD").split(".")[1] + "，" + lg.get("IDS_LOGIN_USER_WORD") + " ~ ! @ # % ^ * ( ) _ + { } : \"| &lt; > ? ` - ; ' \\ , . /";
		if (Qqx == 0)
		{
			$("#usrBsAdd").remove();
			$("#usrBsDel").remove();
		}else if (Qqx == 1)
		{
			$("#usrBsAdd").remove();
			$("#usrBsDel").remove();
		}
		else{}
	}else if(pageName == "bs_multi"){
	    sV("bsmultiRf", "IDS_RE_REFRESH"); sH("bs_mullist", "IDS_BS_MULLIST"); sH("bsmulrf", "IDS_RE_REFRESH");sH("Multidevice", "IDS_BS_MULTI");
		for(var i=1; i<=9; i++) sH("bsmul"+i,"IDS_BS_MUL"+i);
		sH("bs1_text","IDS_BS1_TEXT");
		for(var i=2; i<=9; i++){
		    sH("bs" + i + "_text", "IDS_NET_WIFIPNO"); sH("bs" + i + "_name", "IDS_BASE_DEVNAME"); sH("bs" + i + "_host", "IDS_BS2_HOST"); sH("bs" + i + "_port", "IDS_SYS_HTTPP"); sH("bs" + i + "_Mport", "IDS_SYS_MEDIOP"); sH("bs" + i + "_user", "IDS_LOGIN_NAME"); sH("bs" + i + "_pwd", "IDS_SERVERINFO_PSW"); sH("bs" + i + "_addput", "IDS_BS2_ADDPUT"); sH("bs" + i + "_delput", "IDS_BS_DEL"); sH("bs" + i + "_type", "IDS_DEV_NAME");
		}
		sH("bsmul_word", "IDS_BS_MULWORD"); sH("bsmulUsrNameTip", "IDS_BS_BASE_USRNAME_TIP"); sH("bsmulPwdTip", "IDS_BS_BASE_PWD_TIP");
		    if (gVar_first.N_language != 2) sH("bsmulDevNameTip", "IDS_DEVNAME_TIPS");
            else sH("bsmulDevNameTip", "IDS_DEVNAME_TIPS2");
		if (Qqx == 0)
		{
			for(var i=2; i<=9; i++){
				$("#bs"+i+"_addput").remove();
				$("#bs"+i+"_delput").remove();
			}
		}else if (Qqx == 1)
		{
			for(var i=2; i<=9; i++){
				$("#bs"+i+"_addput").remove();
				$("#bs"+i+"_delput").remove();
			}
		}
		else{}
	}else if(pageName == "bs_led"){
        sV("bsledRf", "IDS_RE_REFRESH");sV("bsledSave", "IDS_CRUISE_SAVE");
        sH("legBsLed", "IDS_BS_LED");
        sH("thBsLedIsOpen", "IDS_BS_LED_OPEN_CLOSE");sH("optBsLedYes", "IDS_AV_IS");sH("optBsLedNo", "IDS_AV_NO");
    }else if(pageName == "bs_night"){
        sV("bsnightRf", "IDS_RE_REFRESH"); sV("bsnightSave", "IDS_CRUISE_SAVE");
        sH("legBsNight", "IDS_BS_NIGHT");
        sH("thBsNightIsOpen", "IDS_BS_NIGHT_OPEN_CLOSE");sH("optBsNightYes", "IDS_AV_IS");sH("optBsNightNo", "IDS_AV_NO");
    }
	else if(pageName=="bs_voice")
	{
	   sV("bsvoiceRf", "IDS_RE_REFRESH");sV("bsvoiceSave", "IDS_CRUISE_SAVE");
        sH("bsVoiceTitle", "IDS_BS_VOICE");
        sH("thBsVoiceIsOpen", "IDS_BS_VOICE");sH("optBsVoiceYes", "IDS_AV_IS");sH("optBsVoiceNo", "IDS_AV_NO");	
	} 
	else if(pageName == "path_gx"){
		sV("pathgxRf","IDS_RE_REFRESH");sV("phGxSave","IDS_CRUISE_SAVE");sH("PathGxIs","IDS_AV_IS");sH("PathGxNo","IDS_AV_NO");sH("PathSharDir","IDS_PATH_SHARDIR");sH("phGxAddr","IDS_PATH_SHARADDR");
		sH("phGxIsEnAAc","IDS_PATH_ISENAAC");sH("phGxAUsrN","IDS_PATH_AUSRN");sH("phGxAPWD","IDS_PATH_APWD");sH("phGxMountR","IDS_PATH_MOUNTR");sH("phGxSpaceS","IDS_PATH_SPACES");sH("pathgxword","IDS_PATH_GXWORD");
		if (Qqx == 0) $("#phGxSave").remove();
		else if (Qqx == 1) $("#phGxSave").remove();
		else{}
	}else if(pageName == "path_ftp"){
		sV("pathftpRf","IDS_RE_REFRESH");sH("pathftpword1","IDS_BS_EMAILWORD");sV("phFtpSave","IDS_CRUISE_SAVE");sH("PathFTPt","IDS_PATH_FTP");sH("phFtpAddr","IDS_PATH_FTPADDR");sH("phFtpUsrName","IDS_PATH_FTPUSRNAME");sH("phFtpPWD","IDS_PATH_FTPPWD");sH("phFtpTest","IDS_BS_TEST");sH("pathftpword","IDS_PATH_FTPWORD");sH("phFtpPORT","IDS_NET_PORT");sH("phFtpzb","IDS_PATH_FTPZB");sOH("phFtp_MODE",0,"IDS_PATH_FTPBD");sOH("phFtp_MODE",1,"IDS_PATH_FTPZD");
		sH("pathFtpAddrTip", "IDS_PATH_FTP_ADDR_TIP");
		document.getElementById("pathFtpPwdTip").innerHTML = lg.get("IDS_PATH_FTP_PWD_TIP") + " ~ ! @ # $ % ^ * ( ) _ + { } : \" | &lt; > ? ` - ; ' \\ , . / & = [ ]";
		if (gVar_first.N_language != 2) sH("pathFtpUsrnameTip", "IDS_PATH_FTP_USENAME_TIP2");
        else sH("pathFtpUsrnameTip","IDS_PATH_FTP_USENAME_TIP");
		if (Qqx == 0) {$("#phFtpSave").remove();$("#phFtpTest").attr("disabled","disabled");}
		else if (Qqx == 1) {$("#phFtpSave").remove();$("#phFtpTest").attr("disabled","disabled");}
		else{}
	}else if(pageName == "ptz_ctrack"){
        sV("ptzctrackRf", "IDS_RE_REFRESH"); sV("ptzCTSave", "IDS_CRUISE_SAVE"); sH("ctrack_subN", "IDS_BS_DEL"); sH("ctrack_subP", "IDS_BS_DEL"); sH("ctrack_addN", "IDS_BS_ADD"); sH("ctrack_saveN", "IDS_CRUISE_SAVE"); sH("ctrack_addP", "IDS_BS_ADD"); sH("PTZCtrackt", "IDS_PTZ_CTRACK"); sH("ctrack_save", "IDS_CRUISE_SAVE")
        sH("ptzCTPreN16", "IDS_PTZ_PREN16"); sH("ptzCTPreN8", "IDS_PTZ_PREN8"); sH("ctrack_subFO", "IDS_PTZ_SUBFO"); sH("ctrack_subDep", "IDS_PTZ_SUBDEP"); sH("ptzCTName", "IDS_PTZ_CTNANE"); sH("ptzMode", "IDS_PTZ_CMODE"); sH("ptzValue", "IDS_PTZ_CLOOP"); sH("ptzLoopT", "IDS_LOOPS"); sH("PTZCtr_OK", "IDS_REBOOT_OK"); sH("PTZCtr_CAN", "IDS_REBOOT_CANCLE");
        sH("ctPreT", "IDS_PTZ_PREN16"); sH("ctDtT", "IDS_PTZ_DEWLLTIMET");
        sH("divPtzCtrTimeTips", "IDS_PTZ_CTRACK_TIME_TIPS");
		if (gVar_first.N_language != 2) sH("ptzCtrNameTip", "IDS_PTZ_CTRNAMETIP");
        else sH("ptzCtrNameTip", "IDS_PTZ_CTRNAMETIP2");
        if (Qqx == 0) { $("#ptzCTSave").remove(); $("#ctrack_addN").remove(); $("#ctrack_subN").remove(); $("#ctrack_saveN").remove(); }
		else if (Qqx == 1) { $("#ptzCTSave").remove(); $("#ctrack_addN").remove(); $("#ctrack_subN").remove(); $("#ctrack_saveN").remove(); }
		else{}
	}else if(pageName == "ptz_rate"){
	    sV("ptzrateRf", "IDS_RE_REFRESH"); sV("PTZRateSave", "IDS_CRUISE_SAVE"); sH("PTZRatet", "IDS_PTZ_RATE"); sH("PTZRateSetUp", "IDS_PTZ_RATESETUP"); sH("PTZRateFast", "IDS_PTZ_RATEFAST"); sH("PTZRateMS", "IDS_PTZ_RATEMS"); sH("PTZRateSlow", "IDS_PTZ_RATESLOW"); sH("PTZRateVFast", "IDS_PTZ_RATEVFAST"); sH("PTZRateVSlow", "IDS_PTZ_RATEVSLOW"); sH("ZRateSetUp", "IDS_Z_RATESETUP"); sH("ZRateFast", "IDS_PTZ_RATEFAST"); sH("ZRateMS", "IDS_PTZ_RATEMS"); sH("ZRateSlow", "IDS_PTZ_RATESLOW");
        sH("PTZRateFocus", "IDS_PTZ_RATESETUPFOUCS");sH("OpneAutoZoon","IDS_OTHER_ON");sH("CloseAutoZoon","IDS_OTHER_OFF");sH("AutoZoonSetUp","IDS_PTZ_AUTO_ZOON");
        if ((gVar_first.reserveFlag2 >> 1 & 0x01) == 1) {
            $("#ZRateFocusSetUp").css("display", "");
            $("#ZRateSetUp").css("display", "none");
            sH("ZRateFocusSetUp", "IDS_Z_RATESETUPFOCUS");
        }
        else {
            $("#ZRateFocusSetUp").css("display", "none");
            $("#ZRateSetUp").css("display", "");
            sH("ZRateSetUp", "IDS_Z_RATESETUP");
        }
		if (Qqx == 0) $("#PTZRateSave").remove();
		else if (Qqx == 1) $("#PTZRateSave").remove();
		else{}
	}
    else if (pageName == "ptz_guard") {
        sH("ptzguardRf", "IDS_RE_REFRESH");
        sH("ptzguardSave", "IDS_CRUISE_SAVE");
        sH("PTZInitGuardTitle", "IDS_PTZ_INIT_GUARDTITLE");
        sH("PTZGuardSet", "IDS_PTZ_INIT_GUARDTIME");
        sH("GuardValueNone", "IDS_PTZ_485_CHECK_NONE");
    }
    else if (pageName == "ptz_initcof") {
        if ((gVar_first.reserveFlag2 >> 1 & 0x01) == 1) {
            $("#PTZInitCofMode").append("<option value='3' id='PTZInitGuard'></option>");
            sH("PTZInitGuard", "IDS_PTZ_INIT_GUARD");
        }
	    sV("ptzinitcofRf","IDS_RE_REFRESH");sV("ptzinitcofSave","IDS_CRUISE_SAVE");sH("PTZInitCoft","IDS_PTZ_INIT_COF");
        sH("PTZInitCofSet","IDS_PTZ_INIT_MODE");sH("PTZInitNone","IDS_PTZ_INIT_NOTEST");sH("PTZInitNormal","IDS_PTZ_INIT_NORMAL");sH("PTZInitPrePoint","IDS_PTZ_INIT_GOPREPOINT");
        sH("PTZInitPrePoint", "IDS_PTZ_INIT_GOPREPOINT");
        sH("PTZInitCofSelPre","IDS_PTZ_INIT_PREPOINTSEL");
        document.getElementById("divPTZInitTips").innerHTML = lg.get("IDS_SYS_CARE") + lg.get("IDS_PTZ_INIT_COF_TIPS");

    }else if(pageName == "ptz_485"){
	    sV("ptz485Rf","IDS_RE_REFRESH");sV("ptz485Save","IDS_CRUISE_SAVE");
        sH("pT485Addr","IDS_PTZ_485_ADDRESS");sH("pT485Protocol","IDS_PTZ_485_PROTOCOL");sH("tT485Baud","IDS_PTZ_485_BAUD");sH("pT485DataBit","IDS_PTZ_485_DATABIT");sH("pT485StopBit","IDS_PTZ_485_STOPBIT");sH("pT485Check","IDS_PTZ_485_CHECK");sH("p485OptNo","IDS_PTZ_485_CHECK_NONE");sH("p485OptOdd","IDS_PTZ_485_CHECK_ODD");sH("p485OptEven","IDS_PTZ_485_CHECK_EVEN");
	}
    else if(pageName == "net_ip"){
		sV("netipRf","IDS_RE_REFRESH");sV("netIpSave","IDS_CRUISE_SAVE");
        if(lanPage != "set_guid"){sH("NetIPt","IDS_NET_NETIP");}
        sH("netDhcpToIP","IDS_NET_DHCPTOIP");sH("netIpAddr","IDS_DEV_IP");
        sH("netIpSubMask", "IDS_NET_SUBMASK"); sH("netIpGateway", "IDS_NET_GATEWAY"); sH("netIpPrimDNS", "IDS_NET_PRIMDNS"); sH("netIpSecDNS", "IDS_NET_SECDNS"); sH("netipword", "IDS_NET_IPWORD");
        sH("divSetGuidSoftFinish", "IDS_SET_GUID_SOFAP_FINISH");
		if (Qqx == 0) $("#netIpSave").remove();
		else if (Qqx == 1) $("#netIpSave").remove();
		else{}
	}else if(pageName == "net_ddns"){
		sV("netddnsRf","IDS_RE_REFRESH");sV("netDDnsSave","IDS_CRUISE_SAVE");sH("NetDdnst","IDS_NET_DDNS");sH("netDDnsIsEn","IDS_NET_DDNSISEN");sH("netDomains","IDS_NET_DOMAINS");
		sH("netDDnsAdr", "IDS_NET_DDNSADR"); sH("netDDnsUsrN", "IDS_NET_DDNSUSRN"); sH("netDDns_USER_Tip", "IDS_NET_PPPOE_USRNAME_TIP"); /*sH("netDDns_PASSWORD_Tip", "IDS_NET_PPPOE_PWD_TIP");*/ sH("netDDnsPWD", "IDS_NET_DDNSPWD"); sH("netDDnshsk", "IDS_NET_DDNSHSK"); sV("netDDnsrestore", "IDS_NET_RESTORE"); sH("netDDnsFact", "IDS_NET_FACTORY"); sH("netDDnsFact1", "IDS_NET_FACTORY"); sH("netDDnsthird", "IDS_NET_THIRD"); sOH("netDDns_DDNSSERVER", 0, "IDS_NET_WIFIPNO");
        sH("getDDNSTips","IDS_GETDDNSTIPS");sH("getDDNSButton","IDS_GTEDDNSBUTTON");
        sV("netDDnsFoscam","IDS_GTEDDNSBUTTON");
        document.getElementById("netDDns_PASSWORD_Tip").innerHTML = lg.get("IDS_NET_PPPOE_PWD_TIP") + " ~ ! @ # $ % ^ * ( ) _ + { } : \" | &lt; > ? ` - ; ' \\ , . /";
		if (Qqx == 0) $("#netDDnsSave").remove();
		else if (Qqx == 1) $("#netDDnsSave").remove();
		else{}
	}else if(pageName == "net_pppoe"){
		sV("netpppoeRf","IDS_RE_REFRESH");sV("netPPPoESave","IDS_CRUISE_SAVE");sH("NetPppoet","IDS_NET_PPPOE");sH("netPPPoEIsEnUse","IDS_NET_PPPOEISENUSE");sH("netPPPoEAcc","IDS_NET_PPPOEACC");sH("netPPPoEPWD","IDS_NET_PPPOPWD");
		sH("netPppoeUsrnameTip", "IDS_NET_PPPOE_USRNAME_TIP"); 
        document.getElementById("netPppoePwd").innerHTML = lg.get("IDS_NET_PPPOE_PWD_TIP") + " ~ ! @ # $ % ^ * ( ) _ + { } : \" | &lt; > ? ` - ; ' \\ , . /";
		if (Qqx == 0) $("#netPPPoESave").remove();
		else if (Qqx == 1) $("#netPPPoESave").remove();
		else{}
	}else if(pageName == "net_wifi"){
		sV("netwifiRf","IDS_RE_REFRESH");
        if(lanPage != "set_guid"){sH("NetWifit","IDS_NET_WIFI");}
        sH("refwifilist","IDS_NET_REWIFI");sH("netWifiList","IDS_NET_WIFILIST");sH("netwifi_is","IDS_NET_WIFIIS");sH("netwifi_no","IDS_NET_WIFINO");sV("NWifiSave","IDS_CRUISE_SAVE");sH("wifiP","IDS_NET_WIFIP");sOH("netwifiP",0,"IDS_NET_WIFIPNO");sH("wifiyzsty","IDS_NET_WIFIYZSTY");sOH("netwifityp",0,"IDS_NET_WIFIOPEN");sOH("netwifityp",1,"IDS_NET_WIFIPSK");
		sOH("netwifityp",2,"IDS_NET_WIFIAUTO");sH("wifikgs","IDS_NET_WIFIKGS");sOH("netwififom",0,"IDS_NET_WIFI16");sOH("netwififom",1,"IDS_NET_WIFIASCII");sH("wifiselec","IDS_NET_WIFISELEC");sH("netwifiIsEb","IDS_NET_WIFIISEB");
		sH("wifiPSK1", "IDS_NET_WIFIPSK1"); sH("wifiPSK2", "IDS_NET_WIFIPSK2"); sH("wifiPSK3", "IDS_NET_WIFIPSK3"); sH("wifiPSK4", "IDS_NET_WIFIPSK4"); sH("wifiPSDK", "IDS_NET_WIFIPSK"); sH("netwifijmfs", "IDS_NET_STYPE"); sH("netwifixhqd", "IDS_NET_WIFISIGSTR"); sH("netSSID", "IDS_NET_SSID");sH("WiFiTest", "IDS_BS_TEST");
        document.getElementById("netWifiPwdTip").innerHTML = lg.get("IDS_PATH_FTP_PWD_TIP") ;
		if (Qqx == 0) {$("#NWifiSave").remove();}
		else if (Qqx == 1) $("#NWifiSave").remove();
		else{}
	}else if(pageName == "net_softAP"){
        sH("netsoftAPRf", "IDS_RE_REFRESH");sH("netsoftAPSave", "IDS_CRUISE_SAVE");
        if(lanPage != "set_guid"){sH("NetSoftAPPwd", "IDS_NET_SOFTAP");}
        sH("thSoftEncT", "IDS_NET_WIFIP");sH("thSoftOldPas", "IDS_SERVERINFO_PSW");sH("thSoftPasNew", "IDS_BS_NEWPWD");sH("thSoftPasLev", "IDS_PWD_TESTLEV");sH("thSoftPasCof", "IDS_BS_NEWPWDAG");
        if (Qqx == 0) $("#netsoftAPSave").remove();
        else if (Qqx == 1) $("#netsoftAPSave").remove();
        else { }
    }else if(pageName == "net_port"){
		sV("netportRf","IDS_RE_REFRESH");sV("netportSave","IDS_CRUISE_SAVE");sH("NetPortS","IDS_NET_PORT");sH("SysiphttpP","IDS_SYS_HTTPP");sH("SysipMedioP","IDS_SYS_MEDIOP");sH("SysipHttpsPort","IDS_SYS_HTTPS");
		
		sH("SysipOnvifPort","IDS_SYS_ONVIF");
		if (Qqx == 0) $("#netportSave").remove();
		else if (Qqx == 1) $("#netportSave").remove();
		else{}
		//if (gVar_first.model>3000&&gVar_first.model<4000||isModel_6000To7000()||gVar_first.onvifFlag==0) {
            $("#netonviftab").css("display", "none");
        //}
		
	}else if(pageName == "net_onvif")
	{
		sV("netonvifRf","IDS_RE_REFRESH");
		sV("netonvifSave","IDS_CRUISE_SAVE");
		sH("SysipOnvifPort1","IDS_SYS_ONVIF");
		sH("SysipRtspPort1", "IDS_SYS_RTSP");
        sH("OnvifAuthorization", "IDS_ONVIF_AUTHORIZATION");
        sOH("OnvifAuthorizationSwitch",0,"IDS_OTHER_OFF");
        sOH("OnvifAuthorizationSwitch",1,"IDS_OTHER_ON");
        sH("OnvifAuthorizationTip", "IDS_SYS_CARE");
        sH("OnvifAuthorizationTip2", "IDS_ONVIF_AUTHORIZATION_TIPS_1");
        sH("OnvifAuthorizationTip3", "IDS_ONVIF_AUTHORIZATION_TIPS_2");
		if (Qqx == 0) $("#netonvifSave").remove();
		else if (Qqx == 1) $("#netonvifSave").remove();
		else{}
		if(gVar.lg=="CHS")
		{
			$("#enableOnvifTip").html("是否启用Onvif");
		}
		else if(gVar.lg=="CHT")
		{
			$("#enableOnvifTip").html("是否啟用Onvif");
		}
		else
		{   /*no  fangyi*/
			sH("enableOnvifTip","IDS_ALARM_ISMVEB");
		}
		
	}
	else if(pageName == "net_p2p"){
		sV("netp2pRf","IDS_RE_REFRESH");sV("netp2pSave","IDS_CRUISE_SAVE");
		sH("NetP2PTitle","IDS_NET_P2P");
		sH("NetUID","IDS_NET_UID")
		sH("divSysipP2P","IDS_SYSPORT_P2P_ENABLE");sH("thP2PPort","IDS_SYSPORT_P2P_PORT");
		if (Qqx == 0) $("#netp2pSave").remove();
		else if (Qqx == 1) $("#netp2pSave").remove();
		else{}
	}else if(pageName == "net_upnp"){
		sV("netupnpRf","IDS_RE_REFRESH");sV("SysipSave","IDS_CRUISE_SAVE");sH("NetupnpS","IDS_NET_UPNP");sH("SysipINUPnP","IDS_SYS_INUPNP");sH("SysipIs","IDS_AV_IS");sH("SysipNo","IDS_AV_NO");
		if (Qqx == 0) $("#SysipSave").remove();
		else if (Qqx == 1) $("#SysipSave").remove();
		else{}
		
	}else if(pageName == "net_cloud"){
		sH("legNetCloud","IDS_NET_CLOUD");sV("netcloudRf","IDS_RE_REFRESH");sV("NetCloudSave","IDS_CRUISE_SAVE");sH("netcloudisEnb","IDS_NET_CLOUDEABL");sH("netCloudState","IDS_CLOUD_STATE");sH("netCarryoperator","IDS_CARRY_OPERATOR");sH("netAuthorization","IDS_AUTHORIZATION");
		sH("netAuthorizaCode","IDS_AUTHORIZACODE");sH("netStateInfo","IDS_STATEINFO");sH("netTotalValume","IDS_TOTALVALUM");sH("netUsedValume","IDS_USEDVALUM");
        sH("netRemainVolume", "IDS_CLOUD_REMAIN_SPACE");
        sH("btnopennetAuthor","IDS_GET_AUTH_CODE");sH("btnnetStateInfo","IDS_RFSTATEINFO");sH("btnnetcloudtest","IDS_CLOUDTEST");
        //sH("netcloudnull", "IDS_NET_WIFIPNO"); sH("netcloudbaidu", "IDS_CLOUD_BAIDU");
        sH("netAuthoriza_CodeTip","IDS_NET_AUTHOR_CODETIP");
        sH("getaccess_Token","IDS_NET_BTN_GETTOKEN");
        sH("accessToken","IDS_NET_ACCESS_TOKEN");
        sH("divNetCloudTips", "IDS_NET_CLOUD_TIPS");
        sH("btnCloudSubmit", "IDS_NET_CLOUD_ACCEPT");
	}else if(pageName == "net_push"){
        sH("legNetPush","IDS_NET_PUSH");sV("netpushRf","IDS_RE_REFRESH");sV("netpushSave","IDS_CRUISE_SAVE");sH("netpushEnb","IDS_NET_CLOUD_PUSH_EABL");
        sH("netpushstate","IDS_NET_PUSHSTATE");sH("netpushserver","IDS_NET_PUSHSERVER");
        sH("pushtest","IDS_BS_TEST");sH("netpushtest","IDS_NET_PUSHTEST");
        sH("noserver","IDS_NET_WIFIPNO");
        sH("baiduserver","IDS_CLOUD_BAIDU");
    } else if (pageName == "rc_alarm") {
		sV("rcalarmRf","IDS_RE_REFRESH");sV("RcAlarmSave","IDS_CRUISE_SAVE");sH("RcAlarmt","IDS_RC_ALARM");sH("RcAmPreTime","IDS_RC_PRETIME");sH("rcalisEnb","IDS_RC_ALISENB");sH("AmRcPreTime","IDS_RC_AMPRETIME");
		//sH("rcAlarmTips", "IDS_RC_ALARMTIPS");
		
	
		if (Qqx == 0) $("#RcAlarmSave").remove();
		else if (Qqx == 1) $("#RcAlarmSave").remove();
		else{}
	}else if(pageName == "rc_localalarm"){
        sV("rclocalalarmRf", "IDS_RE_REFRESH"); sV("rcLocalAlarmSave", "IDS_CRUISE_SAVE"); sH("RcLocalAlarmLeg", "IDS_RC_LOCAL_ALARM"); sH("rcLocalAListEnb", "IDS_RC_LOCAL_ALARM_ENABLE"); sH("rcLocalAlarmTimeT", "IDS_RC_LOCAL_ALARM_TIME"); /*sH("rcSoundAlarmAsPC", "IDS_RC_SOUNDALARM_AS_PC"); sH("AvALCNoTS", "IDS_AV_NO"); sH("AvALCIsTS", "IDS_AV_IS");*/ sH("rcLocalAlarmTips", "IDS_RC_LOCAL_ALARM_TIPS");
        
	    if (Qqx == 0) $("#rcLocalAlarmSave").remove();
		else if (Qqx == 1) $("#rcLocalAlarmSave").remove();
		else{}
	}
	else if(pageName == "rc_sdmanage"){
	    sV("rcsdmanageRf", "IDS_RE_REFRESH");
	    var ipArr = gVar_first.ip.split(".");
        if (ipArr.length == 4 && ipArr[0] > 0 && ipArr[0] <= 255 && ipArr[1] >= 0 && ipArr[1] <= 255 && ipArr[2] >= 0 && ipArr[2] <= 255 && ipArr[3] >= 0 && ipArr[3] <= 255 && ipArr[3] != "" && ipArr[0] != "" && ipArr[1] != "" && ipArr[2] != "") {
            document.getElementById("divSDManageMAC").innerHTML = lg.get("IDS_PATH_FTPADDR") + ": [ ftp://" + gVar_first.ip + ":50021 ]. " + lg.get("IDS_SD_MANAGER_MAC_TIPS");
        }
        sH("legRcSDmanage", "IDS_RC_SDCARD_MANAGE")
        sH("IDS_RC_SDSTATE", "IDS_DEV_SDSTATE"); sH("IDS_RC_SDFS", "IDS_DEV_SDFS"); sH("IDS_RC_SDTS", "IDS_DEV_SDTS"); sH("btnDevStateSDManage", "IDS_DEV_STATE_SD_MANAGE");
        sH("btnSDFormat", "IDS_DEV_SD_FORMAT");
	    sH("rcsdtips","IDS_RC_SDTIPS");
	    if (Qqx == 0) $("#rcLocalAlarmSave").remove();
		else if (Qqx == 1) $("#rcLocalAlarmSave").remove();
		else{}	
	}
    else if(pageName == "rc_plan"){
	    sV("rcplanRf","IDS_RE_REFRESH"); sV("rcPlanSave","IDS_CRUISE_SAVE");
        sH("legRcPlan", "IDS_RC_PLAN");
        sH("Rcplan_Enable","IDS_RC_PLANENABLE");
        sH("RcPumpFrame", "IDS_RC_PUMPFRME");
        sH("rcPFNoTS", "IDS_AV_NO");
        sH("rcPFIsTS", "IDS_AV_IS");
	    sH("RcRecordLev","IDS_AV_FRATE");
	    sH("RcFullModle","IDS_RC_FULLMODLE");
	    sH("RcEnAudio","IDS_RC_ENAUDIO");
	    sH("enableaudio","IDS_AV_IS");sH("disableaudio","IDS_AV_NO");
	    sH("RcdStream", "IDS_LOGIN_BITRATE");
	    sH("rsMain", "IDS_CODE_STREAM_01"); sH("rsSub", "IDS_CODE_STREAM_02");
	    sH("rcfull_cover","IDS_RC_FULLCOVER");sH("rcfull_stop","IDS_RC_FULLSTOP");
	    sH("RTAmVCBitmap", "IDS_RC_BITMAP");
	    if (gVar_first.sdFlag == 0) {
	        sH("rcPlanNotice", "IDS_RCPLAN_NOSD_NOTICE");
	    }else{
	        sH("rcPlanNotice", "IDS_RCPLAN_NOTICE");
	    }
	    sH("rcPlanNotice2", "IDS_RCPLAN_TIP4");
	    if (Qqx == 0) $("#rcLocalAlarmSave").remove();
		else if (Qqx == 1) $("#rcLocalAlarmSave").remove();
		else{}	
	}
	else if(pageName == "rc_path"){
	    sV("rcpathRf", "IDS_RE_REFRESH"); sV("rcPathSave", "IDS_CRUISE_SAVE"); sH("RcVPPath", "IDS_RC_VPRATH"); sH("rcPathVP", "IDS_RC_SETPATH"); sH("rcPathSDCard", "IDS_AV_SDCARD"); /*sH("rcPathSDir","IDS_AV_SFOLDER");*/$("#rcPathSDCardF").html(lg.get("SDSTATE_TEST").split(",")[0]); sH("rcPathlo", "IDS_RC_PATHLO"); sH("rcPathps2", "IDS_RC_PATHPS2"); sH("rcPathNote", "IDS_SYS_CARE");
        sH("rcPathNull", "IDS_NET_WIFIPNO");
        sH("rcPathSDAndCloud", "IDS_SD_AND_CLOUD");
        sH("btnSelPath", "IDS_RC_PATH_SELECT_PATH");
        sH("divRcPathCloudTips", "IDS_RC_CLOUD_TIPS");
        sH("divRcPathSoftTips", "IDS_SOFTAP_NO_FTP_CLOUD_TIPS");
        sH("btnLocalFolder", "IDS_RC_LOCALFOLDER");
	    if (gVar_first.sdFlag == 0) {
	        sH("rcPathps1", "IDS_RC_PATHPS1_NOSDCARD");       
	    }else{
	        sH("rcPathps1", "IDS_RC_PATHPS1");
	    }
		if (Qqx == 0) $("#rcPathSave").remove();
		else if (Qqx == 1) $("#rcPathSave").remove();
		else{}
	}else if(pageName == "sys_dr"){
		sH("ParemeteI","IDS_SYS_DR");sH("PareDraw","IDS_SYS_PDRAW");sH("sysdrWord1","IDS_SYS_WORD1");sH("sysdrWord2","IDS_SYS_WORD2");sH("sysdrWord3","IDS_SYS_WORD3");sH("sysdrWord4","IDS_SYS_WORD4");sH("sysPathw","IDS_SYS_PATHW");sH("sysdrCare","IDS_SYS_CARE");sV("PareImport","IDS_SYS_DROK");
        sV("btnSysConfig", "IDS_RC_PATH_SELECT_PATH");
	}else if(pageName == "sys_hf"){
		sH("RestoreFact","IDS_SYS_HF");sH("SysReFact","IDS_SYS_HF");sH("syshfWord5","IDS_SYS_WORD5");
	}else if(pageName == "sys_cq"){
		sH("RestartSys","IDS_SYS_CQ");sH("syscqRest","IDS_SYS_CQ");sH("syscqWord6","IDS_SYS_WORD6");
		sV("syscqRf", "IDS_RE_REFRESH");sV("syscqSave", "IDS_CRUISE_SAVE");
		sH("divSysCqEna", "IDS_REBOOT_SCHEDULE_ENA"); sH("thSysChCircle", "IDS_REBOOT_SCHEDULE_CIRCLE");
        sH("optSysCqWeek", "IDS_REBOOT_ONE_WEEK");sH("optSysCqMonth", "IDS_REBOOT_ONE_MONTH");
	}else if(pageName == "sys_updata"){
		sH("Sysupdates","IDS_SYS_UPDATE");sV("upPareDraw","IDS_SYS_UPDATE");
        sV("btnSysUpdate", "IDS_RC_PATH_SELECT_PATH");
		sH("sysUpateTip", "IDS_SYS_UPDATE_TIP"); sH("sys_upload", "IDS_SYS_UPLOAD");
		$("#sysupresult").prepend(lg.get("IDS_SYS_UPRESULT"));
	}else if(pageName == "sys_patch"){
        sH("divTitSyspatch", "IDS_SYS_UPDATE_PATHCH");
        sV("upPareDraw_patch","IDS_SYS_BTN_INSTALL_PATCH");
        sV("btnSysPatch", "IDS_RC_PATH_SELECT_PATH");
		sH("sysUpateTip_patch", "IDS_SYS_UPDATE_TIP_PATCH"); sH("sys_upload_patch", "IDS_SYS_UPLOAD");
		sV("sys_RemovePatch","IDS_SYS_REMOVEPATCH");
		$("#sysupresult_patch").prepend(lg.get("IDS_SYS_UPRESULT"));
	}
	else if(pageName == "child_music"){
        sV("childmusicRf", "IDS_RE_REFRESH"); sH("btn_music_subN", "IDS_BS_DEL"); sH("btn_music_del_list", "IDS_BS_DEL"); sH("btn_music_addN", "IDS_BS_ADD"); sH("btn_music_add_list", "IDS_BS_ADD"); sH("tit_child_music", "IDS_CHILD_MUSIC_LIST");
        sV("childmusicSave", "IDS_CRUISE_SAVE");
        sH("leg_child_music", "IDS_CHILD_MUSIC_MUSIC"); sH("leg_child_music_list", "IDS_CHILD_MUSIC_LIST"); sH("btn_music_move_up", "IDS_PTZ_SUBFO"); sH("btn_music_move_down", "IDS_PTZ_SUBDEP"); sH("th_music_list", "IDS_CHILD_MUSIC_LIST"); sH("btn_music_list_OK", "IDS_REBOOT_OK"); sH("btn_music_list_CAN", "IDS_REBOOT_CANCLE");
        sH("th_music_path", "IDS_CHILD_MUSIC_SOURCE");
        sH("divMusicMaxTips", "IDS_CHILD_MUSIC_DEFAULT_TIPS");
        if (Qqx == 0) {  $("#btn_music_addN").remove(); $("#btn_music_subN").remove(); }
        else if (Qqx == 1) { $("#btn_music_addN").remove(); $("#btn_music_subN").remove(); }
        else { }
    }else if(pageName == "bs_country"){
        sH("bs_country", "IDS_BS_COUNTRY");
        sH("countryTh","IDS_BS_COUNTRY");
        sH("selectCountryTip", "IDS_SELECTCOUNTRY_TIP");
    }
	
}
