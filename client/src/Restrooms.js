import React, {useEffect, useState} from 'react';
import Rating from './Rating';

function Restrooms(){
const [ratings, setRatings] = useState([])

useEffect(() => {
    fetch("/ratings")
    .then(res => res.json())
    .then(ratings => setRatings(ratings))
},[]);






    return (
    <div>
        <Rating ratings = {ratings}/>
    </div>
)}

export default Restrooms;