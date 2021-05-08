import { Context } from "../store/appContext";
import React, { useState, useContext, useEffect } from "react";
import { Container, InputGroup, Button, Image, Row, FormGroup, Col, Form } from "react-bootstrap";
import { Link, useHistory, Redirect } from "react-router-dom";
import Products from "./products";

const Login = () => {
	// const { store, actions } = useContext(Context);
	// const [store, actions] = useContext();
	const [email, setEmail] = useState("");
	const [redirect, setRedirect] = useState(false);
	const [password, setPassword] = useState("");
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

		fetch(process.env.BACKEND_URL + "/api/login", {
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
				sessionStorage.setItem("token", data.token);
				sessionStorage.setItem("authenticated", true);
				console.log("Succesful log in");
			})

			.catch(error => {
				console.error("Error:", error);
			});
	};

	return (
		<div id="body-login">
			{redirect ? <Redirect to="/products" /> : ""}
			<Container id="contenedor1" className="text-center p-3">
				<Row className="justify-content-center">
					<Col className="col-md-4 formulary p-5" style={{ backgroundColor: "#101522" }}>
						<Form action="" onSubmit={e => handleSubmit(e)}>
							<FormGroup className="text-center pb-3">
								<h1 className="text-light">Login</h1>
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3">
								<input
									type="text"
									className="form-control"
									placeholder="Email"
									required
									onChange={e => setEmail(e.target.value)}
								/>
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3">
								<input
									type="password"
									className="form-control"
									placeholder="Password"
									required
									onChange={e => setPassword(e.target.value)}
								/>
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3">
								<Button className="btn btn-info ml-1" type="submit">
									Log in
								</Button>
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3 text-center">
								<Link to="/register">
									<input
										type="submit"
										className="btn btn-block register text-white"
										value="Create Account"
									/>
								</Link>
							</FormGroup>

							<Link to="/forgotPass">
								<input className="btn btn-block forgotPass text-white" value="Forgot your password?" />
							</Link>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Login;
