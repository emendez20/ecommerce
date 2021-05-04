import React, { useState } from "react";
import SideBar from "../sidebar/indexSeller";
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from "../hero/heroElements";
import Navbar from "../navbar/indexSeller";
const Hero = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<HeroContainer>
				<Navbar toggle={toggle} />
				<SideBar isOpen={isOpen} toggle={toggle} />
				<HeroContent>
					<HeroItems>
						<HeroH1>Encuentre mucho </HeroH1>
						<HeroP>haga compras</HeroP>
					</HeroItems>
				</HeroContent>
			</HeroContainer>
		</>
	);
};
export default Hero;
