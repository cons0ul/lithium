	
var http = require('http')
var genSensibleCss = require('./cssgen.js').genSensibleCss;
var genSensibleXml= require('./xmlgen.js').genSensibleXml
var dom = require('./Helpers/createDom.js').createRandomDom;


function generateTestCase(){
SCRIPT = '<!DOCTYPE html>\n'
		+ '<html>\n'
		+ '<head>\n'
		+ '<style id="s"></style>\n'
		+ '<script>\n'
		+ FunctionBase64Decode()
		+ FunctionExecCss()
		+ FunctionExecXml()
		+ '\nfunction start(){\n'
		+ 'try{execCss()}catch(e){}\n'
		+ 'try{execXml()}catch(e){}\n'
		+ dom(11)
		+ 'window.location.href=window.location.href;\n'
		+ '}\n'
		+ 'window.onload=start\n'
		+'</script>\n'
		+ '</head>\n'
		+ '<body>\n'
		+ '</body>\n'
		+ '</html>'
		
return SCRIPT;
}

module.exports.generateTestCase = generateTestCase;
		




function FunctionBase64Decode(){

var SCRIPT = "\nfunction decode_base64(s) {\n"
SCRIPT += "    var e={},i,k,v=[],r='',w=String.fromCharCode;\n"
SCRIPT += "    var n=[[65,91],[97,123],[48,58],[43,44],[47,48]];\n"
SCRIPT += "\n"
SCRIPT += "    for(z in n){for(i=n[z][0];i<n[z][1];i++){v.push(w(i));}}\n"
SCRIPT += "    for(i=0;i<64;i++){e[v[i]]=i;}\n"
SCRIPT += "\n"
SCRIPT += "    for(i=0;i<s.length;i+=72){\n"
SCRIPT += "    var b=0,c,x,l=0,o=s.substring(i,i+72);\n"
SCRIPT += "         for(x=0;x<o.length;x++){\n"
SCRIPT += "                c=e[o.charAt(x)];b=(b<<6)+c;l+=6;\n"
SCRIPT += "                while(l>=8){r+=w((b>>>(l-=8))%256);}\n"
SCRIPT += "         }\n"
SCRIPT += "    }\n"
SCRIPT += "    return r;\n"
SCRIPT += "    }\n"

return SCRIPT
}

var MAX_CSSCHUNKS = 11
var MAX_XMLCHUNKS = 11
function FunctionExecCss(){
return '\nfunction execCss(){\n'+ ' s=document.getElementById("s");\n'+ genSensibleCss(MAX_CSSCHUNKS)+ '}\n'
}


function FunctionExecXml(){
return  '\nfunction execXml(){\n'+ genSensibleXml(MAX_XMLCHUNKS)+ '}\n'
}
