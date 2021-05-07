import React, { useState } from "react";
import {
	HeroContainer,
	HeroBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight
} from "../../styles/heroElements";
const HeroSection = () => {
	const [hover, setHover] = useState(false);
	const onHover = () => {
		setHover(!hover);
	};

	return (
		<>
			<HeroContainer id="home" fluid>
				<HeroBg />
				<HeroContent>
					<HeroH1 />
					<HeroP />
					<HeroBtnWrapper />
				</HeroContent>
			</HeroContainer>
		</>
	);
};
export default HeroSection;
