import React from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import { Home } from "./home";
//import { UserProfile } from "./user-profile";
//import { Sales } from "./sales";

export function MainNav() {
	return (
			<ul className="navbar-nav m-auto nav-flex-icons navbar-dark bg-dark fixed-bottom">
				<li className="nav-item">
					<Link to="/">
						<a
							className="nav-link waves-effect waves-light"
							id="home"
							href="#">
							<i className="fa fa-fw fa-home"></i>
						</a>
					</Link>
				</li>

				<li className="nav-item">
					<Link to="/user">
						<a
							className="nav-link waves-effect waves-light"
							id="user"
							href="#">
							<i className="fas fa-user"></i>
							<span className="badge badge-pill badge-light">
								2
							</span>
						</a>
					</Link>
				</li>

				<li className="nav-item">
					<Link to="/sales">
						<a
							className="nav-link waves-effect waves-light"
							href="#">
							<i className="fas fa-receipt"></i>
							<span className="badge badge-pill badge-light">
								3
							</span>
						</a>
					</Link>
				</li>

				<li className="nav-item">
					<div>Button</div>
				</li>
			</ul>

	);
}