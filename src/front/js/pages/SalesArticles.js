import React from "react";
import { Context } from "../store/appContext";
import { Container, Card, Button, CardDeck, Row, Col } from "react-bootstrap";
import "../../styles/purchase.scss";
export const SalesArticles = () => {
	let hola = ["Primary", "Secondary", "Success"];
	return hola.map((variant, idx) => (
		<Container fluid key={idx}>
			<Row>
				<Col sm={4}>
					{" "}
					<Card.Img src="https://www.monfreight.com/wp-content/uploads/2018/01/400x325.png" />
				</Col>
				<Col sm={8}>
					<Card
						id="flex-direction"
						border={variant.toLowerCase()}
						style={{ width: "18rem" }}
						className="mb-2">
						<Card.Body id="padding">
							<Card.Text>Nombre del producto:*****</Card.Text>
							<Card.Text>codigo:*****</Card.Text>
							<Card.Text>descripcion:*****</Card.Text>
							<Card.Text>precio:*****</Card.Text>
							<Card.Text>cantidad:*****</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	));
};
