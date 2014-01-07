http = require('http');
cfg = require('./Helpers/cfg.js');
lib = require('./Helpers/lib.js');

function generateTestCase(){
cfg.cfginit('./Helpers/regex.txt',init_server);
}

function init_server(){
    console.log('Start');    
  var server = http.createServer(function(req,res){
              ret = generateTestCase1();
              console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
              console.log(ret);
              res.writeHead(200,{'Content-Type':'text/html'});
              res.end(ret,'utf8');
      }).listen(process.argv[2]);

    }




function generateRegex(){

    do{
        gAS=cfg.topGenerate('Start');
    }while(gAS == 0);

    return gAS;
}

generateTestCase();

function  generateTestCase1(){
    retStr = "<!DOCTYPE html>\n"
    retStr += "<html>\n"
    retStr += "<body>\n"
    SCRIPT = '<script>\n'
    SCRIPT += 'try{var a = new RegExp("'+generateRegex()+'");}catch(e){}\n';
    SCRIPT += 'try{"".match("'+generateRegex()+'");}catch(e){}\n';
  //  SCRIPT += 'try{var b = /'+generateRegex()+'/}catch(e){};\n';
    SCRIPT += 'location.reload()\n'
    SCRIPT += "</script>\n"
    return SCRIPT 
}


