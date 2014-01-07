var cmxmldb = require('./Helpers/cmxmldb.js').cmxmldb
var xmldb = require('./Helpers/xmldb.js').xmldb





function rint(upto){return Math.floor(Math.random()*upto)}
function ra(a){return a[rint(a.length)];}




function generateTestCase(){


SCRIPT = "<!DOCTYPE html>\n"
		+ "<html>\n"
		+ "<head>\n"
		+ "<style id='s'></style>\n"
		+ "<script>\n"
		+ FunctionBase64Decode()
		+ "\n function start(){\n"
		+ ExecXML()
		+ "window.location.href=window.location.href\n"
		+ "}\n"
		+ "window.onload=start;\n"
		+ "</script>\n"
		+ "</head>\n<body>\n</body>\n</html>"

return SCRIPT
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


function ExecXML(){

var SCRIPT = ''
for(var i=0;i<11;i++){

if(rint(2)==1){
SCRIPT += 'document.body.innerHTML += decode_base64("'+ra(cmxmldb)+'");\n'
}else{
SCRIPT += 'document.body.innerHTML += decode_base64("'+ra(xmldb)+'");\n'
}

}//for

return SCRIPT
}
