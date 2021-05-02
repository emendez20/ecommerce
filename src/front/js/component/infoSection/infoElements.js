import styled from "styled-components";

export const InfoContainer = styled.div`
	color: #fff !important;
	background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")} !important;
	@media screen and (max-width: 768px) {
		padding: 100px 0 !important;
	}
`;

export const InfoWrapper = styled.div`
	display: grid !important;
	z-index: 1 !important;
	height: 860px !important;
	width: 100% !important;
	max-width: 1100px !important;
	margin-right: auto !important;
	margin-left: auto !important;
	padding: 0 24px !important;
	justify-content: center !important;
`;

export const InfoRow = styled.div`
	display: grid !important;
	grid-auto-columns: minmax(auto, 1fr) !important;
	align-items: center !important;
	grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)} !important;

	@media screen and (max-width: 768px) {
		grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)} !important;
	}
`;
export const Column1 = styled.div`
	margin-bottom: 15px !important;
	padding: 0 15px !important;
	grid-area: col1 !important;
`;

export const Column2 = styled.div`
	margin-bottom: 15px !important;
	padding: 0 15px !important;
	grid-area: col2 !important;
`;
export const TextWrapper = styled.div`
	max-width: 540px !important;
	padding-top: 0 !important;
	padding-bottom: 60px !important;
`;

export const TopLine = styled.p`
	color: #01bf71 !important;
	font-size: 16px !important;
	line-height: 16px !important;
	font-weight: 700 !important;
	letter-spacing: 1.4px !important;
	text-transform: uppercase !important;
	margin-bottom: 16px !important;
`;
export const Heading = styled.h1`
	margin-bottom: 24px !important;
	font-size: 48px !important;
	line-height: 1.1 !important;
	font-weight: 600 !important;
	color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")} !important;

	@media screen and (max-width: 768px) {
		font-size: 32px !important;
	}
`;

export const Subtitle = styled.p`
	max-width: 440px !important;
	margin-bottom: 35px !important;
	font-size: 18px !important;
	line-height: 24px !important;
	color: ${({ darkText }) => (darkText ? "#010606" : "#fff")} !important;
`;

export const BtnWrap = styled.div`
	display: flex !important;
	justify-content: center !important;
`;
export const ImgWrap = styled.div`
	max-width: 440px !important;
	height: 100% !important;
`;
export const Img = styled.img`
	width: 100% !important;
	margin: 0 0 10px 0 !important;
	padding-right: 0 !important;
`;
