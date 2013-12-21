var ultimatesvarofdoom = [];
function konverteraValuta() {
    var answer = document.getElementById('answer');
    answer.innerHTML = "";
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
    for(var i = ultimatesvarofdoom.length - 1; i > 0; i -= 1) {
        answer.innerHTML += ultimatesvarofdoom[i].toFixed(2) + "<br>";
	}
    }
}
window.onload = function() {
var button = document.getElementById("konvertera");
 button.onclick = konverteraValuta;
}