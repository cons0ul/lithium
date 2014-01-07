var HTML = require('./Helpers/lib.js').HTML
var http = require('http')
var genSensibleCss = require('./cssgen.js').genSensibleCss;
var spawn = require('child_process').spawn;
var genSensibleXml= require('./xmlgen.js').genSensibleXml
var dom = require('./Helpers/createDom.js').createRandomDom;

var NODE = ["adoptNode",
"createTextNode",
"importNode",
"createNodeIterator",
"removeNode",
"replaceNode",
"swapNode",
"cloneNode",
"hasChildNodes",
"isEqualNode",
"isSameNode"]


SCROLL = ["scrollbarDown",
"scrollbarHThumb",
"scrollbarLeft",
"scrollbarPageDown",
"scrollbarPageLeft",
"scrollbarPageRight",
"scrollbarPageUp",
"scrollbarRight",
"scrollbarUp",
"scrollbarVThumb",
"down",
"left",
"pageDown",
"pageLeft",
"pageRight",
"pageUp",
"right",
"up"]


var WINDOW = ["onload",
"addEventListener",
"dispatchEvent",
"removeEventListener",
"attachEvent",
"detachEvent",
"execScript",
"item",
"moveBy",
"moveTo",
"msWriteProfilerMark",
"navigate",
"resizeBy",
"resizeTo",
"toStaticHTML",
"scroll",
"scrollBy",
"scrollTo",
"getComputedStyle",
"blur",
"focus",
"getSelection",
"postMessage",
"showModalDialog",
"toString"]


function rint(upto){ return Math.floor(Math.random()*upto)}
function ra(a){return a[rint(a.length)];}



function applyFree(){

var SCRIPT = ''

for(var i=0;i<6;i++){

switch(rint(30)){
case 0:
	SCRIPT += "try{document.body.innerHTML = 'AAAAAAAA';}catch(e){}\n"
	break;
	
case 1:
	SCRIPT += "try{document.body.innerText = 'AAAAAAAA';}catch(e){}\n"
	break;

case 2:
	SCRIPT += "try{document.body.textContent='AAAAAAAA';}catch(e){}\n"
	break;

case 3:
	SCRIPT += "try{document.head.textContent='AAAAAAAA';}catch(e){}\n"
	break;

case 4:
	SCRIPT += "try{document.head.innerText = 'AAAAAAAA';}catch(e){}\n"
	break;

case 5:
	SCRIPT += "try{document.head.innerHTML = 'AAAAAAAA';}catch(e){}\n"
	break;
	
case 6:
	SCRIPT += "try{document.styleSheets[0].deleteRule(0)}catch(e){}\n"
	break;

case 7:
	SCRIPT += "try{s=document.getElementById('s')}catch(e){}\n"
	SCRIPT += "try{s.textContent = 'A'}catch(e){}\n"
	break;
	
case 8:
	SCRIPT += "try{s=document.getElementById('s')}catch(e){}\n"
	SCRIPT += "try{s.innerText = 'A'}catch(e){}\n"
	break;

case 9:
	SCRIPT += "try{s=document.getElementById('s')}catch(e){}\n"
	SCRIPT += "try{s.innerHTML = 'A'}catch(e){}\n"
	break;

case 10:
	SCRIPT += "try{s=document.getElementById('s')}catch(e){}\n"
	SCRIPT += "try{s.appendChild(document.createTextNode('AAAAAAAA'))}catch(e){}\n"
	break;

case 11:
	SCRIPT += "try{document.styleSheets[0].cssText+='A';}catch(e){}\n"
	SCRIPT += "try{document.styleSheets[0].cssText='A';}catch(e){}\n"
	break;

case 12:
	SCRIPT += "try{document.write('A')}catch(e){}\n"
	break;
	
case 13:
	SCRIPT += "try{document.write('')}catch(e){}\n"
	break;

case 14:
	SCRIPT += "try{document.writeln('')}catch(e){}\n"
	break;
	
case 15:
	SCRIPT += "try{document.open()}catch(e){}\n"
	break;

	
case 16:
	SCRIPT += "try{document.open('text/html')}catch(e){}\n"
	break;

case 17:
	SCRIPT += "try{document.body.parentNode.removeChild(document.body)}catch(e){}\n"
	break;
	
case 18:
	SCRIPT += "try{test11.parentNode.removeChild(test11)}catch(e){}\n"
	break;

case 19:
	SCRIPT += "try{document.documentElement.innerText+='A'}catch(e){}\n"
	break;

case 20:
	SCRIPT += "try{document.documentElement.innerHTML='A'}catch(e){}\n"
	break;
	
case 21:
	SCRIPT +="try{test1.innerHTML = 'A'}catch(e){}\n"
	break;
	
case 22:
	SCRIPT += "try{test11.style.display = 'none'}catch(e){}\n"
	break;

case 23:
	SCRIPT += "try{test1.style.display = 'none'}catch(e){}\n"
	break;

case 24:
	SCRIPT += "try{test1['"+ra(NODE)+"'](test11)}catch(e){}\n"
	break;

case 25:
	SCRIPT += "try{test1['"+ra(NODE)+"'](test11)}catch(e){}\n"
	break;
	
case 26:
	SCRIPT += "try{document.execCommand('delete',null,true)}catch(e){}\n"
	break;

case 27:
	SCRIPT += "try{document.execCommand('removeformat', null, true);}catch(e){}\n"
	break;


case 28:
		SCRIPT += "try{document.selection.empty()}catch(e){}\n"
		break;
case 29:
		SCRIPT += "try{document.selection.clear()}catch(e){}\n"
		break;
}//switch
}//for 
return SCRIPT+'\ntry{CollectGarbage()}catch(e){}\n';
}




