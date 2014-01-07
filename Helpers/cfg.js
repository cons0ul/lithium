// Content-free grammar fuzzer by Jesse Ruderman

/************
 * SETTINGS *
 ************/

// Use "ulimit -c 100" to get the most out of this feature!
// By default, Mac OS X gives 8192KB of stack space, enough for about 105699 stack frames.
// Setting it to 100KB gives room for about 1165 stack frames.
// Note that "ulimit -c 100" will make many web pages crash Firefox, due to hunspell weirdness.

var fs = require('fs');

var RECURSION_TIMES = 100;



/**************
 * RANDOMNESS *
 **************/
  
var rnd = function (n) { return Math.floor(Math.random() * n); };
function chance(c) { return Math.random() < c; }


/**********
 * OUTPUT *
 **********/

  dumpln = function(s) { console.log(s); };
  
// dumpVerbose = dumpln;
dumpVerbose = function(s){}// console.log(s) };

// Like SpiderMonkey's uneval, but cross-browser, and only for strings
// and simple things like numbers.
// Also escape HTML close-script tags, which is a little hacky, but whatever.
function simpleSource(s)
{
  function escapeString(s)
  {
    return "\"" + s.replace(/\\/g, "\\\\")
                   .replace(/\"/g, "\\\"")
                   .replace(/\0/g, "\\0")
                   .replace(/\n/g, "\\n") 
                + "\"";
  }

  if (typeof s == "string") {
    if (/^[\n\x20-\x7f]*$/.exec(s) || !("uneval" in this)) {
      // Printable ASCII characters and line breaks: try to make it pretty.
      return escapeString(s).replace(/<\//g, "<\\/");
    } else {
      // Non-ASCII: use uneval to get \u escapes.
      return uneval(s).replace(/<\//g, "<\\/");
    }
  } else {
    // For other things (such as numbers, |null|, and |undefined|), just coerce to string.
    return "" + s;
  }
}



/******************
 * SYMBOL CLASSES *
 ******************/

// A variation on https://developer.mozilla.org/En/Introduction_to_Object-Oriented_JavaScript
// I believe this will be quite recursive!
// I don't use subclasses because I want these things to begin existing as soon as I reference
// them the first time.  (Actual references, not constant string lookups.)

var gDepth;
module.exports.gDepth = gDepth;

var gAccumulatedString = '';
module.exports.gAccumulatedString = gAccumulatedString;

var gDebugString;
module.exports.gDebugString = gDebugString;

var gRecursionState;
module.exports.gRecursionState = gRecursionState;

var gRecursionPoints;
module.exports.gRecursionPoints = gRecursionPoints;

var gRecursionSymbol;
module.exports.gRecursionSymbol = gRecursionSymbol;

module.exports.topGenerate = topGenerate;

function topGenerate(name)
{
  // Reset globals
  gDepth = 0;
  gAccumulatedString = "";
  gDebugString = "";

  gRecursionState = 0;
  gRecursionPoints = [0];
  gRecursionSymbol = null;
  
  definedSymbols[name].generate();

  gRecursionPoints.push(gAccumulatedString.length);
  if (gRecursionState == 4 || gRecursionState == 9)
    expandGrammarRecursion();

    return gAccumulatedString;
  
/*  if (chance(.05)) {
    // Chop off the end of the string at a random point within the string. 
    // This is a bit unnatural and against the spirit of symmetry,
    // but it's important for testing EOF handling in the *scanner*.
    dumpVerbose("CHOP!");
    gAccumulatedString = gAccumulatedString.substr(0, rnd(gAccumulatedString.length));
  }*/
}

function expandGrammarRecursion()
{
  var msg = gRecursionState == 4 ? "Grammar recursion" : "Grammar repetition";
  dumpVerbose(msg + ": " + gRecursionPoints);
  var s0 = gAccumulatedString.substring(gRecursionPoints[0], gRecursionPoints[1]);
  var s1 = gAccumulatedString.substring(gRecursionPoints[1], gRecursionPoints[2]);
  var s2 = gAccumulatedString.substring(gRecursionPoints[2], gRecursionPoints[3]);
  var s3 = gAccumulatedString.substring(gRecursionPoints[3], gRecursionPoints[4]);
  var s4 = gAccumulatedString.substring(gRecursionPoints[4], gRecursionPoints[5]);
  
  dumpVerbose("s0: " + simpleSource(s0));
  dumpVerbose("s1: " + simpleSource(s1));
  dumpVerbose("s2: " + simpleSource(s2));
  dumpVerbose("s3: " + simpleSource(s3));
  dumpVerbose("s4: " + simpleSource(s4));
  dumpVerbose("");

  dumpVerbose("Partially expanded example:");
  dumpVerbose(expandStrings(s0, s1, s2, s3, s4, 5));
  
  var ns = s0;
 //CHANGE sachin  
  gAccumulatedString = expandStrings(s0, s1, s2, s3, s4,1);
}

function expandStrings(s0, s1, s2, s3, s4, n)
{
  var ns = s0;

  for (var i = 0; i < n; ++i)
    ns += s1;

  ns += s2;

  for (var i = 0; i < n; ++i)
    ns += s3;

  ns += s4;

  return ns;
}    



function AbstractSymbol(name)
{
  this.name = name;
  this.symbolType = "Abstract";
}
AbstractSymbol.prototype.generate = function() {
  var localRecursionState = 0;

  if (chance(.001))
    return; // skip entirely
  if (chance(.001))
    this.generate(); // extra of same symbol (before this one)
  if (chance(.001))
    generateRandomSymbol(); // extra of another symbol, before this one

  if (gRecursionState == 0 && chance(.03)) {
    localRecursionState = 1;
    gRecursionState = 1;
    gRecursionSymbol = this;
    gDebugString += "<!-- Recursion1 -->"
    gRecursionPoints.push(gAccumulatedString.length);
  } else if (gRecursionState == 1 && gRecursionSymbol == this && chance(.3)) {
    gRecursionState = 2;
    gDebugString += "<!-- Recursion2 -->"
    gRecursionPoints.push(gAccumulatedString.length);
    localRecursionState = 2;
  }

  gDepth += 1;
  if (this.symbolType != "StaticText")
    gDebugString += "<" + this.name + ">";
  this._generate();
  if (this.symbolType != "StaticText")
    gDebugString += "</" + this.name + ">";
  gDepth -= 1;

  if (localRecursionState == 1) {
    if (gRecursionState == 1) {
       if (chance(.01)) {
        // No matching inner symbol was chosen, but we can repeat what happened inside this symbol anyway!
        // (good for testing the scanner, if not the parser, right?)
        gRecursionPoints.push(gAccumulatedString.length);
        gRecursionPoints.push(gAccumulatedString.length);
        gRecursionState = 9;
      }
    } else {
      if (gRecursionState != 3) { throw new Error("OOPS! " + gRecursionState); };
      gRecursionState = 4;
    }
    gDebugString += "<!-- Recursion4 -->"
    gRecursionPoints.push(gAccumulatedString.length);
  } else if (localRecursionState == 2) {
    gRecursionState = 3;
    gDebugString += "<!-- Recursion3 -->"
    gRecursionPoints.push(gAccumulatedString.length);
  }

  if (chance(.001))
    generateRandomSymbol(); // extra of another symbol, after this one
}


function defineConcatenation(sym, children)
{
  sym.children = children;
  sym.symbolType = "Concatenation";
  sym._generate = generateConcatenation;
}
function generateConcatenation() {
  for (var i = 0; i < this.children.length; ++i) {
    if (chance(.001)) {
      i += rnd(this.children.length); // skip part of this concatenation
      continue;
    }

    this.children[i].generate();
  }
}

function generateRandomSymbol()
{
  var name = definedSymbolsK[rnd(definedSymbolsK.length)];
  dumpVerbose("Randomly tossing in a: " + name);
  gDebugString += "<!-- RANDOM -->";
  definedSymbols[name].generate();
  gDebugString += "<!-- /RANDOM -->";
}


function defineChoice(sym)
{
  sym.symbolType = "Choice";
  sym.childrenWithWeights = [];
  sym.totalWeight = 0;
  sym.addChoice = addChoice;
  sym._generate = generateChoice;
}
function addChoice(weight, child) {
  this.totalWeight += weight;
  this.childrenWithWeights.push({weight: weight, child: child});
}
function generateChoice() {
  // This algorithm is sketchy
  //dumpln(this.totalWeight);
  var w = rnd(this.totalWeight);
  //dumpln(w);
  for (var i = 0; i < this.childrenWithWeights.length; ++i) {
    w -= this.childrenWithWeights[i].weight;
    if (w < 0) {
      this.childrenWithWeights[i].child.generate();
      return;
    }
  }
  throw new Error("Too much total weight?");
}


// Like a Kleene Star, but with a fuzzy twist
// (recommended count, dependence on depth, SS S vs S SS vs 0)
function defineStar(sym, child, recommendedCount)
{
  sym.symbolType = "Star";  
  sym.tempDepth = 0;
  sym.recommendedCount = recommendedCount;
  sym.child = child;
  sym._generate = generateStar;
}
function generateStar() 
{
  ++this.tempDepth;

  if (chance(.1)) {
    // For the repetition generator, I think it helps to do this sometimes...
    gDebugString += "<!-- LBIAS -->"
    this.generate();
    gDebugString += "<!-- L. -->"
    this.child.generate();
    gDebugString += "<!-- LEND -->"
  } else if (chance(.09)) {
    gDebugString += "<!-- RBIAS -->"
    this.child.generate();
    gDebugString += "<!-- R. -->"
    this.generate();
    gDebugString += "<!-- REND -->"
  } else {

    // When this.tempDepth is 1, the average is recommendedCount.  For every nesting, the average is halved.
    var count = rnd(rnd(this.recommendedCount * Math.pow(2, 3 - this.tempDepth)));
    
    for (var i = 0; i < count; ++i) {
      this.child.generate();
    }
  }

  --this.tempDepth;
}


// A static piece of text.
// These are created in a different way than most other symbols...
function defineText(sym, text)
{
  sym.symbolType = "StaticText";
  sym.text = text;
  sym._generate = generateText;
}
function generateText() {
  gAccumulatedString += this.text;
  gDebugString += this.text;
}


/************************
 * GRAMMAR TREE HELPERS *
 ************************/

// The grammar tree is static, at least in structure, once the grammar file is parsed.

// Symbols are inserted into this map when they are first referenced, but "filled in" with
// methods and data when they are defined.  This makes a single-pass parse possible.


// name --> symbol
var definedSymbols = {};
// index --> name of a symbol
var definedSymbolsK = [];


// Ensures that a symbol with this name exists and adds it to the map.
function nameToSymbol(name)
{
  if (!(name in definedSymbols)) {
    var newSymbol = new AbstractSymbol(name);
    definedSymbolsK.push(name);
    definedSymbols[name] = newSymbol;
  }
  return definedSymbols[name];
}

// Ensures that a matching text symbol exists and adds it to the map.
function textToSymbol(text)
{
  var sym = nameToSymbol("Text " + simpleSource(text));
  if (sym.symbolType == "Abstract") {
    defineText(sym, text);
  }
  return sym;
}



/****************************
 * PARSING THE GRAMMAR FILE *
 ****************************/

function parseGrammar(s)
{
  var lines = s.split("\n");
  var currentChoiceSymbol = null;
  for (var i = 0; i < lines.length; ++i) {
    var line = lines[i];

    if (line.charAt(0) == "#")  // comment
      continue;
    if (line.match(/^\s*$/)) { // all whitespace
      currentChoiceSymbol = null;
      continue;
    }
    dumpVerbose("");
    dumpVerbose(line);
 
    if (!line.charAt(0).match(/\s/)) { // starts with non-whitespace: definition of new symbol
      if (!line.match(/^(\S+)\s+(\S.*)$/))
        throw new Error("Not enough stuff on this line");
      var name = RegExp.$1;
      var restOfLine = RegExp.$2;

      // create an empty symbol, OR get ready to fill in a symbol that other symbols already reference
      symbol = nameToSymbol(name);
      if (symbol.symbolType != "Abstract")
        throw new Error("Defining a symbol twice");

      dumpVerbose("Defining: " + name);

      currentChoiceSymbol = null;
      if (restOfLine.charAt(0) == "*") {
        // Star
        dumpVerbose(">Star");
        if (!restOfLine.match(/^\*([0-9.]+)\s+(\S*)$/))
          throw new Error("Wrong stuff after *");
        var count = RegExp.$1;
        var childName = RegExp.$2;
        defineStar(symbol, nameToSymbol(childName), count);
      } else if (restOfLine.match(/^(\d+)\s+(\S.*)$/)) {
        // Choice
        dumpVerbose(">Choice");
        defineChoice(symbol);
        currentChoiceSymbol = symbol;
        parseChoice(currentChoiceSymbol, restOfLine);
      } else {
        // Concatenation
        dumpVerbose(">Concatenation");
        defineConcatenation(symbol, parseRefs(restOfLine));
      }
    } else { // starts with whitespace: continuation of previous symbol, which must be a choice symbol
      if (!currentChoiceSymbol)
      { 
	alert(line); 
	throw new Error("This line looks like the continuation of a choice symbol, but there is no current choice symbol.");
      	
	}dumpVerbose("  >Another choice");
      parseChoice(currentChoiceSymbol, line);
    }
  }

  for (var i = 0; i < definedSymbolsK.length; ++i) {
    var name = definedSymbolsK[i];
    dumpVerbose(name + ": " + definedSymbols[name].symbolType);
    if (definedSymbols[name].symbolType == "Abstract")
      throw new Error("A symbol was used but not defined: " + name);
  }
}

function parseChoice(ccs, line)
{
  line = ltrim(line);
  if (!line.match(/^([0-9.]+)\s+(\S.*)$/))
    throw new Error("This was supposed to be a continuation of a choice symbol, but the format is wrong");
  var weight = RegExp.$1;
  var refs = RegExp.$2;
  var a = parseRefs(refs);
 /* if (a.length != 1)
  {
	alert(weight);
	alert(a);
	alert(refs);
  alert(a.length);
    throw new Error("Wrong number of things on a choice line.  Can't mix concatenation in there!");
	}*/
  ccs.addChoice(+weight, a[0]);
}

// Parses things like
//     " '@media screen' '{' Statement '}' "
// into
//     [textToSymbol("@media"), textToSymbol("{"), nameToSymbol("Statement"), textToSymbol("}")]
// appropriate for parsing concatenation child lists, and anywhere else literal strings might appear :)
function parseRefs(refs)
{
   // alert(refs);
  var a = [];
  refs = ltrim(refs);
  while (refs.length > 0) {
    var c = refs.charAt(0);

    if (c == "'" || c == '"') {
      // Parse until the matching quote character and treat it the parts inside as text.
      // There are no escape characters!
      for (var i = 1; i < refs.length; ++i) {
        if (refs.charAt(i) == c) {
          break;
        }
      }
      if (i == refs.length)
      {alert(i);alert(refs.length);alert(refs)
         throw new Error("Unterminated string literal");
      }
      a.push(textToSymbol(refs.substr(1, i - 1)));
      refs = refs.substr(i + 1);
    } else {
      // A symbol name!
      refs.match(/^(\S*)(.*)$/);
      var name = RegExp.$1;
      refs = RegExp.$2;
      a.push(nameToSymbol(name));
    }

    refs = ltrim(refs);
  }

  return a;
}

function ltrim(str)
{
  return str.replace(/^\s+/, "");
}

module.exports.cfginit = cfginit

function cfginit(filename, callback)
{

  fs.readFile(filename,function(err,content){
        parseGrammar(content.toString());
        callback();
  });
  
}
