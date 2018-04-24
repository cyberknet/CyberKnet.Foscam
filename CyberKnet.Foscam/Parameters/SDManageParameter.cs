using Newtonsoft.Json;

namespace CyberKnet.Foscam.Parameters
{
    internal class SDManageParameter : ParameterBase
    {
        [JsonProperty("ip")]
        private string IPAddress { get; set; }

        public SDManageParameter(string IPAddress, int Timeout)
        {
            this.IPAddress = IPAddress;
            this.Timeout = Timeout;
        }
    }
}