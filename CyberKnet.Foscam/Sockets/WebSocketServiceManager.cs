using CyberKnet.Foscam.Responses;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebSocket4Net;

namespace CyberKnet.Foscam.Sockets
{
    internal class WebSocketServiceManager
    {
        private bool needServiceUpdate = false;
        private Camera Camera { get; set; }
        private int ManagementPort { get; set; }
        WebSocket Socket = null;

        private void log(string msg)
        {

        }

        public delegate void PortReceivedEventHandler(object sender, PortEventArgs e);
        public event EventHandler<PortEventArgs> PortReceived;

        public WebSocketServiceManager(Camera camera, int managementPort)
        {
            Camera = camera;
            ManagementPort = managementPort;
        }

        public void RequestService()
        {
            Socket = new WebSocket4Net.WebSocket($"ws://127.0.0.1:{ManagementPort}", "http", WebSocket4Net.WebSocketVersion.None);
            Socket.Opened += Socket_Opened;
            Socket.Closed += Socket_Closed;
            Socket.MessageReceived += Socket_MessageReceived;
            Socket.Error += Socket_Error;
        }

        protected virtual void OnRaisePortReceived(PortEventArgs e)
        {
            var handler = PortReceived;
            if (handler != null)
            {
                handler(this, e);
            }
        }

        private void Socket_Error(object sender, SuperSocket.ClientEngine.ErrorEventArgs e)
        {
            throw new NotImplementedException();
        }

        private void Socket_MessageReceived(object sender, MessageReceivedEventArgs e)
        {
            try
            {
                string json = getJsonFromMessage(e.Message);
                dynamic msg = JObject.Parse(json);
                if (json == null)
                    return;
                var msgid = msg.msgid * 1;
                //this.me.log("manager msgid : " + msgid);
                switch (msgid)
                {
                    case FoscamResponseType.RESPONSE_REQUEST_PORT:
                        var response = JsonConvert.DeserializeObject<PortResponse>(json);
                        OnRaisePortReceived(new PortEventArgs(response.Port));
                        //VersionCheck(json);
                        break;

                    default:
                        break;
                }

            }
            catch (Exception e) { }
        }

        private void Socket_Closed(object sender, EventArgs e)
        {
            log("Closed");
        }

        private void Socket_Opened(object sender, EventArgs e)
        {
            if (Socket.State == WebSocketState.Open)
            {
                Camera.RequestPort();
            }
        }

        private string getJsonFromMessage(object evt)
        {
            if (evt.data is ArrayBuffer)
            {
                var dataArray = new Int8Array(evt.data);
                var jsonStr = this.ab2str(dataArray);
                return jsonStr;
            }
            return null;
        }

        private string ab2str(byte[] buf)
        {
            return String.fromCharCode.apply(null, new Uint8Array(buf));
        }

        //private void downPlugins()
        //{
        //    var obj = document.getElementById("downPlugins");
        //    obj.innerHTML = '<a id="down" href="IPCWebComponents.exe">' + lg.get("IDS_LOGIN_KJ") + '</a>';
        //}

        //private void VersionCheck(PortResponse response)
        //{
        //    //check plugin version
        //    var vsIf = response.ServiceVersion;

        //    var v1 = vsIf.split(".");   //plugin version

        //    var v2 = pVersion.split(".");    //web version

        //    for (var m = 0; m < 4; m++)
        //    {
        //        if (v2[m] * 1 > v1[m] * 1)
        //        {
        //            needServiceUpdate = true;
        //            break;
        //        }
        //        else if (v2[m] * 1 == v1[m] * 1)
        //        {
        //            continue;
        //        }
        //        else
        //        {
        //            needServiceUpdate = false;
        //            break;
        //        }
        //    };
        //    if (needServiceUpdate)
        //    {
        //        if (IsFirefox())
        //        {
        //            var obj = document.getElementById("downPlugins");
        //            obj.innerHTML = '<a id="down" href="IPCWebComponents.exe">' + lg.get("IDS_PLUGIN_UPDATE_TIP") + '</a>';
        //        }
        //    }
        //}
    }
}
