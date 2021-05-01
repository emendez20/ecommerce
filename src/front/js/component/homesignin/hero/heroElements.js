import styled from "styled-components";
import ImgBg from "../../../../img/img1.jpg";
export const HeroContainer = styled.div`
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${ImgBg}) !important;
	height: 100vh !important;
	background-position: center !important;
	background-size: cover !important;
`;
export const HeroContent = styled.div`
	height: calc(100vh-80px) !important;
	max-height: 100% !important;
	padding: 0rem calc(100vw-1300px) / 2 !important;
`;
export const HeroItems = styled.div`
	display: flex !important;
	flex-direction: column !important;
	justify-content: center !important;
	align-items: flex-start !important;
	height: 100vh !important;
	max-height: 100% !important;
	padding: 0 2rem !important;
	width: 650px !important;
	color: #fff !important;
	text-transform: uppercase !important;
	line-height: 1 !important;
	font-weight: bold !important;
	@media screen and (max-width: 650px) {
		width: 100% !important;
	}
`;
export const HeroH1 = styled.h1`
	font-size: clamp(2.5rem, 10vw, 5rem) !important;
	margin-bottom: 1rem !important;
	box-shadow: 3px 5px #fdcb6e !important;
	letter-spacing: 3px !important;
`;
export const HeroP = styled.p`
	font-size: clamp(2rem, 2.5vw, 3rem) !important;
	margin-bottom: 2rem !important;
`;
export const HeroBtn = styled.button`
	font-size: 1.4rem !important;
	padding: 1rem 4rem !important;
	border: none !important;
	background: #00b894 !important;
	color: #fff !important;
	transition: 0.2 ease-out !important;
	&:hover {
		background: #fdcb6e !important;
		transition: 0.2 ease-out !important;
		cursor: pointer !important;
		color: #000 !important;
	}
`;
