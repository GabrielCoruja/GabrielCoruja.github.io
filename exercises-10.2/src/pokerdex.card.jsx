import React from 'react';

class PokerCard extends React.Component {
    render() {
        const { name, type, averageWeight, image, moreInfo } = this.props.pokemonm;
        return (
            <div className="pokemon">
                <img src={image} alt="pokemon" />
                <div>
                <p>{name}</p>
                <p>{type}</p>
                <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
                <a href={moreInfo} target="_blank" rel="noopener noreferrer">More info</a>
                </div>
            </div>
        )
    }
}

export default PokerCard;
