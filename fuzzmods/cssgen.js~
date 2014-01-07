css = require('css');
cmcssdb = require('./Helpers/cmcssdb.js').cmcssdb;
cssdb = require('./Helpers/cssdb.js').cssdb

function ra(a){return a[rint(a.length)];}
function rint(upto){return Math.floor(Math.random()*upto)}


function genSensibleCss(_iter){
var ret='';
for(var i=0;i<_iter;i++)
{
d='#test'+i
var input='';

switch(rint(2)){
case 0:
input = new Buffer(ra(cmcssdb),'base64').toString();
break;
case 1:
input = new Buffer(ra(cssdb),'base64').toString();
break;
}

try{
obj = css.parse(input)
sheet = obj.stylesheet
for(rule in sheet.rules){
	//rule.selectors = ( '#test1' + s for s in rule.selectors)
	
	for( s in sheet.rules[rule].selectors){
		sheet.rules[rule].selectors[s] = d+', ' + sheet.rules[rule].selectors[s];
	}
//	console.log(sheet.rules[rule]);
}
ret += 's.textContent += decode_base64("'+new Buffer((css.stringify(obj))).toString('base64')+'");\n'
}catch(e){ret+='s.textContent += decode_base64("'+new Buffer(d+' {position:fixed;height:1000;width:222px;align:top}\n').toString('base64')+'");\n' }

}//for loop
return ret;
}



function genSensibleCssDiv(_iter){
var ret='';
for(var i=0;i<_iter;i++)
{
d='div'
var input='';

switch(rint(2)){
case 0:
input = new Buffer(ra(cmcssdb),'base64').toString();
break;
case 1:
input = new Buffer(ra(cssdb),'base64').toString();
break;
}

try{
obj = css.parse(input)
sheet = obj.stylesheet
for(rule in sheet.rules){
	//rule.selectors = ( '#test1' + s for s in rule.selectors)
	
	for( s in sheet.rules[rule].selectors){
		sheet.rules[rule].selectors[s] = d+', ' + sheet.rules[rule].selectors[s];
	}
//	console.log(sheet.rules[rule]);
}
ret += 's.textContent += decode_base64("'+new Buffer((css.stringify(obj))).toString('base64')+'");\n'
}catch(e){ret+='s.textContent += decode_base64("'+new Buffer(d+' {position:fixed;height:1000;width:222px;align:top}\n').toString('base64')+'");\n' }

}//for loop
return ret;
}


function generateCss(sel){

	var cssString = sel + '{\n'
	for(i=0;i<20;i++){
		cssString += ra(cssdb)+'\n'
	}
	cssString += '}\n'
	return generateCss();
}

module.exports.genSensibleCssDiv = genSensibleCssDiv;
module.exports.genSensibleCss = genSensibleCss;

//console.log(genSensibleCss(5));
