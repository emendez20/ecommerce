import React, { useState } from "react";
import SideBar from "../sidebar/index";
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from "../hero/heroElements";
import Navbar from "../navbar/index";
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
						<HeroBtn>productos</HeroBtn>
					</HeroItems>
				</HeroContent>
			</HeroContainer>
		</>
	);
};
export default Hero;
