import React from "react";
import { Context } from "../store/appContext";
import { Container, Card, Button, CardDeck, Accordion } from "react-bootstrap";
import { SalesInfo } from "./SalesInfo";
import { SalesArticles } from "./SalesArticles";
export const SalesCards = () => {
	return (
		<Accordion defaultActiveKey="0">
			<Card>
				<Accordion.Toggle as={Card.Header} eventKey="0">
					Ref#
					<Button variant="info">cambiar estado</Button>
				</Accordion.Toggle>
				<Accordion.Collapse eventKey="0">
					<Card.Body>
						<SalesInfo /> <SalesArticles />
					</Card.Body>
				</Accordion.Collapse>
			</Card>
			<Card>
				<Accordion.Toggle as={Card.Header} eventKey="1">
					Ref#
					<Button variant="info">cambiar estado</Button>
				</Accordion.Toggle>
				<Accordion.Collapse eventKey="1">
					<Card.Body>
						<SalesInfo />
						<SalesArticles />
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};
