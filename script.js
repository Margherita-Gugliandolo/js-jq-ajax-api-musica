//GOAL:
// Attraverso una chiamata ajax all'Api di boolean avremo a
// disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.

function addAlbums() {

  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data, state) {

      var albums = data["response"]; //la risposta array con 10 oggetti (album)

      console.log(albums);

      albumsHtml(albums); //funzione per stampare gli array di album richiamati
    },
    error: function (request, error, state) {
      console.log("ops..si è verificato un problema");
    }
  });
}

function albumsHtml(array) {
 // prendo il template preimpostato per Handlebars
  var template = $("#template").html();
  var templateHandlebars = Handlebars.compile(template);

  var target = $(".cds-container"); // prendo il contenitore cd in HTMl

  for (var i = 0; i < array.length; i++) {
    // inserisco i singoli album nel template richiamato da Handlebars
    var album = templateHandlebars(array[i]);
    // restituisco gli album nel contenitore in html
    target.append(album)
  }
}

$(document).ready(init);

function init() {
  addAlbums();
}
