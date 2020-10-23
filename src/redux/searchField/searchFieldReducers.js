import {
    CHANGE_SEARCH_FIELD
} from './searchFieldConstants';

const initialStateSearch = {
	searchField: ''
}

export function searchFieldReducer(state=initialStateSearch, action) {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {
				searchField: action.payload
			});
		default:
			return state;
	}
}