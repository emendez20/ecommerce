import React from "react";
import { Link } from "react-router-dom";

//Style
import { Nav, Navbar, NavDropdown, Col, Badge } from "react-bootstrap";
//import "../../styles/login.scss";

//Img
//import rigoImageUrl from "../../img/rigo-baby.jpg";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Components
import { Brand } from "./brand";
import { Search } from "./search";

export const NavbarStore = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Brand />
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Link to="/apphome">
						<Nav.Link href="#home">
							<i className="fa fa-home" />
						</Nav.Link>
					</Link>
					<Link to="/my-cart">
						<Nav.Link href="#myCart">
							<i className="fas fa-shopping-cart" />
							<Badge variant="light">9</Badge>
						</Nav.Link>
					</Link>

					<NavDropdown title="Usuario" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Tienda</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Ventas</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Inventario</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Col>
					<Search />
				</Col>
			</Navbar.Collapse>
		</Navbar>
	);
};
