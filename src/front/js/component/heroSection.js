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
import jt2 from "../../img/jumbotron2.png";
import jt3 from "../../img/jumbotron3.png";
import jt4 from "../../img/jumbotron4.png";
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
