import styled from "styled-components";
import { NavLink as LinkR } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { AiOutlineMenuFold } from "react-icons/ai";

export const Nav = styled.nav`
	background: transparent !important;
	height: 80px !important;
	display: flex !important;
	justify-content: center !important;
	font-weight: 700 !important;
`;
export const NavLink = styled(LinkR)`
	color: #fff !important;
	text-decoration: none !important;
	cursor: pointer !important;
	font-size: 2rem !important;
	display: flex !important;
	align-items: center !important;
	@media screen and (max-width: 400px) {
		position: absolute !important;
		top: 10px !important;
		left: 25px !important;
	}
`;
export const NavIcon = styled.div`
	display: block !important;
	position: absolute !important;
	top: 0 !important;
	right: 0 !important;
	cursor: pointer !important;
	color: #fff !important;

	p {
		transform: translate(-175%, 100%) !important;
		font-weight: bold !important;
	}
`;
export const Bars = styled(AiOutlineMenuFold)`
	font-size: 2 rem !important;
	transform: translate(-50%, -15%) !important;
`;
