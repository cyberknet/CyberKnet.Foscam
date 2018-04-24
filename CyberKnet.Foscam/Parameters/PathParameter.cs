using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CyberKnet.Foscam.Parameters
{
    public class PathParameter : ParameterBase
    {
        [JsonProperty("path")]
        public string Path { get; set; }

        public PathParameter(string Path, int Timeout)
        {
            this.Path = Path;
            this.Timeout = Timeout;
        }
    }
}
