code = require('./Helpers/CODE.js')
http = require('http')



function init_server(){


	http.createServer(function(req,res){

		ret = generateTestCase();
		console.log(ret)
		res.writeHead(200,{'Content-Type':'text/html'})
		res.write(ret)
		res.end()		
			}).listen(8080)

}


function ra(a){return a[rint(a.length)];}
function rint(upto){return Math.floor(Math.random()*upto)}

init_server();

function generateTestCase(){

SCRIPT = '<!DOCTYPE html>\n'
	+'<html>\n'
	+'<head>\n'
	+'<script>\n'
	+'function boom(){\n'
	+"try{document.body.innerHTML = '"+ra(code.CODE)+"';}catch(e){}\n"
	+'try{document.body.innerHTML = "";}catch(e){}\n'
	


SCRIPT += "try { var m = document.createElementNS('http://www.w3.org/1998/Math/MathML','free');document.body.appendChild(m);}catch(e){}\n"

SCRIPT += "}\n function start(){boom();boom();window.location.href=window.location.href;}\n"

SCRIPT += '</script>\n</head><body onload="start()"></body></html>'

return SCRIPT
}
