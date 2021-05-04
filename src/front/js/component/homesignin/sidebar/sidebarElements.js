import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
	position: fixed !important;
	z-index: 999 !important;
	width: 350px !important;
	height: 100% !important;
	background: #fdcb6e !important;
	display: grid !important;
	align-items: center !important;
	top: 0 !important;
	transition: 0.3s ease-in-out !important;
	right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")} !important;
	@media screen and (max-width: 400px) {
		width: 100% !important;
	}
`;
export const CloseIcon = styled(FaTimes)`
	color: #fff !important;
`;
export const Icon = styled.div`
	position: absolute !important;
	top: 1.2rem !important;
	right: 1.5rem !important;
	background: transparent !important;
	border: transparent !important;
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
	grid-template-rows: repeat(2, 80px) !important;
	text-align: center !important;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(2, 60px) !important;
	}
`;

export const SidebarLink = styled(LinkR)`
	display: flex !important;
	align-items: center !important;
	justify-content: center !important;
	font-size: 1.5rem !important;
	text-decoration: none !important;
	list-style: none !important;
	transition: 0.2s ease-in-out !important;
	color: #000 !important;
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
	background: #01bf71 !important;
	white-space: nowrap !important;
	padding: 16px 64px !important;
	color: #fff !important;
	font-size: 16px !important;
	outline: none !important;
	border: none !important;
	cursor: pointer !important;
	transition: all 0.2s ease-in-out !important;
	text-decoration: none !important;

	&:hover {
		transition: all 0.2s ease-in-out !important;
		background: #00b894 !important;
		color: #010606 !important;
	}
`;
