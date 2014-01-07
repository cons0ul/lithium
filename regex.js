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
    SCRIPT += 'var db = openDatabase("test", "1.0", "AAAA", 1024);\n'

    SCRIPT += 'db.transaction(function(h) {\n'
    SCRIPT += ' h.executeSql(\'CREATE TABLE IF NOT EXISTS tableAAAA (text)\');'
    SCRIPT += ' h.executeSql(\'INSERT INTO tableAAAA VALUES ("aaaa")\');\n'
    SCRIPT += '});\n'
    SCRIPT += 'db.transaction(function(h) {\n'
    SCRIPT += 'h.executeSql(\'SELECT * from tableAAAA WHERE text REGEXP "('+generateRegex()+')"\');\n'
    SCRIPT += "});\n"
    SCRIPT += 'location.reload()\n'
    SCRIPT += "</script>\n"
    return SCRIPT 
}


