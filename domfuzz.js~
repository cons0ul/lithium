//var cfg = require('./Helpers/cfg.js');
var lib = require('./Helpers/lib.js');
var CODE = require('./Helpers/CODE.js');
var CSS = require('./Helpers/CSS.js');
var http = require('http'); 
var EVENTS = require('./Helpers/EVENTS.js');
var createDom = require('./Helpers/createDom.js');


MATHML = ['mfence','free'];

/*
function generate_css(){
	do {
		gAS = cfg.topGenerate("Start")
	}while(gAS == 0)
	return gAS;
}





function generateTestCase(){
    cfg.cfginit('./Helpers/webkitcss.txt',init_server);
}
*/


function init_server(){
	 //console.log(CODE.CODE[0])
     var server = http.createServer(function(req,res){
              ret = generateTestCase1();
              console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
              console.log(ret);
              res.writeHead(200,{'Content-Type':'text/html'});
              res.end(ret,'utf8');
      }).listen(process.argv[2]);


}

init_server();


function swapnode_code(){

CODE_STR =''
CODE_STR += "\nfunction swapnode(n1,n2){\n"
CODE_STR += "p1 = n1.parentNode;\n"
CODE_STR += "s1 = n1.nextSibling;\n"
CODE_STR += "p2 = n2.parentNode;\n"
CODE_STR += "s2 = n2.nextSibling;\n"
CODE_STR += "if(p1 == p2){var trollshit_1=1;}else{\n"
CODE_STR += "p2.insertBefore(n1,s2);\n"
CODE_STR += "p1.insertBefore(n2,s1);\n"
CODE_STR += "}\n"
CODE_STR += "}\n"

return CODE_STR

}



function GC_code(){

CODE_STR =''
CODE_STR += "\nfunction GC(){\n"
CODE_STR += "try{window.gc();}catch(e){}\n"
CODE_STR += "try{CollectGarbage();}catch(e){}\n"
CODE_STR += "}\n"

return CODE_STR
}








function createTxtRangeCode(){

    
    STR = "var range;\n"
    STR += "function createTxtRange(){\n"
    STR +=  "try{\n"
	STR += 	"range = document.createRange();\n"
	STR += 	"r1="+lib.rint(4)+"\n"
	STR +=  "startNode=document.all[r1];\n"
	STR +=  "range.setStart(startNode, 0);\n"
	STR +=  "r2="+lib.rint(4)+"\n"
	STR +=  "endNode=document.all[r2];\n"
	STR +=  "range.setEnd(endNode, 0);\n"
	STR += "}catch(e){}\n}\n"

	return STR;
}


function alterRangeCode(){
	STR = "\nfunction alterRange(){\n"
	STR += "try{\n"
	
		STR += "rb="+lib.rint(4)+"\n"//va ristretto alla length del range
		STR += "randElem="+lib.rint(4)+"\n"
		for(i=0;i<4;i++){
		switch(lib.rint(11)){
			case 0:
			STR += "try{range.deleteContents();}catch(e){}\n"
				break;
			case 1:
			STR +=	"try{range.collapse();}catch(e){}\n"
				break;
			case 2:
			STR += "try{var documentFragment = range.extractContents();}catch(e){}\n"
				break;
			case 3:
			STR +=	"try{range.surroundContents(randElem);}catch(e){}\n"
				break;
			case 4:	
			STR +=	"try{range.selectNode(randElem);}catch(e){}\n"
				break;
			case 5:
			STR +=	"try{range.selectNodeContents(randElem);}catch(e){}\n"
				break;
			case 6:
			STR +=	"try{range.insertNode(randElem);}catch(e){}\n"
				break;
			case 7:
			STR += 	"try{range.setStartAfter(randElem);}catch(e){}\n"
				break;
			case 8:
			STR +=	"try{range.setStartBefore(randElem);}catch(e){}\n"
				break;
			case 9:
			STR +=	"try{range.setEndAfter(randElem);}catch(e){}\n"
				break;						
			case 10:
			STR += "try{range.setEndBefore(randElem);}catch(e){}\n"
				break;
		}//switch
		}//for		
												
			STR += "}catch( exception ){}\n}\n"
			return STR;
}



function firemeCode(){

	STR = ""
	STR += "\nfunction fireme(){\n"
	STR += createDom.createRandomDom(8)
	STR += "\n}\n"
	return STR ; 

}


function generateElements_code(__iter){

	var SCRIPT_STR = "\n function generateElements(){\n"
	SCRIPT_STR += "var t0=document.createElement('"+lib.ra(lib.HTML)+"');t0.id='t0';t0.className='t0';document.body.appendChild(t0);\n"
	for(var ijk = 0;ijk<__iter;ijk++){
	SCRIPT_STR += "try{\n"
	SCRIPT_STR += "var t"+(ijk+1)+"=document.createElement('"+lib.ra(lib.HTML)+"');\n"
	SCRIPT_STR += "t"+(ijk+1)+".id='t"+(ijk+1)+"';t"+(ijk+1)+".className='t"+(ijk+1)+"';\n"
	SCRIPT_STR += "t"+ijk+".appendChild(t"+(ijk+1)+");\n"
	SCRIPT_STR +="}catch(e){}\n"
	}
	
	SCRIPT_STR +="}\n"
	
	return SCRIPT_STR



}

function generateTestCase1(){
	console.log('[*] start')


TEXT_HTML = "<!DOCTYPE html><html>\n<head>\n<style id='s'>\n" //header 
	
//TEXT_CSS = "*{"+generate_css()+"}"
//TEXT_CSS += "#test1{"+generate_css()+"}"				//css

TEXT_CSS = "*:nth-child(2){ position:fixed;width:1111px;height:560px;backgroud:red;}\n"

TEXT_HTML += TEXT_CSS +"</style>\n"




tmp_tag = lib.ra(HTML)
//tmp_style = generate_css();
tmp_style='margin:2222px;position:fixed;float:left;';
tmp_html = "<"+tmp_tag +" id='test1' style='"+tmp_style+"' "+lib.ra(EVENTS.EVENTS)+"='fireme();' />"		//tags

switch(lib.rint(2)){
    case 0:
        tmp_code = createDom.getRandomHtml(6);
        break;
    case 1:
        tmp_code = lib.ra(CODE.CODE);
        break;
}

SCRIPT = "<scr" + "ipt>\n"
SCRIPT += generateElements_code();
//SCRIPT += createTxtRangeCode();
//SCRIPT += alterRangeCode();
SCRIPT += firemeCode();
//SCRIPT += swapnode_code();
//SCRIPT += GC_code();

SCRIPT += "\nfunction start(){\n"

SCRIPT += "try{generateElements()}catch(e){}\n"
SCRIPT += createDom.createRandomDom(8);
	
SCRIPT += "try{createTxtRange();}catch(e){}\n"
SCRIPT += "try{alterRange();}catch(e){}\n"
SCRIPT += "try{window.location.href=window.location.href}catch(e){}\n"
SCRIPT += "}\n</scr"+"ipt>\n"
TEXT_HTML += SCRIPT
TEXT_HTML += "</head><body id='test0' onload='setTimeout(function(){start()},100);'><div id='test0'>"
TEXT_HTML += tmp_html
TEXT_HTML += tmp_code
TEXT_HTML += '</div>'									// tags
TEXT_HTML += "</body></html>"										// epilog

return TEXT_HTML;
}

//generateTestCase();
