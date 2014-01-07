fs = require('fs')
eval(fs.readFileSync('./Helpers/stdlib.js')+'')
console.log(rint(25));

rangeApi=require('./Helpers/rangeApiNode.js').fuzzRangeApi;


console.log(rangeApi())
