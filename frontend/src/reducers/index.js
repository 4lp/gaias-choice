import { combineReducers } from 'redux';
import blogposts from "./blogposts";
import products from "./products";
import email from "./email";
import carouselImages from "./carouselimages";

const gaiasApp = combineReducers({
	blogposts, email, products, carouselImages
})

const rootReducer = (state, action) => {

	if ( action.type === 'AUTHENTICATION_ERROR' || action.type === 'LOGOUT_SUCCESSFUL' ) {
		state = undefined;
	}
	return gaiasApp(state, action);
}

export default rootReducer;
