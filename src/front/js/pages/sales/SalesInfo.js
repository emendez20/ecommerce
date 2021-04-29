import React from "react";
import { Context } from "../../store/appContext";
import { Container, Card, Button, CardDeck, Row, Col } from "react-bootstrap";
import "../../../styles/purchase.scss";
export const SalesInfo = () => {
	return (
		<Card.Body>
			<Card.Text>nombre del cliente</Card.Text>
			<Card.Text>fecha de compra</Card.Text>
			<Card.Text>Teléfono: 70368453</Card.Text>
			<Card.Text>Dirección: hatillo 5</Card.Text>
			<Card.Text>Correo</Card.Text>
			<Card.Text>metodo de pago</Card.Text>
		</Card.Body>
	);
};
