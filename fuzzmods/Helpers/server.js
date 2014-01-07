http = require('http')



function init_server(port){

	http.createServer(function(req,res){
		ret = generateTestCase()
		console.log('++++++++++++++++\n')
		console.log(ret)
		res.writeHead(200,{'Content-Type':'text/html'})
		res.write(ret)
		res.end()
	}).listen(port)

}

module.exports.initServer = init_server;