
HTML=["a","abbr" ,"access" ,"acronym", "action", "addEventListener", "address", "area",
	 "article", "aside", "audio" ,"b", "base", "basefont", "bdo", "big", "blockcode", 
	 "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code",
	  "col", "colgroup", "command", "datalist", "dd", "del", "delete", "details" ,"dfn" ,
	  "di" ,"dir", "dispatch", "dispatchEvent", "div","dl","dt","em","embed","fieldset",
	  "figcaption","figure","font","footer","form","frame","frameset","group","h","h1","h2",
	  "h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins",
	  "insert","isindex","kbd","keygen","l","label","legend","li","link","listener","listing",
	  "load","map","mark","menu","message","meta","meter","model","nav","noframes","noscript",
	  "object","ol","optgroup","option","output","p","param","plaintext","pre","preventDefault",
	  "progress","q","range","rb","rbc","rebuild","recalculate","refresh","removeEventListener",
	  "repeat","reset","revalidate","rp","rt","rtc","ruby","s","samp","script","secret","section",
	  "select","select1","send","separator","setfocus","setindex","setvalue","small","source","span",
	  "standby","stopPropagation","strike","strong","style","sub","submit","summary","sup","switch",
	  "table","tbody","td","textarea","tfoot","th","thead","time","title","tr", "track", "trigger", "tt",
	   "u", "ul", "upload", "var", "video", "wbr", "xmp", "marquee", "blink", "scroll","input"]

input=[ 'input type=button', 'input type=checkbox', 'input type=email', 'input type=file', 'input type=hidden',
 'input type=image', 'input type=number', 'input type=password', 'input type=radio', 'input type=range',
 'input type=reset', 'input type=search', 'input type=submit', 'input type=tel', 'input type=text', 'input type=url']

module.exports.HTML = HTML;
EVENT_METHODS = ['blur','focus','postMessage']

module.exports.EVENT_METHODS = EVENT_METHODS


SVG_ATTRIB = [ "id"	, "xml:base" , "xml:space", "xml:lang", "color"
		,"fill-rule"
		,"stroke"
		,"stroke-dasharray"
		,"stroke-dashoffset"
		,"stroke-linecap"
		,"stroke-linejoin"
		,"stroke-miterlimit"
		,"stroke-width"
		, "color-interpolation"
		, "color-rendering" 
		, "fill"
        , "requiredFeatures" 
		, "requiredExtensions" 
		, "systemLanguage"
        , "opacity" 
		, "stroke-opacity" 
		, "fill-opacity"
        , "display"
		, "image-rendering"
		, "pointer-events"
		, "shape-rendering"
		, "text-rendering"
		, "visibility"
        ,"onunload"
			,"onabort"
			,"onerror"
			,"onresize"
			,"onscroll"
			,"onzoom"
            , "onfocusin"
			,"onfocusout"
			,"onactivate"
			,"onclick" 
			,"onmousedown"
			,"onmouseup"
			,"onmouseover"
			,"onmousemove"
			,"onmouseout"
			,"onload"
            ,"kela" 
            , "onbegin"
			, "onend"
			, "onrepeat"
			, "onload"
            , "x"
		,	"y"
		,	"dx"
		,	"dy"
		,	"rotate"
		,	"textLength"
		, 	"transform"
		, "writing-mode"
        , "lengthAdjust"
        , "startOffset" 
		, "method" 
		, "spacing"
		, "xlink:href" 
		, "glyphRef"
        , "alignment-baseline"
		,"baseline-shift"
		,"direction"
		,"dominant-baseline"
		,"glyph-orientation-horizontal"
		,"glyph-orientation-vertical" 
		,"kerning" 
		,"letter-spacing"
		,"text-anchor"
		,"text-decoration"
		,"unicode-bidi"
		,"word-spacing"
        ,"font-family"
		,"font-size"
		,"font-size-adjust" 
		,"font-stretch"
		,"font-style" 
		,"font-variant"
		,"font-weight"
        ,"stop-color" 
		,"stop-opacity"
        ,"clip-path" 
		,"clip-rule"
            , "XLink_attrib"
            ,   "attributeName" 
			,"attributeType" 
            , "begin"
			,"dur"
			,"end"
			,"min"
			,"max" 
			,"restart" 
			,"repeatCount" 
			,"repeatDur" 
			,"fill"
            , "calcMode" 
			,"values" 
			,"keyTimes"  
			,"keySplines" 
			,"from" 
			,"to" 
			,"by"
            , "additive" 
			, "accumulate"]




