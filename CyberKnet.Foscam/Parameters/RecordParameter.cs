using CyberKnet.Foscam.Parameters;
using Newtonsoft.Json;

namespace CyberKnet.Foscam
{
    internal class RecordCommand : ParameterBase
    {
        [JsonProperty("operation")]
        public int Active { get; set; }
        [JsonProperty("type")]
        public int RecordType { get; set; }

        public RecordCommand(bool Active, int RecordType, int Timeout)
        {
            this.Active = Active ? 1 : 0;
            this.RecordType = RecordType;
            this.Timeout = Timeout;
        }
    }
}