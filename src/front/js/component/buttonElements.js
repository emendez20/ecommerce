import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
	border-radius: 50px !important;
	white-space: nowrap !important;
	outline: none !important;
	border: none !important;
	cursor: pointer !important;
	display: flex !important;
	justify-content: center !important;
	align-items: center !important;
	transition: all 0.2s ease-in-out !important;
	font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")} !important;
	color: ${({ dark }) => (dark ? "#010606" : "#fff")} !important;
	padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")} !important;
	background: ${({ primary }) => (primary ? "#01BF71" : "#010606")} !important;

	&:hover {
		transition: all 0.2s ease-in-out !important;
		background: ${({ primary }) => (primary ? "#fff" : "#01BF71")} !important;
	}
`;
