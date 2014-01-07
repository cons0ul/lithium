//b64 = require('base64')
xmldb = require('./Helpers/xmldb.js').xmldb
cssdb = require('./Helpers/cssdb.js').cssdb
cmcssdb = require('./Helpers/cmcssdb.js').cmcssdb
cmxmldb = require('./Helpers/cmxmldb.js').cmxmldb

//initServer = require('./Helpers/server.js').initServer


htmlHeader = '<!DOCTYPE html>\n<html>\n<head>\n'
htmlStyleStart = '<style id="s">\n'
htmlStyleEnd = '</style>\n'
htmlBody = '<body onload="start()">\n'
htmlScript = '<script>\n'
htmlScriptEnd = '</script>\n'

htmlFooter= '</body>\n</html>'
MAX_CSSCHUNKS = 5;
MAX_XMLCHUNKS=5;


function rint(upto){return Math.floor(Math.random()*upto)}
function ra(a){return a[rint(a.length)];}


function generateTestCase(){

var SCRIPT = htmlHeader
SCRIPT += htmlStyleStart 
SCRIPT += htmlStyleEnd
SCRIPT += htmlScript
SCRIPT += FunctionBase64Decode()
SCRIPT += generateCssBase64(MAX_CSSCHUNKS)
SCRIPT += generateHTMLBase64(MAX_XMLCHUNKS)
SCRIPT += 'function start(){\n'

var FLAG = rint(2);
for(var iter = 0;iter < 2;iter++){
if(FLAG){
SCRIPT += ' try{execHtml()}catch(e){}\n'
FLAG = 0;
}else{
SCRIPT += ' try{execCss()}catch(e){}\n'
FLAG = 1;
}
}

SCRIPT += ' setTimeout(function(){try{document.body.offsetHeight;document.body.innerHTML="";window.location.href=window.location.href}catch(e){window.location.href=window.location.href}},50);\n'
SCRIPT += '}\n'
SCRIPT += htmlScriptEnd
SCRIPT += htmlBody
SCRIPT += htmlFooter

return SCRIPT

}

function generateCssBase64(iterations){

cssString ='\nfunction execCss(){\n'
		+'s=document.getElementById("s");\n'

switch(rint(5)){
case 0:
for(var i=0;i<iterations;i++)
	cssString += 's.textContent += decode_base64("'+randomCss()+'");' + '\n'
break;

case 1:

for(var i=0;i<iterations;i++)
	cssString += 's.textContent += decode_base64("'+ra(cmcssdb)+'");' + '\n'
break;

case 2:

for(var i=0;i<iterations;i++)
	cssString += 's.textContent += decode_base64("'+ra(cssdb)+'");' + '\n'
break;

case 3:
case 4:
for(var i=0;i<iterations;i++)
	cssString += 's.textContent += decode_base64("'+randomCss()+'");' + '\n'
break;
}


return cssString + '}\n'
}


function generateHTMLBase64(iterations){

htmlString ='\nfunction execHtml(){\n'

switch(rint(5)){
case 0:
for(var i=0;i<iterations;i++)
	htmlString += 'document.body.innerHTML += decode_base64("'+randomXml()+'");' + '\n'
break;

case 1:

for(var i=0;i<iterations;i++)
	htmlString += 'document.body.innerHTML += decode_base64("'+ra(cmxmldb)+'");' + '\n'
break;

case 2:

for(var i=0;i<iterations;i++)
	htmlString += 'document.body.innerHTML += decode_base64("'+ra(xmldb)+'");' + '\n'
break;

case 3:
case 4:
for(var i=0;i<iterations;i++)
	htmlString += 'document.body.innerHTML += decode_base64("'+randomXml()+'");' + '\n'
break;
}


return htmlString + '}\n'
}


function randomCss(){
var cssB64String;

switch(rint(8)){
case 0:
	cssB64String = ra(cssdb);
	break;
case 1:
	cssB64String = ra(cmcssdb);
	break;
case 2:
	cssB64String = ra(cssdb);
	break;
case 3:
	cssB64String = ra(cmcssdb);
	break;
case 4:
	cssB64String = ra(cssdb);
	break;
case 5:
	cssB64String = ra(cmcssdb);
	break;
case 6:
	cssB64String = ra(cssdb);
	break;
case 7:
	cssB64String = ra(cmcssdb);
	break;
case 8:
	cssB64String = ra(cssdb);
	break;
}

return cssB64String;
}


function randomXml(){

var xmlB64String;

switch(rint(8)){
case 0:
	xmlB64String = ra(xmldb);
	break;
case 1:
	xmlB64String = ra(cmxmldb);
	break;
case 2:
	xmlB64String = ra(xmldb);
	break;
case 3:
	xmlB64String = ra(cmxmldb);
	break;
case 4:
	xmlB64String = ra(xmldb);
	break;
case 5:
	xmlB64String = ra(cmxmldb);
	break;
case 6:
	xmlB64String = ra(xmldb);
	break;
case 7:
	xmlB64String = ra(cmxmldb);
	break;
case 8:
	xmlB64String = ra(xmldb);
	break;
}

return xmlB64String;

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

module.exports={
        init:function(){
                //
                //These inits are for config.reBuildClientFile() and NodeFuzz.html
                //
                config.filetype='html'
                config.type='text/html'
                config.tagtype='html'
                config.clientFile=config.reBuildClientFile()
                console.log('You could have some inits in DemoCanvasModule.js and it would be executed now.')
        },
        fuzz: function(){
                return generateTestCase()
        }
}




module.exports.generateTestCase = generateTestCase;
