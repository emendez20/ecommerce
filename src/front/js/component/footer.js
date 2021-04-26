import React, { Component } from "react";
import { Accordion, Card, Button, CardHeader, AccordionToggle } from "react-bootstrap";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<Card>
			<Accordion defaultActiveKey="0">
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="0" id="footer">
						sobre nosotros
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							<p id="pie">Hello!</p>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="1" id="footer">
						información
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="1">
						<Card.Body>
							<p id="pie">Sobre Nosotros</p>
							<p id="pie">Contáctenos</p>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
			<Card.Header className="titulo">
				<p>
					<img src="http://ecolife.demo2.towerthemes.com/image/catalog/ptblock/payment.png" alt="pago" />
				</p>
				<p>© 2021 XYZ Dev S.A. Derechos reservados.</p>
			</Card.Header>
		</Card>
	</footer>
);
