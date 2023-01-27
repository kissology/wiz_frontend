import React from 'react';
import RatingCard from './RatingCard';

function Rating({ratings}){
const renderRatings = ratings.map((rating) => {
    console.log(rating);

    return <RatingCard
    key = {rating.id}
    address = {rating.restroom.address}
    cleanliness = {rating.cleanliness}
    table = {String(rating.changing_table)}
    gender = {String(rating.gender_neutral)}
    mirror = {String(rating.mirror)}
    femstuff = {String(rating.feminine_products)}

    />
})




    return (
        <ul>
            {renderRatings}
        </ul>
    )
}


export default Rating;