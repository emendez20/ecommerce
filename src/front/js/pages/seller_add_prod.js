import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/add_product.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const NewProduct = () => {
	const [name, setName] = React.useState("");
	const [code, setCode] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [price, setPrice] = React.useState("");
	const [inventory, setInventory] = React.useState("");
	const [pictures, setPictures] = React.useState([]);

	const handleSubmit = event => {
		console.log(`
      Name: ${name}
      Codigo: ${code}
      Descripcion: ${description}
      Precio: ${price}
      Inventgario: ${inventory}
    `);

		event.preventDefault();
	};
	return (
		<form onSubmit={handleSubmit}>
			<h1>Agregar Nuevo Producto</h1>

			<label>
				Nombre:
				<input name="name" type="text" value={name} onChange={e => setName(e.target.value)} required />
			</label>
			<label>
				Codigo:
				<input name="code" type="number" value={code} onChange={e => setCode(e.target.value)} required />
			</label>
			<label>
				Description:
				<input
					name="description"
					type="textarea"
					value={description}
					onChange={e => setDescription(e.target.value)}
					required
				/>
			</label>
			<label>
				Precio:
				<input name="price" type="number" value={price} onChange={e => setPrice(e.target.value)} required />
			</label>
			<label>
				Inventario:
				<input
					name="inventory"
					type="number"
					value={inventory}
					onChange={e => setPrice(e.target.value)}
					required
				/>
			</label>
			<label>
				Imagenes:
				<input
					name="pictures"
					type="file"
					value={pictures}
					onChange={e => setPrice([...pictures, e.target.value])}
					required
				/>
			</label>

			<button>Agregar</button>
		</form>
	);
};
