using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace CyberKnet.Foscam.Sockets
{
    internal class WebSocketCore
    {
        private Camera Camera;
        private int Port;

        public WebSocketCore(Camera camera, int port)
        {
            this.Camera = camera;
            this.Port = port;
        }

        
}
