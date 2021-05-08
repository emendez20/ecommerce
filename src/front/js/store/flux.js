const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			inventory: [],
			cart: [],

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
			apiurl: "https://3001-harlequin-salmon-xwz7uv6k.ws-us03.gitpod.io/api",
			login: false,
			email: null,
			cartTotal: null,
			orders: [],
			ordersLoaded: false,
			register: false,
			inventoryUpdated: false
		},
		actions: {
			// Use getActions to call a function within a fuction

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			login: async (email, password) => {
				const store = getStore();

				const URL = `${store.apiurl}/login`; // API to create token
				const CONFIG = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};

				try {
					const resp = await fetch(URL, CONFIG);
					if (resp.status !== 200) {
						alert("There was an error during authentication");
						return false;
					}

					const data = await resp.json();
					console.log("Token created from back-end", data);
					localStorage.setItem("token", data.token);
					sessionStorage.setItem("authenticated", true);
					sessionStorage.setItem("email", data.email);
					setStore({ token: data });
					return true;
				} catch (error) {
					console.error("CREATE Token error: ", error);
				}
			},
			// With sessionStorage , the data is persisted only until the window or tab is closed.
			// With localStorage , the data is persisted until the user manually clears the browser cache or until your web app clears the data.
			logout: () => {
				const store = getStore();
				console.log(localStorage.getItem("token"));
				localStorage.removeItem("token");
				sessionStorage.setItem("authenticated", false);
				sessionStorage.setItem("email", null);
				console.log(localStorage.getItem("token"));
				setStore({ email: null });
				window.location.reload();
			},
			getToken: () => {
				const store = getStore();
				const token = localStorage.getItem("token");

				if (token.length > 20) {
					setStore({ login: true });
				} else {
					setStore({ login: false });
				}
			},

			register: (email, password) => {
				const store = getStore();
				console.log(email, password, "estoy dentro");
				fetch(`${store.apiurl}/register`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					mode: "no-cors",
					body: JSON.stringify({
						email: email,
						password: password
					})
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
			addToCart: index => {
				const store = getStore();
				const actions = getActions();
				if (store.cart.length > 0) {
					store.cart.map((prod, pos) => {
						if (store.cart.includes(store.inventory[index])) {
						} else {
							setStore({
								cart: [...store.cart, store.inventory[index]]
							});
							actions.calculateCartTotal();
						}
					});
				} else {
					setStore({
						cart: [...store.cart, store.inventory[index]]
					});
					actions.calculateCartTotal();
				}
			},
			removeFromCart: i => {
				const store = getStore();
				let newCart = store.cart;
				setStore({ cart: [] });
				const actions = getActions();
				newCart.map((prod, index) => {
					if (i != index) {
						setStore({
							cart: [...store.cart, newCart[index]]
						});
					}
				});
				actions.calculateCartTotal();
			},
			calculateCartTotal: () => {
				const store = getStore();
				const actions = getActions();
				let total = 0;
				//actions.deleteFavorite(store.favorite.indexOf("(Empty)"));
				if (store.cart != []) {
					store.cart.map((prod, index) => {
						total += parseInt(store.cart[index].price);
					});
					setStore({ cartTotal: total });
				}
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
			},
			processOrder: details => {
				const store = getStore();

				setStore({
					orders: [...store.orders, details],
					cart: []
				});
			},
			getOrders: async () => {
				const store = getStore();

				const URL = `${store.apiurl}/orders`; // API to get placed orders
				const CONFIG = {
					method: "GET"
					// headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
					// mode: "no-cors"
				};

				try {
					const resp = await fetch(URL, CONFIG);
					if (resp.status !== 200) {
						alert("Error");
						return false;
					}

					const data = await resp.json();
					console.log("Orders Loaded Successfully");
					console.log(data);
					setStore({ orders: data });
					setStore({ ordersLoaded: true });
					return true;
				} catch (error) {
					console.error("ERROR", error);
				}
			},
			getProducts: async () => {
				const store = getStore();

				const URL = `${store.apiurl}/product`; // API to get all products
				const CONFIG = {
					method: "GET"
					// headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
					// mode: "no-cors"
				};

				try {
					const resp = await fetch(URL, CONFIG);
					if (resp.status !== 200) {
						alert("Error");
						return false;
					}

					const data = await resp.json();
					console.log("Orders Loaded Successfully");
					console.log(data);
					setStore({ inventory: data });
					setStore({ inventoryUpdated: true });
					return true;
				} catch (error) {
					console.error("ERROR", error);
				}
			}

			// getOrders: () => {
			// 	const store = getStore();
			// 	fetch(process.env.BACKEND_URL + "/api/orders", {
			// 		method: "GET",
			// 		headers: {
			// 			"Content-Type": "application/json"
			// 		}
			// 	})
			// 		.then(response => {
			// 			if (!response.ok) {
			// 				alert("The data submitted is incorrect");
			// 				throw Error(response.statusText);
			// 			}
			// 			return response.json();
			// 		})
			// 		.then(data => {
			// 			console.log("Orders Loaded Successfully");
			// 			setStore({ orders: data });
			// 			setStore({ ordersLoaded: true });
			// 		})

			// 		.catch(error => {
			// 			console.error("Error:", error);
			// 		});
			// }
		}
	};
};

export default getState;
