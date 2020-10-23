import {
    CHANGE_SEARCH_FIELD
} from './searchFieldConstants';

export function setSearchField(payload) {
	return {
		type: CHANGE_SEARCH_FIELD,
		payload
	}
}