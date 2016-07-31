
var trie = { 
  flatArray : new Array(),
  cc:1, 
  init: function () { 
	this.flatArray[0]={};
	this.currIndex = this.flatArray[0];
  }, 

  update: function (line) { 
    console.log('Reading string ', line);
    var currIndex=this.flatArray[0];
   
    for( var k in line) { 
     var currChar = line[k];
     if(currChar in currIndex) { 
	console.log('entering..');
     } else { 
	var el = this.cc;
	currIndex[currChar]= el;
        if(!(el in this.flatArray)) { 
  	   this.flatArray[el]={};
	   this.cc++;
        } else { 
	   console.log(el + ' exists in flatarray');
        }  
	console.log('entering..' + currIndex[currChar]);
     } 
     currIndex = this.flatArray[currIndex[currChar]]; 
     console.log(JSON.stringify(this.flatArray));
    }  
  }
} 

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



