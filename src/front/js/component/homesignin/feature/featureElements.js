import styled from "styled-components";
import FeaturePic from "../../../../img/feature.jpg";

export const FeatureContainer = styled.div`
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${FeaturePic});
	height: 100vh;
	max-height: 500px;
	background-position: center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-align: center;
	padding: 0 1rem;
	h1 {
		font-size: clamp(3rem, 5vw, 5rem);
		margin-top: 70px;
	}
	p {
		font-size: clamp(1rem, 3vw, 2rem);
		margin-bottom: 1rem;
	}
`;

export const FeatureButton = styled.button`
	font-size: 1.4rem;
	margin-bottom: 70px;
	padding: 0.6rem 3rem;
	border-radius: 8px;
	border: none;
	background: #00b894;
	color: #fff;
	transition: 0.2 ease-out;
	&:hover {
		background: #fdcb6e;
		transition: 0.2 ease-out;
		cursor: pointer;
		color: #000;
	}
`;
