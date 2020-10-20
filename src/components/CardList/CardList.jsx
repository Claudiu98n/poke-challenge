import React from 'react';
import Card from '../Card/Card';

function CardList(props) {
    const { pokemons } = props;
    
    return (
        pokemons.length
        ?   <div className="row">
                { pokemons.map((pokemon, index) => {
                    return <Card
                        id = { pokemon.id }
                        image = { pokemon.image }
                        name = { pokemon.name }
                        abilities = { pokemon.abilities }
                        weight = { pokemon.weight }
                        height = { pokemon.height }
                        key = { index }
                        />
                })}
            </div>
        :   <div className="text-center mt-3">
                <p className="h1">No pokemons correspond to your search!</p>
            </div>
    );
}

export default CardList;
