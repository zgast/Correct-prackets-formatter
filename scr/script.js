function getText() {
    var textArea = document.getElementById("input");
    
    var text = textArea.value;
    var charText = Array.from(text)

    for(var i=0;i<charText.length;i++){
        if(charText[i]=="{"&&charText[i-1]!="\n"){
            insertAt(charText, i);
        }
    }
    for(var i=0;i<charText.length;i++){
        if(charText[i]=="{"&&charText[i+1]!="\n"){
            insertAt(charText, i+1);
        }
    }
    for(var i=0;i<charText.length;i++){
        if(charText[i]=="}"&&charText[i-1]!="\n"){
            insertAt(charText, i);
        }
    }
    for(var i=0;i<charText.length;i++){
        if(charText[i]=="}"&&charText[i+1]!="\n"){
            insertAt(charText, i+1);
        }
    }
    
    var string = charText.join("");
    
    if(string.search("\n\n\n //only for one of the last professional Coder - WU")==-1){
      string+="\n\n\n //only for one of the last professional Coder - WU";
      }
    

    textArea.value = string;
}


function insertAt(array, index) {array.splice(index, 0,"\n");}