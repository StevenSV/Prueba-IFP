// Initialize and add the map
function initMap() {
    // The location of Uluru
    
    const uluru = { lat: 43.540931824136596, lng: -5.658702551049842 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      mapId: "cea087c37d310b75",
      zoom: 19,
      center: uluru,
    });

    // The marker, positioned at Uluru
    const image = "/img/marcador.png";
    
    const beachMarker = new google.maps.Marker({
    position: uluru,
    map,
    icon: image,
  });
}