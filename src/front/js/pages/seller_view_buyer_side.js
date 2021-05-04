import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/seller_view.scss";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import marca from "../../img/ti.png";

export const SellerViewBuyerSide = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center d-flex flex-column">
			<div className="seller_header d-flex flex-row">
				<div className="p-2 bd-highlight align-self-center">
					<img src={marca} style={{ width: "250px" }} />
				</div>
				<div className="p-2 bd-highlight align-self-center">
					<h1>Nombre de la tienda</h1>
				</div>
			</div>
			<div className="seller_body w-100 m-2">
				<CardGroup className="d-flex flex-column m-3 p-2 cGroup">
					<Card className="d-flex flex-row m-1 myCard">
						<div>
							<Card.Img
								id="zoom"
								variant="top"
								src="https://ticompras.s3.amazonaws.com/Placeholder_seller_logo.jpg"
								style={{ width: "8em", padding: "2px" }}
							/>
							<Card.Footer className="d-flex flex-column justify-content-center border-0 card_footer">
								<Button id="boton" variant="dark" className="m-1">
									<i className="fas fa-shopping-cart" />
								</Button>
								<Button id="boton" variant="dark" className="m-1">
									<i className="fas fa-heart" />
								</Button>
							</Card.Footer>
						</div>

						<Card.Body>
							<Card.Title className="card_title">Nombre y descripcion del Producto</Card.Title>
							<Card.Text className="card_content">
								Nombre del Producto: DummyName
								<br />
								Codigo: 00000001
								<br />
								Descripcion: Este es un producto de relleno
								<br />
								Precio: ₡ 5.000
								<br />
								Cantidad en Inventario: 15
								<br />
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className="d-flex flex-row m-1 myCard">
						<div>
							<Card.Img
								variant="top"
								src="https://ticompras.s3.amazonaws.com/Placeholder_seller_logo.jpg"
								style={{ width: "8em", padding: "2px" }}
							/>
							<Card.Footer className="d-flex flex-column justify-content-center border-0 card_footer">
								<Button id="boton" variant="dark" className="m-1">
									<i className="fas fa-shopping-cart" />
								</Button>
								<Button id="boton" variant="dark" className="m-1">
									<i className="fas fa-heart" />
								</Button>
							</Card.Footer>
						</div>

						<Card.Body>
							<Card.Title className="card_title">Nombre y descripcion del Producto</Card.Title>
							<Card.Text className="card_content">
								Nombre del Producto: DummyName
								<br />
								Codigo: 00000001
								<br />
								Descripcion: Este es un producto de relleno
								<br />
								Precio: ₡ 5.000
								<br />
								Cantidad en Inventario: 15
								<br />
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className="d-flex flex-row m-1 myCard">
						<div>
							<Card.Img
								variant="top"
								src="https://ticompras.s3.amazonaws.com/Placeholder_seller_logo.jpg"
								style={{ width: "8em", padding: "2px" }}
							/>
							<Card.Footer className="d-flex flex-column justify-content-center border-0 card_footer">
								<Button id="boton" variant="dark" className="m-1">
									<i className="fas fa-shopping-cart" />
								</Button>

								<Button id="boton" variant="dark" className="m-1">
									<i className="fas fa-heart" />
								</Button>
							</Card.Footer>
						</div>

						<Card.Body>
							<Card.Title className="card_title">Nombre y descripcion del Producto</Card.Title>
							<Card.Text className="card_content">
								Nombre del Producto: DummyName
								<br />
								Codigo: 00000001
								<br />
								Descripcion: Este es un producto de relleno
								<br />
								Precio: ₡ 5.000
								<br />
								Cantidad en Inventario: 15
								<br />
							</Card.Text>
						</Card.Body>
					</Card>
				</CardGroup>
			</div>
		</div>
	);
};
