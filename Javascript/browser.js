function IsBrowserVersion() {
    this.brows = [
	          {
                string: navigator.userAgent,
                subtype: "MSIE",
                type: "Internet Explorer"
            },
	          {
                string: navigator.userAgent,
                subtype: "Trident",
                type: "IE11"
             }, 
	         
			
			 {
                string: navigator.userAgent,
                subtype: "Edge",
                type: "Edge"
            },
            {
                string: navigator.userAgent,
                subtype: "Chrome",
                type: "Chrome"
            },
            {
                string: navigator.vendor,
                subtype: "Apple",
                type: "safari"
            },
            {
                string: navigator.userAgent,
                subtype: "Firefox",
                type: "Firefox"
            }
            
        ]
     this.type = function (data) {
         for (var i = 0; i < data.length; i++) {
             if (data[i].string) {
                 var us = data[i].string.indexOf(data[i].subtype);
                 if (us != -1) {
                     return data[i].type;
                 }
             }
         }
     }
     this.browsers = this.type(this.brows);
}
