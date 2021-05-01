import React, { useState } from "react";
import Navbar from "../component/navbar/index";
import SideBar from "../component/sidebar/index";
import HeroSection from "../component/herosection/index";
import InfoSection from "../component/infoSection/index";
import Services from "../component/services/index";
import { homeObjOne, homeObjTwo, homeObjThree } from "../component/infoSection/data";
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
			<InfoSection {...homeObjTwo} />
			<Services />
			<InfoSection {...homeObjThree} />
		</>
	);
};
export default Home;
