import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card, Button, CardDeck } from "react-bootstrap";
import PayPalButton from "../component/checkout";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import product_placeholder from "../../img/product1.jpg";
import Checkout from "../component/checkout";

const Orders = () => {
	const { store, actions } = useContext(Context);
	return store.ordersLoaded ? (
		<div className="container mt-5 pt-5" style={{ height: "800px" }}>
			<div className="d-flex justify-content-between flex-row-reverse">
				<Link to="/products">
					<span className="btn btn-dark btn-lg" href="#" role="button">
						Products
					</span>
				</Link>
				<h2 className="textCenter">ORDERS PLACED</h2>
			</div>
			<div className="dFlex scroll row rowCols3" style={{ maxWidth: "100%" }}>
				{store.orders.map((item, index) => (
					<CardDeck key={index} className="text-center">
						<Card
							style={{ minWidth: "150px", maxWidth: "286px", backgroundColor: "#FA8072" }}
							key={index}
							className="text-white m-3">
							<Card.Body>
								<Card.Title>Order Id:</Card.Title>
								<Card.Text>{store.orders[index].id}</Card.Text>
							</Card.Body>
						</Card>
						<Card
							style={{ minWidth: "150px", maxWidth: "286px", backgroundColor: "#FA8072" }}
							key={index}
							className="text-white m-3">
							<Card.Body>
								<Card.Title>Order Date:</Card.Title>
								<Card.Text>{store.orders[index].date}</Card.Text>
							</Card.Body>
						</Card>
						<Card
							style={{ minWidth: "150px", maxWidth: "286px", backgroundColor: "#FA8072" }}
							key={index}
							className="text-white m-3">
							<Card.Body>
								<Card.Title>Amount:</Card.Title>
								<Card.Text>${store.orders[index].amount}</Card.Text>
							</Card.Body>
						</Card>
						<Card
							style={{ minWidth: "150px", maxWidth: "286px", backgroundColor: "#FA8072" }}
							key={index}
							className="text-white m-3">
							<Card.Body>
								<Card.Title>Status:</Card.Title>
								<Card.Text>{store.orders[index].status}</Card.Text>
							</Card.Body>
						</Card>
					</CardDeck>
				))}
			</div>
		</div>
	) : (
		<div className="container mt-5" style={{ width: "100px", height: "500px" }}>
			<h1 className="text-white mr-3 ">No orders to show...</h1>
		</div>
	);
};
export default Orders;
