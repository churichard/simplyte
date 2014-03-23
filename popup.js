var html = "";

document.addEventListener('keydown', handleKeypress, false);

function handleKeypress(){
	if (event.keyCode == 84){
		getSelectionHtml();
		if (html != ""){
			//alert(html);
			var site = "http://words.bighugelabs.com/api/2/e2b80f9b79a99670c738434e668ebc08/" + html + "/";
			$.get(
				site,
				function(data) {
				    var re = /\|.*?/; 
					var m;
					while ((m = re.exec(data)) != null) {
						if (m.index === regex.lastIndex) {
							regex.lastIndex++;
						}
					}
					alert(m[0]);
				}
			);
			html = "";
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
            html = document.selection.createRange().htmlText;
        }
    }
}