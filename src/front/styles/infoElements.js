import styled from "styled-components";
export const InfoContainer = styled.div`
	background: ${({ lightBg }) =>
		lightBg
			? "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(https://i.pinimg.com/originals/ee/16/ef/ee16efdb8ebdbed294e3d372f4546aee.jpg)"
			: "#010606"} !important;
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
	color: #ff7e00 !important;
	font-size: 16px !important;
	line-height: 16px !important;
	font-weight: 700 !important;
	letter-spacing: 1.4px !important;
	text-transform: uppercase !important;
	margin-bottom: 16px !important;
`;
export const Heading = styled.p`
	margin-bottom: 5px !important;
	max-width: 440px !important;
	font-size: 18px !important;
	line-height: 24px !important;
	color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")} !important;
	@media screen and (max-width: 768px) {
		font-size: 15px !important;
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
