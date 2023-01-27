import React, { useRef, useEffect, useState } from 'react';
import {Switch, Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from "./Home";
import About from "./About";  
import Restrooms from "./Restrooms";
import Login from "./Login";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax


mapboxgl.accessToken = 'pk.eyJ1IjoieWFhbGVzZTEiLCJhIjoiY2xkYWZpMDJhMDNjZjNwdDRkYzA3YXN3ciJ9.KS4BtA3Gn4wTKb_KMGqPbQ';

function App() {

  const mapContainer = useRef(null);
  
  const map = useRef(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(9);
  const [address, setAddress] = useState ("")
  const [user, setUser] = useState(null)


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
     setZoom(9)
     drawMap()
})
  }
  
  function handleOnChange(e){
    e.preventDefault();
    const newLocation = e.target.value
    setAddress(newLocation)
  }
  
  console.log(lng)
  useEffect(() => {
  drawMap()
  }, [lng,lat]);

  function drawMap(){
    // console.log("i'm in the drawmap function")
    // if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
   container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [lng,lat],
   zoom: zoom
}); 

  }

  useEffect(() => {
    fetch("/usersession/:id").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  },[]);

  function handleLogin(user){
  setUser(user)
  }

  function handleLogout() {
    setUser(null)
  }
  


  return (
    <div className="App">
    <div className="sidebar">
    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
    </div>
    <div ref={mapContainer} className="map-container" />
    <div> <input value = {address} className="search-bar" type="search" placeholder="Address" onChange={handleOnChange}/> </div>
    <button className="submit-button" onClick = {handleClick}>Submit</button>
      <Navbar/>
        <Switch>
          <Route exact path="/restrooms">
            <Restrooms/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/home">
          <Home/>
          </Route>
          <Route exact path="/">
          <Login
          onLogin = {handleLogin}
          onLogout = {handleLogout}
          />
          </Route>
        </Switch>
        </div>
  
  );
}

export default App;
