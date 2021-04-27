import React from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import { Home } from "./home";
//import { UserProfile } from "./user-profile";
//import { Sales } from "./sales";

export function MainNav() {
	return (
		<ul className="navbar-nav m-auto nav-flex-icons navbar-dark bg-dark fixed-bottom">
			<li className="nav-item">
				<a className="nav-link waves-effect waves-light" id="home" href="#">
					<i className="fa fa-fw fa-home" />
				</a>
			</li>

			<li className="nav-item">
				<a className="nav-link waves-effect waves-light" id="user" href="#">
					<i className="fas fa-user" />
					<span className="badge badge-pill badge-light">2</span>
				</a>
			</li>

			<li className="nav-item">
				<a className="nav-link waves-effect waves-light" href="#">
					<i className="fas fa-receipt" />
					<span className="badge badge-pill badge-light">3</span>
				</a>
			</li>

			<li className="nav-item">
				<div>Button</div>
			</li>
		</ul>
	);
}
