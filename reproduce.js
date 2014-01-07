http = require('http')
fs = require('fs')

var CLASSNAME,RESPONSE;

function init_server(){

http.createServer(function(req,res){
	if(req.url.search(".class")  != -1){
		console.log('[*] class file served!');
		res.writeHead(200,{'Content-Type':'text/html'})
		res.write(CLASSNAME)
		res.end()	
	}else{
		console.log('[*] '+req.url);
		res.writeHead(200,{'Content-Type':'text/html'})
		res.write(RESPONSE)
		res.end()
	}

		}).listen(8080)

}





function init(){
f=fs.readFileSync('test.class')
CLASSNAME = f;
f1=fs.readFileSync('applet.html')
RESPONSE=f1;
console.log(f1)
init_server()
}

init()
