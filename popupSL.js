document.addEventListener('keydown', handleKeypress, false);
var difficultWord = 8;

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

function gradeWord(word){
    var site = "http://api.wordnik.com:80/v4/word.json/"+word+"/frequency?useCanonical=false&startYear=1960&endYear=2012&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
    var x;
    $.ajax({
        url: site,
        type: 'get',
        dataType: 'text',
        async: false,
        success: function (data) {
            var syns = data.match(/"totalCount":.*\}/) + ":";
            synArray = syns.split(":");
            var temp = synArray[1];
            synArray = temp.split("}");
            x = parseInt(synArray[0]);
        }
    });
    return x;
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
			if (words[i].length > difficultWord || gradeWord(words[i])<50) {
                alert(gradeWord(words[i]));
				newWords[i]=synonym(words[i]);
			}
			else newWords[i] = words[i];
		}

		var newSentence = "";
		for (var i = 0; i < newWords.length; i++) {
			newSentence += newWords[i] + " ";
		}
        var newSentence2 = newSentence.fontcolor("blue");
		newSentence2 = newSentence2.fontsize(2.75);
		newSentence2 = newSentence2.bold();
		var replaced = $("body").html().replace(selectedText,newSentence2);
		$("body").html(replaced);
	}
}