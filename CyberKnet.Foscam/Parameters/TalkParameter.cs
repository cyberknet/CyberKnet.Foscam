using Newtonsoft.Json;

namespace CyberKnet.Foscam.Parameters
{
    internal class TalkParameter : ParameterBase
    {
        [JsonProperty("operation")]
        public int Active { get; set; }

        public TalkParameter(bool Active, int Timeout)
        {
            this.Active = Active ? 1 : 0;
            this.Timeout = Timeout;
        }
    }
}