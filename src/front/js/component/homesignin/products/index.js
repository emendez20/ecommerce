import React from "react";
import { Link } from "react-router-dom";
import {
	ProductsContainer,
	ProductsWrapper,
	ProductsHeading,
	ProductTitle,
	ProductCard,
	ProductImg,
	ProductInfo,
	ProductDesc,
	ProductPrice,
	ProductButton
} from "./productsElements";
const Products = ({ heading, data }) => {
	return (
		<>
			<ProductsContainer>
				<ProductsHeading>{heading} </ProductsHeading>
				<ProductsWrapper>
					{data.map((product, index) => {
						return (
							<ProductCard key={index}>
								<ProductImg src={product.img} alt={product.alt} />
								<ProductInfo>
									<ProductTitle>{product.name} </ProductTitle>
									<ProductDesc>{product.desc} </ProductDesc>
									<ProductPrice>{product.price} </ProductPrice>
									<Link to={product.ruta}>
										<ProductButton>{product.button} </ProductButton>
									</Link>
								</ProductInfo>
							</ProductCard>
						);
					})}
				</ProductsWrapper>
			</ProductsContainer>
		</>
	);
};
export default Products;
