import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card, Button, Container, CardGroup, Image } from "react-bootstrap";
import "../../styles/usuario.scss";
export const SellerInfo = () => {
	return (
		<Card id="completa">
			<Card.Header id="usuario">Mi cuenta</Card.Header>
			<Card.Body>
				<Image
					id="image"
					src="https://www.adl-logistica.org/wp-content/uploads/2019/07/imagen-perfil-sin-foto-300x300.png"
					roundedCircle
				/>
				<Card.Title>Nombre de la tienda</Card.Title>
				<Card.Text>Nombre del vendedor: Alexander Vargas</Card.Text>
				<Card.Text>correo electronico: alexvrz2357gmail.com</Card.Text>
				<Card.Text>Teléfono: 70368453</Card.Text>
				<Card.Text>Dirección: hatillo 5</Card.Text>
				<Card.Text>Contraseña: *********</Card.Text>
				<Button variant="info">modificar informacion</Button> <Button variant="info">cambiar contraseña</Button>
			</Card.Body>
		</Card>
	);
};
