import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Container } from "react-bootstrap";
import { SellerInfo } from "./sellerInfo";
import { HistorySeller } from "./historySeller";
import { Inventory } from "./inventory";
export const Seller = () => {
	return (
		<Container fluid>
			<SellerInfo />
			<HistorySeller />
			<Inventory />
		</Container>
	);
};
