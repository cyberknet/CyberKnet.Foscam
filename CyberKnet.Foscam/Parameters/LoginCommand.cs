using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CyberKnet.Foscam.Parameters
{
    class LoginCommand : ParameterBase
    {

        [JsonProperty("ip")]
        public string IPAddress { get; set; }
        [JsonProperty("ddns")]
        public string DynamicDns { get; set; }
        public string uid { get; set; }
        [JsonProperty("usr")]
        public string Username { get; set; }
        [JsonProperty("pwd")]
        public string Password { get; set; }
        [JsonProperty("webPort")]
        public int WebPort { get; set; }
        [JsonProperty("mediaPort")]
        public int MediaPort { get; set; }
        [JsonProperty("ddnsMedia")]
        public int DynamicDnsMedia { get; set; }
        [JsonProperty("mac")]
        public string MacAddress { get; set; }
        [JsonProperty("ipcType")]
        public int CommunicationType { get; set; }
        [JsonProperty("connectType")]
        public int ConnectionType { get; set; }
        [JsonProperty("streamType")]
        public string StreamType { get; set; } // TODO: check data type

        [JsonProperty("ServiceType")]
        public int ServiceType { get; set; }
        public LoginCommand(string IPAddress, int Port, CameraType CameraType, ConnectionType ConnectionType,
                            string Username, string Password, int streamType)
        {
            this.IPAddress = IPAddress;
            this.WebPort = Port;
            this.MediaPort = Port;
            this.DynamicDnsMedia = Port;
            this.Username = Username;
            this.Password = Password;
            this.CommunicationType = (int)CameraType;
            this.ConnectionType = (int)ConnectionType;
            this.Timeout = 5000;
            this.ServiceType = 0;
        }
    }
}
