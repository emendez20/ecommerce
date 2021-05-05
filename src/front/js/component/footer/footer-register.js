import React from "react";
import { Link } from "react-router-dom";

//Style
import { Container } from "react-bootstrap";

export const FooterRegister = () => (
	<footer className="footer mmt-auto py-2 text-center" style={{ backgroundColor: "#fff", color: "##353b48" }}>
		<Container fluid className="text-center" style={{ backgroundColor: "#fff", color: "#353b48" }}>
			<p>
				<small className="text-muted">&copy; {new Date().getFullYear()} Copyright: ticompras.com</small>
			</p>
		</Container>
	</footer>
);
