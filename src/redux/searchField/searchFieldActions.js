import {
    CHANGE_SEARCH_FIELD
} from './searchFieldConstants';

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})