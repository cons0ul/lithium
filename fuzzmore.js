http = require('http');
cfg = require('./Helpers/cfg.js');
lib = require('./Helpers/lib.js');

function generateTestCase(){
cfg.cfginit('./Helpers/webkitcss.txt',init_server);
}

function init_server(){

  var server = http.createServer(function(req,res){
    ret = init_fuzz();
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(ret,'utf8');
  }).listen(process.argv[2]);


}



function generateCss(){

    do{
        gAS=cfg.topGenerate('Start');
    }while(gAS == 0);

    return gAS;
}


function init_fuzz(){

    elem = new Array();

    for(i=0;i<16;i++){
    elem.push(lib.ra(lib.HTML));
    }

    retString = "<!DOCTYPE html><head>\n";
    css = generateCss();
    retString += '<style>'+'.test0{'+generateCss()+'}\n'
    retString += '.test1{'+generateCss()+'}\n'
    retString += '.test2{'+generateCss()+'}\n'
    retString += '.test3{'+generateCss()+'}\n'
    retString +="</style>\n";
    retString +="</head>\n";
    retString += "<body >\n";
    retString += "<script>\n"
    SCRIPT = "function start(){\n"
    SCRIPT = "var e0 = document.createElement('"+elem[0]+"');\n"
    SCRIPT += "var e1 = document.createElement('"+elem[1]+"');\n"
    SCRIPT += "var e2 = document.createElement('"+elem[2]+"');\n"
    SCRIPT += "var e3 = document.createElement('"+elem[3]+"');\n"
    SCRIPT += "e0.setAttribute('class','test0 test1');\n";
    SCRIPT += "e1.setAttribute('class','test2 test3');\n";
    SCRIPT += "e2.setAttribute('class','test2');\n";
    SCRIPT += "e3.setAttribute('class','test3');\n";
    SCRIPT += "var e4 = document.createElement('"+elem[4]+"');\n"
    SCRIPT += "e0.appendChild(e4);\n"
    SCRIPT += "var e5 = document.createElement('"+elem[5]+"');\n"
    SCRIPT += "e0.appendChild(e5);\n"
    SCRIPT += "var e6 = document.createElement('"+elem[6]+"');\n"
    SCRIPT += "e1.appendChild(e6);\n"
    SCRIPT += "document.documentElement.appendChild(e0);\n"
    SCRIPT += "document.documentElement.appendChild(e1);\n"
    SCRIPT += "var e7=document.createElement('"+elem[7]+"');\n"
    SCRIPT += "document.documentElement.appendChild(e2);\n"
    SCRIPT += "document.documentElement.appendChild(e3);\n"
    SCRIPT += "e1.appendChild(e7);\n"
    SCRIPT += "document.documentElement.offsetHeight;\n"
    SCRIPT += "var e8 = document.createElement('"+elem[8]+"');\n"
    SCRIPT += "var e9 = document.createElement('"+elem[9]+"');\n"
    SCRIPT += "e2.appendChild(e8);e2.appendChild(e9);\n"
    SCRIPT += "var e10 = document.createElement('"+elem[10]+"');\n"
    SCRIPT += "var e11 = document.createElement('"+elem[11]+"');\n"
    SCRIPT += "e3.appendChild(e10);e3.appendChild(e11);\n";
    SCRIPT += "e0.appendChild(e1);e1.appendChild(e2);e2.appendChild(e3);\n"
    SCRIPT += "var e12 = document.createElement('"+elem[12]+"');\n"
    SCRIPT += "e12.setAttribute('class','test3');\n"
    SCRIPT += "var e13 = document.createElement('"+elem[13]+"');\n"
    SCRIPT += "e13.setAttribute('class','test2');\n"
    SCRIPT += "var e14 = document.createElement('"+elem[14]+"');\n"
    SCRIPT += "e6.appendChild(e12);e7.appendChild(e14);\n"
    SCRIPT += "document.documentElement.appendChild(e13);\n"
    SCRIPT += "var e16 = e12.appendChild(document.createElement('"+elem[15]+"'));\n"
    SCRIPT += "var e15 = document.createElement('"+elem[15]+"');\n";
    SCRIPT += "e14.appendChild(e15);\n";
    SCRIPT += "e15.parentNode.removeChild(e15);e16.parentNode.removeChild(e16);\n" 
    SCRIPT += "document.documentElement.offsetHeight;\n"
    SCRIPT += "document.documentElement.appendChild(e15);\n"
    SCRIPT += "document.documentElement.offsetTop;\n"
    SCRIPT += "window.location.href=window.location.href;\n"
    retString += SCRIPT;


    retString += "</script>\n"
    retString +="</body></html>"
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++');
    console.log(retString);
    return retString;
}


generateTestCase();
