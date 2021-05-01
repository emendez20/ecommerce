import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	min-height: 692px !important;
	position: fixed !important;
	bottom: 0 !important;
	left: 0 !important;
	right: 0 !important;
	z-index: 0 !important;
	overflow: hidden !important;
	background: #55efc4 !important;
`;

export const FormWrap = styled.div`
	height: 100% !important;
	display: flex !important;
	flex-direction: column !important;
	justify-content: center !important;
	@media screen and (max-width: 400px) {
		height: 80% !important;
	}
`;

export const Icon = styled(Link)`
	margin-left: 32px !important;
	margin-top: 32px !important;
	text-decoration: none !important;
	color: #fff !important;
	font-weight: 700 !important;
	font-size: 32px !important;
	@media screen and (max-width: 480px) {
		margin-left: 16px !important;
		margin-top: 8px !important;
	}
`;

export const FormContent = styled.div`
	height: 100% !important;
	display: flex !important;
	flex-direction: column !important;
	justify-content: center !important;
	@media screen and (max-width: 480px) {
		padding: 10px !important;
	}
`;

export const Form = styled.form`
	background: #010101 !important;
	max-width: 400px !important;
	height: auto !important;
	width: 100% !important;
	z-index: 1 !important;
	display: grid !important;
	margin: 0 auto !important;
	padding: 80px 32px !important;
	border-radius: 4px !important;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9) !important;
	@media screen and (max-width: 400px) {
		padding: 32px 32px !important;
	}
`;

export const FormH1 = styled.h1`
	margin-bottom: 40px !important;
	color: #fff !important;
	font-size: 20px !important;
	font-weight: 400 !important;
	text-align: center !important;
`;

export const FormLabel = styled.label`
	margin-bottom: 8px !important;
	font-size: 14px !important;
	color: #fff !important;
`;

export const FormInput = styled.input`
	padding: 16px 16px !important;
	margin-bottom: 32px !important;
	border: none !important;
	border-radius: 4px !important;
`;

export const FormButton = styled.button`
	background: #01bf71 !important;
	padding: 16px 0 !important;
	border: none !important;
	border-radius: 4px !important;
	color: #fff !important;
	font-size: 20px !important;
	cursor: pointer !important;
`;

export const Text = styled.span`
	text-align: center !important;
	margin-top: 24px !important;
	color: #fff !important;
	font-size: 14px !important;
`;
