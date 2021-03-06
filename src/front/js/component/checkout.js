import React, { useRef, useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";

export default function Checkout() {
	const paypal = useRef();
	const { store, actions } = useContext(Context);
	const [redirect, setRedirect] = useState(false);
	const [orderDetails, setOrderDetails] = useState({});

	useEffect(() => {
		window.paypal
			.Buttons({
				createOrder: (data, act, err) => {
					return act.order.create({
						intent: "CAPTURE",
						purchase_units: [
							{
								description: "New Purchase Order",
								amount: {
									currency_code: "USD",
									value: store.cartTotal
								}
							}
						]
					});
				},
				onApprove: async (data, act) => {
					const order = await act.order.capture();
					console.log(order);
					// actions.processOrder(store.cart);
					setOrderDetails(order);

					//THIS FETCH LOGS THE ORDER TO THE ORDERS TABLE IN THE DATABASE
					fetch(process.env.BACKEND_URL + "/api/orders", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ date: new Date(), amount: store.cartTotal, status: "RECEIVED" })
					})
						.then(response => {
							if (!response.ok) {
								alert("The data submitted is incorrect");
								throw Error(response.statusText);
							}
							return response.json();
						})
						.then(data => {
							console.log("ORDER ADDED");
						})

						.catch(error => {
							console.error("Error:", error);
						});
					//THIS FETCH WILL MODIFY THE PRODUCT IN THE DATABASE TO UPDATE THE AVAILABLE COLUMN FROM TRUE TO FALSE
					store.cart.map((element, index) =>
						fetch(process.env.BACKEND_URL + "/api/product/" + element.code, {
							method: "PUT",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify({ available: false })
						})
							.then(response => {
								if (!response.ok) {
									alert("The data submitted is incorrect");
									throw Error(response.statusText);
								}
								return response.json();
							})
							.then(data => {
								console.log("PRODUCT AVAILABILITY UPDATED");
							})

							.catch(error => {
								console.error("Error:", error);
							})
					);

					order.status == "COMPLETED" ? setRedirect(true) : null;
				},
				onError: err => {
					console.log(err);
				}
			})
			.render(paypal.current);
	}, []);
	// actions.saveOrder(orderDetails);
	return (
		<div>
			{/* {actions.processOrder(orderDetails)} */}
			{redirect === false ? <div ref={paypal} /> : <Redirect to="/orderconfirmation" />}
			<div ref={paypal} />
		</div>
	);
}
