using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CyberKnet.Foscam.Parameters
{
    public class CgiParameter : ParameterBase
    {
        [JsonProperty("cgi")]
        public string CommandName { get; set; }

        public CgiParameter(CgiParameterType CommandType, int Timeout)
        {
            switch(CommandType)
            {
                default:
                    break;
            }
            this.Timeout = Timeout;
        }
    }
}
