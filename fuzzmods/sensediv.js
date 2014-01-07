genSensibleCssDiv = require('./cssgen.js').genSensibleCssDiv;
genSensibleXmlDiv = require('./xmlgen.js').genSensibleXmlDiv;
rangeFuzz = require('./Helpers/rangeApiNode.js').fuzzRangeApi;
function rint(upto){return Math.floor(Math.random()*upto)}
function ra(a){return a[rint(a.length)];}
MAX_CSSCHUNKS = 15;
MAX_XMLCHUNKS=15;

var freemethods = ['outerText','innerHTML','outerHTML','textContent']

function generateTestCase(){


var SCRIPT = ""

SCRIPT += "<!DOCTYPE html>\n"
		+ "<head>\n"
		+ "<style id='s'></style>\n"
		+ "<script>\n"
		+ FunctionBase64Decode()
		+ FunctionExecCssDiv()
		+ FunctionExecXmlDiv()
		+ rangeFuzz()
		+ '\n function start(){\n'
			
	SCRIPT +='try{execCssDiv()}catch(e){}\n'
	SCRIPT	+=  'setTimeout(function(){\n'
		+ 'var test = document.getElementById("container");\n'
		+ 'execXmlDiv();\n'
		+ 'execCssDiv();\n'
		+ 'try{rangeFuzz()}catch(e){}\n'
		switch(rint(5)){
		case 0:
		SCRIPT += 'try{test["'+ra(freemethods) +'"]="";}catch(e){}\n'
		break;

		case 1:
		SCRIPT += 'try{test.style.display="none";}catch(e){}\n'
		break;

		case 2:
		SCRIPT += 'try{test.parentNode.removeChild(test);}catch(e){}\n'
		break;

		case 3:
		SCRIPT += 'try{test.applyElement(test);}catch(e){}\n'
		break;

		case 4:
		SCRIPT += 'try{test.appendChild(test);}catch(e){}\n'
		break;
		}
	SCRIPT	+= 'try{document.body.innerHTML="AAAA"}catch(e){};\n'
		+ 'try{CollectGarbage()}catch(e){};\n'
		+ 'window.location.href=window.location.href;\n'
		+ '},50);\n'
		+ '}\n'
		+ 'window.onload=start'
		+ "</script>\n"
		+ "</head>\n"
		+ "<body>\n"
		+ "<div contentEditable=true id='container'></div>\n"
		+ "</body>\n"
		+ "</html>\n"

return SCRIPT;
}

function FunctionExecCss(){
return '\nfunction execCss(){\n'+ ' s=document.getElementById("s");\n'+ genSensibleCss(MAX_CSSCHUNKS)+ '}\n'
}


function FunctionExecCssDiv(){
return '\nfunction execCssDiv(){\n'+ ' s=document.getElementById("s");\n'+ genSensibleCssDiv(MAX_CSSCHUNKS)+ '}\n'
}

function FunctionExecXml(){
return  '\nfunction execXml(){\n'+ genSensibleXml(MAX_XMLCHUNKS)+ '}\n'
}


function FunctionExecXmlDiv(){
return  '\nfunction execXmlDiv(){\n test=document.getElementById("container");\n'+ genSensibleXmlDiv(MAX_XMLCHUNKS)+ '}\n'
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
