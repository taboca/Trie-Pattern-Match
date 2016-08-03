var trie = require('./test4_graph.js');

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(process.argv[2])
});

var c = 0;
var i = 0;
var s = '';

trie.init();

lineReader.on('line', function (line) {
  if(i==0) { 
    s = line;
    //console.log('Input strign is:' + s);
  } else if (i==1) { 
    c = parseInt(line); 
    //console.log('Line from file:', c);
  } else {   
    console.log("making " + line);
    trie.update(line);
  } 
  i++;
});

lineReader.on('close', function (line) {

  var curr = trie.flatArray[0];

    var found=true;   
    var indexInNode=0;
    var lastFound = 0;
    var ch=0;
    var keyPointer=0;
    output = '';

    while(found) { 
      
      if (s[ch] in trie.flatArray[indexInNode]) { 
        console.log("Checking input ["+s[ch]+"] which is index " + ch);
        console.log(s[ch] + ' found ');
	indexInNode = trie.flatArray[indexInNode][s[ch]];
         
        if(isEmpty(trie.flatArray[indexInNode]) ) { 
	  console.log(lastFound);
          output+= keyPointer + ' ';
          indexInNode=0;
  	  ch=++keyPointer;
        } 
        else { 
	  console.log('.');
          ch++;
        } 
      } else { 
	ch = ++keyPointer;
	console.log('not a match. Now index str = ' + ch);

        indexInNode=0;
        if(ch>=s.length) { 
	  found=false;
        } 
      } 

  } 
  console.log(output);
});


function isEmpty( o ) {
    for ( var p in o ) { 
        if ( o.hasOwnProperty( p ) ) { return false; }
    }
    return true;
}
