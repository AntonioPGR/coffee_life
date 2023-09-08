import { ProductsAPI } from "api/products_api";
import PageTitle from "infra/PageTitle";
import Product from "./product";
import Carroussel from "components/Carroussel";

export const getServerSideProps = async () => {
	const products = await ProductsAPI.getProducts();
	return {
		props: {
			products: products,
		},
	};
};

interface PropsProducts {
	products: IProduct[];
}

export default function Products({ products }: PropsProducts) {
	return (
		<>
			<PageTitle title='Products' />
			<Carroussel>
				{products.map(product => (
					<Product product={product} key={product.id} />
				))}
			</Carroussel>
		</>
	);
}
