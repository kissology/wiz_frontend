import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';

mapboxgl.accessToken = 'pk.eyJ1IjoieWFhbGVzZTEiLCJhIjoiY2xkYWZpMDJhMDNjZjNwdDRkYzA3YXN3ciJ9.KS4BtA3Gn4wTKb_KMGqPbQ';

function App() {
const mapContainer = useRef(null);

const map = useRef(null);
const [lng, setLng] = useState(0);
const [lat, setLat] = useState(0);
const [zoom, setZoom] = useState(9);
const [address, setAddress] = useState ("")
 
useEffect(() => {
if (map.current) return; // initialize map only once
map.current = new mapboxgl.Map({
container: mapContainer.current,
style: 'mapbox://styles/mapbox/streets-v12',
center: [lng, lat],
zoom: zoom
}); 
});

function handleClick(e){
  e.preventDefault();

  let postRequest = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({address:address})
  }
  fetch("/locations/coordinates", postRequest)
  .then((r) => r.json())
  .then((coordinates) =>  {
     setLng(coordinates.longitude)
     setLat(coordinates.latitude)
     setZoom(11)
})
  }

function handleOnChange(e){
  e.preventDefault();
  const newLocation = e.target.value
  setAddress(newLocation)
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
      onChange={handleOnChange}
      />
      <button onClick = {handleClick}>Submit</button>
    </div>
    </div>
  );
}

export default App;
