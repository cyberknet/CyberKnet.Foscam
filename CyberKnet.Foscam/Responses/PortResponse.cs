using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CyberKnet.Foscam.Responses
{
    public class PortResponse
    {
        [JsonProperty("msgId")]
        public int MessageId { get; set; }

        [JsonProperty("dstPort")]
        public int Port { get; set; }

        [JsonProperty("seviceVer")]
        public string ServiceVersion { get; set; }
    }
}
