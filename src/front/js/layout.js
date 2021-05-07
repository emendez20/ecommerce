import { BrowserRouter, Route, Switch, Redirect, useHistory, Link, useLocation } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Context } from "./store/appContext";
import React, { useState, useEffect, useContext, createContext } from "react";

import { Home } from "./pages/home";
import Products from "./pages/products";
import Login from "./pages/login";
import Orders from "./pages/viewOrders";
import { OrderConfirmation } from "./pages/orderconfirmation";
import ProtectedRoutes from "./component/protected";
import ForgotPass from "./pages/forgotpass";
import SingleProduct from "./pages/singleproduct";
import Cart from "./pages/cart";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { RegisterSuccess } from "./pages/registersuccess";
import Register from "./pages/register";
import injectContext from "./store/appContext";

import Navbar from "./component/navbar";
import { Footer } from "./component/footer";

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
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/registersuccess">
							<RegisterSuccess />
						</Route>
						<Route exact path="/forgotpass">
							<ForgotPass />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						{/* <Route exact path="/products">
							<Products />
						</Route> */}
						<Route exact path="/products">
							<Products />
						</Route>
						<Route exact path="/cart">
							<Cart />
						</Route>
						<Route exact path="/orderconfirmation">
							<OrderConfirmation />
						</Route>
						<Route exact path="/viewOrders">
							<Orders />
						</Route>
						<Route exact path="/singleproduct/:theid">
							<SingleProduct />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
// const PrivateRoute = ({ children, ...rest }) => {
// 	const { store, actions } = useContext(Context);
// 	let auth = store.login;
// 	return (
// 		<Route
// 			{...rest}
// 			render={({ location }) =>
// 				auth.user ? (
// 					children
// 				) : (
// 					<Redirect
// 						to={{
// 							pathname: "/login",
// 							state: { from: location }
// 						}}
// 					/>
// 				)
// 			}
// 		/>
// 	);
// };
