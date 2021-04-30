import styled from "styled-components";

export const ServicesContainer = styled.div`
	display: flex !important;
	flex-direction: column !important;
	height: 800px !important;
	justify-content: center !important;
	align-items: center !important;
	background: #010606 !important;
	@media screen and (max-width: 768px) {
		height: 1100px !important;
	}
	@media screen and (max-width: 480px) {
		height: 1300px !important;
	}
`;
export const ServicesWrapper = styled.div`
	max-width: 1000px !important;
	margin: 0 auto !important;
	display: grid !important;
	grid-template-columns: 1fr 1fr 1fr !important;
	align-items: center !important;
	grid-gap: 16px !important;
	padding: 0 50px !important;
	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr !important;
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr !important;
		padding: 0 20px;
	}
`;
export const ServicesCard = styled.div`
	background: #fff !important;
	display: flex !important;
	flex-direction: column !important;
	justify-content: flex-start !important;
	align-items: center !important;
	border-radius: 10px !important;
	max-height: 340px !important;
	padding: 30px !important;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) !important;
	transition: all 0.2 ease-in-out !important;
	&:hover {
		transform: scale(1.02) !important;
		transition: all 0.2 ease-in-out !important;
		cursor: pointer !important;
	}
`;
export const ServicesIcon = styled.img`
	height: 160px !important;
	width: 160px !important;
	margin-bottom: 10px !important;
`;
export const ServicesH1 = styled.h1`
	font-size: 2.5rem !important;
	color: #fff !important;
	margin-bottom: 64px !important;
	@media screen and (max-width: 480px) {
		font-size: 2rem !important;
	}
`;
export const ServicesH2 = styled.h2`
	font-size: 1rem !important;
	margin-bottom: 10px !important;
`;
export const ServicesP = styled.p`
	font-size: 1rem !important;
	text-align: center !important;
`;
