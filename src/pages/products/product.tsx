// COMPONENTS
import Button from "components/Button";
import ProductTitle from "./product_title";
import ExtraOptions from "../../components/ExtraOptions";
import SizeOptions from "../../components/SizeOptions";
import QuantityInput from "../../components/QuantityInput";
import PriceDisplayer from "components/PriceDisplayer";

interface PropsProduct {
	product: IProduct;
}

export default function Product({ product }: PropsProduct) {
	return (
		<article key={product.id}>
			<ProductTitle
				normal_name={product.normal_name}
				special_name={product.special_name}
				description={product.description}
			/>
			<ExtraOptions extra_options={product.extras} />
			<SizeOptions size_options={product.sizes} image={product.img} />
			<PriceDisplayer price={0} />
			<QuantityInput />
			<Button>ADD TO CART</Button>
		</article>
	);
}
