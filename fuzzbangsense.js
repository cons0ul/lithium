var genSensibleCss = require('./cssgen.js').genSensibleCss;
var genSensibleXml = require('./xmlgen.js').genSensibleHtml;
var http =require('http')
var spawn = require('child_process').spawn;

htmlHeader = '<!DOCTYPE html>\n<html>\n<head>\n'
htmlStyleStart = '<style id="s">\n'
htmlStyleEnd = '</style>\n'
htmlBody = '<body>\n'
htmlFooter= '</body>\n</html>'
MAX_CSSCHUNKS = 5;
MAX_XMLCHUNKS=5;

function generateTestCase(){

var SCRIPT = htmlHeader
SCRIPT += htmlStyleStart
SCRIPT += genSensibleCss(MAX_CSSCHUNKS)
SCRIPT = SCRIPT.replace('/(.*)<html.*/',"$1");

SCRIPT += htmlStyleEnd
SCRIPT += '<script>window.onload=start;function start(){window.location.href=window.location.href;}</script>\n'
SCRIPT += htmlBody
SCRIPT += genSensibleXml(MAX_XMLCHUNKS)
SCRIPT += htmlFooter
return SCRIPT

}

var ID=0;

function init_server(){
	http.createServer(function(req,res){
		clearInterval(ID);
		ret = generateTestCase()
		console.log('++++++++++++++++++++++++++++++++++++++++++++++')
		console.log(ret)
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(ret)
		res.end()
		ID=setInterval(timer,10000);
		//console.warn(ID);
	}).listen(process.argv[2]);
}

function timer(){
spawn('taskkill' ,['/IM','firefox.exe','/f'])
console.warn('[*] firefox.exe killed by server.');
}

init_server();
