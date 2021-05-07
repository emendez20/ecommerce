import React, { useContext } from "react";
import { Context } from "../store/appContext";
import j1 from "../../img/1.png";
import j2 from "../../img/2.png";
import j3 from "../../img/3.png";
import j4 from "../../img/4.png";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5" style={{ backgroundColor: "black" }}>
			<img src={j1} className="jimage" />
			<img src={j2} className="jimage" />
			<img src={j3} className="jimage" />
			<img src={j4} className="jimage" />
		</div>
	);
};
