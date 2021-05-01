import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import ImgBg from "../../../img/img3.jpg";

export const HeroContainer = styled.div`
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${ImgBg}) !important;
	background-position: center !important;
	background-size: cover !important;
	display: flex !important;
	justify-content: center !important;
	align-items: center !important;
	padding: 0 30px !important;
	height: 800px !important;
	position: relative !important;
	z-index: 1 !important;
	:before {
		content: "" !important;
		position: absolute !important;
		top: 0 !important;
		right: 0 !important;
		left: 0 !important;
		bottom: 0 !important;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%)
			linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%) !important;
		z-index: 2 !important;
	}
`;
export const HeroBg = styled.div`
	position: absolute !important;
	top: 0 !important;
	right: 0 !important;
	bottom: 0 !important;
	left: 0 !important;
	width: 100% !important;
	height: 100% !important;
	overflow: hidden !important;
`;
export const VideoBg = styled.video`
	width: 100% !important;
	height: 100% !important;
	-o-object-fit: cover !important;
	object-fit: cover !important;
	background: #232a34 !important;
`;

export const HeroContent = styled.div`
	z-index: 3 !important;
	position: absolute !important;
	max-width: 1200px !important;
	padding: 8px 24px !important;
	display: flex !important;
	flex-direction: column !important;
	align-items: center !important;
`;
export const HeroH1 = styled.h1`
	font-size: 48px !important;
	text-align: center !important;
	color: #fff !important;

	@media screen and (max-width: 768px) {
		font-size: 40px !important;
	}

	@media screen and (max-width: 480px) {
		font-size: 32px !important;
	}
`;

export const HeroP = styled.p`
	margin-top: 24px !important;
	text-align: center !important;
	max-width: 600px !important;
	color: #fff !important;
	font-size: 24px !important;
	@media screen and (max-width: 768px) {
		font-size: 24px !important;
	}

	@media screen and (max-width: 480px) {
		font-size: 18px !important;
	}
`;

export const HeroBtnWrapper = styled.div`
	margin-top: 32px !important;
	display: flex !important;
	flex-direction: column !important;
	align-items: center !important;
`;

export const ArrowForward = styled(MdArrowForward)`
	margin-left: 8px !important;
	font-size: 20px !important;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
	margin-left: 8px !important;
	font-size: 20px !important;
`;
