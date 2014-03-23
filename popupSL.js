document.addEventListener('keydown', handleKeypress, false);

function synonym(html){
		if (html != ""){
			var site = "http://api.wolframalpha.com/v2/query?appid=J5UPVW-4RLV6H2X3E&input=synonym%20" + html + "&format=plaintext&includepodid=Synonyms:WordData";
			$.get(
				site,
				function(data) {
					var word = html;
					var text = new XMLSerializer().serializeToString(data);
					var syns = text.match(/\<plaintext>.*\|/) + ">";
					synArray = syns.split(">");
					if (synArray[0] == "null"){
						alert(word);
					}
					else{
						synArray = synArray[1].split(" ");
						alert(synArray[0]);
					}
				}
			);
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
		for (var i =0; i < words.length; i++) {
				if(synonym(words[i])!=undefined && synonym(words[i])!=""){
					newWords[i]=synonym(words[i]);
				}				
			}
		}
		var newWords = new Array();
		var newSentence = "";
		for (var i = 0; i < newWords.length; i++) {
			newSentence = newSentence + newWords[i] + " ";
		}
		alert(newSentence);
}