import { combineReducers } from 'redux';
import blogposts from "./blogposts";
import email from "./email";

const gaiasApp = combineReducers({
	blogposts, email
})

const rootReducer = (state, action) => {

	if ( action.type === 'AUTHENTICATION_ERROR' || action.type === 'LOGOUT_SUCCESSFUL' ) {
		state = undefined;
	}
	return gaiasApp(state, action);
}

export default rootReducer;
