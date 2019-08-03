import Instagram from 'node-instagram';

export const fetchInstagram = () => {
	return (dispatch, getState) => {
		const instagram = new Instagram({
		  clientId: 'c0d94c641c794ce08c286921f925fcd7',
		  //clientSecret: 'your-client-secret',
		  accessToken: '10222437627.c0d94c6.930eca5ec3cf4eff8f05d6e2c989b882',
		});
		
		console.log(instagram.request)

		instagram.get('users/self/media/recent', (err, data) => {
		  if (err) {
			dispatch({type: "INSTAGRAM_ERROR", errors: err});
			throw err;
		  } else {
			return dispatch({type: 'FETCH_INSTAGRAM', pictures: data});
		  }
		});
	}
}
