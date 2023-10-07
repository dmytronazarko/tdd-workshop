import React from 'react';

const PlantCard: React.FC = ({name, imageUrl, daysLeftToWater}) => {

    return <div data-testid='plant'>
        <p data-testid='plant-name'>
            {name}
        </p>
        <img data-testid='plant-photo' src={imageUrl}/>
        <p data-testid='daysLeftToWater'>
            {daysLeftToWater}
        </p>
        <button data-testid='waterButton' >
            Water Plant
        </button>
        <button data-testid='removeButton' >
            Remove
        </button>
        <button data-testid='editButton' >
            Edit
        </button>
    </div>;
};

export default PlantCard;
