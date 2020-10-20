import {
    REQUEST_POKEMONS_PENDING,
    REQUEST_POKEMONS_FAILED,
    REQUEST_POKEMONS_SUCCESS
} from './pokemonConstants';

const pendingPokemons = () => {
    return {
        type: REQUEST_POKEMONS_PENDING
    }
}
const updatePokemonsData = (payload) => {
    return {
        type: REQUEST_POKEMONS_SUCCESS,
        payload: payload
    }
}
const updatePokemonsError = (payload) => {
    return {
        type: REQUEST_POKEMONS_FAILED,
        payload: payload
    }
}

export const requestPokemons = () => (dispatch) => {
	dispatch(pendingPokemons());
	const promises = [];
	for(let i=1; i<=32; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((response) => response.json()));
	}
			Promise.all(promises)
			.catch(updatePokemonsError())
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