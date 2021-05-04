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

export const NavbarConsumer = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Brand />
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Link to="/apphome-page">
						<Nav.Link href="#home">
							<i className="fa fa-home" />
						</Nav.Link>
					</Link>
					<Link to="/my-cart-page">
						<Nav.Link href="#myCart">
							<i className="fas fa-shopping-cart" />
							<Badge variant="light">9</Badge>
						</Nav.Link>
					</Link>

					<NavDropdown title="Usuario" id="collasible-nav-dropdown">
						<Link to="/my-cart-page" />
						<NavDropdown.Item href="#action/3.1">Mi Perfil</NavDropdown.Item>

						<NavDropdown.Item href="#action/3.2">Mis Compras</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Mi WL</NavDropdown.Item>
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

{
	/*
    Maquetado de ConsumerNavbar
    <Brand>
    ->Button Home
    ->Button Carrito
    ->Button UserConfiguration(dropdown):   -NombreUsuario  (opcional)
                                            -<a> Mi Perfil
                                            -<a> Mis Compras
                                            -<a> Wish List
                                
                                            -Button LogOut


            <Link to="/"></Link>
				<span className="navbar-brand mb-0 h1">Hello Rigo!</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
            </div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Brand />
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<Search />
			</div>

			{/*Home... <Link to="/"></Link>*/

	<Link to="/">
		<a className="nav-item nav-link active" href="#">
			<i className="fa fa-home" />
			<span className="sr-only">Home</span>
		</a>
	</Link>;

	/*Carrito <Link to="/cart-page"></Link>*
			<a className="nav-item nav-link" href="#">
				<i className="fas fa-shopping-cart" />
				<span className="sr-only">Carrito</span>
			</a>

			{/*Usuario-Dropdown
			<div className="nav-item dropdown">
				<a
					className="nav-item nav-link dropdown-toggle user-action"
					href="#"
					id="navbarDropdown"
					role="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					<i className="fas fa-user" />
					<span className="sr-only">Usuario</span>
					<b className="caret" />
				</a>
				<div className="dropdown-menu" aria-labelledby="navbarDropdown">
					{/*Perfil usuario <Link to="/profile-page"></Link>
					<a className="dropdown-item" href="#">
						Mi Perfil
					</a>
					{/*Perfil usuario <Link to="/bill-page"></Link>
					<a className="dropdown-item" href="#">
						Mis Compras
					</a>
					{/*Perfil usuario <Link to="/wish-list-page"></Link>
					<a className="dropdown-item" href="#">
						Mi Lista
					</a>
					<div className="dropdown-divider">
						<a className="dropdown-item" href="#">
							<i className="material-icons">&#xE8AC;</i> Logout
						</a>
					</div>
				</div>
			</div>
		</nav>
                                            

*/
}
