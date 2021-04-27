import React from "react";
import { Context } from "../store/appContext";
import { Container, Card, Button, CardDeck, Accordion } from "react-bootstrap";
import "../../styles/purchase.scss";
import { SalesCards } from "./salesCards";
export const Sales = () => {
	return (
		<Container fluid>
			<Card>
				<Card.Header id="head">historial de venta</Card.Header>
				<Card.Body>
					<Card.Title>nombre de la tienda</Card.Title>
					<SalesCards />
				</Card.Body>
			</Card>
		</Container>
	);
};
