var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('test1.in')
});

var c = 0;
var i = 0;

var graph   = { 'root': {} };
var currKey = 'root';
currIndex   = graph[currKey];
baseIndex   = graph[currKey];

console.log("Testing currIndex with key current " + JSON.stringify((currIndex)));

lineReader.on('line', function (line) {
  if(i==0) { 
    c = parseInt(line); 
    console.log('Line from file:', c);
  } else { 
    updateGraph(line);
  } 
  i++;
});

function updateGraph(line) { 
  console.log('Reading string ', line);
  currIndex=graph['root'];
   
  for( var k in line) { 
     currChar = line[k];
     if(currChar in currIndex) { 
	console.log('entering..');
	currIndex = currIndex[currChar]; 
     } else { 
	currIndex[currChar]= {};
	console.log('entering..');
	currIndex = currIndex[currChar]; 
     } 
     console.log(JSON.stringify(baseIndex));
  }  

}
