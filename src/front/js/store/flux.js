const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			token: null,
			current_user: null,
			apiurl: "https://3001-aqua-ostrich-dwztqmry.ws-us03.gitpod.io/api/",
			auth: false,
			email: null
		},
		actions: {
			// Use getActions to call a function within a fuction

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			login: (email, password) => {
				const store = getStore();
				fetch(`${store.apiurl}login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						mode: "no-cors"
					},

					body: JSON.stringify({ email: email, password: password })
				})
					.then(response => {
						console.log(response);
						return response.json();
					})
					.then(data => {
						console.log(data);
						localStorage.setItem("token", data);
						console.log(localStorage.getItem("token"));
						setStore({ email: email, auth: true });
						console.log(email);
						window.location.reload();
					})
					.catch(err => {
						console.log("error", err);
					});
			},
			logout: () => {
				const store = getStore();
				console.log(localStorage.getItem("token"));
				localStorage.removeItem("token");
				console.log(localStorage.getItem("token"));
				setStore({ email: null, auth: false });

				// const store = getStore();
				// fetch(`${store.apiurl}logout`, {
				// 	method: "DELETE",
				// 	headers: {
				// 		"Content-Type": "application/json",
				// 		mode: "no-cors"
				// 	},

				// 	body: JSON.stringify({})
				// })
				// 	.then(response => {
				// 		console.log(response);
				// 		return response.json();
				// 	})
				// 	.then(data => {
				// 		console.log(data);
				// 	})
				// 	.catch(err => {
				// 		console.log("error", err);
				// 	});
			},
			getToken: () => {
				const store = getStore();
				const token = localStorage.getItem("token");

				if (token && token.length > 0) {
					setStore({ login: true });
				} else {
					setStore({ login: false });
				}
			},

			register: (email, username, password) => {
				const store = getStore();
				console.log(email, username, password, "estoy dentro");
				fetch(`${store.newUrl}/register`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					mode: "no-cors",
					body: JSON.stringify({ email: email, username: username, password: password })
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						setStore({ register: true });
					})

					.catch(err => {
						console.log("error", err);
					});
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
