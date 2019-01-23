const initialState = [];


export default function blogposts(state=initialState, action) {

	switch (action.type) {
		case 'FETCH_BLOGPOSTS':
		    return [...state, ...action.blogposts];

		default:
			return state;
	}
}
