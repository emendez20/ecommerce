import { Link } from "react-router-dom";
import React, { useRef, useEffect, useContext, useState } from "react";

//Style
import { Container, Col, Row, Image, Button } from "react-bootstrap";

//Img
//import logo from "../../img/logo";

export const Navbar = () => {
	return (
		<Container
			fluid
			className="justify-content-center sticky-top m-0"
			style={{ backgroundColor: "black", padding: "0px", opacity: 0.6 }}>
			<Container style={{ backgroundColor: "", marginBottom: "30px" }} className="mt-4">
				<Row className="text-center align-items-center">
					<Col xs={12} md={10} className="mb-2">
						<Image src="" alt="" width="30" height="30" className="d-inline-block align-top" />
						<strong className="h2" style={{ color: "white" }}>
							am-arte
						</strong>
					</Col>
					<Col xs={6} md={1} className="">
						<Link to="/cart" href="#cart">
							<Button variant="outline-light" size="sm">
								<i className="fas fa-shopping-cart pl-0" />
							</Button>
						</Link>
					</Col>
					<Col xs={6} md={1} className="">
						<Link href="/login" to="/login">
							<Button id="logout" variant="outline-light" typo="summit" size="sm">
								<i className="fas fa-sign-out-alt" />
							</Button>
						</Link>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
