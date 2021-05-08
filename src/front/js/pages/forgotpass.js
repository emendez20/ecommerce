import { Context } from "../store/appContext";
import React, { useState } from "react";
import { Container, InputGroup, Button, Image, Row, FormGroup, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// import LogoImg from "../../img/Imagen1.png";
import swal from "sweetalert";
// import "../../styles/login.scss";

const ForgotPass = () => {
	const [email, setEmail] = useState("");

	const ShowAlert = () => {
		if (email.includes("@") && email.includes(".")) {
			swal({
				title: "Successfully!",
				text: "We already sent you the code to your e-mail!",
				icon: "success",
				button: "Ok!",
				timer: "3000"
			});
		} else {
			swal({
				title: "Error",
				text: "Please check your e-mail address",
				icon: "warning",
				button: "Ok!",
				timer: "3000"
			});
		}
	};
	return (
		<Container id="contenedor1" className="text-center p-3">
			<Row className="justify-content-center">
				<Col className="col-md-4 formulary p-5" style={{ backgroundColor: "#101522" }}>
					<Form action="">
						<FormGroup className="text-center pb-3">
							<h1 className="text-light">Account Recovery</h1>
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<label>Enter your email</label>
							<input
								type="text"
								className="form-control"
								placeholder="E-mail"
								onChange={e => setEmail(e.target.value)}
							/>
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<Button className="btn btn-block signin" onClick={() => ShowAlert()}>
								Enviar
							</Button>
						</FormGroup>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default ForgotPass;
