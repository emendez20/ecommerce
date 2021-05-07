import { Context } from "../store/appContext";
import React, { useContext, useState, useEffect } from "react";
import { Container, InputGroup, Button, Image, Row, FormGroup, Col, Form } from "react-bootstrap";
import { Link, useHistory, Redirect } from "react-router-dom";

const Register = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [redirect, setRedirect] = useState(false);

	const history = useHistory();
	const handleSubmit = e => {
		e.preventDefault();
		if (email === "" || password === "") {
			alert("Please fill all the entries");
		}

		// FETCH
		const data = {
			password: password,
			email: email.toLowerCase()
		};

		fetch(process.env.BACKEND_URL + "/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => {
				if (!response.ok) {
					alert("The data submitted is incorrect");
					throw Error(response.statusText);
				} else {
					setRedirect(true);
				}
				return response.json();
			})
			.then(data => {
				console.log("Register Successful");
			})

			.catch(error => {
				console.error("Error:", error);
			});
	};

	return (
		<div id="body-login">
			{redirect === false ? (
				<Container id="contenedor1" className="text-center p-3">
					<Row className="justify-content-center">
						<Col className="col-md-4 formulary">
							<Form action=" " onSubmit={e => handleSubmit(e)}>
								<FormGroup className="text-center pb-3">
									<h1 className="text-light">Register</h1>
								</FormGroup>
								<FormGroup className="mx-sm-4 pb-3">
									<input
										type="text"
										className="form-control"
										placeholder="E-mail"
										onChange={e => setEmail(e.target.value)}
									/>
								</FormGroup>
								<FormGroup className="mx-sm-4 pb-3">
									<input
										type="password"
										className="form-control"
										placeholder="Password"
										onChange={e => setPassword(e.target.value)}
									/>
								</FormGroup>
								<FormGroup className="mx-sm-4 pb-3">
									<Button type="submit" className="btn btn-block signup">
										Register
									</Button>
								</FormGroup>
							</Form>
						</Col>
					</Row>
				</Container>
			) : (
				<Redirect to="/registersuccess" />
			)}
		</div>
	);
};

export default Register;
