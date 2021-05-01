import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./navbarElements";
import "../../../../styles/home.scss";
const Navbar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavLink to="/"> Ticompras</NavLink>
				<NavIcon onClick={toggle}>
					<p>Menu</p>
					<Bars id="hola" />
				</NavIcon>
			</Nav>
		</>
	);
};
export default Navbar;
