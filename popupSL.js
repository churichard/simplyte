document.addEventListener('keydown', handleKeypress, false);
var difficultWord = 6;

function synonym(html){
	var result = null;
	var site = "http://api.wolframalpha.com/v2/query?appid=J5UPVW-4RLV6H2X3E&input=synonym%20" + html + "&format=plaintext&includepodid=Synonyms:WordData";
	$.ajax({
		url: site,
		type: 'get',
		dataType: 'xml',
		async: false,
		success: function (data) {
			var word = html;
			var text = new XMLSerializer().serializeToString(data);
			var syns = text.match(/\<plaintext>.*\|/) + ">";
			synArray = syns.split(">");
			if (synArray[0] == "null"){
				result = word;
			}
			else{
				synArray = synArray[1].split(" ");
				result = synArray[0];
			}
		}
	});
	return result;
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
    }else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            return document.selection.createRange().htmlText;
        }
    }
}

function handleKeypress(){
	var selectedText = getSelectionHtml();
	if (event.keyCode == 84 && selectedText != ""){
		var words = selectedText.split(" ");
		var newWords = new Array(words.length);
		for (var i =0; i < words.length; i++) {
			if (words[i].length > difficultWord) {
				newWords[i]=synonym(words[i]);
			}
			else newWords[i] = words[i];
		}

		var newSentence = "";
		for (var i = 0; i < newWords.length; i++) {
			newSentence += newWords[i] + " ";
		}
		var replaced = $("body").html().replace(selectedText,newSentence);
		$("body").html(replaced);
	}
}