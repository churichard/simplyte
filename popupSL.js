document.addEventListener('keydown', handleKeypress, false);

function synonym(html){
		if (html != ""){
			var site = "http://api.wolframalpha.com/v2/query?appid=J5UPVW-4RLV6H2X3E&input=synonym%20" + html + "&format=plaintext&includepodid=Synonyms:WordData";
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

function getSelectionHtml() {
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            return container.innerHTML;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            return document.selection.createRange().htmlText;
        }
    }
}

function handleKeypress(){
	if (event.keyCode == 84){
		var words = getSelectionHtml().split(" ");
		//var newWords = new Array();
		for (var i =0; i < words.length; ++i) {
				alert(synonym(words[i]));
			}
		}
		/*
		var newSentence = "";
		for (var i = 0; i < newWords.length; ++i) {
			newSentence = newSentence + newWords[i] + " ";
		}
		alert(newSentence);
		*/
	}
}