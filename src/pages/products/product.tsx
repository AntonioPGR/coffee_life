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
		<article
			className='w-full h-full grid grid-cols-[2fr_1fr] py-16 text-text-800'
			key={product.id}
		>
			<div className='flex flex-col gap-2 justify-between'>
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
					<QuantityInput />
				</div>
				<Button>ADD TO CART</Button>
			</div>
			<div className='flex items-center justify-center'>
				<img
					src='https://brandedcoffeecups.co.uk/wp-content/uploads/2020/11/DSC_3954-1_1C.png'
					alt=''
				/>
			</div>
		</article>
	);
}
