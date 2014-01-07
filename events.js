var lib = require('./Helpers/lib.js');
var CODE = require('./Helpers/CODE.js');
var http = require('http');





function init_server(){

        console.log('Start');
          var server = http.createServer(function(req,res){
              ret = generateTestCase1();
              console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
              console.log(ret);
              res.writeHead(200,{'Content-Type':'text/html'});
              res.end(ret,'utf8');
         }).listen(process.argv[2]);

}






init_server();




var HTML = ["a","applet","area","acronym","article","aside","audio","address","abbr","bdo","bdi","big",
            "blockquote","basefont","br","body","button","canvas","caption","cite","code","center",
            "col",
		"colgroup","command","circle","dd","div","datalist","dir","dfn","dl","dt","del",
            "details","em","embed",
            "ellipse","fieldset","font","form","frame","frameset","figcaption","figure","footer","g",
            "hr","h1","hgroup","head","header","html","i","ins","img","image","iframe","input","isindex"
            ,"keygen","kbd","label","legend","li",
            "link","line","linearGradient","layer","map","menu","meta","meter","mark","marquee","nav",
            "object","ol","option","optgroup","output","p","plaintext","param","progress","pre",
            "polygon","polyline","path","q","rect","rp","rt","ruby","s","samp","script","small",
            "section","select","span","strike","strong","style","sub","sup","summary","source",
            "svg","table",
            "tbody","tfoot","textarea","td","tr","th",
            "thead","title","time","track","tt","text","tspan","tref","textPath","t:VIDEO","t:MEDIA",
            "t:IMG","t:AUDIO","animateTransform","u","ul","var","video","vml","v:rect","v:roundrect",
            "v:line","v:polyline","v:oval","v:image","v:curve","v:group","v:shapetype","v:arc","v:stroke",
            "v:fill","v:textbox","xmp","xml","wbr"];
            
var ATTRIBUTES = ["code","codebase","classid","face","fill","fillcolor","height","width","type","src",
				"href","datasrc","value","title","offsetWidth",
             "style","class","cols","colspan","rows","role","size","dir","x","y","cx","cy","x1",
             "y1","x2","y2","points","attributeName","begin","from","dur","to","repeatCount","prompt",
             "max","maxlength","rowspan","rules","scrollamount","scrolldelay","selected","shape","wrap",
             "H","h","V","v","C","c","S","s","Q","q","T","t","A","a","Z","z","d","M","m","L","l",
             "accept","accept-charset","access-key","action","method","align","alink","alt","archive",
             "aria-checked","aria-level","aria-pressed","aria-valuemax",
             "aria-valuemin","aria-valuenow","autocapitalize","autocomplete","autocorrect","autoplay","autosave","axis","behavior","background","bgcolor","bgproperties",
             "border","bordercolor","cellpadding","cellspacing","challenge","char","charoff","charset",
             "checked","cellborder","cite","clear","codetype","compact",
             "composite","content","contenteditable","controls","data","datetime","declare","defer",
             "direction","enctype","end","for","frame","frameborder","headers",
             "hidden","hreflang","hspace","http-equiv","incremental","ismap","keytype","label","lang","leftmargin","link","longdesc","loop","loopend","loopstart",
             "manifest","marginheight","marginwidth","mayscript","media","min","multiple","nohref",
             "noresize","nosave","noshade","nowrap","object","oversrc","placeholder","playcount",
             "pluginpage","pluginspage","pluginurl","poster","rel","rev","scope","scrolling","span",
             "standby"]

var EVENTS =[ "onabort","onbeforecopy","onbeforecut","onbeforepaste","onbeforeunload","onblur",
		"onchange","onclick","oncontextmenu","oncopy","oncut","ondblclick","ondrag",
             "ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","onerror",
             "onfocus","ongesturechange","ongestureend","ongesturestart","oninput",
             "onkeydown","onkeypress","onkeyup","onload","onresize"
             ];

             







function generateTestCase1(){
    retStr = "<!DOCTYPE html>\n"
    retStr += "<html>\n"
    retStr += "<head>\n"
    retStr += "</head>\n"
    retStr += "<body onload='location.reload();'>\n"

    for(i=0;i<16;i++){
        aTag = lib.ra(HTML)
        retStr += "<" + aTag +" id='t"+i.toFixed()+"' " + lib.ra(EVENTS) +"=\"function(){t=document.getElementById('t"+i.toFixed()+"');t.parent.removeChild(t);}\" >AAAAAAAAAAAAAAAAAAAAA</"+aTag+">\n" 
    }
    retStr += "</body>\n"
    retStr += "</html>\n"

    return retStr;
}

