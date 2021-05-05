import React from "react";
import { Link } from "react-router-dom";

//Style
//import "../../../styles/login.scss";
import { Form, Button, Container } from "react-bootstrap";

//Img
//import rigoImageUrl from "../../img/rigo-baby.jpg";

//Components

export const CostumerForm = () => {
	return (
		<Form>
			<h4>
				<strong>¡Bienvenido a Ticompras!</strong>
			</h4>
			<Form.Group controlId="controlEmail">
				<Form.Label>Nombre Completo:</Form.Label>
				<Form.Control type="text" placeholder=" " required />
			</Form.Group>

			<Form.Group controlId="controlEmail">
				<Form.Label>Ingrese su Correo Electrónico:</Form.Label>
				<Form.Control type="email" placeholder="user@mail.com" required />
			</Form.Group>

			<Form.Group controlId="controlPassword">
				<Form.Label>Ingrese una contraseña:</Form.Label>
				<Form.Control type="password" placeholder="" required />
			</Form.Group>

			<Form.Group controlId="controlPassword">
				<Form.Label>Verifique su contraseña</Form.Label>
				<Form.Control type="password" placeholder="Repita su contraseña" required />
			</Form.Group>

			<Button variant="dark" type="submit">
				Crea tu cuenta de compras
			</Button>
			<hr />

			<Container style={{ color: "black" }}>
				<small className="text-muted">
					Al crear una cuenta aceptas los
					<Link to="/"> terminos y condiciones de uso </Link>
					de Ticompras.
				</small>
			</Container>
		</Form>
	);
};
