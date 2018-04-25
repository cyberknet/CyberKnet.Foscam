using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CyberKnet.Foscam.Variables;
using CyberKnet.Foscam.Parameters;
using CyberKnet.Foscam.Sockets;

namespace CyberKnet.Foscam
{
    public class Camera
    {
        private const int SERVICE_MANAGER_PORT = 50000;
        private const int TIMEOUT_DEFAULT = 5000;
        public string IPAddress { get; set; }
        public int Port { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        private WebSocketCore WsCore { get; set; }
        private WebSocketServiceManager WsManager { get; set; }
        

        private Camera(string ipAddress, int port, string username, string password)
        {
            WsManager = new WebSocketServiceManager(this, SERVICE_MANAGER_PORT);
            WsManager.PortReceived += WsManager_PortReceived;
        }

        private void WsManager_PortReceived(object sender, PortEventArgs e)
        {
            WsCore = new WebSocketCore(this, e.Port);
        }

        public void Login(string ipAddress, int port, string username, string password, int streamType)
        {
            IPAddress = ipAddress;
            Port = port;
            Username = username;
            Password = password;
            Login(streamType);
        }

        public void Login(int streamType)
        {
            try
            {
                var command = new LoginCommand(IPAddress, Port, Foscam.CameraType.H264, Foscam.ConnectionType.IP, Username, Password, streamType);
                var message = new Message(FoscamMessageType.CMD_REQUEST_LOGIN, command);

            }
            catch (Exception e)
            {
                // log
            }
        }
        public void SetHttpsFlag(bool flag) { }
        public void SendCgiCmd(CgiParameterType CgiCommandType, int tmeout, string rsv)
        {
            Message message = null;
            if (CgiCommandType == CgiParameterType.FirmwareUpgrade)
            {
                //data.msgId = WS_REQUEST_FIRMWARE_UPGRADE;
                //var updateStr = new pathSet();
                //updateStr.timeout = tmeout;
                //if (lanPage == "sys_updata")
                //{
                //    updateStr.path = encodeURIComponent($("#txtSysUpdate").val());
                //}
                //if (lanPage == "sys_patch")
                //{
                //    updateStr.path = encodeURIComponent($("#txtSysPatch").val());
                //}
                //data.cmdObject = updateStr;
            }
            else if (CgiCommandType == CgiParameterType.ImportConfig)
            {
                //data.msgId = WS_REQUEST_IMPORT_CONFIG_FILE;
                //var importStr = new pathSet();
                //importStr.path = encodeURIComponent($("#txtSysConfig").val());
                //importStr.timeout = tmeout;
                //data.cmdObject = importStr;
            }
            else
            {
                message = new Message(FoscamMessageType.WS_REQUEST_CGI, new CgiParameter(CgiCommandType, tmeout));
            }

            SendMessage(message);
        }
        public void UpdateFirmwareFilePath()
        {
            var message = new Message(FoscamMessageType.WS_REQUEST_SELECT_FILE, new TimeoutParameter(TIMEOUT_DEFAULT));
            SendMessage(message);
        }

        public void Talk(int i, bool active)
        {
            var message = new Message(FoscamMessageType.WS_REQUEST_TALK, new TalkParameter(active, TIMEOUT_DEFAULT));
            SendMessage(message);
        }

        public void Record(bool active)
        {
            var message = new Message(FoscamMessageType.WS_REQUEST_RECORD, new RecordCommand(Active: active, RecordType: 2, Timeout: TIMEOUT_DEFAULT));
            SendMessage(message);
        }

        public void LocalAlarmRecord(bool active)
        {
            var message = new Message(FoscamMessageType.WS_REQUEST_RECORD, new RecordCommand(Active: active, RecordType: 1, Timeout: TIMEOUT_DEFAULT));
            SendMessage(message);
        }

        public void SetRecordPath(string path)
        {
            var message = new Message(FoscamMessageType.WS_REQUEST_SAVE_RECORD_PATH, new PathParameter(path, TIMEOUT_DEFAULT));
            SendMessage(message);
        }

        public void OpenLocalRecordFolder(string path)
        {
            var message = new Message(FoscamMessageType.WS_REQUEST_OPEN_RECORD_PATH, new PathParameter(path, TIMEOUT_DEFAULT));
            SendMessage(message);
        }

        public void SnapPicture()
        {
            var message = new Message(FoscamMessageType.WS_REQUSET_SNAP, new TimeoutParameter(TIMEOUT_DEFAULT));
            SendMessage(message);
        }

        public void CloseWebSocket()
        {
            var message = new Message(FoscamMessageType.WEB_TELL_QUIT, new TimeoutParameter(TIMEOUT_DEFAULT));
            SendMessage(message);
        }

        public void SDManage(string ip)
        {
            var message = new Message(FoscamMessageType.CMD_REQUEST_PORT, new SDManageParameter(ip, TIMEOUT_DEFAULT));
            SendMessage(message);
        }

        public void RequestPort()
        {
            var message = new Message(FoscamMessageType.CMD_REQUEST_PORT, null);
            message.Version = 1;
            message.GroupId = FoscamGroupId();
            message.Sequence = 0;
            message.DataLength = 0;
            SendMessage(message);
        }

        private void SendMessage(Message message)
        {
            string transData = Newtonsoft.Json.JsonConvert.SerializeObject(message);

        }

        private Int32 FoscamGroupId()
        {
            // duplicates Foscam's "rand" implementation in websocket_service_manager.js ... Not exactly random.
            Int64 retval = 0;
            var st = new DateTime(1970, 1, 1);
            TimeSpan t = (DateTime.Now.ToUniversalTime() - st);
            retval = (Int64)(t.TotalMilliseconds + 0.5);
            string sub = retval.ToString();
            return Convert.ToInt32(sub.Substring(sub.Length - 9, sub.Length));
        }
    }
}
