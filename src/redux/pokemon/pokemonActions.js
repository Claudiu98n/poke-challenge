import {
    REQUEST_POKEMONS_PENDING,
    REQUEST_POKEMONS_FAILED,
    REQUEST_POKEMONS_SUCCESS
} from './pokemonConstants';

export function pendingPokemons () {
    return {
        type: REQUEST_POKEMONS_PENDING
    }
}

export function updatePokemonsData(payload) {
    return {
        type: REQUEST_POKEMONS_SUCCESS,
        payload: payload
    }
}
export function updatePokemonsError(payload) {
    return {
        type: REQUEST_POKEMONS_FAILED,
        payload: payload
    }
}

export function requestPokemons () {
	return (dispatch) => {
		dispatch(pendingPokemons());
		const promises = [];
		for(let i=1; i<=32; i++) {
		const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
		promises.push(fetch(url).then((response) => response.json()));
		}
				Promise.all(promises)
				.catch((error) => {
					dispatch(updatePokemonsError(error));
				})
				.then((results) => {
					const pokemons = results.map((data) => ({
						name: data.name.charAt(0).toUpperCase() + data.name.slice(1),  
						id: data.id,
						height: data.height,
						weight: data.weight,
						image: data.sprites.front_default,
						abilities: data.abilities.map( ability => ability.ability.name ).join(', ')
					}));
					dispatch(updatePokemonsData(pokemons));
					});
	}
} 
