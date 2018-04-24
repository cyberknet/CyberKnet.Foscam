using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CyberKnet.Foscam.Variables
{
    public class FoscamVariable
    {
        //public const int SERVICE_MANAGER_PORT = 50000;
        //public const int CMD_REQUEST_PORT = 20000;
        //public const int CMD_REQUEST_LOGIN = 20001;

        //public const int WS_REQUEST_PORT = 20000;
        //public const int WS_REQUEST_LOGIN = 20001;
        //public const int WS_REQUEST_LOGOUT = 20002;
        //public const int WS_REQUEST_AUDIO = 20003;
        //public const int WS_REQUEST_TALK = 20004;
        //public const int WS_REQUEST_CGI = 20005;
        //public const int WS_REQUSET_SNAP = 20006;
        //public const int WS_REQUEST_OPEN_VIDEO = 20007;
        //public const int WS_REQUEST_CLOSE_VIDEO = 20008;
        //public const int WS_REQUEST_SELECT_FILE = 20009;
        //public const int WS_REQUEST_GET_FILE_SIZE = 20010;
        //public const int WS_REQUEST_FIRMWARE_UPGRADE = 20011;
        //public const int WS_REQUEST_SEARCH_DEV_IP_AND_PORT = 20012;
        //public const int WS_REQUEST_IMPORT_CONFIG_FILE = 20013;
        //public const int WS_REQUEST_SAVE_RECORD_PATH = 20014;
        //public const int WS_REQUEST_GET_RECORD_PATH = 20015;
        //public const int WS_REQUEST_OPEN_RECORD_PATH = 20016;
        //public const int WS_REQUEST_RECORD = 20017;
        //public const int WS_REQUEST_SELECT_RECORD_PATH = 20018;
        //public const int WS_REQUEST_SD_MANAGER = 20019;
        //public const int WS_REQUEST_LOGIN_AGIN = 20020;
        public const int CTRL_CMD_LOGIN = 30000;
        public const int CTRL_CMD_LOGOUT = 30001;
        public const int CTRL_CMD_AUDIO = 30002;
        public const int CTRL_CMD_TALK = 30003;
        public const int CTRL_CMD_CGI = 30004;
        public const int CTRL_CMD_SNAP = 30005;
        public const int CTRL_CMD_CTRL_QUIT = 30006;
        public const int CTRL_CMD_EVENT_QUIT = 30007;
        //public const int RESPONSE_REQUEST_PORT = 50000;
        //public const int RESPONSE_REQUSET_LOGIN = 50001;
        //public const int RESPONSE_REQUEST_LOGOUT = 50002;
        //public const int RESPONSE_REQUEST_RELEASE = 50003;
        //public const int RESPONSE_REQUEST_AUDIO = 50004;
        //public const int RESPONSE_REQUEST_TALK = 50005;
        //public const int RESPONSE_REQUEST_CGI = 50006;
        //public const int RESPONSE_REQUEST_SNAP = 50007;
        //public const int RESPONSE_REQUEST_LOGIN_PRODUCT_INFO = 50008;
        //public const int RESPONSE_REQUEST_LOGIN_MSG_INIT_INFO = 50009;
        //public const int RESPONSE_REQUEST_OPEN_VIDEO = 50010;
        //public const int RESPONSE_REQUEST_CLOSE_VIDEO = 50011;
        //public const int RESPONSE_REQUEST_OPEN_VIDEO_SUCCESS = 50012;
        //public const int RESPONSE_REQUEST_SELECT_FILE = 50013;
        //public const int RESPONSE_REQUEST_GET_FILE_SIZE = 50014;
        //public const int RESPONSE_REQUEST_FIRMWARE_UPGRADE_FAKE_CGI_RESULT = 50016;
        //public const int RESPONSE_REQUEST_FIRMWARE_UPGRADE_MSG = 50017;
        //public const int RESPONSE_REQUEST_SEARCH_DEV_IP_AND_PORT = 50018;

        //public const int RESPONSE_REQUEST_IMPORT_CONFIG_FILE = 50019;
        //public const int RESPONSE_REQUEST_SAVE_RECORD_PATH = 50020;
        //public const int RESPONSE_REQUEST_GET_RECORD_PATH = 50021;
        //public const int RESPONSE_REQUEST_OPEN_RECORD_PATH = 50022;
        //public const int RESPONSE_REQUEST_RECORD = 50023;
        //public const int RESPONSE_REQUEST_SELECT_RECORD_PATH = 50024;
        //public const int RESPONSE_REQUEST_SD_MANAGER = 50025;
        //public const int RESPONSE_REQUEST_LOGIN_AGAIN = 50026;

        //public const int EVENT_CONNECT_ERR = 60000;
        //public const int EVENT_RECORD_OPEN = 60001;
        //public const int EVENT_RECORD_CLOSE = 60002;
        //public const int EVENT_IMAGE_CHANGE = 60003;
        //public const int EVENT_CRUISE_CHANGE = 60004;
        //public const int EVENT_PRESET_CHANGE = 60005;
        //public const int EVENT_MIRROR_FLIP_CHANGE = 60006;
        //public const int EVENT_IRCUT_CHANGE = 60007;
        //public const int EVENT_STREAM_PARAM_CHANGE = 60008;
        //public const int EVENT_STREAM_TYPE_CHANGE = 60009;
        //public const int EVENT_VIDEO_EPT_STATE_CHANGE = 60010;
        //public const int EVENT_PWRFREQ_CHANGE = 60011;
        //public const int EVENT_ALARM_CHANGE = 60012;
        //public const int EVENT_SUB_STREAM_TYPE_CHANGE = 60013;
        //public const int EVENT_SUB_STREAM_PARAM_CHANGE = 60014;
        //public const int EVENT_GET_ALL_PRODUCT_INFO = 60015;
        //public const int EVENT_HDR_CHANGE = 60016;
        //public const int EVENT_WDR_CHANGE = 60017;
        //public const int EVENT_NAA_CHANGE = 60018;
        //public const int EVENT_GUARD_POSITION_CHANGE = 60019;
        //public const int EVENT_RECORD_STATE = 60021;
        //public const int EVENT_IMPORT_CONFIG = 60022;
        //public const int EVENT_FTP_STATE = 60023;
        //public const int EVENT_RECONNECT = 60024;
        //public const int EVENT_AUDIO_VOLUME_CHANGE = 60025;
        public const int HELLO_CMD = 1000000;
        public const int HELLO_RESPONSE = 1000001;
        public const int FLASH_BUFFER_FULL = 1000002;
        public const int FLASH_BUFFER_EMPTY = 1000003;
        //public const int WEB_TELL_QUIT = 1000004;
        public const int FLASH_CONNECT_RTMP_AGAIN = 1000005;

        public const int FLASH_BUFFER_LENGTH = 1000006;
        public const int SEEK_OFFSET = 1000007;
    }
}
