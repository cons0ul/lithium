http = require('http');
cfg = require('./Helpers/cfg.js');
lib = require('./Helpers/lib.js');
color = require('./Helpers/color.js');

function generateTestCase(){
cfg.cfginit('./Helpers/testcfg.txt',init_server);
}

function init_server(){

  var server = http.createServer(function(req,res){
    ret = init_fuzz();
    res.writeHead(200,{'Content-Type':'image/svg+xml'});
    res.end(ret,'utf8');
  }).listen(process.argv[2]);


}



function generatePath(){

    do{
        gAS=cfg.topGenerate('Start');
    }while(gAS == 0);

    return gAS;
}


function init_fuzz(){

  SVGSTART = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w0.org/1999/xlink">'
		DEFS = '<defs id="bar">'
		DEFS_END = '</defs>'
		G = "<g id='bar'>"
		G_END = "</g>"
		USE = "<use id='bar'>"
		USE_END = "</use>"
		SYMBOL = "<symbol id='bar'>"
		SYMBOL_END = "</symbol>"
		PATTERN = "<pattern id='bar'>"
		PATTERN_END = "</pattern>"

		
		USE_0 = '<use xlink:href="#bar"/>'
		USE_1 = '<use xlink:href="#foo"/>'
		POLYLINE = '<polyline class="Connect"   points="400,300 400,200"/>'
		PATH = '<path id="foo" d=';
		SVGEND="</svg>"

		
	
		var retString = SVGSTART;
	//	color= lib.ra(color.COLOR_KEYWORD); 

		switch(lib.rint(4)){
		case 0:
			retString += DEFS
			retString += POLYLINE
			retString += PATH
			retString += "'"+generatePath()+"' style='fill:"+color+";'/>"
			retString += DEFS_END
			break;
		case 1:
			retString += USE
			retString += POLYLINE
                        retString += PATH
                        retString += "'"+generatePath()+"' style='fill:"+color+";'/>"
			retString += USE_END
			break;
		case 2:
			retString += G
			retString += POLYLINE
                        retString += PATH
                        retString += "'"+generatePath()+"' style='fill:"+color+";'/>"
			retString += G_END
			break;
		case 3:
			retString += SYMBOL
			retString += POLYLINE
                        retString += PATH
                        retString += "'"+generatePath()+"' style='fill:"+color+";'/>"
			retString += SYMBOL_END
			break;
		case 4:
			retString += PATTERN
			retString += POLYLINE
                        retString += PATH
                        retString += "'"+generatePath()+"' style='fill:"+color+";'/>"
			retString += PATTERN_END
			break;
		default:
			retString += "<free>"
			retString += POLYLINE
                        retString += PATH
                        retString += "'"+generatePath()+"' style='fill:"+color+";'/>"
			retString += "</free>"
			break;
		}
		
		retString += USE_0
		retString += USE_1
        retString += "<script>location.reload()</script>\n"
		retString += SVGEND

		console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n");
		console.log(retString);
        return retString;
}


generateTestCase();
