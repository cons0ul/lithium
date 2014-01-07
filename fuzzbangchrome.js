var b64 = require('base64')

var cmxmldb = require('./Helpers/cmxmldb.js')
var cmcssdb = require('./Helpers/cmcssdb.js')


function rint(upto){return Math.floor(Math.random()*upto)}
function ra(a){return a[rint(a.length)]}



htmlHeader = '<!DOCTYPE html>\n<html>\n<head>\n'
htmlStyleStart = '<style id="s">\n'
htmlStyleEnd = '</style>\n'
htmlBody = '<body>\n'
htmlFooter= '</body>\n</html>'
MAX_CSSCHUNKS = 5;
MAX_XMLCHUNKS=5;


function generateTestCase(){

var SCRIPT = htmlHeader
SCRIPT += htmlStyleStart
SCRIPT += generateCss(MAX_CSSCHUNKS)
SCRIPT += htmlStyleEnd
SCRIPT += htmlBody
SCRIPT += generateHTML(MAX_XMLCHUNKS)
SCRIPT += htmlFooter

return SCRIPT

}

function generateCss(iterations){

cssString =''

for(var i=0;i<iterations;i++)
        cssString += b64.decode(ra(cmcssdb.cmcssdb)) + '\n'

return cssString
}



function generateHTML(iterations){

htmlString =''
for(var i=0;i<iterations;i++)
        htmlString += b64.decode(ra(cmxmldb.cmxmldb)) + '\n'

return htmlString
}


module.exports={
        init:function(){
                //
                //These inits are for config.reBuildClientFile() and NodeFuzz.html
                //
                config.filetype='html'
                config.type='text/html'
                config.tagtype='html'
                config.clientFile=config.reBuildClientFile()
                console.log('You could have some inits in DemoCanvasModule.js and it would be executed now.')
        },
        fuzz: function(){
                return generateTestCase()
        }
}

