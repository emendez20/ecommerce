import React, { useState } from "react";
import img from "../../../img/img1.jpg";
import img2 from "../../../img/img2.jpg";
import img3 from "../../../img/img3.jpg";
/*import video from "../../../images/video/video.mp4";*/
import { Button } from "../buttonElements";
import {
	HeroContainer,
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
	}; //<VideoBg /*autoPlay loop muted src={video} type="video/mp4"*/ />

	return (
		<>
			<HeroContainer id="home">
				<HeroBg />
				<HeroContent>
					<HeroH1> Las compras virtuales lo hacen fácil </HeroH1>
					<HeroP> Regístrate con una nueva cuenta y recibe la mejor experiencia para comprar y vender.</HeroP>
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
							comencemos {hover ? <ArrowForward /> : <ArrowRight />}
						</Button>
					</HeroBtnWrapper>
				</HeroContent>
			</HeroContainer>
		</>
	);
};
export default HeroSection;
