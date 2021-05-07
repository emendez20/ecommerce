import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import PayPalButton from "../component/checkout";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import product_placeholder from "../../img/product1.jpg";
import Checkout from "../component/checkout";

const Orders = () => {
	const { store, actions } = useContext(Context);
	return store.orders.length > 0 ? (
		<div className="container">
			<div className="d-flex justify-content-between flex-row-reverse">
				<Link to="/products">
					<span className="btn btn-dark btn-lg" href="#" role="button">
						Products
					</span>
				</Link>
				<h2 className="textCenter">ORDERS PLACED</h2>
			</div>
			<div className="dFlex scroll row rowCols3" style={{ maxWidth: "100%" }}>
				{store.cart.map((item, index) => (
					<Card
						style={{ minWidth: "150px", maxWidth: "286px", backgroundColor: "#040707" }}
						key={index}
						className="text-white m-3">
						<Card.Body>
							<Card.Title>{store.orders ? store.cart[index].name : "Loading"}</Card.Title>
							<Card.Text>
								Description: {store.orders ? store.orders : "Loading"}
								<br />
								Precio: {store.orders ? store.orders : "Loading"}
							</Card.Text>
						</Card.Body>
					</Card>
				))}
			</div>
			<div className="d-flex justify-content-between flex-row-reverse">
				<h2 className="textCenter">Total ${store.orders}</h2>
			</div>
		</div>
	) : (
		<div className="container mt-5" style={{ width: "100px", height: "500px" }}>
			<div className="lds-ripple ml-3 ">
				<div />
				<div />
			</div>

			<h1 className="text-white mr-3 ">No orders to show...</h1>
		</div>
	);
};
export default Orders;
