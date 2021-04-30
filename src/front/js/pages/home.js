import React, { useState } from "react";
import Navbar from "../component/navbar";
import SideBar from "../component/sidebar";
import HeroSection from "../component/herosection";
import InfoSection from "../component/infoSection";
import Services from "../component/services";
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
