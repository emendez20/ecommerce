import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavLinks2,
	NavBtn,
	NavBtnLink
} from "../../styles/navbarElementsin";
const Navbarin = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);
	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);
	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<>
			<IconContext.Provider value={{ color: "#000" }}>
				<Nav scrollNav={scrollNav}>
					<NavbarContainer>
						<NavLogo to="/" onClick={toggleHome}>
							amArte
						</NavLogo>
						<MobileIcon onClick={toggle}>
							<FaBars />
						</MobileIcon>
						<NavMenu>
							<NavItem>
								<NavLinks2 to="/products">Products</NavLinks2>
							</NavItem>
							<NavItem>
								<NavLinks2 to="/viewOrders">View My Orders</NavLinks2>
							</NavItem>
						</NavMenu>
						<NavBtn>
							<NavBtnLink scrollNav={scrollNav} to="/cart">
								Cart
							</NavBtnLink>
							<NavBtnLink scrollNav={scrollNav} to="/logout">
								Logout
							</NavBtnLink>
						</NavBtn>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};
export default Navbarin;
