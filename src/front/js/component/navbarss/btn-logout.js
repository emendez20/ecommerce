import React from "react";
import { Button } from "react-bootstrap";

//import "../../styles/register.scss";
//import rigoImageUrl from "../../img/rigo-baby.jpg";
//import { LogInForm } from "../component/login/login-form";

export const BtnLogout = () => {
	return (
		<>
			<Button className="btn btn-primary" active>
                <i class="material-icons">&#xE8AC;</i>
                <span>Logout</span>
			</Button>
		</>
	);
};