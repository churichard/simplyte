var selected = "this is what is selected right now. THis is only for testing purposes.";
document.write("<h1>This is a heading</h1>");

var words = selected.split(" ");
console.log(words);

for (var i= 0; i < words.length -1; ++i) {
	document.write(words[i] + "<br>");
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


