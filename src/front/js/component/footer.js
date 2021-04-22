import React, { Component } from "react";
import { Accordion, Card, Button, CardHeader, AccordionToggle } from "react-bootstrap";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<Card>
			<Accordion defaultActiveKey="0">
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="0">
						sobre nosotros
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							<p>Hello!</p>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="1">
						información
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="1">
						<Card.Body>
							<p>Sobre Nosotros</p>
							<p>Información De Entrega</p>
							<p>Política De Privacidad</p>
							<p>Términos Y Condiciones</p>
							<p>Contáctenos</p>
							<p>Devoluciones</p>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="2">
						servicio al cliente
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="2">
						<Card.Body>
							<div>
								<p>Mapa Del Sitio</p>
								<p>Lista De Deseos</p>
								<p>Marcas</p>
								<p>Afiliado</p>
							</div>
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
