import React from 'react'
import './Card.css'

function Card(props) {
    const { id, image, name, abilities ,weight, height } = props;

    return (
        <div className="pokemon-item col-md-3 col-sm-6 text-center my-2">
            <div className="pokemon-body">
                <img className="pokemon-image" src={ image } alt={ name } />
                <h2 className="pokemon-title"> {id} { name } </h2>
                <p className="pokemon-abilities"> Abilities: { abilities } </p>
                <p className="pokemon-weight"> Weight: { weight } </p>
                <p className="pokemon-height"> Height: { height } </p>
            </div>
        </div>
    )
}

export default Card;
