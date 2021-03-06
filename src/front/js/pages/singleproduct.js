import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import product_placeholder from "../../img/product1.jpg";
import { Row, Col } from "react-bootstrap";
import pattern from "../../img/pattern.png";

const SingleProduct = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container-fluid mt-5 pt-5" style={{ backgroundColor: "#101522" }}>
			<div
				className="jumbotron bg-dark text-white text-align-center align-items-center p-5"
				style={{ opacity: 0.8 }}>
				<Row>
					<h1 className="display-4">{store.inventory[params.theid].name}</h1>
				</Row>
				<Row>
					<Col>
						<img src={store.inventory[params.theid].url} />
					</Col>

					<Col>
						<Row>
							<p>
								Description:
								<br /> {store.inventory[params.theid].description}
								<br />
								Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random
								text. It has roots in a piece of classical Latin literature from 45 BC, making it over
								2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
								Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
								passage, and going through the cites of the word in classical literature, discovered the
								undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus
								Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
								book is a treatise on the theory of ethics, very popular during the Renaissance. The
								first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section
								1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
								those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by
								Cicero are also reproduced in their exact original form, accompanied by English versions
								from the 1914 translation by H. Rackham.
							</p>
						</Row>

						<Row>
							<p>
								Price:
								<br />$ {store.inventory[params.theid].price}
							</p>
						</Row>
					</Col>
				</Row>
				<hr className="my-4" />

				<Link to="/products">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back to All
					</span>
				</Link>
			</div>
		</div>
	);
};
export default SingleProduct;
SingleProduct.propTypes = {
	match: PropTypes.object
};
