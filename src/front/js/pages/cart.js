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

const Cart = () => {
	const { store, actions } = useContext(Context);
	const [checkout, setCheckOut] = useState(false);
	return store.cart ? (
		<div className="container mt-5 pt-5">
			<div className="d-flex justify-content-between flex-row-reverse">
				<Link to="/products">
					<span className="btn btn-dark btn-lg" href="#" role="button">
						Regresar a Productos
					</span>
				</Link>
				<h2 className="textCenter">Carrito de Compras</h2>
			</div>
			<div className="dFlex scroll row rowCols3" style={{ maxWidth: "100%" }}>
				{store.cart.map((item, index) => (
					<Card
						style={{ minWidth: "150px", maxWidth: "286px", backgroundColor: "#040707" }}
						key={index}
						className="text-white m-3">
						<Card.Img variant="top" src={store.cart[index].url} />
						<Card.Body>
							<Card.Title>{store.cart[index].name ? store.cart[index].name : "Loading"}</Card.Title>
							<Card.Text>
								Descripcion: {store.cart[index].description ? store.cart[index].description : "Loading"}
								<br />
								Precio: {store.cart[index].price ? store.cart[index].price : "Loading"}
							</Card.Text>
							<div className="row justify-content-between">
								<Button
									className="ml-2"
									variant="dark"
									onClick={() => {
										actions.removeFromCart(index);
									}}>
									Quitar
								</Button>
							</div>
						</Card.Body>
					</Card>
				))}
			</div>
			<div className="d-flex justify-content-between flex-row-reverse">
				<h2 className="textCenter">Total ${store.cartTotal}</h2>
			</div>
			<div className="d-flex justify-content-between flex-row-reverse">
				<div className="tbd">
					{checkout ? (
						<Checkout />
					) : (
						<Button
							onClick={() => {
								setCheckOut(true);
							}}>
							Checkout
						</Button>
					)}
				</div>
			</div>
		</div>
	) : (
		<div className="container mt-5" style={{ width: "100px", height: "500px" }}>
			<div className="lds-ripple ml-3 ">
				<div />
				<div />
			</div>

			<h1 className="text-white mr-3 ">Loading...</h1>
		</div>
	);
};
export default Cart;
