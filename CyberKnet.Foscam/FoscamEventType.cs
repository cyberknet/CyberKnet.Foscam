﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CyberKnet.Foscam
{
    public enum FoscamEventType
    {
        EVENT_CONNECT_ERR = 60000,
        EVENT_RECORD_OPEN = 60001,
        EVENT_RECORD_CLOSE = 60002,
        EVENT_IMAGE_CHANGE = 60003,
        EVENT_CRUISE_CHANGE = 60004,
        EVENT_PRESET_CHANGE = 60005,
        EVENT_MIRROR_FLIP_CHANGE = 60006,
        EVENT_IRCUT_CHANGE = 60007,
        EVENT_STREAM_PARAM_CHANGE = 60008,
        EVENT_STREAM_TYPE_CHANGE = 60009,
        EVENT_VIDEO_EPT_STATE_CHANGE = 60010,
        EVENT_PWRFREQ_CHANGE = 60011,
        EVENT_ALARM_CHANGE = 60012,
        EVENT_SUB_STREAM_TYPE_CHANGE = 60013,
        EVENT_SUB_STREAM_PARAM_CHANGE = 60014,
        EVENT_GET_ALL_PRODUCT_INFO = 60015,
        EVENT_HDR_CHANGE = 60016,
        EVENT_WDR_CHANGE = 60017,
        EVENT_NAA_CHANGE = 60018,
        EVENT_GUARD_POSITION_CHANGE = 60019,
        EVENT_RECORD_STATE = 60021,
        EVENT_IMPORT_CONFIG = 60022,
        EVENT_FTP_STATE = 60023,
        EVENT_RECONNECT = 60024,
        EVENT_AUDIO_VOLUME_CHANGE = 60025,
        HELLO_CMD = 1000000
}
}