var html = "";
var synArray= "";
var difficultWordSize = 3;

document.addEventListener('keydown', handleKeypress, false);

function handleKeypress(){
	if (event.keyCode == 84){
		getSelectionHtml(); //saves hilighted txt as var html
		
		//splitter
		var words = html.split(" ");
		console.log(words);

		var newWords = words.slice(0);
		
		/*var period = -1;
		var comma = -1;
*//*
		for (var i =0; i < newWords.length; ++i) {
			if (newWords[i] > difficultWordSize) {
			/*period = newWords[i].indexOf(".");
			comma = newWords[i].indexOf(",");
			if (period >= 0) {
				newWords[i] = newWords[i].slice(0,period);
			}
			if (comma >= 0) {
				newWords[i] = newWords[i].slice(0,comma);
			}*/
			if (newWords[i] != ""){
				var site = "http://api.wolframalpha.com/v2/query?appid=J5UPVW-4RLV6H2X3E&input=synonym%20" + newWords[i] + "&format=plaintext&includepodid=Synonyms:WordData";
				$.get(
					site,
					function(data) {
						var text = new XMLSerializer().serializeToString(data);
						var syns = text.match(/\<plaintext>.*\|/) + ">";
						synArray = syns.split(">");
						synArray = synArray[1].split(" ");
						alert(synArray[0]);
				}
			);
			html = "";
		}
	}
}
}
}

function getSelectionHtml() {
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            html = container.innerHTML;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            html= document.selection.createRange().htmlText;
        }
    }
}