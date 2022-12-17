
function initMap() {

  const posicionSantPereSacama = {
    lat: 41.56715541124763,
    lng: 1.9128146315264258,
  };

  const posicionAlpesSuizos = {
    lat: 46.796306384209544,
    lng: 9.794754561579131,
  };

  const posicionTierGarten = {
    lat: 52.51327041914515,
    lng: 13.352458909656121,
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicionSantPereSacama,
  });

  const markers = [
    new google.maps.Marker({
      position: posicionSantPereSacama,
      map: map,
      title: "Ermita de Sant Pere Sacama, Olesa de Montserrat, Barcelona",
    }),
    new google.maps.Marker({
      position: posicionAlpesSuizos,
      map: map,
      title: "Alpes suizos, Suiza",
    }),
    new google.maps.Marker({
      position: posicionTierGarten,
      map: map,
      title: "Tier garten, Berlin, Alemania",
    }),
  ];
}

window.initMap = initMap;