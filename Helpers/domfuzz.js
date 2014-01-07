var xmldb = require('./xmldb.js')
var cssdb = require('./cssdb.js')



function rint(upto){return Math.floor(Math.random()*upto)}
function ra(a){return a[rint(a.length)]}


function generateFuzzScript(){

	var SCRIPT ='\nfunction testCss(){\n'
	SCRIPT += 'try{window.getComputedStyle(document.childNodes[5],null);}catch(e){}\n'
	SCRIPT += 'try{test = document.childNodes[2];}catch(e){}\n'
	SCRIPT += 'try{test.parentNode.removeChild(test);}catch(e){}\n'
	SCRIPT += 'try{window.getComputedStyle(document.childNodes[4],null);}catch(e){}\n'
	SCRIPT += 'try{document.body.innerHTML="";}catch(e){}\n';
	SCRIPT += 'try{document.body.innerHTML =atob("'+ra(xmldb.xmldb)+'");}catch(e){}\n'

	for(i=0;i<5;i++)
	SCRIPT += 'try{document.body.innerHTML += atob("'+ra(xmldb.xmldb)+'");}catch(e){}\n'

	SCRIPT += 'try{var style = document.getElementById("s");\n'
	SCRIPT += 'style.textContent = atob("'+ra(cssdb.cssdb)+'");\n'
	for(i=0;i<5;i++)
	SCRIPT += 'style.textContent += atob("'+ra(cssdb.cssdb)+'");\n'
	SCRIPT += '}catch(e){}\n'

	SCRIPT += 'try{window.getComputedStyle(document.childNodes[5],null);}catch(e){}\n'
	SCRIPT += '}\n'
	SCRIPT += 'window.onload=testCss;\n';

	return SCRIPT 
}


//console.log(generateFuzzScript())


module.exports.generateFuzzScript = generateFuzzScript
