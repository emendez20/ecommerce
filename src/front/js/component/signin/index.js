import React, { useState, useContext, useEffect } from "react";
import {
	Container,
	Form,
	FormWrap,
	Icon,
	FormContent,
	FormH1,
	FormLabel,
	FormInput,
	FormButton
} from "./signinElements";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../../store/appContext";

// import { Container, InputGroup, Button, Image, Row, FormGroup, Col, Form } from "react-bootstrap";
// import { Link, useHistory } from "react-router-dom";

const SignIn = () => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	// const history = useHistory();

	// useEffect(() => {
	// 	actions.getToken();
	// 	if (store.login) {
	// 		history.push("/homesignin");
	// 	}
	// }, []);
	return (
		<>
			<Container fluid>
				<FormWrap>
<<<<<<< HEAD
					<Icon to="/">Ticompras</Icon>
					<FormContent>
						<Form action="#">
							<FormH1> Sign in to your account</FormH1>
							<FormLabel htmlFor="for"> Email</FormLabel>
							<FormInput type="email" required onChange={e => setUser(e.target.value)} />
							<FormLabel htmlFor="for"> Password</FormLabel>
							<FormInput type="password" required onChange={e => setPassword(e.target.value)} />

							<FormButton className="dropdown-item" id="drop-item">
								<Link
									onClick={() => {
										actions.login(user, password);
									}}
									to="/homesignin">
									Login
								</Link>
							</FormButton>
							<Text>Forgot Password</Text>
=======
					<Icon to="/">
						<i className="fas fa-arrow-circle-left" />
					</Icon>
					<FormContent>
						<Form action="#">
							<FormH1> ¡Bienvenido!</FormH1>
							<FormLabel htmlFor="for">Correo electrónico</FormLabel>
							<FormInput type="email" required />
							<FormLabel htmlFor="for">Contraseña</FormLabel>
							<FormInput type="password" required />
							<FormButton type="submit">Iniciar Sesión</FormButton>
>>>>>>> 0fa99cc479ac574489ec8b752fc31bb17e481aae
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		</>
	);
};
export default SignIn;
