import React, { useContext } from "react";
import { Context } from "../store/appContext";
import j1 from "../../img/1.png";
import j2 from "../../img/2.png";
import j3 from "../../img/3.png";
import j4 from "../../img/4.png";
import "../../styles/home.scss";
import { Link, Image } from "react-router-dom";
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5" style={{ backgroundColor: "black" }}>
			<Image src={j1} />
			<Image src={j2} />
			<Image src={j3} />
			<Image src={j4} />
		</div>
	);
};
