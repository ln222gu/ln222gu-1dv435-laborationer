window.onload = function() {
function konverteraValuta() {
    
    
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
    
    
    document.getElementById('answer').innerHTML=svar.toFixed(2);
    }
}

var button = document.getElementById("konvertera");
 button.onclick = konverteraValuta;
}