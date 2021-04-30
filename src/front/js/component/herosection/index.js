import React, { useState } from "react";
/*import video from "../../../images/video/video.mp4";*/
import { Button } from "../buttonElements";
import {
	HeroContainer,
	VideoBg,
	HeroBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight
} from "./heroElements";
const HeroSection = () => {
	const [hover, setHover] = useState(false);
	const onHover = () => {
		setHover(!hover);
	};

	return (
		<>
			<HeroContainer id="home">
				<HeroBg>
					<VideoBg /*autoPlay loop muted src={video} type="video/mp4"*/ />
				</HeroBg>
				<HeroContent>
					<HeroH1> virtual shopping made Easy </HeroH1>
					<HeroP>sign up for a new account today and receive $250 in credit towards your next payment.</HeroP>
					<HeroBtnWrapper>
						<Button
							to="signup"
							onMouseEnter={onHover}
							onMouseLeave={onHover}
							primary="true"
							dark="true"
							smooth={true}
							duration={500}
							spy={true}
							exact="true"
							offset={-80}>
							get started {hover ? <ArrowForward /> : <ArrowRight />}
						</Button>
					</HeroBtnWrapper>
				</HeroContent>
			</HeroContainer>
		</>
	);
};
export default HeroSection;
