import { combineReducers } from 'redux';
import blogposts from "./blogposts";
import products from "./products";
import email from "./email";
import settings from "./settings";
import carouselImages from "./carouselimages";

const gaiasApp = combineReducers({
	blogposts, email, products, carouselImages, settings
})

const rootReducer = (state, action) => {

	if ( action.type === 'AUTHENTICATION_ERROR' || action.type === 'LOGOUT_SUCCESSFUL' ) {
		state = undefined;
	}
	return gaiasApp(state, action);
}

export default rootReducer;
