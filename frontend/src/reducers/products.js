const initialState = [];


export default function products(state=initialState, action) {

	switch (action.type) {
		case 'PRODUCTS_LOADING':
			return {...state, isLoading: true}

		case 'FETCH_PRODUCTS':
		    return [...state, ...action.products];

		default:
			return state;
	}
}
