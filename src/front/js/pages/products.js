import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import product_placeholder from "../../img/product1.jpg";

const Products = () => {
	const { store, actions } = useContext(Context);
	return store.inventory ? (
		<div className="container">
			<div className="d-flex justify-content-between flex-row-reverse">
				<Link to="/">
					<span className="btn btn-dark btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
				<h2 className="textCenter">PRODUCTOS</h2>
			</div>
			<div className="dFlex scroll row rowCols3" style={{ maxWidth: "100%" }}>
				{store.inventory.map((item, index) => (
					<Card
						style={{ minWidth: "150px", maxWidth: "286px", backgroundColor: "#040707" }}
						key={index}
						className="text-white m-3">
						<Card.Img variant="top" src={product_placeholder} />
						<Card.Body>
							<Card.Title>
								{store.inventory[index].name ? store.inventory[index].name : "Loading"}
							</Card.Title>
							<Card.Text>
								Descripcion:{" "}
								{store.inventory[index].description ? store.inventory[index].description : "Loading"}
								<br />
								Precio: {store.inventory[index].price ? store.inventory[index].price : "Loading"}
							</Card.Text>
							<div className="row justify-content-between">
								<Link to={"/singleproduct/" + index}>
									<Button className="ml-2" variant="dark">
										Details...
									</Button>
								</Link>
								<div className="mr-2">
									<Button variant="dark" type="button">
										<i
											className="fas fa-shopping-cart text-white"
											style={{ fontSize: "20px" }}
											onClick={() => {
												actions.addToCart(index);
											}}
										/>
									</Button>
								</div>
							</div>
						</Card.Body>
					</Card>
				))}
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
export default Products;
