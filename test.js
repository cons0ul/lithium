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

    elem0 = 'div'
    elem1 = lib.ra(lib.HTML);
    elem2 = lib.ra(lib.HTML);
    elem3 = lib.ra(lib.HTML);

    retString = "<!DOCTYPE html><head>\n";
    css = generateCss();
    retString += '<style>'+'#test0{'+generateCss()+'}\n'
    retString += '.test1{'+generateCss()+'}\n'
    retString += '.test2{'+generateCss()+'}\n'
    retString += '.test3{'+generateCss()+'}\n'
    retString +="</style>\n";
    retString +="</head>\n";
    retString += "<body style='"+generateCss()+"'>\n";
    retString += "<" + elem0 + " class='test0 test1 test2 test3'   style='"+ generateCss()+"'>\n";
    retString += "<" + elem1 + " class='test1 test2 test3' style='" +generateCss()+"'>\n";
    retString += "<" + elem2 + " class='test2 test3' style='" +generateCss()+"'>\n";
    retString += "<" + elem3 + " class='test3' style='" +generateCss()+"'>\n";
    retString += "</" + elem3 +">\n"
    retString += "</" +elem2 + ">\n"
    retString += "</" +elem1 + ">\n"
    retString += "</" +elem0 + ">\n"
    retString += "<script>\n"
    SCRIPT = "try{test0=document.getElementById('test0');test0.parentNode.removeChild();}catch(e){}\n"
    SCRIPT += "try{document.body.offsetHeight;}catch(e){}\n"
    SCRIPT += "try{document.documentElement.offsetTop;}catch(e){}\n"
    SCRIPT += "try{var a = document.createElement('"+lib.ra(lib.HTML)+"');\n"
    SCRIPT += "a.setAttribute('id','test2');"
    SCRIPT += "b=document.getElementById('test2');\n"
    SCRIPT += "b.parentNode.replaceChild(a,b);\n}catch(e){}\n"
    SCRIPT += "try{var a = document.createElement('"+lib.ra(lib.HTML)+"');\n"
    SCRIPT += "b=document.getElementById('test2');\n"
    SCRIPT += "b.parentNode.insertBefore(a,b);}catch(e){}\n"
    SCRIPT += "try{document.body.removeChild('test0');}catch(e){}\n"
    SCRIPT += "try{document.body.offsetHeight;}catch(e){}\n"
    SCRIPT += "try{document.documentElement.offsetTop;}catch(e){}\n"
    SCRIPT += "window.location.href=window.location.href;"
    retString += SCRIPT;


    retString += "</script>\n"
    retString +="</body></html>"
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++');
    console.log(retString);
    return retString;
}


generateTestCase();
