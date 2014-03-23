var html = "";
var synArray= "";

document.addEventListener('keydown', handleKeypress, false);

function handleKeypress(){
	if (event.keyCode == 84){
		getSelectionHtml();
		
		//begin splitter
		var words = html.split(" ");
		console.log(words);
		var newWords = new Array();
		
		//round 2
		var temp' 
		for (var i =0; i < words.length; ++i) {
			if (words[i] != ""){
				var site = "http://api.wolframalpha.com/v2/query?appid=J5UPVW-4RLV6H2X3E&input=synonym%20" + words[i] + "&format=plaintext&includepodid=Synonyms:WordData";
				$.get(
					site,
					function(data) {
						var text = new XMLSerializer().serializeToString(data);
						var syns = text.match(/\<plaintext>.*\|/) + ">";
						synArray = syns.split(">");
						synArray = synArray[1].split(" ");
						newWords[i] =(synArray[0]);
					}
				);
				html = "";
			}
		}
		var newSentence = "";
		for (var i = 0; i < newWords.length; ++i) {
			newSentence = newSentence + newWords[i] + " ";
		}
		alert(newSentence);
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