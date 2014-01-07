var HTML = require('./Helpers/lib.js').HTML
var http = require('http');
var mut = 'var observer = new MutationObserver(callback);'

observeApiKeys = ['childList','attributes','characterData','childList','subtree','attributeOldValue','characterDataOldValue','attributeFilter']

observeApi = {
"childList":['true','false'],
"attributes":['true','false'],
"characterData":['true','false'],
"childList":['true','false'],
"subtree":['true','false'],
"attributeOldValue":['true','false'],
"characterDataOldValue":['true','false'],
"attributeFilter":['"code"','"codebase"','"classid"','"face"','"fill"','"fillcolor"','"height"','"width"','"type"','"src"','"href"','"datasrc"',
				'"value"','"title"','"offsetWidth"','"style"',
				'"class"','"cols"','"colspan"','"rows"','"role"','"size"','"dir"','"x"','"y"','"cx"','"cy"','"x1"','"y1"','"x2"','"y2"',
			 '"points"','"attributeName"','"begin"','"from"','"dur"','"to"','"repeatCount"','"prompt"','"max"','"maxlength"','"rowspan"',
			 '"rules"','"scrollamount"','"scrolldelay"','"selected"',
			 '"shape"','"wrap"',		 
			 '"H"','"h"','"V"','"v"','"C"','"c"','"S"','"s"','"Q"','"q"','"T"','"t"','"A"','"a"','"Z"','"z"','"d"','"M"','"m"','"L"','"l"',
			 '"accept"','"accept-charset"','"access-key"','"action"','"method"','"align"','"alink"','"alt"','"archive"','"aria-checked"','"aria-level"','"aria-pressed"','"aria-valuemax"',
			 '"aria-valuemin"','"aria-valuenow"','"autocapitalize"','"autocomplete"','"autocorrect"','"autoplay"','"autosave"','"axis"','"behavior"','"background"','"bgcolor"','"bgproperties"',
			 '"border"','"bordercolor"','"cellpadding"','"cellspacing"','"challenge"','"char"','"charoff"','"charset"','"checked"','"cellborder"','"cite"','"clear"','"codetype"','"compact"',
			 '"composite"','"content"','"contenteditable"','"controls"','"data"','"datetime"','"declare"','"defer"','"direction"','"enctype"','"end"','"for"','"frame"','"frameborder"','"headers"',
			 '"hidden"','"hreflang"','"hspace"','"http-equiv"','"incremental"','"ismap"','"keytype"','"label"','"lang"','"leftmargin"','"link"','"longdesc"','"loop"','"loopend"','"loopstart"',
			 '"manifest"','"marginheight"','"marginwidth"','"mayscript"','"media"','"min"','"multiple"','"nohref"','"noresize"','"nosave"','"noshade"','"nowrap"','"object"',
/* events*/	 '"onabort"','"onbeforecopy"','"onbeforecut"','"onbeforepaste"','"onbeforeunload"','"onblur"','"onchange"','"onclick"','"oncontextmenu"','"oncopy"','"oncut"','"ondblclick"','"ondrag"',
			 '"ondragend"','"ondragenter"','"ondragleave"','"ondragover"','"ondragstart"','"ondrop"','"onerror"','"onfocus"','"ongesturechange"','"ongestureend"','"ongesturestart"','"oninput"',
			 '"onkeydown"','"onkeypress"','"onkeyup"','"onload"', // Events section end.
			 '"oversrc"','"placeholder"','"playcount"','"pluginpage"','"pluginspage"','"pluginurl"','"poster"','"rel"','"rev"','"scope"','"scrolling"','"span"','"standby"'
			 ]
}


function generateTestCase(){
tmp_node = ra(HTML);
script = '<!DOCTYPE html>\n'
script += '<html>\n'
script += '<head>\n'
script += '<script>\n'
		+ fuzzmuts()
		+ 'try{target.removeChild(target.firstChild);}catch(e){}\nCollectGarbage();\n'
script += '</script>\n'
script += '</head>\n'
		+ '<body>\n'
		+ '<'+tmp_node +' id="target">\n'
		+ '<'+ra(HTML)+'>\n'
		+ '</'+tmp_node+'>\n'
		+ '</body>\n'
		+ '</html>'
		
	return script;
}

function fuzzmuts(){
	var script = 'var mr;'
    script += mut+'\n';
	script += 'try{observer.observe(target,\n'
				+ genMutsProps() + '\n);}catch(e){}\n'
	script += 'setTimeout(function(){testmr()},20)\n'
	script += funcTestMr();
	script += 'function callback(){}\n'
	return script
}

//console.log(generateTestCase());
var ID;

function init_server(){

var server = http.createServer(function(req,res){
	          clearTimeout(ID);
              ret = generateTestCase();
              console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
              console.log(ret);
              res.writeHead(200,{'Content-Type':'text/html'});
              res.end(ret,'utf8');
	      ID=setTimeout(timer,10000);
      }).listen(process.argv[2]);

}

init_server();

function timer(){
	spawn('taskkill',['/IM','firefox.exe','/f']);
	console.log('firefox.exe killed by server.');		
}

function rint(upto){return Math.floor(Math.random()*upto)}
function ra(a){return a[rint(a.length)];}

function genMutsProps(){

script ='{\n';
for(i=0;i<3;i++){

	var tmpprop = ra(observeApiKeys) 
	if(tmpprop === 'attributeFilter'){
		var tmp = []
		for(i=0;i<11;i++){
			tmp.push(ra(observeApi[tmpprop]))
		}
		script += tmpprop +':'+'['+tmp.toString()+'],\n'
	}
	else{script += tmpprop + ':' + ra(observeApi[tmpprop]) + ',\n'}

}

return script + '}\n'
}


function funcTestMr(){

script = 'function testmr(){\n'
switch(1){
case 0:
	script += 'try{observer.disconnect();}catch(e){}\n'
	break;
case 1:
	script += 'var tmpmr;\n'
	script += 'tmpmr = observer.takeRecords();\n'
	script += 'for(i=0;i<tmpmr.length;i++){console.dir(tmpmr[i]);\n'
	script += 'for(j in tmpmr)try{console.log(tmpmr[j])}catch(e){}\n}\n'
	script += 'window.location.href=window.location.href;\n'
	break;
}

return script + '}\n'
}

