window.onload=function() {

var bilder = new Array();

bilder[0] = "http://fc00.deviantart.net/fs28/f/2008/049/5/7/Art_Nouveau_by_areve.jpg";
bilder[1] = "http://th08.deviantart.net/fs29/PRE/f/2008/123/0/1/WoW__Orc_hunter_by_areve.jpg";
bilder[2] = "http://fc05.deviantart.net/fs43/f/2009/061/2/8/CHOW_149___Female_sith_lord_by_areve.jpg";

var i = 0;
setInterval(function(){
    document.getElementById("bilder").setAttribute("src",bilder[i++]);
    if (i === 3) {
        i = 0;
    }
},5000);






}
//(http://areve.deviantart.com/art/Art-Nouveau-77715012, http://areve.deviantart.com/art/WoW-Orc-hunter-84497298, http://areve.deviantart.com/art/CHOW-149-Female-sith-lord-114666732)