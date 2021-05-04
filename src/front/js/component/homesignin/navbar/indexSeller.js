import React from "react";
import { Nav, NavLink, NavIcon, Bars, Bars2 } from "./navbarElements";
import "../../../../styles/home.scss";
const Navbar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavLink to="/"> Ticompras</NavLink>
				<NavIcon>
					<p>Menu</p>
					<Bars onClick={toggle} />
				</NavIcon>
			</Nav>
		</>
	);
};
export default Navbar;
