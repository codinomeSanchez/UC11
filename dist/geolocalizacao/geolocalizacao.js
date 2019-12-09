"use strict";

if ("geolocation" in navigator) {
    console.log("geolocalizacao funcionando");
    var posicao = navigator.geolocation.getCurrentPosition(function (posicao) {
        console.log(posicao);
        var coordenadas = document.getElementById('coordenadas');
        coordenadas.innerHTML = "Latitude: " + posicao.coords.latitude + " <br> Longitude: " + posicao.coords.longitude + " ";
    });

    console.log(posicao);
} else {
    console.log("O navegador não suporta geolocalizacao");
}