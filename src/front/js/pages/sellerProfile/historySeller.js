import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Card, Button, Container, CardGroup } from "react-bootstrap";
import "../../../styles/usuario.scss";
export const HistorySeller = () => {
	return (
		<Card>
			<Card.Header id="usuario">historial de ventas</Card.Header>
			<Card.Body>
				<CardGroup>
					<Card id="historial">
						<Card.Img
							variant="top"
							src="https://www.monfreight.com/wp-content/uploads/2018/01/400x325.png"
						/>
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Footer>
					</Card>{" "}
					<Card id="historial">
						<Card.Img
							variant="top"
							src="https://www.monfreight.com/wp-content/uploads/2018/01/400x325.png"
						/>
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This card has supporting text below as a natural lead-in to additional content.{" "}
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Footer>
					</Card>{" "}
					<Card id="historial">
						<Card.Img
							variant="top"
							src="https://www.monfreight.com/wp-content/uploads/2018/01/400x325.png"
						/>
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This card has even longer content than the first to show that equal height
								action.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Footer>
					</Card>
				</CardGroup>
			</Card.Body>
		</Card>
	);
};
