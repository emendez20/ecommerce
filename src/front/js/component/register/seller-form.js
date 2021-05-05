import React from "react";
import { Link } from "react-router-dom";

//Style
//import "../../../styles/login.scss";
import { Form, Button, Container } from "react-bootstrap";

//Img
//import rigoImageUrl from "../../img/rigo-baby.jpg";

//Components

export const SellerForm = () => {
	return (
		<Form>
			<h4>
				<strong>Ingrese los datos de la tienda</strong>
			</h4>
			<br />
			<Form.Group controlId="controlEmail">
				<Form.Label>Ingrese el nombre de la Tienda</Form.Label>
				<Form.Control type="text" placeholder="" required />
			</Form.Group>

			<Form.Group controlId="exampleForm.ControlTextarea1">
				<Form.Label>Describa su tienda</Form.Label>
				<Form.Control as="textarea" rows={2} required />
			</Form.Group>

			<h4>
				<strong>Ingrese los datos de la cuenta y de contacto de la tienda</strong>
			</h4>

			<Form.Group controlId="controlPhone">
				<Form.Label>Ingrese el número telefónico</Form.Label>
				<Form.Control type="text" placeholder="2222 22 22" required />
			</Form.Group>

			<Form.Group controlId="controlEmail">
				<Form.Label>Ingrese el correo electrónico</Form.Label>
				<Form.Control type="email" placeholder="store@mail.com" required />
			</Form.Group>

			<Form.Group controlId="controlPassword">
				<Form.Label>Ingrese una contraseña</Form.Label>
				<Form.Control type="password" placeholder="" required />
				<Form.Text id="passwordHelpInline" muted>
					Su contraseña debe contener un mínimo de 6 letras y un máximo de 20 letras.
				</Form.Text>
			</Form.Group>

			<Form.Group controlId="controlPassword">
				<Form.Label>Verifique su contraseña</Form.Label>
				<Form.Control type="password" placeholder="Repita su contraseña" required />
			</Form.Group>

			<h4>
				<strong>Suba su imagen de portada</strong>
			</h4>

			<Form.Group>
				<Form.File id="FormControlFile1" label="File input" />
				<Form.Text id="passwordHelpInline" muted>
					Tamaño recomendado 400px x 200px
				</Form.Text>
			</Form.Group>

			<Button variant="dark" type="submit">
				Cree su tienda
			</Button>

			<hr />
			<Container style={{ background: "#dfe6e9", color: "black" }}>
				<small className="text-muted">
					Al crear una cuenta aceptas los
					<Link to="/"> terminos y condiciones de uso </Link>
					de Ticompras.
				</small>
			</Container>
		</Form>
	);
};
