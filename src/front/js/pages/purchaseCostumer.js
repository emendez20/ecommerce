import React from "react";
import { Context } from "../store/appContext";
import { Container, Card, Button, CardDeck, Row, Col } from "react-bootstrap";
import { Articles } from "./articles";
import "../../styles/purchase.scss";
export const PurchaseCostumer = () => {
	return (
		<Container fluid>
			<Card>
				<Card.Header id="head">historial de compra</Card.Header>
				<Card.Body>
					<Card.Title>#ref</Card.Title>
					<Card.Text>nombre del cliente</Card.Text>
					<Card.Text>fecha</Card.Text>
					<Card.Text>nombre de la tienda</Card.Text>
					<Card.Text>Teléfono: 70368453</Card.Text>
					<Card.Text>Dirección: hatillo 5</Card.Text>
					<Card.Text>Correo</Card.Text>
					<Card.Text>metodo de pago</Card.Text>
					<Card.Title id="center">Articulos</Card.Title>
					<Articles />
					<Container>
						<Card.Header id="total">
							<Row>
								<Col>
									<Card.Title>total</Card.Title>
								</Col>
								<Col>
									<Card.Title id="float">000 COLONES</Card.Title>
								</Col>
							</Row>
							<Row>
								<Col>
									<Card.Title>estado</Card.Title>
								</Col>
								<Col>
									<Card.Title id="float">entregado</Card.Title>
								</Col>
							</Row>
						</Card.Header>
					</Container>
				</Card.Body>
			</Card>
		</Container>
	);
};
