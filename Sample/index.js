(function(){
    var textArea;
    eleditor.render({
        elementId: "divInput",//the div element that will be rendered
        uploadUrl:"http://url",
        previewElementId:"divResult",//the preview div element
        textareaId: "mTextArea",//the id of the textarea will be applied
        onTextChange: function () {
            if(!textArea){
                textArea=document.getElementById("mTextArea");
            }
            document.getElementById("divResult").innerHTML=textArea.value;
        }//the callback that will be applied when strings are inserted into textarea.
    });
    if(!textArea){
        textArea=document.getElementById("mTextArea");
    }
    textArea.oninput=function(e){
        document.getElementById("divResult").innerHTML=textArea.value;
    }
})();