import React from "react";
//import { Link } from "react-router-dom";

//Style
import { Navbar, Image } from "react-bootstrap";
//import "../../styles/login.scss";

//Img
//import rigoImageUrl from "../../img/rigo-baby.jpg";

//Components
//import { Brand } from "./brand";

export const Brand = () => {
	return (
		<>
			<Navbar.Brand href="#home">
				<Image src="holder.js/30x30" alt="" width="30" height="30" className="d-inline-block align-top" />
				Ticompras
			</Navbar.Brand>
		</>
	);
};
