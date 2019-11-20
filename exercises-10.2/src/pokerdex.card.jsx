import React from 'react';

class PokerCard extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemonm;
        return (
            <div className="pokemon">
                <img src={image} alt="pokemon" />
                <div>
                <p>{name}</p>
                <p>{type}</p>
                <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
                </div>
            </div>
        )
    }
}

export default PokerCard;