MATHML= ['math' ,
		'mo',
		'mi' ,
		'msub',
		'msup',
		'msubsup',
		'mfrac' ,
		'mn' ,
		'mstyle' ,
		'mtext' ,
		'mspace' ,
		'msqrt' ,
		'mmultiscripts',
		'mprescripts',
		'none', 
		'mroot',
		'mphantom',
		'merror' ,
		'mover' ,
		'munder' ,
		'munderover',
		'maction' ,
		'mtable' ,
		'mrow' ,
		'mtr' ,
		'mtd',
		'mpadded' ]

module.exports.MATHML = MATHML 

MATHML_NS = "http://www.w3.org/1998/Math/MathML";
module.exports.MATHML_NS = MATHML_NS

HTML_NS = "http://www.w3.org/1999/xhtml";
module.exports.HTML_NS = HTML_NS

SVG_NS = "http://www.w3.org/2000/svg";
module.exports.SVG_NS = SVG_NS





var SVG = [ "desc"
		,"title"
		,"metadata"
        ,"svg"
		,"g"
		,"defs"
		,"symbol"
		,"use"
        ,"switch","image","style","rect"
	,"circle"
	,"line"
	,"polyline"
	,"polygon"
	,"ellipse"
	,"path"
    ,"text"	
    ,"altGlyphDef" , "altGlyphItem" , "glyphRef","tspan"
		,"tref"  
		,"textPath" 
		,"altGlyph" 
        ,"marker"
        ,"color-profile"
        , "linearGradient" , "radialGradient" , "pattern" ,"clipPath" ,"mask" , "filter" ,"feBlend"
		,"feFlood"
		,"feColorMatrix"
		,"feComponentTransfer"
		,"feComposite"
		,"feConvolveMatrix"
		,"feDiffuseLighting"
		,"feDisplacementMap"
		,"feGaussianBlur"
		,"feImage"
		,"feMerge"
		,"feMorphology"
		,"feOffset"
		,"feSpecularLighting"
		,"feTile"
		,"feTurbulence"
        ,"cursor"
        ,"a"
        ,"view" 
        ,"script" 
        ,"animate"
		,"animateColor"
		,"animateTransform"
		,"animateMotion"
		,"set"
        ,"font"
	    ,"font-face" ,"k","free"
        ,"foreignObject" ]; 


var svgNS = "http://www.w3.org/2000/svg"	
var xlinkNS = "http://www.w0.org/1999/xlink"

var HTML_PAGE_START = "<html><head><style id='style1'></style><body>"
var HTML_PAGE_END="</body></html>"


var ATTRIBUTE = ["code","codebase","classid","face","fill","fillcolor","height","width","type","src","href","datasrc",
				"value","title","offsetWidth","style",
				"class","cols","colspan","rows","role","size","dir","x","y","cx","cy","x1","y1","x2","y2",
			 "points","attributeName","begin","from","dur","to","repeatCount","prompt","max","maxlength","rowspan",
			 "rules","scrollamount","scrolldelay","selected",
			 "shape","wrap",		 
			 "H","h","V","v","C","c","S","s","Q","q","T","t","A","a","Z","z","d","M","m","L","l",
			 "accept","accept-charset","access-key","action","method","align","alink","alt","archive","aria-checked","aria-level","aria-pressed","aria-valuemax",
			 "aria-valuemin","aria-valuenow","autocapitalize","autocomplete","autocorrect","autoplay","autosave","axis","behavior","background","bgcolor","bgproperties",
			 "border","bordercolor","cellpadding","cellspacing","challenge","char","charoff","charset","checked","cellborder","cite","clear","codetype","compact",
			 "composite","content","contenteditable","controls","data","datetime","declare","defer","direction","enctype","end","for","frame","frameborder","headers",
			 "hidden","hreflang","hspace","http-equiv","incremental","ismap","keytype","label","lang","leftmargin","link","longdesc","loop","loopend","loopstart",
			 "manifest","marginheight","marginwidth","mayscript","media","min","multiple","nohref","noresize","nosave","noshade","nowrap","object",
/* events*/	 "onabort","onbeforecopy","onbeforecut","onbeforepaste","onbeforeunload","onblur","onchange","onclick","oncontextmenu","oncopy","oncut","ondblclick","ondrag",
			 "ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","onerror","onfocus","ongesturechange","ongestureend","ongesturestart","oninput",
			 "onkeydown","onkeypress","onkeyup","onload", // Events section end.
			 "oversrc","placeholder","playcount","pluginpage","pluginspage","pluginurl","poster","rel","rev","scope","scrolling","span","standby"
			 ];


module.exports.ATTRIBUTE = ATTRIBUTE
module.exports.rint = rint;
module.exports.ra = ra;
module.exports.HTML = HTML;
module.exports.SVG = SVG;
module.exports.SVG_ATTRIB = SVG_ATTRIB;



