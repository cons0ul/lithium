var http = require('http')
var events = require('./Helpers/events.js').events;
var html = require('./Helpers/lib.js').HTML;
var css = require('./Helpers/CSS.js').CSS;
var createDom = require('./Helpers/createDom.js');
var genSensibleCss = require('./cssgen.js').genSensibleCss;
var spawn = require('child_process').spawn;

function rint(upto){return Math.floor(Math.random()*upto);}
function ra(a){return a[rint(a.length)];}

methods = [ 'write','writeln']

function generateTestCase(){

	var a=[];
	for(i=0;i<5;i++){a.push(ra(HTML));}
	SCRIPT = '<!doctype html>\n<head>\n<style>\n'
			+ genSensibleCss(5)
	
	SCRIPT = SCRIPT.replace(/(.*)<body.*/,"$1");
	
	SCRIPT +=		+ '\n'
			+'</style>\n'
			+'<script>\n'
			+'function handler(){\n'
			+' try{document.body.innerHTML="<'+ra(html)+'>"}catch(e){}\n'
			+' try{document.'+ra(methods)+'("")}catch(e){}\n'
			+' try{document.open()}catch(e){}\n'
			+ createDom.createRandomDom(4);
	SCRIPT += '\n'
			+'}\n\n'
			
			+'function start(){\n'
			+'var e="'+ra(events)+'";\n'
			+'try{test=document.getElementById("test1");\n'
			+'if(test[e] != undefined){\n'
			+' test[e]=handler;\n}'
			+'else{\n'
			+'try{document.addEventListener(e,handler,false);}catch(e){}\n}\n'
			+'try{test.innerText="AAAAAAAAAA";}catch(e){}\n'
			+'try{test.parentNode.removeChild(test);}catch(e){}\n}catch(e){}\n'
			+'window.location.href=window.location.href;\n'
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
