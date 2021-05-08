import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const OrderConfirmation = () => {
	const { store, actions } = useContext(Context);

	return (
		<div style={{ backgroundColor: "#101522", height: "800px" }}>
			<Alert variant="success" style={{ height: "200px", width: "800px" }}>
				<Alert.Heading>Thank you for your order!</Alert.Heading>
				<p>Your paypal receipt has been sent to your email address.</p>
				<hr />
				<p className="mb-0">
					Your purchase will arrive within 1-3 business days. A tracking number will be email to you with
					instructions on how to check the status of your delivery.
				</p>
			</Alert>
			<Link to="/viewOrders">View my Orders</Link>
		</div>
	);
};
