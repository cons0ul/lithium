var http = require('http');
var fs = require('fs');

var options = {
    hostname : 'localhost',
    port : 2223,
    path : '/',
    method : 'GET'
};


for(i=0; i <1000;i++){
    var text;
    var req = http.request(options,function(res){
        res.on('data',function(chunk){
           console.log(chunk.toString());
            fs.writeFile('./fuzz-'+i.toFixed()+'.html',chunk.toString(),'utf8',function(err){if(err)console.log(err)});
       });
    });
    
   
    req.end();

}
