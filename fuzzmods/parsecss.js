var css = require('css')
var cm = require('./Helpers/cmcssdb.js').cmcssdb

var cssdb=new Array();


for(stream in cm){

var input = new Buffer(cm[stream],'base64').toString('ascii') 
while(true){

var start = input.search('{')
	if(start == -1)break;
var end   = input.search('}')
var ss= input.substring(start+1,end)
var s = ss.split('\n')
for(i in s){
t=s[i].replace(/\s+/g,'')
if(t != ''){console.log(t);cssdb.push(t)}
else{console.log('null')}
}

var input=input.substring(end+1,input.length)
}

}

console.log(cssdb)

