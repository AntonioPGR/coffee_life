import { ProductsAPI } from "api/products_api";
import PageTitle from "infra/PageTitle";
import Product from "./product";
import Carousel from "components/Carroussel";

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
			<Carousel number_of_slides={products.length} start_slide={0}>
				{products.map(product => (
					<Product product={product} key={product.id} />
				))}
			</Carousel>
		</>
	);
}
