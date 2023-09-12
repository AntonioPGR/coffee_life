// COMPONENTS
import Button from "components/Button";
import ProductTitle from "./product_title";
import ExtraOptions from "components/ExtraOptions";
import SizeOptions from "components/SizeOptions";
import AmountInput from "components/QuantityInput";
import PriceDisplayer from "components/PriceDisplayer";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

interface PropsProduct {
	product: IProduct;
}

export default function Product({ product }: PropsProduct) {
	return (
		<article
			className='w-full h-full grid grid-cols-[2fr_1fr] py-16 text-text-800 gap-4'
			key={product.id}
		>
			<div className='flex flex-col gap-4 justify-between'>
				<ProductTitle
					normal_name={product.normal_name}
					special_name={product.special_name}
					description={product.description}
				/>
				<div className='grid grid-cols-2'>
					<ExtraOptions extra_options={product.extras} />
					<SizeOptions size_options={product.sizes} image={product.img} />
				</div>
				<div className='grid grid-cols-2'>
					<PriceDisplayer price={0} />
					<AmountInput />
				</div>
				<Button
					className='w-1/2'
					icon={faShoppingCart}
					onClick={() => console.log("opa")}
				>
					ADD TO CART
				</Button>
			</div>
			<div className='flex items-center justify-center w-full'>
				<img
					className='w-full h-auto'
					src={product.img.src}
					alt={product.img.alt}
				/>
			</div>
		</article>
	);
}
