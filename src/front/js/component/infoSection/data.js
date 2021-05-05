import carro from "../../../img/img1.jpg";
import signin from "../../../img/signin.png";
export const homeObjOne = {
	id: "about",
	lightBg: true,
	lightText: false,
	lightTextDesc: false,
	topLine: "Ticompras",
	headline: "Compra fácil, seguro y rápido",
	description: "Compra en el mejor sitio de tiendas Pymes del país",
	buttonLabel: "Registrate",
	imgStart: false,
	img: carro,
	alt: "Car",
	dark: false,
	primary: false,
	darkText: true,
	direccion: "/costumer-register"
};

export const homeObjTwo = {
	id: "discover",
	lightBg: true,
	lightText: false,
	lightTextDesc: false,
	topLine: "premium bank",
	headline: "unlimited Transactions with zero fees",
	description:
		"get access to our exclusive app that allows you to send unlimited  transactions with out getting charged any fees.",
	buttonLabel: "learn more ",
	imgStart: true,
	img: carro,
	alt: "Car",
	dark: false,
	primary: false,
	darkText: true
};

export const homeObjThree = {
	id: "signup",
	lightBg: true,
	lightText: false,
	lightTextDesc: false,
	topLine: "Abra su tienda Pyme",
	headline: "Vender en Ticompras es muy fácil",
	description: "Registrarse no te toma mucho tiempo y los beneficios son muchos.",
	buttonLabel: "Inscribase",
	imgStart: false,
	img: signin,
	alt: "Car",
	dark: false,
	primary: false,
	darkText: true,
	direccion: "/seller-register"
};
