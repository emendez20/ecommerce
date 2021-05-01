import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Container } from "react-bootstrap";
import { CostumerInfo } from "./costumerInfo";
import { HistoryCostumer } from "./HistoryCostumer";
import { WishList } from "./WishList";
export const Costumer = () => {
	return (
		<Container fluid>
			<CostumerInfo />
			<HistoryCostumer />
			<WishList />
		</Container>
	);
};
