var http =require('http')
var net = require('net')

http.createServer(function(req,res){
	
        if(req.url === '/svg'){

        var client = net.connect({port:1337},
                function(){console.log('[*] connected')}
        );

        client.on('data',function(data){
                console.log('+++++++++++++++++++++++++++++++++++++++++++++++++');
                console.log(data.toString('base64'));
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write(data.toString());
                res.end();
        })

        client.on('end',function(){});//console.log('[*] connection ended!')});

        }else if(req.url === '/fuzz'){

         SCRIPT='<!DOCTYPE html><html>'
				+'<script>' 
					+'var i = 0;\n'
					+'function start(){\n'
					+ 'try{document.body.removeChild(i);}catch(e){}\n'
					+ 'i=document.createElement("img");\n'
					+ 'i.src="/jxr'+new Date().getTime() +'";\n'
					+ 'i.width=500;\n'
					+ 'i.height=500;\n'
					+ 'document.body.appendChild(i);\n'
					+ 'setTimeout(function(){window.location.href=window.location.href;},1000)\n'
					+'}\n'
		 	    	+'</script>'
		 	    	+'<body onload="start()">'
		 	    	+'</body>'
		 	    +'</html>'
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(SCRIPT)
        res.end();
        }else if(req.url.search('/jxr') != -1){
		
			var client = net.connect({port:8081},
                function(){console.log('[*] connected')}
        );

        client.on('data',function(data){
                console.log('+++++++++++++++++++++++++++++++++++++++++++++++++');
                console.log(data.toString('base64'));
                res.writeHead(200,{'Content-Type':'image/vnd.ms-photo'})
//		res.writeHead(200,{'Content-Type':'image/jpeg'})	
		res.write(data);
                res.end();
        })

	client.on('error',function(){
		console.log('+++++++++++++++++++++++++++++++++++++++++++++++++');
                var a = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
                res.writeHead(200,{'Content-Type':'image/vnd.ms-photo'})
                res.write(a);
                res.end();
	})

        client.on('end',function(){});//console.log('[*] connection ended!')});
		
		}

}).listen(process.argv[2]);
