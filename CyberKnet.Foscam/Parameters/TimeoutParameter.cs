using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CyberKnet.Foscam.Parameters
{
    public class TimeoutParameter : ParameterBase
    {
        public TimeoutParameter(int Timeout)
        {
            this.Timeout = Timeout;
        }
    }
}
