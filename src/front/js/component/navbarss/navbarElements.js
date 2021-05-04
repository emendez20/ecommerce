import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
	background: ${({ scrollNav }) => (scrollNav ? "#55efc4" : "transparent")}!important;
	margin-top: -80px !important;
	height: 80px !important;
	display: flex !important;
	justify-content: center !important;
	font-size: 1rem !important;
	position: sticky !important;
	top: 0 !important;
	z-index: 10 !important;
	@media screen and (max-width: 960px) {
		transition: 0.8s all ease !important;
	}
`;
export const NavbarContainer = styled.div`
	display: flex !important;
	justify-content: space-between !important;
	height: 80px !important;
	z-index: 1 !important;
	width: 100% !important;
	padding: 0 24px !important;
	max-width: 1100px !important;
`;
export const NavLogo = styled(LinkR)`
	color: #fff !important;
	text-decoration: none !important;
	justify-self: flex-start !important;
	cursor: pointer !important;
	font-size: 1.5rem !important;
	display: flex !important;
	align-items: center !important;
	margin-left: 24px !important;
	font-weight: bold !important;
`;
export const MobileIcon = styled.div`
	display: none !important;
	@media screen and (max-width: 768px) {
		display: block !important;
		position: absolute !important;
		top: 0 !important;
		right: 0 !important;
		transform: translate(-100%, 60%) !important;
		font-size: 1.8rem !important;
		cursor: pointer !important;
		color: #fff !important;
	}
`;
export const NavMenu = styled.ul`
	display: flex !important;
	align-items: center !important;
	list-style: none !important;
	text-align: center !important;
	margin-right: -22px !important;
	@media screen and (max-width: 768px) {
		display: none !important;
	}
`;
export const NavItem = styled.li`
	height: 80px !important;
`;
export const NavLinks = styled(LinkScroll)`
	color: #fff !important;
	display: flex !important;
	align-items: center !important;
	text-decoration: none !important;
	padding: 0 1rem !important;
	height: 100% !important;
	cursor: pointer !important;
	&.active {
		border-bottom: 3px solid #01bf71 !important;
	}
`;
export const NavBtn = styled.nav`
	display: flex !important;
	align-items: center !important;
	@media screen and (max-width: 768px) {
		display: none !important;
	}
`;
export const NavBtnLink = styled(LinkR)`
	border-radius: 50px !important;
	background: #01bf71 !important;
	white-space: nowrap !important;
	padding: 10px 22px !important;
	color: #010606 !important;
	font-size: 16px !important;
	outline: none !important;
	border: none !important;
	cursor: pointer !important;
	transition: all 0.2s ease-in-out !important;
	text-decoration: none !important;

	&:hover {
		transition: all 0.2s ease-in-out !important;
		background: #fff !important;
		color: #010606 !important;
	}
`;
