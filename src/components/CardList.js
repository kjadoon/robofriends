import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {robots !== undefined ? robots.map(robot =>
                <Card
                    key={robot.id}
                    id={robot.id}
                    name={robot.name}
                    email={robot.email}
                    username={robot.username} />
            ) : console.log("error")}
        </div>
    )
}

export default CardList;