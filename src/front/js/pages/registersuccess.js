import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const RegisterSuccess = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Alert variant="success">
				<Alert.Heading>Thank you for registering!</Alert.Heading>
				<p>You are all set to enjoy the best art in town...</p>
				<hr />
				<Link to="/login">Login</Link>
			</Alert>
		</>
	);
};
