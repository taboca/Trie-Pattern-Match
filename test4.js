
var trie = require('./test4_graph.js');

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(process.argv[2])
});

var c = 0;
var i = 0;

trie.init();

lineReader.on('line', function (line) {
  if(i==0) { 
    c = parseInt(line); 
    console.log('Line from file:', c);
  } else { 
    trie.update(line);
  } 
  i++;
});

lineReader.on('close', function (line) {
for(var k in trie.flatArray) { 
    for(var item in trie.flatArray[k]) { 
	var target = trie.flatArray[k][item];
 	console.log(k+"->"+target+":"+item);
    } 
}
});


