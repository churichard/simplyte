var difficultWordSize = 6; //any word with more than this # of characters will be replaced

var temp = "temperorary words, go here";
var loc = temp.indexOf(",");
var temp3 = temp.slice(0,loc);
var temp2 = temp + "hi";
document.write(temp3);

var selected = "this is what, is selected right now. THis is only for testing purposes.";
document.write("<h1>This is a heading</h1>");

var words = selected.split(" ");
console.log(words);

var loc = words[2].indexOf(",");
var temp3 = words[2].slice(0,loc);
var temp4 = temp3 + ".";
document.write(temp4);


for (var i= 0; i < words.length; ++i) {
	document.write(words[i] + "<br>");
	}
	
var newWords = words.slice(0);

var period = -1;
var comma = -1;
/*
for (var i =0; i < newWords.length; ++i) {
	if (newWords[i] > difficultWordSize) {
		period = newWords[i].indexOf(".");
		comma = newWords[i].indexOf(",");
		if (period >= 0) {
			newWords[i] = newWords[i].slice(0,period);
		}
		if (comma >= 0) {
			newWords[i] = newWords[i].slice(0,comma);
		}
		//Insert code that calls thesasurs and puts it into "function(data)"
		//newWords[i] = data;
		
		if (period >= 0) {
			newWords[i] = newWords[i] + ".";
		}
		if (comma>= 0) {
			newWords[i] = newWords[i] + ",";
		}		
		comma = -1;
		period = -1;
	}
}
}
*/

for (var i =0; i < newWords.length; ++i) {
	document.write(newWords[i] + " ");
}

var temp = "large";
$.get("http://words.bighugelabs.com/api/2/e2b80f9b79a99670c738434e668ebc08/" + temp + "/", 
		function (data) {
		alert(data);
		document.write(data);
	}
	);
	
	
/*
for (var i = 0; i < words.length - 1; ++i) {
	//alert(html);
	var site = "http://words.bighugelabs.com/api/2/e2b80f9b79a99670c738434e668ebc08/" + words[i] + "/";
			$.get(
				site,function(data) {
					alert(data);
				}
			);
		html = "";
	}
alert(selected);*/
document.write("<h1>This is a closing</h1>");


