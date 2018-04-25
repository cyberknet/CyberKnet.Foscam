using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CyberKnet.Foscam
{
    internal class PortEventArgs : EventArgs
    {
        public int Port { get; private set; }
        internal PortEventArgs(int port)
        {
            Port = port;
        }
    }
}
