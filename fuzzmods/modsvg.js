cmffsvg = require('./Helpers/cmffsvg.js').cmffsvg;
fs = require('fs');
dom = require('./Helpers/createDom.js').createRandomDom
eval(fs.readFileSync('./fuzzmods/Helpers/stdlib.js')+'')

var MAXSVGCHUNKS = 6;
var SVGSTART = '<svg id="test4"  xmlns="http://www.w3.org/2000/svg">\n'
var SVGEND = '</svg>'
function generateTestCase(){

var SCRIPT = ""

	SCRIPT += "<!DOCTYPE html>\n"
	SCRIPT += "<html>\n"
		+ '<head>\n'
		+ '<style id="s"></style>\n'
		+ '<script>\n'
		+ FunctionBase64Decode()
		+ FunctionExecSvgInBody(MAXSVGCHUNKS)
		+ 'function start(){\n'
		+ ' execSvgInBody()\n'
		+ 'setTimeout(function(){ document.body.innerHTML="AAAAAA"\n'
		+ ' try{CollectGarbage()}catch(e){}\n'
		+ ' window.location.href=window.location.href;\n'
		+ '},50);\n'
		+ '}\n'
		+ 'window.onload = start;\n'
		+ '</script>\n'
		+ '</head>\n'
		+ '<body>\n'
		+ '</body>\n'
		+ '</html>'


	return SCRIPT;
}

module.exports.generateTestCase = generateTestCase;

function generateSvg(){

	var svgString = ''
	svgString += new Buffer(ra(cmffsvg),'base64').toString();
	return svgString;
}


function generateRandomSvg(_iter,b64){

	var svgString = '';

	for(var i=0;i<_iter;i++){

		str = generateSvg()
		tmp=str.replace(/(.*)?<svg[\s\S]*?>(.*)?/,'$1$2')
		tmp1=tmp.replace(/(.*)?<\/svg>(.*)?/,'$1$2')
		svgString += tmp1
	}
	if(b64 == true)
	return new Buffer(SVGSTART + svgString + SVGEND).toString('base64')
	return SVGSTART + svgString + SVGEND;
}

module.exports.generateRandomSvg = generateRandomSvg

function genRaSvgB64(){

	var svgString =''
	str = generateSvg()
	tmp=str.replace(/(.*)?<svg[\s\S]*?>(.*)?/,'$1$2')
	tmp1=tmp.replace(/(.*)?<\/svg>(.*)?/,'$1$2')
	
	return new Buffer(tmp1).toString('base64')
}

module.exports.genRaSvgB64 = genRaSvgB64;

function FunctionExecSvgInBody(_iter){

	var SCRIPT = '\nfunction execSvgInBody(){\n'
	for(i=0;i<_iter;i++)
	SCRIPT += 'document.body.innerHTML+=decode_base64("'+ra(cmffsvg)+'");\n'
	return SCRIPT + '}\n'

}

module.exports.FunctionExecSvgInBody = FunctionExecSvgInBody


function FunctionExecSvgInSvg(_iter){

	var SCRIPT = '\nfunction execSvgInSvg(){\n'
		+ 'var root = document.documentElement;\n'
	for(i=0;i<_iter;i++)
	SCRIPT += 'root.textContent += decode_base64("'+genRaSvgB64()+'");\n'
	return SCRIPT + '}\n'
}

module.exports.FunctionExecSvgInSvg = FunctionExecSvgInSvg;
