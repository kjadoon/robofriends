import React from 'react';
import 'tachyons';

const Card = ({ id, name, username, email }) => {
    let colors = ['bg-light-pink', 'bg-light-blue', 'bg-light-green', 'bg-light-yellow', 'bg-light-black',
        'bg-light-red', 'bg-dark-pink', 'bg-dark-blue', 'bg-dark-green', 'bg-dark-yellow']
    return (
        <div className={`tc ${colors[id % colors.length]} dib br3 pa3 ma2 grow bw2 shadow-5`}>
            <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
            <div>
                <h2>{name} </h2>
                <p> {email} </p>
                <p> {username} </p>
            </div>
        </div>
    )
}

export default Card;