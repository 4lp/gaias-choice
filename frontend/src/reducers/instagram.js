const initialState = {
	isLoading: true,
	pictures: null 
}

export default function instagram(state=initialState, action) {

	switch (action.type) {
		case 'FETCH_INSTAGRAM':
		    return {...state, instagramPictures: action.pictures, isLoading: false};

		default:
			return state;
	}
}
