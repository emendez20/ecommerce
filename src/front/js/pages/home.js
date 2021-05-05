import React, { useState } from "react";
import Navbar from "../component/navbarss/index";
import SideBar from "../component/sidebar/index";
import HeroSection from "../component/herosection/index";
import InfoSection from "../component/infoSection/index";
import Services from "../component/services/index";
import { homeObjOne, homeObjThree } from "../component/infoSection/data";
import { FooterRegister } from "../component/footer/footer-register";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<SideBar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<InfoSection {...homeObjOne} />
			<Services />
			<InfoSection {...homeObjThree} />
			<FooterRegister />
		</>
	);
};
export default Home;
