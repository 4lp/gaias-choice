const initialState = [];


export default function notes(state=initialState, action) {
	let noteList = state.slice();

	switch (action.type) {
		case 'FETCH_BLOGPOSTS':
		    return [...state, ...action.blogposts];

		default:
			return state;
	}
}
