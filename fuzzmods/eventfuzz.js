var http = require('http')
var events = require('./Helpers/events.js').events;
var html = require('./Helpers/lib.js').HTML;
var css = require('./Helpers/CSS.js').CSS;
var createDom = require('./Helpers/createDom.js');
var genSensibleCss = require('./cssgen.js').genSensibleCss;
var spawn = require('child_process').spawn;
var genSensibleXml= require('./xmlgen.js').genSensibleXml
var dom = require('./Helpers/createDom.js').createRandomDom;
function rint(upto){return Math.floor(Math.random()*upto);}
function ra(a){return a[rint(a.length)];}

methods = [ 'write','writeln']

function generateTestCase(){

	var a=[];
	for(i=0;i<5;i++){a.push(ra(HTML));}
	SCRIPT = '<!doctype html>\n<head>\n<style id="s">\n'
	
	SCRIPT = SCRIPT.replace(/(.*)<body.*/,"$1");
	
	SCRIPT +=		+ '\n'
			+'</style>\n'
			+'<script>\n'
			+ FunctionBase64Decode()
			+ FunctionExecCss()
			+ FunctionExecXml()
			+'function handler(){\n'
			+ dom(8)
			+' try{document.body.innerHTML="<'+ra(html)+'>"}catch(e){}\n'
			+' try{document.'+ra(methods)+'("")}catch(e){}\n'
			+' try{document.open()}catch(e){}\n'
			+ createDom.createRandomDom(4);
	SCRIPT += '\n'
			+'}\n\n'
			
			+'function start(){\n'
			+ 'execCss()\n'
			+ 'execXml()\n'
			+'var e="'+ra(events)+'";\n'
			+'try{test=document.getElementById("test1");\n'
			+'if(test[e] != undefined){\n'
			+' test[e]=handler;\n}'
			+'else{\n'
			+'try{document.addEventListener(e,handler,false);}catch(e){}\n}\n'
			+'window.scroll(1500,1500);\n'
			+'try{test.innerText="AAAAAAAAAA";}catch(e){}\n'
			+'try{test.parentNode.removeChild(test);}catch(e){}\n}catch(e){}\n'
			+'setTimeout(function(){window.location.href=window.location.href},100);\n'
			+'}\n\n'
			+'</script>\n'
			+'</head>\n<body onload="start()">\n'
			+'<'+a[0]+' id="test1" '+ra(events)+'="handler();" >\n'
			+'<'+a[1]+' id="test2" >\n'
			+'<'+a[2]+' id="test3" >\n'
			+'<'+a[3]+' id="test4" >\n'
			+'<'+a[4]+' id="test5" >\n'
			+'</'+a[4]+'>\n'
			+'</'+a[3]+'>\n'
			+'</'+a[2]+'>\n'
			+'</'+a[1]+'>\n'
			+'</'+a[0]+'>\n'
			+'</body>\n</html>'
			
			return SCRIPT;
			
}

MAX_CSSCHUNKS = 5
MAX_XMLCHUNKS = 5

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

var ID=0;
function init_server(){
	http.createServer(function(req,res){
		clearInterval(ID);
		ret = generateTestCase();
		console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
		console.log(ret)
		res.writeHead(200,{'Content-Type':'text/html'})
		res.write(ret)
		res.end()
		ID=setInterval(timer,10000);
	}).listen(process.argv[2]);
}

init_server();


function timer(){

spawn('taskkill',[ '/IM' ,'iexplore.exe' ,'/f'])
console.warn('[*] iexplore.exe killed by server');
}
