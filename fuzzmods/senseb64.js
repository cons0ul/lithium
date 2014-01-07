genSensibleCss = require('./cssgen.js').genSensibleCss;
genSensibleXml = require('./xmlgen.js').genSensibleXml;
rangeFuzz = require('./Helpers/rangeApiNode.js').fuzzRangeApi;
function rint(upto){return Math.floor(Math.random()*upto)}
function ra(a){return a[rint(a.length)];}
MAX_CSSCHUNKS = 6;
MAX_XMLCHUNKS=6;

var freemethods = ['outerText','innerHTML','outerHTML','textContent','innerText']

function generateTestCase(){


var SCRIPT = ""

SCRIPT += "<!DOCTYPE html>\n"
		+ "<head>\n"
		+ "<style id='s'></style>\n"
		+ "<script>\n"
		+ FunctionBase64Decode()
		+ FunctionExecCss()
		+ FunctionExecXml()
		//+ rangeFuzz()
		+ '\n function start(){\n'
		
var FLAG = rint(2);
	for(var iter = 0;iter < 2;iter++){
	if(FLAG){
	SCRIPT += ' try{execXml()}catch(e){}\n'
	FLAG = 0;
	}else{
	SCRIPT += ' try{execCss()}catch(e){}\n'
	FLAG = 1;
	}
}

	SCRIPT	+=  'setTimeout(function(){\n'
	    + 'var test = document.getElementById("test3");\n'
		+ 'try{test1.setAttribute("width","500px")}catch(e){}\n'
		+ 'try{test1["'+ra(freemethods)+'"]="";}catch(e){}\n'
		+ 'try{test1.removeAttribute("id")}catch(e){}\n'
		+ 'try{document.body.offsetHeight;}catch(e){}\n'
		+ 'try{test2.setAttribute("width","500px")}catch(e){}\n'
		+ 'try{test2["'+ra(freemethods)+'"]="";}catch(e){}\n'
		+ 'try{test2.removeAttribute("id")}catch(e){}\n'
		+ 'try{test3.setAttribute("width","500px")}catch(e){}\n'
		+ 'try{test3["'+ra(freemethods)+'"]="";}catch(e){}\n'
		+ 'try{document.body.offsetHeight;}catch(e){}\n;'
		+ 'try{test3.removeAttribute("id")}catch(e){}\n'
		+ 'try{document.body.offsetHeight;}catch(e){}\n'
		+ 'try{test4.setAttribute("width","500px")}catch(e){}\n'
		+ 'try{test4["'+ra(freemethods)+'"]="";}catch(e){}\n'
		+ 'try{test4.removeAttribute("id")}catch(e){}\n'
		+ 'try{document.body.offsetHeight;}catch(e){}\n'
		+ 'try{test5["'+ra(freemethods)+'"]="";}catch(e){}\n'
		+ 'try{test5.removeAttribute("id")}catch(e){}\n'
		+ 'try{document.body.offsetHeight;}catch(e){}\n'
		//+ 'try{rangeFuzz()}catch(e){}\n'
		switch(rint(3)){
		case 0:
		SCRIPT += 'try{test["'+ra(freemethods) +'"]="";}catch(e){}\n'
		break;

		case 1:
		SCRIPT += 'try{test.style.display="none";}catch(e){}\n'
		break;

		case 2:
		SCRIPT += 'try{test.parentNode.removeChild(test);}catch(e){}\n'
		break;
		}
	SCRIPT	+= 'document.body.innerHTML="AAAA";\n'
		+ 'try{CollectGarbage()}catch(e){};\n'
		+ 'window.location.href=window.location.href;},50);\n'
		+ '}\n'
		+ 'window.onload=start'
		+ "</script>\n"
		+ "</head>\n"
		+ "<body>\n"
		+ "</body>\n"
		+ "</html>\n"

return SCRIPT;
}

function FunctionExecCss(){
return '\nfunction execCss(){\n'+ ' s=document.getElementById("s");\n'+ genSensibleCss(MAX_CSSCHUNKS)+ '}\n'
}


function FunctionExecXml(){
return  '\nfunction execXml(){\n'+ genSensibleXml(MAX_XMLCHUNKS)+ '}\n'
}

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

module.exports.generateTestCase=generateTestCase;
