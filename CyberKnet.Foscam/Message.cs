using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CyberKnet.Foscam.Parameters
{
    public class Message
    {
        [JsonProperty("msgId")]
        public int MessageType { get; set; }
        [JsonProperty("cmdObject")]
        public ParameterBase Parameter { get; set; }
        public Message(FoscamMessageType MessageType, ParameterBase Parameter)
        {
            this.MessageType = (int)MessageType;
            this.Parameter = Parameter;
        }
    }
}
