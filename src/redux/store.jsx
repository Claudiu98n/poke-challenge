import { createStore, combineReducers, applyMiddleware } from 'redux';
import { pokemonReducer } from './pokemon/pokemonReducers';
import { searchFieldReducer } from './searchField/searchFieldReducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    searchField: searchFieldReducer,
});

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;