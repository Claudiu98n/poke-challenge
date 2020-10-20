import {
    REQUEST_POKEMONS_PENDING,
    REQUEST_POKEMONS_FAILED,
    REQUEST_POKEMONS_SUCCESS
} from './pokemonConstants';

const initialStatePokemons = {
	pokemons: [],
	error: '',
	isPending: false
}

export const pokemonReducer = (state=initialStatePokemons, action={}) => {
	switch (action.type) {
		case REQUEST_POKEMONS_PENDING:
			return Object.assign({}, state, {isPending: true});
		case REQUEST_POKEMONS_SUCCESS:
			return Object.assign({}, state, {pokemons: action.payload, isPending: false});
		case REQUEST_POKEMONS_FAILED:
			return Object.assign({}, state, {error: action.payload, isPending: false});
		default:
			return state;
	}
}