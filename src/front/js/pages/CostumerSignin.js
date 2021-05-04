import React from "react";
import Hero from "../component/homesignin/hero/index";
import Products from "../component/homesignin/products/index";
import { ProductsData, ProductsData2 } from "../component/homesignin/products/data";
import { BrowserRouter as Router } from "react-router-dom";
import Feature from "../component/homesignin/feature/index";
import Footer from "../component/footer/index";
import { Menu } from "../component/menu";
const HomeSignin = () => {
	return (
		<>
			<Router>
				<Hero />
				<Products heading=" Tiendas" data={ProductsData} />
				<Feature />
				<Products heading=" Tiendas" data={ProductsData2} />
				<Footer />
			</Router>
		</>
	);
};
export default HomeSignin;