function rint(upto){
	return Math.floor(upto*Math.random());
}

function ra(a){
	return a[rint(a.length)]
}

var m;

function StrGen(pmaxLen,pmaxChar){
	this.m;

		this.seed=Math.random(99999999 * Math.random())
		this.m=new MersenneTwister(this.seed)
		this.maxlen=pmaxLen
		this.maxchar=pmaxChar;
	

	this.maxlen=pmaxLen;
	this.maxchar=pmaxChar;

	this.generate=function(){
		args=new Array();
		for(i=0;i<this.maxlen;i++){
			args.push(this.rint(this.maxchar))
		}
		return eval('String.fromCharCode('+args.toString()+')')
	}
	
	this.poison=function(pStr,pNoChars){
		if(pNoChars > pStr.length)return;
		var aTmp = {}
		var sTmp=pStr
		for(i=0;i<pNoChars;i++){
			a=this.rint(pStr.length);
			sTmp=sTmp.replace(sTmp[a],eval('String.fromCharCode('+this.rint(this.maxchar)+')'))
			
		}
		return sTmp;
	}

	this.generate_size=function(size){
		var args=new Array();
		for(i=0;i<size;i++){
                       args.push(this.rint(this.maxchar))
                }
                return eval('String.fromCharCode('+args.toString()+')')
	}

	this.generate_maxchar=function(size,maxchar){
		var args=new Array();
		for(i=0;i<size;i++){
			args.push(this.rint(maxchar))
		}	
		return eval('String.fromCharCode('+args.toString()+')')
		
	}


	this.rint=function(upto){
		return Math.floor(upto*this.m.random())
	}
	this.ra = function(a){ return a[rint(a.length)]; }

}



