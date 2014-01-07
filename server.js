http = require('http')
//generateTestCase = require('./fuzzmods/fuzzbangb64.js').generateTestCase;
//generateTestCase = require('./fuzzmods/senseb64.js').generateTestCase;
//generateTestCase = require('./fuzzmods/modsvg.js').generateTestCase;
//generateTestCase = require('./fuzzmods/csstroll.js').generateTestCase;
//generateTestCase=require('./fuzzmods/sensediv.js').generateTestCase;
//generateTestCase = require('./fuzzmods/uaf.js').generateTestCase;
generateTestCase = require('./fuzzmods/domfuzz.js').generateTestCase;
//generateTestCase = require('./fuzzmods/innerhtml.js').generateTestCase;
//generateTestCase = require('./fuzzmods/modinlinesvg.js').generateTestCase;

spawn = require('child_process').spawn

processName = process.argv[3];
console.log(processName);
var ID=0;

function init_server(){
	http.createServer(function(req,res){
		if(req.url === '/fuzz'){
			clearInterval(ID);
			ret = generateTestCase()
			console.log('++++++++++++++++\n')
			console.log(ret)
			res.writeHead(200,{'Content-Type':'text/html'})
			res.write(ret)
			res.end()
			ID = setInterval(timer,20000);
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


function timer(){
spawn('taskkill',['/IM',processName,'/f'])
console.warn('[*] '+processName + ' killed by server!');
}
//module.exports.initServer = init_server;
//

init_server()
