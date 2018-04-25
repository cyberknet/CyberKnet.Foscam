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

        [JsonProperty("version")]
        public int Version { get; set; }
        [JsonProperty("groupId")]
        public int GroupId { get; set; }
        [JsonProperty("sequence")]
        public int Sequence { get; set; }
	    [JsonProperty("dataLen")]
        public int DataLength { get; set; }
	    


        public Message(FoscamMessageType MessageType, ParameterBase Parameter)
        {
            this.MessageType = (int)MessageType;
            this.Parameter = Parameter;
        }
    }
}
