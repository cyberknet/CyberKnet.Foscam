var gJson = false;
var paopTimer = 0; 
var djsTimer = 0; function onReSize() { var o = document.body; var cH = document.documentElement.clientHeight; var cW = document.documentElement.clientWidth; if (cH > 700) { o.style.height = "100%" } else { o.style.height = "700px" } if (cW > 1000) { o.style.width = "100%" } else { o.style.width = "1000px" } } function XmlParser(name, xml) { return $(xml).find(name).text(); } function fbd() { var the = event.srcElement; if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "password") || (the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) { return false; } return true; }
function setCookie(name, value) {
    if (typeof (value) == "undefined") return;
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + urlEncode(value) + ";expires=" + exp.toGMTString(); 
}
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
    return urlDecode(arr[2]); 
    return null;
}
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) 
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
function changPlugin() { if (gVar.sPage == "live" || gVar.sPage == "playback") gVar.SetPluginPos(0, 0, "98%", "100%"); }
function DivBox(exp, obj) {
    var $obj = $(obj);
    if (exp != 1) {
        $obj.find("select").attr("disabled", true);
        $obj.find("button").attr("disabled","disabled");
        $obj.children().attr("disabled", "disabled");
        $obj.find(":input").attr("readonly","readonly");
        $obj.fadeTo("slow", 0.2);
    }
    else {
        $obj.find("select").attr("disabled", false);
        $obj.find("button").attr("disabled", false);
        $obj.fadeTo("slow", 1);
        $obj.children().attr("disabled", "");
        $obj.find(":input").attr("readonly", "")
    } 
}
function MasklayerShow() {
    var b = document.getElementById("MaskLayout");
    b.style.width = document.body.offsetWidth + "px";
    b.style.height = document.body.offsetHeight + "px";
    b.style.display = "block";
}
function MasklayerHide() {
    var b = document.getElementById("MaskLayout");
    b.style.width = document.body.offsetWidth + "px";
    b.style.height = screen.height + "px";
    b.style.display = "none"; 
}
function ShowPaop(t, c) {
    if (typeof t != 'undefined' && typeof c != 'undefined') {
        clearTimeout(paopTimer);
        if ($("#MsgPaop").attr("name") != "in") {
            $("#MsgPaop").css("display", "block").slideDown("slow").attr("name", "in");
        }
        $("#Paoptitle").html("<center><div style='font-weight:700;font-size:14px;padding-top:5px;'>" + t + "</div></center>");
        $("#PaopContant").html(c);
        setTimeout(function () {
            $("#PaopBg").css("background-position", "0px -31px");
            setTimeout(function () {
                $("#PaopBg").css("background-position", "0px -62px");
                setTimeout(function () {
                    $("#PaopBg").css("background-position", "0px 0px")
                }, 200);
            }, 200);
        }, 200);
        paopTimer = setTimeout(function () { HidePaop(); }, 5000);
    } 
}
function HidePaop() {
    //clearTimeout(paopTimer);
    $("#MsgPaop").fadeOut("slow").slideUp("slow", function () { $(this).css("display", "none"); }).attr("name", "out");
} 
function Isip(obj) { var str = $(obj).val(); var a = str.split("."); if (a.length == 4 && a[0]!="" && a[1]!="" && a[2]!="" && a[3]!="" && a[0] > 0 && a[0] <= 255 && a[1] >= 0 && a[1] <= 255 && a[2] >= 0 && a[2] <= 255 && a[3] >= 0 && a[3] <= 255) { return true; } obj.focus().select(); return false; } function ip2num(ip) { var arr = ip.split("."), x = 1, ret = 0; for (var i = 0; i < arr.length; i++) { ret += arr[i] * x; x *= 256; } return ret; } function num2ip(n) { var ret = [], x = 256 * 256 * 256; for (var i = 0; i < 4; i++) { ret.push(parseInt(n / x)); n %= x; x /= 256; } return ret.reverse().join("."); } function djsFz(n, str, x, y) { n--; Web_cfgErrText(str + "" + n + "s", x, y); if (n > 0) { djsTimer = setTimeout(function () { djsFz(n, str, x, y) }, 1000); } } function djsTime(n, str, x, y) { MasklayerShow(); $("#MaskError").fadeIn("slow"); djsFz(n + 1, str, x, y); } function Web_cfgErrText(str, x, y) { if (typeof x == 'undefined') x = 0; if (typeof y == 'undefined') y = 0; if (str == "" || str == null) { str = "can't find the language !"; } $("#MaskError").html(str); $("#MaskError").css("top", y); $("#MaskError").css("left", x); $("#MaskError").fadeIn(100); }

