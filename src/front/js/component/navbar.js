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
} from "../../styles/navbarElements";
const Navbar = ({ toggle }) => {
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
			<IconContext.Provider value={{ color: "#fff" }}>
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
								<NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
									Who we are
								</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks
									to="services"
									smooth={true}
									duration={500}
									spy={true}
									exact="true"
									offset={-80}>
									What we offer
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="signup" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
									Contact
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks2 to="/signup">Products</NavLinks2>
							</NavItem>
						</NavMenu>
						<NavBtn>
							<NavBtnLink scrollNav={scrollNav} to="/signin">
								Cart
							</NavBtnLink>
							<NavBtnLink scrollNav={scrollNav} to="/signin">
								Sign out
							</NavBtnLink>
						</NavBtn>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};
export default Navbar;
