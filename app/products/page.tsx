// "use client";

import { ProductsAPI } from "api/products_api";
// import { styled } from "styled-components";

export default async function Products() {
	const products = await ProductsAPI.getProducts();

	return (
		<div>
			{products.map(value => {
				return <p>{value.normal_name}</p>;
			})}
		</div>
	);
}

// const StyledProducts = styled.section``;
