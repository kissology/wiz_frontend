import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';

mapboxgl.accessToken = 'pk.eyJ1IjoieWFhbGVzZTEiLCJhIjoiY2xkYWZpMDJhMDNjZjNwdDRkYzA3YXN3ciJ9.KS4BtA3Gn4wTKb_KMGqPbQ';

function App() {
const mapContainer = useRef(null);

const map = useRef(null);
const [lng, setLng] = useState(-74.0060);
const [lat, setLat] = useState( 40.7128);
const [zoom, setZoom] = useState(9);
const [location, setLocation] = useState ("")
 
useEffect(() => {
if (map.current) return; // initialize map only once
map.current = new mapboxgl.Map({
container: mapContainer.current,
style: 'mapbox://styles/mapbox/streets-v12',
center: [lng, lat],
zoom: zoom
}); 
});

function fetchLocation() {
  fetch("/locations")
  .then((r) => r.json())
  .then((location) => setLocation(location))
}


  return (
    <div>
    <div className="sidebar">
    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
    </div>
    <div ref={mapContainer} className="map-container" />
    <div> 
      <input
      className="search-bar"
      type="search"
      placeholder="Address"
      onChange={(e) => {fetchLocation(e)}}
      />
    </div>
    </div>
  );
}

export default App;
