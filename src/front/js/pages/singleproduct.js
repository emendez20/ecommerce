import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import product_placeholder from "../../img/product1.jpg";
import { Row, Col } from "react-bootstrap";

const SingleProduct = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron bg-dark text-white" style={{ opacity: 0.9 }}>
			<h1 className="display-4">{store.inventory[params.theid].name}</h1>
			<img src={product_placeholder} />
			<Row>
				<Col>
					<p>
						Descripcion:
						<br /> {store.inventory[params.theid].description}
					</p>
				</Col>

				<Col>
					<p>
						Precio:
						<br /> {store.inventory[params.theid].price}
					</p>
				</Col>
			</Row>
			<hr className="my-4" />

			<Link to="/products">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Regresar
				</span>
			</Link>
		</div>
	);
};
export default SingleProduct;
SingleProduct.propTypes = {
	match: PropTypes.object
};
