cmxmldb = require('./Helpers/cmxmldb.js').cmxmldb
xmldb = require('./Helpers/xmldb.js')xmldb
//decode=require('base64').decode;

function ra(a){return a[rint(a.length)]}
function rint(upto){return Math.floor(Math.random()*upto);}

function genSensibleHtml(_iter){
var ret =''
for(var i=0;i<_iter;i++)
{
var s='';
switch(rint(2)){
case 0:
s= new Buffer(ra(cmxmldb),'base64').toString();
break;

case 1:
s = new Buffer(ra(xmldb),'base64').toString();
break;
}

r="$1 id='test"+i+"' $2"
d=s.replace(/(<[a-zA-Z]+)(\s|>)/,r);
ret += 'document.body.innerHTML += decode_base64("'+new Buffer(d).toString('base64')+'");\n'
}
return ret;
}

module.exports.genSensibleHtml = genSensibleHtml;
