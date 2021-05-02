import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Seller } from "./pages/seller";
import { Costumer } from "./pages/costumer";
import { PurchaseCostumer } from "./pages/purchaseCostumer";
import injectContext from "./store/appContext";
import { SellerView } from "./pages/seller_view";
import { SellerViewBuyerSide } from "./pages/seller_view_buyer_side";
import { Cart } from "./pages/cart_view";
import { NewProduct } from "./pages/seller_add_prod";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Menu } from "./component/menu";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/seller_view">
							<SellerView />
						</Route>
						<Route exact path="/seller_view_buyer_side">
							<SellerViewBuyerSide />
						</Route>
						<Route exact path="/seller_view_buyer_side">
							<SellerViewBuyerSide />
						</Route>
						<Route exact path="/cart_view">
							<Cart />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/seller">
							<Seller />
						</Route>
						<Route exact path="/costumer">
							<Costumer />
						</Route>
						<Route exact path="/purchaseCostumer">
							<PurchaseCostumer />
						</Route>
						<Route>
							<NewProduct />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>

					<Footer />
					<Menu />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