function applyUse() {


var SCRIPT='';

for(var i=0;i<3;i++){

switch(rint(10)){

case 0:
		SCRIPT += "try{document.body.offsetHeight;}catch(e){}\n"
		break;
case 1:
		SCRIPT += "try{test1.offsetHeight;}catch(e){}\n"
		break;
case 2:
		SCRIPT += "try{window['"+ra(WINDOW)+"']()}catch(e){}\n"
		break;
case 3:
		SCRIPT += "try{window['"+ra(WINDOW)+"'](0x100)}catch(e){}\n"
		break;
case 4:
		SCRIPT += "try{window['"+ra(WINDOW)+"'](0x1000,0x100)}catch(e){}\n"
		break;
case 5:
		SCRIPT += "try{window['"+ra(WINDOW)+"'](0x0100,0x0100)}catch(e){}\n"
		break;
case 6:	
		SCRIPT += "try{window['"+ra(WINDOW)+"']('#test5')}catch(e){}\n"
		break;
case 7:
		SCRIPT += "try{window.navigate('#test5')}catch(e){}\n"
		break;
case 8:
		SCRIPT += "try{document.selection.createRange().pasteHTML('Some Text Can Do!!!!!!!');}catch(e){}\n"
		break;

case 9:
		SCRIPT += "try{document.selection.empty()}catch(e){}\n"
		break;
case 10:
		SCRIPT += "try{document.selection.clear()}catch(e){}\n"
		break;
case 11:
		SCRIPT += "try{test11.clientWidth}catch(e){}\n"
		break;
	
case 12:
		SCRIPT += "try{for(var i in test1){test1[i]}}catch(e){}\n"
		break;
		
case 13:
		SCRIPT += "try{for(var i in document.body){document.body[i]}}catch(e){}\n"
		break;
		
}//switch
}//for

return SCRIPT
}



function generateTestCase(){

	SCRIPT = '<!DOCTYPE html>\n'
			+ '<html>\n'
			+ '<head>\n'
			+ '<style id="s"></style>\n'
			+ '<script>\n'
			+ FunctionBase64Decode()
			+ FunctionExecCss()
			+ '\nfunction start(){\n'
			+ 'try{execCss()}catch(e){}\n'
		//	+ 'test1.style.width="150px"\n'
		//	+ 'test5.style.width="1600px"\n'
			+ 'try{test1.setActive();}catch(e){}\n'
			+ 'try{test5.setActive();}catch(e){}\n'
			+ 'try{test11.setActive();}catch(e){}\n'
			+ applyUse()
			+ dom(8)
			+'window.location.href="http://localhost:2222/fuzz";\n}'
			+'\n function fireme(){\n'
			+ applyFree()
			+ dom(8)
			+ '}\n'
			+'</script>\n'
			+'<body onload="start()">\n'
			+ generateTags(11)
			+'</body>\n'
			+'</html>\n'
			
	return SCRIPT;

}

module.exports.generateTestCase = generateTestCase;

function generateTags(n){

var SCRIPT = ''
for(var i=1;i<n+1;i++){
	SCRIPT += '<'+ra(HTML)+' id="test'+i+'" onactivate="fireme()">\n'
}
return SCRIPT
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

var MAX_CSSCHUNKS = 11
var MAX_XMLCHUNKS = 11
function FunctionExecCss(){
return '\nfunction execCss(){\n'+ ' s=document.getElementById("s");\n'+ genSensibleCss(MAX_CSSCHUNKS)+ '}\n'
}


function FunctionExecXml(){
return  '\nfunction execXml(){\n'+ genSensibleXml(MAX_XMLCHUNKS)+ '}\n'
}
