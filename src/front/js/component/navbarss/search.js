import React from "react";
//import { Link } from "react-router-dom";

//Style
import { FormControl, Button, InputGroup, Col } from "react-bootstrap";
//import "../../styles/login.scss";

//Img
//import rigoImageUrl from "../../img/rigo-baby.jpg";

//Components
//import { Brand } from "./brand";

export const Search = () => {
	return (
		<>
			<Col lg>
				<InputGroup className="">
					<FormControl type="text" placeholder="Buscar productos" className="mr-sm-2" />
					<InputGroup.Append>
						<Button variant="outline-secondary">
							<i className="fa fa-search" />
						</Button>
					</InputGroup.Append>
				</InputGroup>
			</Col>
		</>
	);
};
