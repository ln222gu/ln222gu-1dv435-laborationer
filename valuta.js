window.onload = function() {
function konverteraValuta() {
    
    
    var svar;
    var kronor;
    var dollar = 0.15;
    var euro = 0.11;
    kronor = 1;
    
    svar = kronor * euro;
    
    
    
    
    
    
    
    document.getElementById('answer').innerHTML="Liv är bäst.";
}

var button = document.getElementById("konvertera");
 button.onclick = konverteraValuta;
}