import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { SellerProfile } from "./pages/sellerProfile/sellerProfile";
import { Sales } from "./pages/sales/Sales";
import { Costumer } from "./pages/costumer/costumer";
import { PurchaseCostumer } from "./pages/purchaseCostumer/purchaseCostumer";
import Home from "./pages/home";
import HomeSignin from "./pages/CostumerSignin";
import SigninPage from "./pages/signin";
import injectContext from "./store/appContext";
import { Seller } from "./pages/seller_view";
import { SellerViewBuyerSide } from "./pages/seller_view_buyer_side";
import { Cart } from "./pages/cart_view";
import { NewProduct } from "./pages/seller_add_prod";
import Footer from "./component/footer/index";
import { Menu } from "./component/menu";

import SellerSignin from "./pages/SellerSignin";
import { SellerRegister } from "./pages/seller-register";
import { CostumerRegister } from "./pages/costumer-register";

{
	/*import { NavbarConsumer } from "./component/navbar/navbar-consumer";

import { LogInPage } from "./pages/login-page";
import { StoreRegisterPage } from "./pages/store-register-page";
import { AboutPage } from "./pages/about-page";
import { ConsumerProfile } from "./pages/consumer-profile";
import { StoreProfile } from "./pages/store-profile";
import { AppHome } from "./pages/apphome";
import { StorePage } from "./pages/store-page";
import { ItemInfoPage } from "./pages/item-info-page";
import { MyCartPage } from "./pages/my-cart-page";

import { TesteoPage } from "./pages/testeo-page";*/
}

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
						<Route exact path="/Sellersignin">
							<SellerSignin />
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

						{/*<Route exact path="/login-page">
							<LogInPage />
    </Route>
						<Route exact path="/register-store-page">
							<StoreRegisterPage />
						</Route>
						<Route exact path="/about-page">
							<AboutPage />
    </Route>*/}

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
						{/*<Route exact path="/store-profile-page">
							<StoreProfile />
						</Route>
						<Route exact path="/apphome-page">
							<AppHome />
						</Route>
						<Route exact path="/store-page">
							<StorePage />
                    </Route>
						<Route exact path="/item-info-page">
							<ItemInfoPage />
                    </Route>
						<Route exact path="/my-cart-page">
							<MyCartPage />
                </Route>*/}
						<Route exact path="/seller-register">
							<SellerRegister />
						</Route>
						<Route exact path="/costumer-register">
							<CostumerRegister />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
