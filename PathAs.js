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

  AS = '<?xml version="1.0" encoding="utf-8"?>\n'
AS+='<!-- ArrowExample.mxml -->\n'
AS+='<s:Application name="ArrowExample"\n'
AS+='        xmlns:fx="http://ns.adobe.com/mxml/2009"\n'
AS+='   xmlns:s="library://ns.adobe.com/flex/spark"\n'
AS+='        xmlns:mx="library://ns.adobe.com/flex/mx">\n'

AS+='    <s:Panel title="Arrow Graphic Example"\n'
AS+='            width="75%" height="75%"\n'
AS+='            horizontalCenter="0" verticalCenter="0">\n'
AS+='        <s:Group left="10" right="10" top="10" bottom="10">\n'
            
AS+='            <s:Graphic x="100" y="0">\n'
AS+='                <!-- Use Use compact syntax with absolute coordinates. -->\n'
AS+='                <s:Path data="'+generatePath()+'"\n>'
AS+='                    <!-- Define the border color of the arrow. -->\n'
AS+='                    <s:stroke>\n'
AS+='                        <s:SolidColorStroke color="0x888888"/>\n'
AS+='                    </s:stroke>\n'
AS+='                   <!-- Define the fill for the arrow. -->\n'
AS+='                    <s:fill>\n'
AS+='                        <s:LinearGradient rotation="90">\n'
 AS+='                           <s:GradientEntry color="0x000000" alpha="0.8"/>\n'
 AS+='                           <s:GradientEntry color="0xFFFFFF" alpha="0.8"/>\n'
 AS+='                       </s:LinearGradient>\n'
 AS+='                   </s:fill>\n'
 AS+='               </s:Path>\n'
 AS+='           </s:Graphic>\n'
 AS+='          <s:Graphic x="200" y="0">\n'
 AS+='              <!-- Use compact syntax with relative coordinates. -->\n'
 AS+='             <s:Path data="'+generatePath()+'">\n'
 AS+='                    <!-- Define the border color of the arrow. -->\n'
 AS+='                   <s:stroke>\n'
 AS+='                       <s:SolidColorStroke color="0x888888"/>\n'
 AS+='                   </s:stroke>\n'
 AS+='                   <!-- Define the fill for the arrow. -->\n'
 AS+='                   <s:fill>\n'
 AS+='                       <s:LinearGradient rotation="90">\n'
 AS+='                       <s:GradientEntry color="0x000000" alpha="0.8"/>\n'
 AS+='                           <s:GradientEntry color="0xFFFFFF" alpha="0.8"/>\n'
 AS+='                       </s:LinearGradient>\n'
 AS+='                   </s:fill>\n'
 AS+='               </s:Path>\n'
 AS+='           </s:Graphic>\n'
 AS+='       </s:Group>\n'
 AS+='   </s:Panel>\n'
AS+='</s:Application>\n'

retString = AS;
		console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n");
		console.log(retString);
        return retString;
}


generateTestCase();
