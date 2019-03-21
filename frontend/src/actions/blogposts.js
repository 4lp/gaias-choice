function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
	    var cookies = document.cookie.split(';');
	    for (var i = 0; i < cookies.length; i++) {
		    var cookie = cookies[i].trim();
		    if (cookie.substring(0, name.length + 1) === (name + '=')) {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
	}
	return cookieValue;
}

export const fetchBlogposts = (options) => {
	return (dispatch, getState) => {
		let csrftoken = getCookie('csrftoken');
		
		let headers = {"Content-Type": "application/json", "X-CSRFToken": csrftoken};
<<<<<<< HEAD
		console.log(options)

		let queryParams = []

		if (options.category) {
			queryParams.push('page=' + options.page);
		}

		if (options.category) {
			queryParams.push("categories=" + options.category);
		}

		if (options.permalink) {
			queryParams.push("permalink=" + options.permalink);
		}

		let queryString = "?";

		queryParams.forEach((param)=>{
			queryString += param + "&";
		});

=======

		let queryString = '?offset=' + options.page;

		if (options.category) {
			queryString += "&categories=" + options.category;
		}

>>>>>>> a39c112cc44e997e985a96c71324731b17fe8783
		return fetch("/api/blogpost/" + queryString, {headers, })
			.then(res => {
				if (res.status < 500) {
					return res.json().then(data => {
						return {status: res.status, data};
					})
				} else {
					console.log("Server Error!");
					throw res;
				}
			})
			.then(res => {
				if (res.status === 200) {
					return dispatch({type: 'FETCH_BLOGPOSTS', blogposts: res.data});
				} else if (res.status === 401 || res.status === 403) {
					dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
	  				throw res.data;
				}
			})
	}
}

