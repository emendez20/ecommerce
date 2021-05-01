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
import { Seller } from "./pages/seller_view";
import { SellerViewBuyerSide } from "./pages/seller_view_buyer_side";
import { Cart } from "./pages/cart_view";
import { NewProduct } from "./pages/seller_add_prod";

import { Navbar } from "./component/navbar";
import Footer from "./component/footer/index";
import { Menu } from "./component/menu";

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
							<Footer />
						</Route>
						<Route exact path="/homesignin">
							<HomeSignin />
						</Route>
						<Route exact path="/seller_view">
							<Seller />
							<Footer />
						</Route>
						<Route exact path="/seller_view_buyer_side">
							<SellerViewBuyerSide />
							<Footer />
						</Route>
						<Route exact path="/seller_view_buyer_side">
							<SellerViewBuyerSide />
							<Footer />
						</Route>
						<Route exact path="/cart_view">
							<Cart />
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
						<Route exact path="/seller_add_prod">
							<NewProduct />
						</Route>
						<Route exact path="/navseller_add_prod">
							<NewProduct />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>

					<Menu />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
