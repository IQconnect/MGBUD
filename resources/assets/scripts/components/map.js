const CONFIG = {
  ELEM: "map"
};

const map = {
  init() {
    const { ELEM } = CONFIG;
    this.mapElement = document.querySelectorAll(`[${ELEM}]`);
    var googleMaps = "x";
    this.createMap(googleMaps, this.mapElement);
  },

  createMap(googleMaps, mapElement) {
    return new googleMaps.map(mapElement, {
      center: { lat: 45.520562, lng: -122.677438 },
      zoom: 14
    });
  }
};
export default map;
