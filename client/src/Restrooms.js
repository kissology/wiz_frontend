import React, {useEffect, useState} from 'react';

function Restrooms(){
const [ratings, setRatings] = useState([])

useEffect(() => {
    fetch("http://localhost:3000/ratings")
    .then(res => res.json())
    .then(console.log('asshole'))
},[]);






    return (
    <div>Restrooms Page!</div>
)}

export default Restrooms;