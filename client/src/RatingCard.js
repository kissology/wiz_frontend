import React from 'react';

function RatingCard({address, cleanliness, table, gender, mirror, femstuff}){

    


    return (
        <li className="ratings-card">
            <h2>{address}</h2>
            <h3>🚽: {cleanliness}</h3>
            <h3>🍼: {table}</h3>
            <h3>⚧: {gender}</h3>
            <h3>🪞: {mirror}</h3>
            <h3>🎈: {femstuff}</h3>
        <button>Edit</button>
        </li>
    )
}


export default RatingCard;