function gc(){
for(var i=0;i<10000;i++)
	s=new String("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
}


function gc_opera(){
	for(var i=0;i<1000;i++)window.opera.collect();
}

function gc_ie(){
	for(var i=0;i<10;i++)CollectGarbage();
}



function getStyleSheet(no_elems)
{	
		var s=""
		
		for(var i=1;i<=no_elems;i++)
		{
			switch(rand(48)){
			case 0:
				s += ".test"+i.toString()+" {\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
			case 1:
				s += ".test"+i.toString()+" {\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				s += ".test"+i.toString()+"::after {\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
			case 2:
				s += ".test"+i.toString()+"{\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
			case 3:
				s += ".test"+i.toString()+"{\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				s += ".test"+i.toString()+"::after{\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
				
			case 4:	
				s += ".test"+i.toString()+"{\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n}\n"
				s += ".test"+i.toString()+"::before{\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
				
			case 5:
				s += ".test"+i.toString()+" {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
			
			case 6:
			
				s += ".test"+i.toString() +" {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				s += ".test"+i.toString() + "::after {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break
				
			case 7:	
				s += ".test"+i.toString()+" {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
			case 8:
				
				s += ".test"+i.toString()+" {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				s += ".test"+i.toString()+"::after {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;				
			case 9:

				s += ".test"+i.toString()+" {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				s += ".test"+(i-1).toString()+"::before {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
				
			case 10:
				
				s += ".test"+i.toString()+" {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				
				s += ".test"+i.toString()+"::after {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				
				s += ".test"+i.toString()+"::after {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				
				break;
				
			case 11:
				
				s += ".test"+i.toString()+" {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				
				s += ".test"+i.toString()+"::after {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				
				s += ".test"+i.toString()+"::after {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				
				s += ".test"+i.toString()+"::after {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				
				s += ".test"+i.toString()+"::after {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"	
				break;
				
			case 12 :
				
				s += ".test"+i.toString()+" {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				s += ".test"+i.toString()+"::after {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				s += ".test"+i.toString()+"::after {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				s += ".test"+i.toString()+"::before {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
				
			case 13:
				
				s += ".test"+i.toString()+" {\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				s += ".test"+i.toString()+"::after {\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				s += ".test"+i.toString()+"::after {\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				s += ".test"+i.toString()+"::after {\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				s += ".test"+i.toString()+"::after {\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"	
				break;
			
			case 14:
				
				s += ".test"+i.toString()+" {\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				s += ".test"+i.toString()+"::after {\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				s += ".test"+i.toString()+"::after {\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				s += ".test"+i.toString()+"::before {\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				s += ".test"+i.toString()+"::before {\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
			
			case 15:
				s += ".test"+i.toString()+" {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;

			case 16:
				s += ".test"+i.toString()+" {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
			case 17:
				s += ".test"+i.toString()+" {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
			case 18:
				s += ".test"+i.toString()+" {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
			
			case 19:
				s += ".test"+i.toString()+" {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
			
			case 20:
				s += ".test"+i.toString()+" {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
				
			case 21:
				s += ".test"+i.toString()+"::before {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
			
			case 22:
				s += ".test"+i.toString()+" {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
			
			case 23:
				s += ".test"+i.toString()+" {\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
			case 24:
				s += ".test"+i.toString()+"::after{\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
				
				
			case 16:
					s += ".test"+i.toString() + "{" + rand_item(seed_css) + "\n"
					s += rand_item(seed_css) + "\n"
					s += rand_item(seed_css) + "\n"
					s += "}\n"
					
					s += ".test"+i.toString() + "::after {" + rand_item(seed_css) + "\n"
					s +=   rand_item(seed_css) + "\n"
					s +=   rand_item(seed_css) + "\n"
					s +=   rand_item(seed_css) + "\n"
					s += "}\n"
					break;
					
			case 17: 
					s += ".test"+i.toString() + "{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					
					s += ".test"+i.toString() + "::after {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break;
					
			case 18: 
			
					s += ".test"+i.toString() + "{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					s +=
					s += ".test"+i.toString() + "::after {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break;
					
			case 19: 
					s +=cssText << ".test"+i.toString() + "{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					
					s += ".test"+i.toString() + "::after {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break;
					
			case 20: 
					s += ".test"+i.toString() + "{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::after {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break;
					
			case 21: 
					s += ".test"+i.toString() + "{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::after {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					
					s += ".test"+i.toString() + "::before {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
                    break;
			case 22: 
					s += ".test"+i.toString() + "{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::after {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::after {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
			        break;
			case 23:
					s += ".test"+i.toString() + "{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::after {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					s += ".test"+i.toString() + "::after {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break
			case 24:
					s += ".test"+i.toString() + "{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::after {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::before {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break;
			case 25:
					s += ".test"+i.toString() + "{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::after {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					s += ".test"+i.toString() + "::before {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break;
			case 26:
					s += ".test"+i.toString() + "{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::before {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::before {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break;
			case 27:
					s += ".test"+i.toString() + "{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::after {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					
					s += ".test"+i.toString() + "::first-child {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
                    break;
			case 28:
					s += ".test"+i.toString() + "{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::fisrtchild {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::before {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break;
			case 29: 
					s += ".test"+i.toString() + "::first-child{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break;
			case 30:
					s += ".test"+i.toString() + "::first-line{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"	
					break;
			case 31:
					s += ".test"+i.toString() + "::first-line{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break;
			case 32:
					s += ".test"+i.toString() + "::visted{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break;
			case 33:
					s += ".test"+i.toString() + "::first-letter{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
                    break;
			case 34:
					s += ".test"+i.toString() + "::link{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break;
			case 35:
					s += ".test"+i.toString() + "::focus{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break;
			case 36:
					s += ".test"+i.toString() + "{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::focus {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
                    break;
			case 37:
					s += ".test"+i.toString() + "{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::focus {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					
					s += ".test"+i.toString() + "::focus {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
                    break;
			case 38:
					s += ".test"+i.toString() + "{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::after {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					
					s += ".test"+i.toString() + "::before {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					
					s += ".test"+i.toString() + "::focus{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::first-child {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					
					s += ".test"+i.toString() + "::first-letter {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
                    
					s += ".test"+i.toString() + "::first-line{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::lang {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					
					s += ".test"+i.toString() + "::active {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					
					s += ".test"+i.toString() + "::hover{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::link {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					
					s += ".test"+i.toString() + "::before {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break;
			case 39: 
					s += ".test"+i.toString() + "::first-letter{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					s += ".test"+i.toString() + "::first-line{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::focus{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break;
			case 40:
					s += ".test"+i.toString() + "::focus{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::after{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break
			case 41:
					s += ".test"+i.toString() + "::before{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::focus{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
                    break
			case 42:
					s += ".test"+i.toString() + "::{" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::focus {" 
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break;
			case 43: 
					s += ".test"+i.toString() + "{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::focus {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break;
			case 44: 
					s += ".test"+i.toString() + "::focus {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::after {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break;
			case 45:
					s += ".test"+i.toString() + "::focus{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::visited {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break
			case 46:
					s += ".test"+i.toString() + "{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::focus {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					
					s += ".test"+i.toString() + "::focus {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					break;
			case 47: 
					s += ".test"+i.toString() + "{" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"					
					s += ".test"+i.toString() + "::after {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"
					s += ".test"+i.toString() + "::before {" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "		" + rand_item(seed_css) + "\n"
					s += "}\n"	
					break
			default:
				s += ".test"+i.toString()+"::after{\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += rand_item(seed_css) + "\n"
				s += "}\n"
				break;
			}
		}		
		return s;
	}


