import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { SellerProfile } from "./pages/sellerProfile/sellerProfile";
import { Sales } from "./pages/sales/Sales";
import { Costumer } from "./pages/costumer/costumer";
import { PurchaseCostumer } from "./pages/purchaseCostumer/purchaseCostumer";
import Home from "./pages/home";
import HomeSignin from "./pages/homeSignin";
import SigninPage from "./pages/signin";
import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/homesignin">
							<HomeSignin />
						</Route>
						<Route exact path="/signin">
							<SigninPage />
						</Route>
						<Route exact path="/sellerprofile">
							<SellerProfile />
						</Route>
						<Route exact path="/costumer">
							<Costumer />
						</Route>
						<Route exact path="/purchaseCostumer">
							<PurchaseCostumer />
						</Route>
						<Route exact path="/Sales">
							<Sales />
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
