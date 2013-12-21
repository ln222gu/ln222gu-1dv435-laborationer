var ultimatesvarofdoom = [];
function konverteraValuta() {
    var answer = document.getElementById('answer');
    
    var svar;
    var kronor;
    var dollar = 0.15;
    var euro = 0.11;
    kronor = document.getElementById("number").value;
    
    if (isNaN(kronor)) {
        alert("FEEEEEEEEEEEEEEEEEEEEEEEEEEEL!");
    }
    else {
    if (document.getElementById("valuta").value === "Euro") {
        svar = kronor * euro;
    }
    else if (document.getElementById("valuta").value === "Dollar") {
        svar = kronor * dollar;
    }
    
    ultimatesvarofdoom.push(svar);
    for(var i = 0; i < ultimatesvarofdoom.length; i += 1) {
        answer.innerHTML += ultimatesvarofdoom[i];
	}
    }
}
window.onload = function() {
var button = document.getElementById("konvertera");
 button.onclick = konverteraValuta;
}