import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const SidebarContainer = styled.aside`
	position: fixed !important;
	z-index: 999 !important;
	width: 100% !important;
	height: 100% !important;
	background: #ab274f !important;
	display: grid !important;
	align-items: center !important;
	left: 0 !important;
	transition: 0.3s ease-in-out !important;
	opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")} !important;
	top: ${({ isOpen }) => (isOpen ? "0" : "-100%")} !important;
`;
export const CloseIcon = styled(FaTimes)`
	color: #fff !important;
`;
export const Icon = styled.div`
	position: absolute !important;
	top: 1.2rem !important;
	right: 1.5rem !important;
	background: transparent !important;
	font-size: 2rem !important;
	cursor: pointer !important;
	outline: none !important;
`;

export const SidebarWrapper = styled.div`
	color: #fff !important;
`;

export const SidebarMenu = styled.ul`
	display: grid !important;
	grid-template-columns: 1fr !important;
	grid-template-rows: repeat(4, 80px) !important;
	text-align: center !important;
	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(4, 60px) !important;
	}
`;

export const SidebarLink = styled(LinkScroll)`
	display: flex !important;
	align-items: center !important;
	justify-content: center !important;
	font-size: 1.5rem !important;
	text-decoration: none !important;
	list-style: none !important;
	transition: 0.2s ease-in-out !important;
	color: #fff !important;
	cursor: pointer !important;
	&:hover {
		color: #01bf71 !important;
		transition: 0.2s ease-in-out !important;
	}
`;

export const SideBtnWrap = styled.div`
	display: flex !important;
	justify-content: center !important;
`;
export const SidebarRoute = styled(LinkR)`
	border-radius: 12px !important;
	margin: 10px;
	background: black !important;
	white-space: nowrap !important;
	padding: 16px 20px !important;
	color: #fff !important;
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
