var cfg = require('./Helpers/cfg.js');
var lib = require('./Helpers/lib.js');
var CODE = require('./Helpers/CODE.js');
var http = require('http'); 

MATHML = ['mfence','free'];



function generate_css(){
	do {
		gAS = cfg.topGenerate("Start")
	}while(gAS == 0)
	return gAS;
}


function generateTestCase(){
    cfg.cfginit('./Helpers/webkitcss.txt',init_server);
}



			function getRandom(n) {
				return Math.floor(Math.random() * n);
			}	


function getRandomHtml(iters) {
				var s2 = new Date();
				function shouldStop() {
					if (new Date() - s2 > 1000 || html.length > 100000) {
						return true;
					}
				}
				var html = '';
				var stack = [];
				for (var i = 0; i < iters; i++) {
					if (shouldStop()) {
						break;
					}
					var n = 18;
					n += Math.floor(stack.length / 5);
					var s = stack.toString();
					if (s.indexOf('xmp') != -1) {
						n += 40;
					}
					if (s.indexOf('noframes') != -1) {
						n += 10;
					}
					if (s.indexOf('noscript') != -1) {
						n += 10;
					}
					if (s.indexOf('frameset') != -1) {
						n += 30;
					}
					var x;
					switch (x = getRandom(n)) {
						case 1:
							html += '<div>';
							stack.push('div');
							break;
						case 2:
							html += '<font family="Times" size="' + getRandom(7) + '" color="blue">';
							stack.push('font');
							break;
						case 3:
							html += '<select><!-- --><option>';
							stack.push('select');
							stack.push('option');
							break;
						case 4:
						//	html += '<iframe src="about:blank">';
						//	stack.push('iframe');
							html += '<img src="http://www.google.com/favicon.ico">';
							break;
						case 5:
							html += '<br>';
							stack.push('br');
							break;
						case 6:
							html += '<xmp>!!!';
							stack.push('xmp');
							break;
						case 7:
							//html += '<frameset rows="*"><frame src="about:blank">';
							//stack.push('frame');
							//stack.push('frameset');
							html += '<nobr>';
							stack.push('nobr');
							break;
						case 8:
							//html += '<noframes>';
							//stack.push('noframes');
							html += '<wbr>';
							break;
						case 9:
							//html += '<noscript>';
							//stack.push('noscript');
							html += '<input>';
							break;
						case 10:
							html += '<div contentEditable="false">';
							stack.push('div');
							break;
						case 11:
							html += '<span contentEditable>';
							stack.push('span');
							break;
						case 12:
							//html += '<script id="' + Math.random() + '" type="javascript">void 0;<\/script>';
							break;
						case 13:
							html += '<style type="text/999css">foo { color: blue }\n';
							stack.push('style');
							break;
						case 14:
							html += '<table><thead><tr><th colspan=2>hello!</th></tr></thead><tbody><tr><td rowspan=2>hmm</td><td>asdf</td></tr><tr><td>last cell';
							stack.push('table');
							stack.push('tbody');
							stack.push('tr');
							stack.push('td');
							break;
						default:
							if (stack.length) {
								html += '</'+ stack.pop() + '>';
							}
							break;
					}
					if (html.length % 2) {
						html += '[' + i + ']';
					}
				}
				html += stack;
				return html;
			}



function init_server(){

      var server = http.createServer(function(req,res){
              ret = generateTestCase1();
              console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
              console.log(ret);
              res.writeHead(200,{'Content-Type':'text/html'});
              res.end(ret,'utf8');
      }).listen(process.argv[2]);


}


function generateTestCase1(){


TEXT_HTML = "<!DOCTYPE html><html>\n<head>\n<style id='s'>\n" //header 
	
 var TEXT_CSS = "*{"+generate_css()+"}"
//TEXT_CSS += "#test1{"+generate_css()+"}"				//css


//TEXT_CSS = '';
TEXT_HTML += TEXT_CSS +"</style>\n"
SCRIPT = "<script>\nfunction start(){\n"
for(i=0;i<4;i++){

//switch(lib.rint(2)){
//case 0:
SCRIPT += "try{document.body.innerHTML += '"+lib.ra(CODE.CODE)+"';}catch(e){}\n"
SCRIPT += "try{document.body.offsetTop;document.body.offsetHeight;}catch(e){}\n"
//break;
//case 1:
//SCRIPT += "try{document.body.innerHTML += '"+getRandomHtml(4)+"';}catch(e){}\n"
//break;
//}

}

SCRIPT += "try{document.body.innerHTML = '';}catch(e){}\n";
SCRIPT += "try{document.body.offsetTop;document.body.offsetHeight;}catch(e){}\n"
for(i=0;i<4;i++){

//switch(lib.rint(2)){
//case 0:
//SCRIPT += "try{document.body.innerHTML += '"+getRandomHtml(4)+"';}catch(e){}\n"
//break;
//case 1:
SCRIPT += "try{document.body.innerHTML += '"+lib.ra(CODE.CODE)+"';}catch(e){}\n"
SCRIPT += "try{document.body.offsetTop;document.body.offsetHeight;}catch(e){}\n"

SCRIPT += "try{t1=document.getElementById('s');document.head.removeChild(t1);}catch(e){}\n"
SCRIPT += "try{document.body.offsetTop;document.body.offsetHeight;}catch(e){}\n"
//break;
//}

}//for	

SCRIPT += "window.location.href=window.location.href\n}\n";
SCRIPT += "</script></head>\n"

var random_html = ''
//switch(lib.rint(2)){
//case 0:
random_html += lib.ra(CODE.CODE);
//break;
//case 1:
//random_html += getRandomHtml(50);
//break;
//}


TEXT_HTML += SCRIPT  +"<body onload='start()'>\n"+random_html+"</body></html>"

return TEXT_HTML

}




generateTestCase();
