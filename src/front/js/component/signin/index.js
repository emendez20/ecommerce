import React from "react";
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

const SignIn = () => {
	return (
		<>
			<Container fluid>
				<FormWrap>
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
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		</>
	);
};
export default SignIn;