function isPWOK(str) {
    var reg3 = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,12}$/;
    return reg3.test(str);
}


function isInCheckPwdFormat(pwd) {
    if (pwd.match(/^[a-zA-Z0-9\~\!\@\#\*\(\)\_\{\}\:\"\|\<\>\?\`\-\;\'\\\,\.\/\+\%\^]+$/)) {
        check = 0;
    }
    else {
        check = 1;
    }
    return check;
}


//the Flag of color,0 is red and 1 is green
var colorFlag = 0;
function Web_cfgErr(str, x, y, t) {
    MasklayerHide();
    if (typeof t == 'undefined') t = 4000;
    Web_cfgErrText(str, x, y);
    setTimeout(function () {
        $("#MaskError").fadeIn("slow");
    }, 500);
    setTimeout(function () {
        $("#MaskError").fadeOut("slow");
        setTimeout(function () {
            $("#MaskError").css("display", "none");
        }, 500);
    }, t);
}

function ShowPaop2(t, c) {
    if (typeof t != 'undefined' && typeof c != 'undefined') {
        
        if ($("#MsgPaop").attr("name") != "in") {
            $("#MsgPaop").css("display", "block").slideDown("slow").attr("name", "in");
        }
        $("#Paoptitle").html("<center><div style='font-weight:700;font-size:14px;padding-top:5px;'>" + t + "</div></center>");
        $("#PaopContant").html(c);
        setTimeout(function () {
            $("#PaopBg").css("background-position", "0px -31px");
            setTimeout(function () {
                $("#PaopBg").css("background-position", "0px -62px");
                setTimeout(function () { $("#PaopBg").css("background-position", "0px 0px") }, 200);
            }, 200);
        }, 200);
        //paopTimer = setTimeout(function () { HidePaop(); }, 5000);
    }
}
function ShowPaop3(t, c) {
    if (typeof t != 'undefined' && typeof c != 'undefined') {

        if ($("#MsgPaop1").attr("name") != "in") {
            $("#MsgPaop1").css("display", "block").slideDown("slow").attr("name", "in");
        }
        $("#Paoptitle1").html("<center><div style='font-weight:700;font-size:14px;padding-top:5px;'>" + t + "</div></center>");
        $("#PaopContant1").html(c);
        setTimeout(function () {
            $("#PaopBg1").css("background-position", "0px -31px");
            setTimeout(function () {
                $("#PaopBg1").css("background-position", "0px -62px");
                setTimeout(function () { $("#PaopBg1").css("background-position", "0px 0px") }, 200);
            }, 200);
        }, 200);
        //paopTimer = setTimeout(function () { HidePaop(); }, 5000);
    }
} 


function Web_cfgErrHide() {
    $("#MaskError").fadeOut("fast");
}

function Web_prompt(str) {
    MasklayerHide();
    if (str == "" || str == null) {
        str = "can't find the language !";
    }
    $("#login_ok").get(0).onclick = onLogin;
    $("#Web_false").text(str).css("color", "red");
    setTimeout(function () {
        $("#Web_false").fadeIn("slow");
    }, 500);
    setTimeout(function () {
        $("#Web_false").fadeOut("slow");
        setTimeout(function () {
            $("#Web_false").css("display", "none");
        }, 500);
    }, 5000);
}

function Reset() {
    $("#username").val("");
    $("#passwd").val("");
    $("#username").focus();
}	

function User_defined_text(o,str,x,y,t)
{
	MasklayerHide();
	if(typeof t=='undefined')t=4000;
	Web_user_defined_text(o,str,x,y);
	setTimeout(function () {
	    $("#" + o).fadeIn("slow");
	}, 500);
	setTimeout(function () {
	    $("#" + o).fadeOut("slow");
	    setTimeout(function () {
	        $("#" + o).css("display", "none");
	    }, 500);
    }, t);
}

function Web_user_defined_text(o,str,x,y)
{
	if(typeof x=='undefined')x=0;
	if(typeof y=='undefined')y=0;
	if(str==""||str==null){str="can't find the language !";}
	$("#"+o).html(str);
	$("#"+o).css("margin-top",y);
	$("#" + o).css("margin-left", x);
    
	if (colorFlag == 0) {
	    $("#" + o).css("color", "red");
	} else {
	    $("#" + o).css("color", "green");
	}
	$("#"+o).fadeIn(100);
}

function Do_js_Time(o,n,str,x,y)
{
    MasklayerShow();
    $("#MaskError").fadeIn("slow");
    Do_js_Fz(o,n+1, str,x,y);
}

function Do_js_Fz(o,n,str,x,y)
{
    n--;
    Web_user_defined_text(o,str+" "+n+"s",x,y);
    if(n>0)
    {
        djsTimer=setTimeout(function()
        {Do_js_Fz(o,n,str,x,y)}, 1000);
    }
    else {
        if (lanPage == "net_ip") {
            MasklayerHide();
            $("#netIPResult").text(lg.get("IDS_SEARCH_LOGINAGAIN"));
            return;
        }
    }
}

function IP2Num(ip)   
{  
    var num = 0;  
    ip = ip.split(".");  
    num = Number(ip[0]) * 256 * 256 * 256 + Number(ip[1]) * 256 * 256 + Number(ip[2]) * 256 + Number(ip[3]);  
    num = num >>> 0;  
    return num;  
}  

function Num2IP(num)   
{  
    var str;  
    var tt = new Array();  
    tt[0] = (num >>> 24) >>> 0;  
    tt[1] = ((num << 8) >>> 24) >>> 0;  
    tt[2] = (num << 16) >>> 24;  
    tt[3] = (num << 24) >>> 24;  
    str = String(tt[0]) + "." + String(tt[1]) + "." + String(tt[2]) + "." + String(tt[3]);  
    return str;  
}

//对端口进行限制
function NumberRangeLimt(ctrId,minVal,maxVal){var str=($("#"+ctrId.id).val()).replace(/\D/g,'');if(minVal!=maxVal){if(str!=""&&str<minVal){return minVal}if(str > maxVal){return maxVal}}return str}
function GetHttpRequest(){if(window.XMLHttpRequest)return new XMLHttpRequest();else if(window.ActiveXObject)return new ActiveXObject("MsXml2.XmlHttp");}
function AjaxPage(sId,url){var oXmlHttp=GetHttpRequest();oXmlHttp.OnReadyStateChange=function(){if(oXmlHttp.readyState==4){if(oXmlHttp.status==200||oXmlHttp.status==304){IncludeJS(sId,url,oXmlHttp.responseText);}else{alert('XML request error:'+oXmlHttp.statusText+'('+oXmlHttp.status+')');}}};oXmlHttp.open('GET',url,true);oXmlHttp.send(null);}
function IncludeJS(sId,fileUrl,source){if((source!=null)&&(!document.getElementById(sId))){var oHead=document.getElementsByTagName('HEAD').item(0);var oScript=document.createElement("script");oScript.language="javascript";oScript.type = "text/javascript";oScript.id=sId;oScript.defer=true;oScript.text=source;oHead.appendChild(oScript);}}

//模拟鼠标事件
function doEvent1(id, ev) {
    var e = document.createEvent('MouseEvents'); //创建对象
    e.initMouseEvent(ev, false, false); //初始化
    document.getElementById(id).dispatchEvent(e);
}
function doEvent2(id, e) {
    var evt = document.createEventObject();
    id = document.getElementById(id);
    evt.button = 1;
    evt.type = 'onmousedown';
    var rect = id.getBoundingClientRect();
    evt.offsetX=(rect.right+rect.left)/2;
    evt.offsetY = (rect.bottom+rect.top)/2;
    id.fireEvent('onmousedown', evt);
}

//html 文本框屏蔽非法字符,解决js的replace函数使光标跳到文本最后的问题onkeyup=rpPos(this,/[^/d]/g,'');
function gCPos(o){var p = 0;if(document.selection){o.focus();var Sel=document.selection.createRange();Sel.moveStart('character',-o.value.length);p=Sel.text.length;}else if(o.selectionStart||o.selectionStart=='0')p=o.selectionStart;return(p);}
function sCPos(o,p){if(o.setSelectionRange){o.focus();o.setSelectionRange(p,p);}else if(o.createTextRange){var r=o.createTextRange();r.collapse(true);r.moveEnd('character',p);r.moveStart('character',p);r.select();}}
function rpPos(o,p,t){/*if(event.shiftKey||event.altKey||event.ctrlKey||event.keyCode==16||event.keyCode==17||event.keyCode==18||(event.shiftKey&&event.keyCode==36))return;*/var pos=gCPos(o);var temp=o.value;o.value=temp.replace(p,t);o.value=o.value.replace(/[\&\=]/g,t);pos=pos-(temp.length-o.value.length);sCPos(o,pos);}

var loadscript =
{
	$$:function(id){return document.getElementById(id)},
	tag:function(element){return document.getElementsByTagName(element)},
	ce:function(element){return document.createElement(element)},
	js:function(url,callback)
	{
		s = loadscript.ce('script');
		s.type = "text/javascript";
		s.onreadystatechange = ready;
		s.onerror = s.onload = callback;
		s.src = url;
		loadscript.tag('head')[0].appendChild(s);
		function ready(a,b,c,d){
			
			if (s.readyState == 'loaded' || s.readyState == 'complete') {
				callback();
			}
		};
	}
}

function set_count(current,count)
{
	if(count > 9)
		count = 9;
	if ((count > 4) && (count < 9))
		count = 4;
	if (count < 1 || ((count > 1) && (count <4)))
		count = 1;
	
	if (parseInt(current) + parseInt(count) > 9)
		this.first = 9 - count;	
	else
		this.first = current;
	
	for (i = 0;i < 9;++ i)
		this.valid[i] = 0;
	for (i = this.first;i < parseInt(this.first) + parseInt(this.count);++ i)
		this.valid[i] = 1;		
}

function isPwd(str){
var reg=/[\&\=]/g ;
if(reg.test(str)){alert(lg.get("IDS_COMMON_STOP"))};
}
function getDevIPandPort()
{
    var getIPPortTime = 10000;
    if(gVar_first.reserveFlag1 == 100){
        getIPPortTime = 20000;
    }
    setTimeout(function(){
        gDvr.GetDevIPandPort(300000) ;
    },getIPPortTime);
}



function EnuToOth(enu) {
    var strReturn = "";
    switch (enu) {
        case "Vertical":
            strReturn = lg.get("IDS_VER_CRUISE"); 
            break;
        case "Horizontal":
            strReturn = lg.get("IDS_HOR_CRUISE");
            break;
        case "TopMost":
            strReturn = lg.get("IDS_TOP_MOST");
            break;
        case "BottomMost":
            strReturn = lg.get("IDS_BOTTOM_MOST");
            break;
        case "LeftMost":
            strReturn = lg.get("IDS_LEFT_MOST"); 
            break;
        case "RightMost":
            strReturn = lg.get("IDS_RIGHT_MOST"); 
            break;
        case "None":
            strReturn = lg.get("IDS_NET_WIFIPNO"); 
            break;
        default: 
            strReturn = enu;
    }
    return strReturn;
}

function OthToEnu(oth) {
    var strReturn = "";
    switch (oth) {
        case lg.get("IDS_VER_CRUISE"):
            strReturn = "Vertical"; 
            break;
        case lg.get("IDS_HOR_CRUISE"):
            strReturn = "Horizontal"; 
            break;
        case lg.get("IDS_TOP_MOST"):
            strReturn = "TopMost"; 
            break;
        case lg.get("IDS_BOTTOM_MOST"):
            strReturn = "BottomMost"; 
            break;
        case lg.get("IDS_LEFT_MOST"):
            strReturn = "LeftMost"; 
            break;
        case lg.get("IDS_RIGHT_MOST"):
            strReturn = "RightMost"; 
            break;
        default: 
            strReturn = oth;
    }
    return strReturn;
}



function Stringlen_check(obj, len)
{
    var n = 0;
    for (var i = 0; i < obj.length; i++) 
    {
            if (obj.charCodeAt(i) < 0 || obj.charCodeAt(i) > 161) 
            {
                n = n + 2;
            }
            else 
            {
                n = n + 1;
            }
    }
    if (n<=len) {
    return true;
    }
    else{
    return false;
    }
}

function LimitLength(obj, len)
{ 
    if(event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) return;
     var sVal = "";
    if (gVar_first.N_language == 2){
       sVal = obj.value.replace(/[^\a-\z\A-\Z0-9\-\_\ ]/g,'');
    }else{
       sVal = obj.value.replace(/[^\a-\z\A-\Z0-9\-\_\ \u4e00-\u9fa5]/g,'');
    }
    
    var objVal = "";
    var sReg = /[\u4e00-\u9fa5]/;
    var tmpChar = "";
    var chrCode = 0;
    var chrHex = "";
    var indx = -1;
    for(var i = 0; i < sVal.length; i++)
    {
        tmpChar = sVal.charAt(i);
        if(sReg.test(tmpChar))
        {
            chrCode = sVal.charCodeAt(i);
            chrHex = chrCode.toString(16);
            chrHex = "000" + chrHex.toUpperCase();
            chrHex = chrHex.substr(chrHex.length - 4);
            indx = UnicodeChr().indexOf(chrHex);
            if (indx != -1) {
                objVal += sVal.charAt(i);
            } 
        }
        else
        {
            objVal += sVal.charAt(i);
        }
        
    }

    var m = objVal.length;
    var n = 0;
    var j = 0;

    for (var i = 0; i < m; i++) 
    {
        if(n < len)
        {
            if (objVal.charCodeAt(i) < 0 || objVal.charCodeAt(i) > 161) 
            {
                if(n == len - 1)
                {
                    break;
                }
                n = n + 2;
                j = j + 1;
            }
            else 
            {
                n = n + 1;
                j = j + 1;
            }
        }
    }

    obj.value = objVal.substring(0, j);
}

function MatchReg(sVal) {
    if (gVar_first.N_language != 2) {
        if (!sVal.match(/^[a-zA-Z0-9\-\_\u4e00-\u9fa5]+$/))
            return false;

        var objVal = "";
        var sReg = /[\u4e00-\u9fa5]/;
        var tmpChar = "";
        var chrCode = 0;
        var chrHex = "";
        var indx = -1;
        for (var i = 0; i < sVal.length; i++) {
            tmpChar = sVal.charAt(i);
            if (sReg.test(tmpChar)) {
                chrCode = sVal.charCodeAt(i);
                chrHex = chrCode.toString(16);
                chrHex = "000" + chrHex.toUpperCase();
                chrHex = chrHex.substr(chrHex.length - 4);
                indx = UnicodeChr().indexOf(chrHex);
                if (indx != -1) {
                    continue;
                }
                else {
                    return false;
                }
            }
            else {
                continue;
            }
        }
        return true;
    }
    else
        return sVal.match(/^[a-zA-Z0-9\-\_]+$/);
}

function FileNameReg(sVal) {
    if (gVar_first.N_language != 2) {
        if (!sVal.match(/^[a-zA-Z0-9\-\_\u4e00-\u9fa5\~\!\^\@\#\(\)\_\{\}\`\-\;\'\,\.\+\%]+$/))
            return false;

        var objVal = "";
        var sReg = /[\u4e00-\u9fa5]/;
        var tmpChar = "";
        var chrCode = 0;
        var chrHex = "";
        var indx = -1;
        for (var i = 0; i < sVal.length; i++) {
            tmpChar = sVal.charAt(i);
            if (sReg.test(tmpChar)) {
                chrCode = sVal.charCodeAt(i);
                chrHex = chrCode.toString(16);
                chrHex = "000" + chrHex.toUpperCase();
                chrHex = chrHex.substr(chrHex.length - 4);
                indx = UnicodeChr().indexOf(chrHex);
                if (indx != -1) {
                    continue;
                }
                else {
                    return false;
                }
            }
            else {
                continue;
            }
        }
        return true;
    }
    else
        return sVal.match(/^[a-zA-Z0-9\~\!\^\@\#\(\)\_\{\}\`\-\;\'\,\.\+\%]+$/);
}

function IsRightIPorURL(address)
 {
    var IPpatten  =/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
   //check whether over 255
    var RightIP = "^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]{1,2})(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]{1,2})){3}$";
    var strRegex = "^((https|http|ftp|rtsp|mms)://?)"
               + "(([0-9a-z_!~*\"().&=+$%-]+: )?[0-9a-z_!~*\"().&=+$%-]+@)?" //ftp的user@ 
               + "(([0-9]{1,3}\.){3}[0-9]{1,3}"  // IP形式的URL- 199.194.52.184
               + "|" // 允许IP和DOMAIN（域名） 
               + "([0-9a-z_!~*\'()-]+\.)" // 域名- www. 
               + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名 
               + "[a-z]{1,8})" // first level domain- .com or .museum 
               + "(:[0-9]{1,5})?" // 端口- :80 
               + "((/?)|"// a slash isn't required if there is no file name 
               + "(/[0-9a-z_!~*\"().;?:@&=+$,%#-]+)+/?)$";
    var patten = address.match(IPpatten);
    var right = address.match(RightIP);
    var url = address.match(strRegex);
    if (patten)
    {
        if (right) {
            return true;
        }
        else {
            return false;
             }
    }
    else
    {
        if (url) {
            return true;
        }
        else {
           return false;
        }
    }
   
}
function IsLimitLength(sVal, len)
{
    var objVal = "";
    var sReg = /[\u4e00-\u9fa5]/;
    var tmpChar = "";
    var chrCode = 0;
    var chrHex = "";
    var indx = -1;
    for (var i = 0; i < sVal.length; i++) {
        tmpChar = sVal.charAt(i);
        if (sReg.test(tmpChar)) {
            chrCode = sVal.charCodeAt(i);
            chrHex = chrCode.toString(16);
            chrHex = "000" + chrHex.toUpperCase();
            chrHex = chrHex.substr(chrHex.length - 4);
            indx = UnicodeChr().indexOf(chrHex);
            if (indx != -1) {
                objVal += sVal.charAt(i);
            }
        }
        else {
            objVal += sVal.charAt(i);
        }

    }

    var m = objVal.length;
    var n = 0;
    var j = 0;

    for (var i = 0; i < m; i++) {
        if (n <= len) {
            if (objVal.charCodeAt(i) < 0 || objVal.charCodeAt(i) > 161) {
                n = n + 2;
                j = j + 1;
            }
            else {
                n = n + 1;
                j = j + 1;
            }
        }

        if (n > len) {
            return false;
        }
    }

    return true;
}

function ValidInput(strVal)
{
    var isValid = true;
    var sInputValue = strVal;
    var tmpChar2;
    var sReg2 = /[\a-\z\A-\Z0-9\-\_\ \u4e00-\u9fa5]/;
    for(var i=0; i<sInputValue.length; i++)
    {
        tmpChar2 = sInputValue.charAt(i);
        if(!sReg2.test(tmpChar2))
        {
            isValid = false;
            break;
        }
    }
    
    
    //var sVal = obj.value.replace(/[^\a-\z\A-\Z0-9\-\_\ \u4e00-\u9fa5]/g,'');
    sInputValue = sInputValue.replace(/[^\u4e00-\u9fa5]/g,'');
    var chrCode = 0;
    var chrHex = "";
    var indx = -1;
    if(isValid == true)
    {
        for(var i=0; i<sInputValue.length; i++)
        {
            tmpChar2 = sInputValue.charAt(i);
            chrCode = sInputValue.charCodeAt(i);
            chrHex = chrCode.toString(16);
            chrHex = "000" + chrHex.toUpperCase();
            chrHex = chrHex.substr(chrHex.length - 4);
            indx = UnicodeChr().indexOf(chrHex);
            if (indx == -1) {
                isValid = false;
                break;
            } 
        }
    }
    return isValid;
}

function IsInArray(arr,val){
    var testStr=','+arr.join(",")+",";
    return testStr.indexOf(","+val+",")!=-1;
}

 //定义检测函数,返回0/1/2/3分别代表无效/差/一般/强
	function getResult(s){
		if(s.length < 4){
			return 0;
		}
		var ls = 0;
		if (s.match(/[a-z]/ig)){
			ls++;
		}
		if (s.match(/[0-9]/ig)){
			ls++;
		}
	 	if (s.match(/([^a-z0-9])/ig)){
			ls++;
		}
		if (s.length < 6 && ls > 0){
			ls--;
		}
		return ls;
	}
	
	
	function chkpwd(obj,tar){
		var t=obj.value;
		var id=getResult(t);
		
		//定义对应的消息提示
		var msg=new Array(4);
//		msg[0]="密码过短。";
//		msg[1]="密码强度差。";
//		msg[2]="密码强度良好。";
//		msg[3]="密码强度高。";
        
        msg[0]=lg.get("IDS_PWD_LOWLEV");
		msg[1]=lg.get("IDS_PWD_LOWLEV");
		msg[2]=lg.get("IDS_PWD_MIDLEV");
		msg[3]=lg.get("IDS_PWD_HIGHLEV");
		
//		var sty=new Array(4);
//		sty[0]=-45;
//		sty[1]=-30;
//		sty[2]=-15;
//		sty[3]=0;
		
		var col=new Array(4);
		col[0]="red";
		col[1]="red";
		col[2]="#ff6600";
		col[3]="Green";
		
		//设置显示效果
		
		if (id ==1 || id ==0) {
		    var bImg="../../images/pwd_low.gif";//一张显示用的图片
		}else if(id == 2){
		    var bImg="../../images/pwd_mid.gif";//一张显示用的图片
		}else if(id == 3){
		    var bImg="../../images/pwd_high.gif";//一张显示用的图片
//		}else{
//		    var bImg="../../images/pwd_no.gif";//一张显示用的图片
		}
		var sWidth=150;
		var sHeight=15;
		var Bobj=document.getElementById(tar.id);

		Bobj.style.fontSize="12px";
		Bobj.style.color=col[id];
		Bobj.style.width=sWidth + "px";
		Bobj.style.height=sHeight + "px";
		Bobj.style.lineHeight=sHeight + "px";
		Bobj.style.background="url(" + bImg + ") no-repeat center"/* + sty[id] + "px"*/;
		Bobj.style.textIndent="20px";
		//Bobj.innerHTML= msg[id];
	}

	function chktime(obj, tar) {
	    var val = obj.value;

	    var day = (val | 0) / (24 * 60 | 0) | 0;
	    var hour = ((val | 0) % (24 * 60 | 0)) / 60 | 0;
	    var min = ((val | 0) % (24 * 60 | 0)) % 60 | 0;
	    var msg = "";
	    if (day > 0) msg = msg + day + " " + lg.get("IDS_DAYS");
	    if (hour > 0) msg = msg + " " + hour + " " + lg.get("IDS_HOURS");
	    if (min > 0) msg = msg + " " + min + " " + lg.get("IDS_MINUTES");

	    var Bobj = document.getElementById(tar.id);
	    Bobj.style.color = "Green";
	    Bobj.innerHTML = msg;
    }

    function chkSecIsAcross2(l1, r1, l2, r2) {
        //相交
        if ((l2 > l1 && l2 < r1) || (r2 > l1 && r2 < r1) || (l1 > l2 && l1 < r2) || (r1 > l2 && r1 < r2)) {
            return true;
        }

        //包含
        if ((l1 >= l2 && r1 <= r2) || (l2 >= l1 && r2 <= r1)) {
            return true;
        }

        return false;
    }

    function chkSecIsAcross3(l1, r1, l2, r2, l3, r3) {
        //两两相交或包含
        if (chkSecIsAcross2(l1, r1, l2, r2) || chkSecIsAcross2(l1, r1, l3, r3) || chkSecIsAcross2(l2, r2, l3, r3)) {
            return true;
        }

        return false;
    }

    function XmlParser2(substr, src) {
        var sub1 = "<" + substr + ">";
        var sub2 = "</" + substr + ">";
        var start = src.indexOf(sub1) * 1;
        var end = src.indexOf(sub2) * 1;
        if (start == -1 || end == -1) {
            return "";
        }
        return src.substring(start + sub1.length * 1, end);
    }
	 //draw MotionArea
     function drawMotionArea(options,div)
     {
	   var arrayNum=[0,0,0,0]; 
	   options=options||{};
       if(typeof div == 'undefined')
       {
        div=$("<div class='rect'></div>")
	if(options.number)
       {
		   for(var i=0;i<$(".rect").length;i++)
		   {
			   if(options.number==$($(".rect").get(i)).attr("number")*1)
			   return;
		   }
           var span=$("<span style='background:white'>"+options.number+"<span>");	   
           div.html(span);
           div.attr("number",options.number);
       }
       else
       {
           for(var i=0;i<$(".rect").length;i++)
           {
               arrayNum[ $($(".rect").get(i)).attr("number")||0]=1;
           }
           for(var i=1;i<=3;i++)
           {
               if(!arrayNum[i])
               {
			   var span=$("<span style='background:white'>"+i+"<span>");	   
               div.html(span);
               div.attr("number",i);
               break;
               }
               
           }
       }
		
       }
       div.css({left:options.left,top:options.top,width:options.width+"px",height:options.height+"px"});

	   
	   
	   $(options.panel).append(div);
    }
function TruncForFour(lInput) 
{ 
   if(lInput % 4 != 0) 
   { 
      if(3 == lInput % 4) 
      { 
         lInput += 1; 
      } 
      else 
      { 
         lInput -= lInput % 4; 
      } 
   } 
   return lInput; 
}
/*
if one argument : transform coordinate to save
if two arguments :transform coordinate from webserver to draw on web
*/
function TransformCoordinate(option,type)
{
			var videoHeight=gVar.pluginH;
		    var videoWidth=gVar.pluginW;
			option=option||{};
			// the coordinate send to ipcwebserver
			if(typeof type == 'undefined')
			{
				
				
				option.left=parseInt(option.left*10000/videoWidth);
				option.top=parseInt(option.top*10000/videoHeight);
				option.width=parseInt(option.width*10000/videoWidth);
				option.height=parseInt(option.height*10000/videoHeight);
				if(option.width+option.left>9960)
				{
					option.width=10000-option.left;
				}
				if(option.height+option.top>9960)
				{
					option.height=10000-option.top;
				}
				
			} /* the Coordinate  on web*/
			else
			{
			    option.left=TruncForFour(parseInt(option.left*videoWidth/10000));
				option.top=TruncForFour(parseInt(option.top*videoHeight/10000));
				option.width=TruncForFour(parseInt(option.width*videoWidth/10000));
				option.height=TruncForFour(parseInt(option.height*videoHeight/10000));
			}		
}
var belowIE10 = $.browser.msie && ($.browser.version < 10.0)
function  detectCapsLock1(e){
    var valueCapsLock  =  e.keyCode ? e.keyCode:e.which; // Caps Lock　是否打开  
    if(browserVer.browsers == "Chrome" || browserVer.browsers == "Firefox" || belowIE10){
        if (valueCapsLock >=65 && valueCapsLock  <=90){
            $('#CapsLockTips1').css("display","");
            $('#trigger1').css("display","");
        }else{
            $('#CapsLockTips1').css("display","none");
            $('#trigger1').css("display","none");
        }
    }
}
function  detectCapsLock2(e){
    var valueCapsLock  =  e.keyCode ? e.keyCode:e.which; // Caps Lock　是否打开 
    if(browserVer.browsers == "Chrome" || browserVer.browsers == "Firefox" || belowIE10){
        if (valueCapsLock >=65 && valueCapsLock  <=90){
            $('#CapsLockTips2').css("display","");
            $('#trigger2').css("display","");
        }else{
            $('#CapsLockTips2').css("display","none");
            $('#trigger2').css("display","none");
        }
    }
}
function  detectCapsLock3(e){
    var valueCapsLock  =  e.keyCode ? e.keyCode:e.which; // Caps Lock　是否打开
    if(browserVer.browsers == "Chrome" || browserVer.browsers == "Firefox" || belowIE10){
        if (valueCapsLock >=65 && valueCapsLock  <=90){
            $('#CapsLockTips3').css("display","");
            $('#trigger3').css("display","");
        }else{
            $('#CapsLockTips3').css("display","none");
            $('#trigger3').css("display","none");
        }
    }
}
$(document).click(function(e){
    e = e || event;
    var target = e.target || e.srcElement;
    if(target.id != "passwd" || target.id != "txtLoginNewPwd" || target.id != "txtPwdConfirm")
    {
        $('.CapsLockTip').css("display","none");
        $('.triggerTop').css("display","none");
    }
})
function ShowCircleGreen(show){
    if(show) show="inline";
    else show = "none";
    $("#videoSignGreen").css("display", show);
}
function ShowCircleRed(show){
    if(show) show="inline";
    else show = "none";
    $("#videoSignRed").css("display", show);
}
function ShowConnectErrorTip(show) {
    if (show) show = "inline";
    else show = "none";
    $("#connectErrorTxt").css("display", show);
}

function fixVideoSignPos(videoWidth, videoHeight) {    
    //console.log("videoWidth ==== " + videoWidth + "videoHeight ==== " + videoHeight);
    try {
        var pluginElm = document.getElementById("videoTag");
        if (!pluginElm) return;
        var clientWidth = pluginElm.clientWidth;
        var clientHeight = pluginElm.clientHeight;
        var offsetRight = (clientWidth - videoWidth) / 2;
        var offsetBottom = (clientHeight - videoHeight) / 2;

        //console.log(clientWidth + "-" + clientHeight + "-" + offsetRight + "-" + offsetBottom);

        var blueCircle = document.getElementById("videoSignGreen");
        var redCircle = document.getElementById("videoSignRed");
        if (videoWidth == 0 && videoHeight == 0) { // if video width and video height is zero, set default pos
            offsetRight = 0;
            offsetBottom = 0;
        }
        if (blueCircle) {
            blueCircle.style.right = offsetRight + 50 + "px";
            blueCircle.style.bottom = offsetBottom + 5 + "px";
        }

        if (redCircle) {
            redCircle.style.right = offsetRight + 20 +"px";
            redCircle.style.bottom = offsetBottom + 5 + "px";
        }
    } catch(e) {}
}