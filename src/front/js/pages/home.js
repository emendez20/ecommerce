import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import SideBar from "../component/sidebar";
import HeroSection from "../component/heroSection";
import InfoSection from "../component/infoSection";
import Services from "../component/services";
import { homeObjOne, homeObjThree } from "../component/data";
export const Home = () => {
	const { store, actions } = useContext(Context);
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div style={{ backgroundColor: "#101522" }}>
			<SideBar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<InfoSection {...homeObjOne} />
			<Services />
			<InfoSection {...homeObjThree} />
			<Footer />
		</div>
	);
};
