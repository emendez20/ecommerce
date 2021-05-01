import React from "react";
import { FeatureContainer, FeatureButton } from "./featureElements";
const Feature = () => {
	return (
		<>
			<FeatureContainer>
				<h1>conozca este producto</h1>
				<p>puede parecer que ni siquiera lo necesitabas, pero te sorprenderias si te dijera que si</p>
				<FeatureButton>ver producto</FeatureButton>
			</FeatureContainer>
		</>
	);
};
export default Feature;
