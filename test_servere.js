http=require('http')
fs =require('fs')
var ID=0;
function init_server(){
	http.createServer(function(req,res){
		if(req.url === '/fuzz'){
			clearInterval(ID);
			console.log('++++++++++++++++\n')
			console.log(CLASSNAME)
			res.writeHead(200,{'Content-Type':'text/html'})
			res.write(CLASSNAME)
			res.end()
		}
		else{
			ret = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
			console.log('+++++++++++++++++\n')
			console.log(ret)
			res.writeHead(200,{'Content-Type':'text/html'})
			res.write(ret)
			res.end()
		}
	//	console.warn(ID);
	//	console.warn('test')
	}).listen(process.argv[2])
}	
	
function init(){
f=fs.readFileSync('lock_ptr.html')
CLASSNAME = f;
f1=fs.readFileSync('applet.html')
RESPONSE=f1;
console.log(f1)
init_server()
}

init()
