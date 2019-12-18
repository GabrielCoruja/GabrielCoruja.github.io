import React from 'react';
import PokerCard from './pokerdex.card';

class PokerList extends React.Component {
    render() {
        const { pokemons } = this.props;
        console.log(pokemons)
        return (
            <div className="pokedex">
                {pokemons.map(pokemon => <PokerCard key={pokemon.id} pokemonm={pokemon} />)}
            </div>
        );
    }
}

export default PokerList;